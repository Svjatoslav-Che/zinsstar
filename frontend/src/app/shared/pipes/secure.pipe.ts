import { catchError, map, tap } from 'rxjs/operators';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HttpResponse } from '@angular/common/http';
import { ChangeDetectorRef, Inject, OnDestroy } from '@angular/core';
import { THIS_DOT_ERROR_IMAGE_PATH, THIS_DOT_LOADING_IMAGE_PATH } from '@this-dot/ng-utils';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  finalize,
  switchMap,
} from 'rxjs/operators';

@Pipe({
  name: 'secureImg',
  pure: false,
})
export class SourceImagePipe implements PipeTransform, OnDestroy {
  private subscription = new Subscription();
  private loadingImagePath!: string;
  private errorImagePath!: string;
  private latestValue?: SafeUrl;
  private latestBlobUrl?: string;
  private transformValue = new BehaviorSubject<string>('');

  constructor(
    private auth: AuthService,
    private httpClient: HttpClient,
    private domSanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
    @Inject(THIS_DOT_LOADING_IMAGE_PATH)
    private defaultLoadingImagePath: string,
    @Inject(THIS_DOT_ERROR_IMAGE_PATH)
    private defaultErrorImagePath: string
  ) {
    this.setUpSubscription();
  }

  transform(
    imagePath: string,
    loadingImagePath?: string,
    errorImagePath?: string
  ): string | SafeUrl {
    this.setLoadingAndErrorImagePaths(loadingImagePath, errorImagePath);
    if (!imagePath) {
      return this.errorImagePath;
    }
    this.transformValue.next(imagePath);
    return this.latestValue || this.loadingImagePath;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setUpSubscription(): void {
    const transformSubscription = this.transformValue
      .asObservable()
      .pipe(
        filter((v): v is string => !!v),
        distinctUntilChanged(),
        tap(() => (this.latestValue = undefined)),
        switchMap((imagePath: string) =>
          this.httpClient.get(imagePath, {
            headers: this.auth.accessHeader,
            observe: 'response',
            responseType: 'blob'
          }).pipe(
            map((response: HttpResponse<Blob>) => URL.createObjectURL(response.body)),
            tap((blobUrl) => {
              this.revokeLatestBlob();
              this.latestBlobUrl = blobUrl;
            }),
            map((unsafeBlobUrl: string) => this.domSanitizer.bypassSecurityTrustUrl(unsafeBlobUrl)),
            filter((blobUrl) => blobUrl !== this.latestValue),
            catchError(() => of(this.errorImagePath))
          )
        ),
        tap((imagePath: string | SafeUrl) => {
          this.latestValue = imagePath;
          this.cdr.markForCheck();
        }),
        finalize(() => {
          this.revokeLatestBlob();
        })
      )
      .subscribe();
    this.subscription.add(transformSubscription);
  }

  private setLoadingAndErrorImagePaths(
    loadingImagePath: string = this.defaultLoadingImagePath,
    errorImagePath: string = this.defaultErrorImagePath
  ): void {
    if (this.loadingImagePath && this.errorImagePath) {
      return;
    }
    this.loadingImagePath = loadingImagePath;
    this.errorImagePath = errorImagePath;
  }

  private revokeLatestBlob() {
    if (this.latestBlobUrl) {
      URL.revokeObjectURL(this.latestBlobUrl);
      this.latestBlobUrl = undefined;
    }
  }
}
