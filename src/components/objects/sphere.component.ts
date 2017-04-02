import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Mesh, SphereGeometry, MeshNormalMaterial } from 'three';

@Component({
  selector: 'ngx-sphere',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SphereComponent implements OnInit {

  @Input() positionX: number;
  @Input() positionY: number;
  @Input() positionZ: number;

  object: Mesh;

  ngOnInit(): void {
    const geometry = new SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
    const material = new MeshNormalMaterial();
    const sphere = new Mesh(geometry, material);

    sphere.position.y = this.positionY;
    sphere.position.x = this.positionX;
    sphere.position.z = this.positionZ;

    this.object = sphere;
  }

}
