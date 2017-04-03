/// <reference types="three" />
import { ElementRef, AfterContentInit, OnInit, NgZone } from '@angular/core';
import { WebGLRenderer } from 'three';
import { SceneComponent } from './scene.component';
import { PerspectiveCameraComponent } from './cameras';
import { OrbitControlsComponent, VRControlsComponent } from './controls';
export declare class RendererComponent implements OnInit, AfterContentInit {
    private element;
    private ngZone;
    height: number;
    width: number;
    autoSize: boolean;
    vrMode: boolean;
    scene: SceneComponent;
    orbitControls: OrbitControlsComponent;
    vrControls: VRControlsComponent;
    camera: PerspectiveCameraComponent;
    canvas: any;
    renderer: WebGLRenderer;
    constructor(element: ElementRef, ngZone: NgZone);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    render(): void;
    private onWindowResize();
    private calcSize();
    private setupVR();
}
