/// <reference types="three" />
import { OnInit } from '@angular/core';
import { DirectionalLight } from 'three';
export declare class DirectionalLightComponent implements OnInit {
    color: string;
    position: number[];
    object: DirectionalLight;
    ngOnInit(): void;
    setPosition(position: any): void;
}
