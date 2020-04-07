import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @Input('appDropdown') element: Element;
  private isOpen = false;

  constructor(private renderer: Renderer2) {}

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(this.element, 'show');
    } else {
      this.renderer.removeClass(this.element, 'show');
    }
  }
}
