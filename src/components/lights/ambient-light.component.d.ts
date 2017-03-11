/// <reference types="three" />
import { OnInit } from '@angular/core';
import { AmbientLight } from 'three';
export declare class AmbientLightComponent implements OnInit {
    color: string;
    position: number[];
    object: AmbientLight;
    ngOnInit(): void;
    setPosition(position: any): void;
}
