import { Directive,ElementRef,HostBinding,HostListener,Input,OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyBackground]'
})
export class MyBackgroundDirective implements OnInit {
  @Input('onHover') onMouseOverColor: any
  @Input() appMyBackground: any;
  @HostListener('mouseover')
   mouseover(eventData:Event){
    this.renderer.setStyle(this.el.nativeElement,'background-color',this.onMouseOverColor);
   }
  @HostListener('mouseleave')
    mouseleave(eventData:Event){     
    this.renderer.setStyle(this.el.nativeElement,'background-color',this.appMyBackground);
    }
  @HostBinding('style.backgroundColor')
  backgroundColor!: string; 

    


  constructor(private el:ElementRef, private renderer:Renderer2) { }
  ngOnInit(){
    // this.el.nativeElement.style.backgroundColor = this.appMyBackground;
    // this.renderer.setStyle(this.el.nativeElement,'background-color',this.appMyBackground);
    this.backgroundColor = 'yellow';
  }

}
