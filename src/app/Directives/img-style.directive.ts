import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ImgStyle]',
})
export class ImgStyleDirective implements OnChanges  {
  // elementRef => document
  // nativeElement => getElementBy.......

  // property decorator
//  @Input() property1:string='blue';
//  @Input('ImgStyle') property2:string='black';

@Input() radius1:string='40px';
@Input('ImgStyle') radius2:string='20px';
  constructor(public elementRef: ElementRef) {
    // this.elementRef.nativeElement.style.border = '3px solid red';
    // this.elementRef.nativeElement.style.border = `3px solid ${this.property2}`;
  }
  ngOnChanges(): void {
    // this.elementRef.nativeElement.style.border = `3px solid ${this.property2}`;
    this.elementRef.nativeElement.style.borderRadius = `${this.radius2}`;

  }

  // method decorator
  @HostListener('mouseover') func1() {
    // this.elementRef.nativeElement.style.border = '7px dashed blue';
    // this.elementRef.nativeElement.style.border = `7px dashed ${this.property1}`;
    this.elementRef.nativeElement.style.borderRadius = ` ${this.radius1}`;
    this.elementRef.nativeElement.style.opacity='.7';
  }

  @HostListener('mouseout') func2() {
    // this.elementRef.nativeElement.style.border = 'none';
    // this.elementRef.nativeElement.style.border = '3px solid red';
    // this.elementRef.nativeElement.style.border = `3px solid ${this.property2}`;
    this.elementRef.nativeElement.style.borderRadius = `${this.radius2}`;
    this.elementRef.nativeElement.style.opacity='1';




  }
}
