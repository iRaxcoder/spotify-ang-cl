import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  //TODO: host Host HOST

  constructor(private elementHost: ElementRef) { }

  @Input() customImg: string = '../../../assets/img/not_found.jpg'
  @HostListener('error') errorHandler(): void {
    const nativeElement = this.elementHost.nativeElement;
    nativeElement.src = this.customImg
  }

}
