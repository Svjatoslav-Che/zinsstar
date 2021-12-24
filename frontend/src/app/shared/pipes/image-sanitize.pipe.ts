import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';

@Pipe({
  name: 'imageSanitize'
})
export class ImageSanitizePipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) {
  }


  transform(value: string): SafeUrl {
    return this._sanitizer.bypassSecurityTrustUrl(value);
  }

}
