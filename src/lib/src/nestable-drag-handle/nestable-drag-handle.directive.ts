import {
  Directive,
  OnInit,
  ElementRef,
  HostListener,
  Input,
  Output
} from '@angular/core';

import { REGISTER_HANDLE, DRAG_START } from '../nestable.constant';

@Directive({
  selector: '[appNestableDragHandle]'
})
export class NestableDragHandleDirective implements OnInit {
  @Input() public appNestableDragHandle;

  @HostListener('mousedown', ['$event'])
  public onMouseDown(event) {
    const detail = {
      param: this.appNestableDragHandle,
      event: event
    };
    this._el.nativeElement.dispatchEvent(
      new CustomEvent(DRAG_START, { bubbles: true, detail: detail })
    );
  }

  constructor(private _el: ElementRef) {}

  ngOnInit(): void {
    this._el.nativeElement.dispatchEvent(
      new CustomEvent(REGISTER_HANDLE, { bubbles: true, detail: this.appNestableDragHandle })
    );
  }
}
