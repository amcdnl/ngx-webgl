import { ElementRef, AfterViewInit, NgZone } from '@angular/core';
export declare class SpheresComponent implements AfterViewInit {
    private element;
    private ngZone;
    count: number;
    balls: any[];
    isVRMode: boolean;
    spheres: any;
    constructor(element: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    animate(): void;
    createSpheres(): any[];
    onFullScreen(): void;
}
