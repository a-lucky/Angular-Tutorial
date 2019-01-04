import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { EXPAND_COLLAPSE } from '../nestable.constant';

@Directive({
  selector: '[appNestableExpandCollapse]'
})
export class NestableExpandCollapseDirective {
  @Input() public appNestableExpandCollapse;

  constructor(private _el: ElementRef) {}

  @HostListener('mousedown', ['$event'])
  public onMouseDown(event) {
    event.stopPropagation();
  }

  @HostListener('click', ['$event'])
  public onClick(event) {
    this.appNestableExpandCollapse.item['$$expanded'] = !this.appNestableExpandCollapse.item['$$expanded'];
    this._el.nativeElement.dispatchEvent(
      new CustomEvent(EXPAND_COLLAPSE, {
        bubbles: true,
        detail: this.appNestableExpandCollapse
      })
    );
  }
}
