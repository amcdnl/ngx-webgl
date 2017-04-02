import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MeshBasicMaterial, Texture, PlaneGeometry, Mesh, LinearFilter } from 'three';

@Component({
  selector: 'ngx-video',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoComponent implements OnInit {

  @Input() url: string;
  @Input() width = 480;
  @Input() height = 204;
  @Input() positionX: number = 0;
  @Input() positionY: number = 50;
  @Input() positionZ: number = 0;

  object: Mesh;
  video: any;
  videoImage: any;
  videoTexture: any;
  videoImageContext: any;

  ngOnInit(): void {
    this.video = document.createElement('video');
    this.video.src = this.url;
    this.video.crossOrigin = 'anonymous';
    this.video.load();
    this.video.play();

    this.videoImage = document.createElement('canvas');
    this.videoImage.width = this.width;
    this.videoImage.height = this.height;

    this.videoImageContext = this.videoImage.getContext('2d');
    this.videoImageContext.fillStyle = '#000000';
    this.videoImageContext.fillRect(0, 0, this.videoImage.width, this.videoImage.height);

    this.videoTexture = new Texture(this.videoImage);
    this.videoTexture.minFilter = LinearFilter;
    this.videoTexture.magFilter = LinearFilter;

    const movieMaterial = new MeshBasicMaterial({
      map: this.videoTexture,
      side: THREE.DoubleSide
    });

    const movieGeometry = new PlaneGeometry(100, 100, 4, 4);
    this.object = new Mesh(movieGeometry, movieMaterial);
    this.object.position.set(this.positionX, this.positionY, this.positionZ);
  }

}
