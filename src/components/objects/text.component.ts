import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Mesh, SphereGeometry, MeshNormalMaterial } from 'three';

@Component({
  selector: 'ngx-text',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextComponent implements OnInit {

  @Input() position: number[] = [25, 5, 0];
  @Input() label: string;
  @Input() font: string = 'Bold 18px Arial';
  @Input() fillStyle: string = 'rgba(63,63,255,1)';

  object: any;

  ngOnInit(): void {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = this.font;
    context.fillStyle = this.fillStyle;
    context.fillText(this.label, 0, 60);

    const map = new THREE.Texture(canvas);
    map.needsUpdate = true;

    const material = new THREE.MeshBasicMaterial({ map, side: THREE.DoubleSide });
    material.transparent = true;

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(50, 10), material);
    mesh.position.set(this.position[0], this.position[1], this.position[2]);

    this.object = mesh;
  }

}
