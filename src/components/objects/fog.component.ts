import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FogExp2 } from 'three';

@Component({
  selector: 'ngx-fog',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FogComponent implements OnInit {

  @Input() color: string = '#CCCCCC';

  object: FogExp2;

  ngOnInit(): void {
    const fog = new FogExp2(this.color, 0.002);
    this.object = fog;
  }

}
