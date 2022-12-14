import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightEl]'
})
export class HighlightElDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
    el.nativeElement.style.color = 'grey';
   }

}
