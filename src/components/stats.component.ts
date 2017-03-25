import { Component, ElementRef, OnInit, Renderer } from '@angular/core';
import * as Stats from 'stats.js';

@Component({
  selector: 'ngx-stats',
  template: `<ng-content></ng-content>`,
  styles: [`
    :host {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  `]
})
export class StatsComponent implements OnInit {

  stats: any = new Stats();

  constructor(private element: ElementRef, private renderer: Renderer) { }

  ngOnInit(): void {
    this.stats.showPanel(1);
    this.renderer.projectNodes(this.element.nativeElement, [this.stats.dom]);
    this.renderer.setElementStyle(this.stats.dom, 'position', 'relative');
    this.render();
  }

  render(): void {
    this.stats.update();
    requestAnimationFrame(() => this.render());
  }

}
