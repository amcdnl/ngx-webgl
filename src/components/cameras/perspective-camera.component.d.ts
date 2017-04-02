/// <reference types="three" />
import { OnInit } from '@angular/core';
import { PerspectiveCamera } from 'three';
export declare class PerspectiveCameraComponent implements OnInit {
    positions: number[];
    height: number;
    width: number;
    viewAngle: number;
    near: number;
    far: number;
    camera: PerspectiveCamera;
    _height: number;
    _width: number;
    readonly aspect: number;
    ngOnInit(): void;
    updateAspect(ratio?: number): void;
}
