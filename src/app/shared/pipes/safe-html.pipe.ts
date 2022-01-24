import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(html: string) {
    const imgUrl = 'data:image/jpg;base64,' + html;
    return this.sanitizer.bypassSecurityTrustResourceUrl(imgUrl);
  }
}
