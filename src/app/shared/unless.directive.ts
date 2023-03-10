import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})

export class UnlessDirective {

  constructor(private tempRef:TemplateRef<any>,private viewRef:ViewContainerRef) { }
  
  @Input() set
appUnless(condition:boolean){
  if(!condition){
    this.viewRef.createEmbeddedView(this.tempRef);
  }else{
    this.viewRef.clear();
  }
}
}
