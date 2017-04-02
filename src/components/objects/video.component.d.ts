/// <reference types="three" />
import { OnInit } from '@angular/core';
import { Mesh } from 'three';
export declare class VideoComponent implements OnInit {
    url: string;
    width: number;
    height: number;
    positionX: number;
    positionY: number;
    positionZ: number;
    object: Mesh;
    video: any;
    videoImage: any;
    videoTexture: any;
    videoImageContext: any;
    ngOnInit(): void;
}
