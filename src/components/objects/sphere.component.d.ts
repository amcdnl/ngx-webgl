/// <reference types="three" />
import { OnInit } from '@angular/core';
import { Mesh } from 'three';
export declare class SphereComponent implements OnInit {
    positionX: number;
    positionY: number;
    positionZ: number;
    object: Mesh;
    ngOnInit(): void;
}
