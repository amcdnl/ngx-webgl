import { RendererFactory2, RendererType2, Renderer2 } from '@angular/core';
import { EventManager, ɵDomSharedStylesHost } from '@angular/platform-browser';
export declare const COMPONENT_VARIABLE = "%COMP%";
export declare const HOST_ATTR: string;
export declare const CONTENT_ATTR: string;
export declare function shimContentAttribute(componentShortId: string): string;
export declare function shimHostAttribute(componentShortId: string): string;
export declare function flattenStyles(compId: string, styles: Array<any | any[]>, target: string[]): string[];
export declare class CanvasDomRendererFactory implements RendererFactory2 {
    private eventManager;
    private sharedStylesHost;
    private rendererByCompId;
    private defaultRenderer;
    constructor(eventManager: EventManager, sharedStylesHost: ɵDomSharedStylesHost);
    createRenderer(element: any, type: RendererType2): Renderer2;
}
