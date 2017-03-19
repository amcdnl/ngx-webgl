import { Component, AfterContentInit, ContentChildren, ContentChild, ChangeDetectionStrategy } from '@angular/core';
import { Scene } from 'three';
import { PerspectiveCameraComponent } from './cameras';
import { PointLightComponent, DirectionalLightComponent, AmbientLightComponent } from './lights';
import { ObjectComponent, SphereComponent, TextComponent, FogComponent, MapMeshComponent } from './objects';

@Component({
  selector: 'ngx-scene',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SceneComponent implements AfterContentInit {

  @ContentChild(PerspectiveCameraComponent)
  camera: PerspectiveCameraComponent;

  @ContentChildren(PointLightComponent)
  pointLights: any;

  @ContentChildren(DirectionalLightComponent)
  directionalLights: any;

  @ContentChildren(SphereComponent)
  sphereComps: any;

  @ContentChildren(TextComponent)
  textComps: any;

  @ContentChildren(AmbientLightComponent)
  ambientLights: any;

  @ContentChildren(MapMeshComponent)
  mapComps: any;

  @ContentChild(FogComponent)
  fog: any;

  scene: Scene = new Scene();

  ngAfterContentInit(): void {
    this.camera.camera.lookAt(this.scene.position);
    this.scene.add(this.camera.camera);

    const meshes = [
      ...this.ambientLights.toArray(),
      ...this.pointLights.toArray(),
      ...this.directionalLights.toArray(),
      ...this.sphereComps.toArray(),
      ...this.textComps.toArray(),
      ...this.mapComps.toArray()
    ];

    for(const mesh of meshes) {
      this.scene.add(mesh.object);
    }

    if(this.fog) {
      this.scene.fog = this.fog.object;
    }

    /*
    anPlayMp4	= document.createElement('video');
    var url	= "myurl.com/img/videos/sample.mp4";
    var videoTexture= new THREEx.VideoTexture(url);
    var video	= videoTexture.video;
    video.setAttribute('crossorigin', '');
    videoTexture.texture.minFilter = THREE.LinearFilter;
    videoTexture.texture.magFilter = THREE.LinearFilter;
    // updateFcts.push(function(delta, now){ videoTexture.update(delta, now) });
    */
  }

}
