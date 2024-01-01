import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSampleCustom]'
})
export class SampleCustomDirective {

  constructor(private element: ElementRef, private renderer: Renderer2 ) { 
    // this.element = element
  }

  ngOnInit(){
    // this.element.nativeElement.style.backgroundColor = '#C8E6C9'
    this.renderer.addClass(this.element.nativeElement, 'container')
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'Hello this is title')
  }

}
