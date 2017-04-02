import { OnDestroy } from '@angular/core';
import 'webvr-polyfill';
import 'three/examples/js/controls/VRControls.js';
import 'three/examples/js/effects/VREffect.js';
export declare class VRControlsComponent implements OnDestroy {
    enabled: boolean;
    height: number;
    width: number;
    controls: any;
    effect: any;
    ngOnDestroy(): void;
    setupControls(camera: any, renderer: any): void;
    setEffectSize(width: number, height: number): void;
    updateControls(scene: any, camera: any): void;
    requestPresent(): void;
    resetPose(): void;
}
