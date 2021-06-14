import {
  Directive, ElementRef, AfterViewChecked, 
  Input, HostListener
} from '@angular/core';

@Directive({
  selector: '[matchWidth]'
})
export class MatchWidthDirective implements AfterViewChecked {

 
  @Input()
  matchWidth: any;

  constructor(private el: ElementRef) {
  }

  ngAfterViewChecked() {
      this.matchTheWidth(this.el.nativeElement, this.matchWidth);
  }

  @HostListener('window:resize') 
  onResize() {
      this.matchTheWidth(this.el.nativeElement, this.matchWidth);
  }

  matchTheWidth(parent: HTMLElement, className: string) {
      if (!parent) return;
      const children = parent.getElementsByClassName(className);
      if (!children) return;

      Array.from(children).forEach((x: HTMLElement) => {
          x.style.width = 'initial';
      })
      const itemWidths = Array.from(children).map(x => x.getBoundingClientRect().width);
      const maxWidth = itemWidths.reduce((prev, curr) => {
          return curr > prev ? curr : prev;
      }, 0);
      Array.from(children).forEach((x: HTMLElement) => x.style.width = `${maxWidth}px`);
  }
}