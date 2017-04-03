import { ElementRef } from '@angular/core';
export declare class SpheresComponent {
    private element;
    count: number;
    balls: any[];
    isVRMode: boolean;
    constructor(element: ElementRef);
    createSpheres(): any[];
    onFullScreen(): void;
}
