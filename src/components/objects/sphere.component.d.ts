/// <reference types="three" />
import { OnInit } from '@angular/core';
import { Mesh } from 'three';
export declare class SphereComponent implements OnInit {
    rotationZ: number;
    rotationX: number;
    positionX: number;
    positionY: number;
    positionZ: number;
    object: Mesh;
    private _rotationZ;
    private _rotationX;
    private _positionX;
    private _positionY;
    private _positionZ;
    ngOnInit(): void;
}
