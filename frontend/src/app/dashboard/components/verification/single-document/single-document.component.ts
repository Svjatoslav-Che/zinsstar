import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VerificationService } from './../../../services/verification.service';
import { DocumentStatus } from './../../../models/doc-status.enum';
import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DocType } from 'src/app/dashboard/models/user-doc.model';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Gender } from 'src/app/auth/services/auth.service';

export enum UploadStatus {
  idle,
  ongoing,
  success,
  failed
}

@Component({
  selector: 'app-single-document',
  templateUrl: './single-document.component.html',
  styleUrls: ['./single-document.component.scss']
})
export class SingleDocumentComponent implements OnInit {
  @Input('title') title: string = '';
  @Input('doc') private docType$: DocType = DocType.ID;
  @Input('status') private status$: DocumentStatus;
  @Input('reason') private reason$: string = "";
  @Input('image') private image$: string
  @ViewChild('fileUpload', { static: false }) fileElRef: ElementRef;
  @ViewChild('errorModal', { static: false }) errorModal: ElementRef;
  private uploadStatus$: UploadStatus = UploadStatus.idle;
  acceptUploads = 'image/jpg,image/jpeg,image/png,application/pdf';
  uploadProgress: number = 0;

  constructor(
    private service: VerificationService,
    private modal: NgbModal
  ) { }
  ngOnInit(): void {
  }



  get status() {
    return this.status$;
  }

  get docStatus() {
    return DocumentStatus;
  }

  get image() {
    return this.status === this.docStatus.VERIFIED ? '/assets/icon/kyc-success.svg' : this.image$;
  }

  get reason() {
    return this.reason$;
  }

  get document() {
    return this.docType$;
  }

  get docType() {
    return DocType;
  }

  get uploadStatus() {
    return this.uploadStatus$;
  }

  get UploadStatus() {
    return UploadStatus;
  }

  remove(): void {
    this.fileElRef.nativeElement.value = '';
  }

  onSelect() {
    const fileInput = this.fileElRef.nativeElement;
    fileInput.click();
    fileInput.onchange = () => {

      this.upload(fileInput.files[0]).pipe(
        map((event) => {
          switch (event.type) {
            case HttpEventType.UploadProgress:
              console.log(event.loaded);
              console.log(event.total)
              this.uploadStatus$ = UploadStatus.ongoing;
              this.uploadProgress = Math.round(((event.loaded * 100) / event.total));
              break;
            case HttpEventType.Response:
              return event;
          }
        }),
        catchError((error: HttpErrorResponse) => {
          this.uploadStatus$ = UploadStatus.failed;
          return of('Upload failed');
        })).subscribe(
          next => {
            console.log(next);
            if (next) {
              this.uploadStatus$ = UploadStatus.success;
            }
          },
          error => {
            console.log(error);
          },

          // next: null | undefined, error: null | undefined, complete: () => void
        )
      // .subscribe({
      //   complete: () => { this.uploadStatus$ = UploadStatus.success; },
      //   error: () => { this.uploadStatus$ = UploadStatus.failed }
      // });
    };
  }

  upload(file: File) {
    const formData: FormData = new FormData();
    formData.append('image', file);
    return this.service.uploadDocuments(formData, this.document);
  }

  openModal(modal) {
    if (!this.modal.hasOpenModals())
      this.modal.open(modal, { centered: true });
  }

}
