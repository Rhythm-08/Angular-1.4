import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomstyle]'
})
export class CustomstyleDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.color = 'red';
    el.nativeElement.style.backgroundColor = 'yellow';
    // el.nativeElement.style.display = 'none';

   }

}
