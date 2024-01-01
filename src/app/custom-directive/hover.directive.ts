import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input() defaultColor: string = 'transparent'

  @Input('mostpricedstyle') set mostpricedstyle(condition: boolean) {
    if (condition) {
      this.renderer.addClass(this.element.nativeElement, 'product-container-most-priced')
    }

  }

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.background = this.defaultColor
  }



  @HostBinding('style.backgroundColor') background: String = 'transparent'

  @HostListener('mouseenter') onmousehover() {
    this.renderer.addClass(this.element.nativeElement, 'mouseEnterHover')
    this.background = 'pink'
  }

  @HostListener('mouseleave') onmouseleave() {
    this.renderer.addClass(this.element.nativeElement, 'mouseLeaveHover')
    this.background = 'transparent'

  }

}
