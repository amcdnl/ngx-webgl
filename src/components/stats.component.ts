import { Component, ElementRef, OnInit } from '@angular/core';
import * as Stats from 'stats.js';

@Component({
  selector: 'ngx-stats',
  template: `<ng-content></ng-content>`,
  styles: [`
    :host {
      position: absolute;
      top: 0;
      right: 0;
    }
  `]
})
export class StatsComponent implements OnInit {

  stats: any = new Stats();

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.stats.showPanel(1);
    this.element.nativeElement.appendChild(this.stats.dom);
    this.stats.dom.style['position'] = 'relative';
    this.render();
  }

  render(): void {
    this.stats.update();
    requestAnimationFrame(() => this.render());
  }

}
