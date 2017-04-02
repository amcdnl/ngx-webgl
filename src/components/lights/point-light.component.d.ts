/// <reference types="three" />
import { OnInit } from '@angular/core';
import { PointLight } from 'three';
export declare class PointLightComponent implements OnInit {
    color: string;
    position: number[];
    object: PointLight;
    ngOnInit(): void;
    setPosition(position: any): void;
}
