import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Mesh, SphereGeometry, MeshBasicMaterial, TextureLoader } from 'three';

@Component({
  selector: 'ngx-map-mesh',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapMeshComponent implements OnInit {

  @Input() imageSrc: string = 'demo/pano.jpg';
  @Input() scale: number[] = [-1, 1, 1];

  @Input() radius: number = 500;
  @Input() widthSegments: number = 60;
  @Input() heightSegments: number = 0;

  mesh: Mesh;

  ngOnInit(): void {
    const geometry = new SphereGeometry(this.radius, this.widthSegments, this.heightSegments);
    geometry.scale(this.scale[0], this.scale[1], this.scale[2]);

    const material = new MeshBasicMaterial( {
      map: new TextureLoader().load(this.imageSrc)
    });

    this.mesh = new Mesh(geometry, material);
  }

}
