/// <reference types="three" />
import { OnDestroy } from '@angular/core';
import { OrbitControls, Scene } from 'three';
import 'three/examples/js/controls/OrbitControls.js';
export declare class OrbitControlsComponent implements OnDestroy {
    enabled: boolean;
    enableRotate: boolean;
    enablePan: boolean;
    enableKeys: boolean;
    enableZoom: boolean;
    controls: OrbitControls;
    setupControls(camera: any, renderer: any): void;
    ngOnDestroy(): void;
    updateControls(scene: Scene, camera: any): void;
}
