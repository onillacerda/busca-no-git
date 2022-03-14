import { Directive, ElementRef, HostListener, Host } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {


  constructor(private element: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter(){
    this.textDecoration('0.7')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.textDecoration('1')
  }
   
  private textDecoration(action:string){
    this.element.nativeElement.style.opacity = action 
   }

}
