import { Injectable, Inject, Renderer, RenderComponentType } from '@angular/core';
import { DOCUMENT, EventManager, AnimationDriver } from '@angular/platform-browser';
import { DomRootRenderer, DomRenderer } from '@angular/platform-browser/src/dom/dom_renderer';
import { DomSharedStylesHost } from '@angular/platform-browser/src/dom/shared_styles_host';
import { isBlank, isPresent } from '@angular/core/src/facade/lang';

@Injectable()
export class CanvasRootRenderer extends DomRootRenderer {

  constructor(
    @Inject(DOCUMENT) _document: any,
    eventManager: EventManager,
    sharedStylesHost: DomSharedStylesHost,
    animate: AnimationDriver) {
    super(document, eventManager, sharedStylesHost, animate, '1');
  }

  renderComponent(componentProto: RenderComponentType): Renderer {
    let renderer: any = this.registeredComponents.get(componentProto.id);
    if (isBlank(renderer)) {
      renderer = new CanvasRenderer(this, componentProto, this.animationDriver, `${this.appId}-${componentProto.id}`);
      this.registeredComponents.set(componentProto.id, renderer);
    }
    return renderer;
  }

}

export class CanvasRenderer extends DomRenderer {

  blacklist = [
    'ngx-scene'
  ];

  constructor(
    rootRenderer: CanvasRootRenderer,
    componentProto: RenderComponentType,
    animationDriver: AnimationDriver,
    styleShimId: string) {
    super(rootRenderer, componentProto, animationDriver, styleShimId);
  }

  createElement(parent: Element, name: string, debugInfo: any): Element {
    // console.log('create element:', arguments);

    const elm = super['createElement'].apply(this, arguments);

    if(this.blacklist.indexOf(name) > -1) {
      elm.appendChild = (child) => {
        // override append child to not go further than this point
      };
    }

    return elm;
  }

  createViewRoot(hostElement: any) {
    // console.log('create view root:', arguments);
    return super['createViewRoot'].apply(this, arguments);
  }

  createText(parentElement: any, value: string): any {
    // console.log('create text:', arguments)
    return super['createText'].apply(this, arguments);
  }

  setText(renderNode: any, text: string): void {
    // console.log('set text:', arguments);
    super['setText'].apply(this, arguments);
  }

  attachViewAfter(node: any, viewRootNodes: any[]) {
    // console.log('attach view after:', arguments);
    return super['attachViewAfter'].apply(this, arguments);
  }

}
