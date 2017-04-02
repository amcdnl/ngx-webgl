import { ElementRef, OnInit, Renderer } from '@angular/core';
export declare class StatsComponent implements OnInit {
    private element;
    private renderer;
    stats: any;
    constructor(element: ElementRef, renderer: Renderer);
    ngOnInit(): void;
    render(): void;
}
