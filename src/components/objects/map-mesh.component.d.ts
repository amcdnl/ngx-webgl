/// <reference types="three" />
import { OnInit } from '@angular/core';
import { Mesh } from 'three';
export declare class MapMeshComponent implements OnInit {
    imageSrc: string;
    scale: number[];
    radius: number;
    widthSegments: number;
    heightSegments: number;
    object: Mesh;
    ngOnInit(): void;
}
