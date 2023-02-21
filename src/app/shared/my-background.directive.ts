import { Directive,ElementRef,Input,OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyBackground]'
})
export class MyBackgroundDirective implements OnInit {
@Input() appMyBackground: any;

  constructor(private el:ElementRef, private renderer:Renderer2) { }
  ngOnInit(){
    // this.el.nativeElement.style.backgroundColor = this.appMyBackground;
    this.renderer.setStyle(this.el.nativeElement,'background-color',this.appMyBackground);
  }

}
