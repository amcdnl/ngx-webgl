# Angular, Beyond the DOM

## One Angular to rule them all
Angular is a amazing framework! It helps developers build
ui's for a variety of mediums like:

- Web via Browsers
- Mobile via NativeScript
- Desktop via Electron
- Universal via various backends

We've really taken a big leap from the bootstrap forms ui's in
the browser we were accustomed to building in AngularJS.

Angular enabled my team and I to create a data vizualization
framework using Angular components that actually draw the SVG's
with Angular's template engine and bindings.

As we continue to explore the new capabilities we can achieve
in both Angular and the modern web, we can't help but think of
the major breakthroughs in technology we've seen in the past couple
of years around VR and AR. Its totally changing the landscape of
how we interact of interfaces and build them.

There is a lot of work being done on the [WebVR specification](https://w3c.github.io/webvr/)
by community members at companies like Mozilla and Google. WebVR uses
WebGL to create the rich interactive experiences in the browser by
leveraging the computer's GPU directly.


## Same problems, different story
Libraries such as [threejs](https://threejs.org/) are helping us to
tame the wild west of WebGL and WebVR. As one looks as the code
you write to achieve these interfaces in these libaries it kind of
reminds me of jQuery spaghetti code. [Reference](https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_colors.html)

Looking at this code, we see the same problems we deal with in Angular:
- Interaction Events such as Click, Keyboard and Touch
- Viewport Events such as Window Resize
- Lifecycle Hooks for init, render, destroy
- Animations
- Dataflow

in addition to the typical problems we deal with in application development,
you have new challenges such as:
- Desktop/Mobile WebVR
- Head Tracking
- Gestures
- Voice Recongition for Input rather than keyboard
- Shaders in C code

Recently some new libraries have emerged such as [AFrame](https://aframe.io/) to help
create more 'design-time' type webgl/webvr development that we've grown accustomed
to with frameworks like Angular and React.

```javascript
<a-scene>
  <a-entity
    sound="src: url(sound.mp3)"
    sound__beep="src: url(beep.mp3)"
    sound__boop="src: url(boop.mp3)"
  ></a-entity>
</a-scene>
```

At first glance, you might think that's even Angular code! What if it could be?


## Enter Custom Renderers
The team behind Angular is always thinking one step ahead, in order
to accomplish the ability to render on all the different mediums they
abstracted the actual renderer. With this abstraction, we can use
Angular's component composition, templating, binding to create views
for all those mediums.

We can leverage this abstraction to create WebGL scenes the same way
AFrame does except using Angular as the engine. Typically in a WebGL
environment you have some DOM and then a lot of shaders. We can override
the default DOM renderer to blacklist any component that is a WebGL
component allowing us to create WebGL objects using Angular components
but not incurr the penality of actually rendering them to the DOM.

In my renderer I extend the default DOM renderer and override
the `createElement` blacklisting any appending of DOM elements
beneath the scene component:

```javascript
createElement(parent: Element, name: string, debugInfo: any): Element {
  const elm = super['createElement'].apply(this, arguments);
  if(name.indexOf('ngx-scene') > -1) elm.appendChild = (child) => {};
  return elm;
}
```

Tn the example below you can see how we can define a sphere
and loop over the number of balls defined in the parent component
setting the position of the sphere based on the index of the ball.

```javascript
<ngx-renderer>
  <ngx-orbit-controls></ngx-orbit-controls>
  <ngx-vr-controls
    [enabled]="isVRMode"
    [height]="height"
    [width]="width">
  </ngx-vr-controls>
  <ngx-scene>
    <ngx-perspective-camera></ngx-perspective-camera>
    <ngx-point-light></ngx-point-light>
    <ngx-sphere
      *ngFor="let ball of balls"
      [positionY]="ball * 5"
      [positionX]="ball * 5"
      [positionZ]="0">
    </ngx-sphere>
  </ngx-scene>
</ngx-renderer>
```


## Applying Virtual Reality
VR is accomplished through applying [stereoscopy](https://en.wikipedia.org/wiki/Stereoscopy) technique
which tricks the eye by creating an illusion of depth. This technique dates back to the 1838 with
drawings, this was before photography was even invented!

The implementation of Virtual Reality in WebGL is actually relatively simple, we just need to
apply a filter to the scene to put it in a binocular steroscopy view. ThreeJS has a scene effect
called [VREffect](https://github.com/mrdoob/three.js/blob/dev/examples/js/effects/VREffect.js)
that will take care of this for us.

Once we have our scene rendering in a steroscopic view, we need to tap the browser to
exit the traditional chrome and enter VR mode. We can achieve this by using 
[WebVR Polyfill](https://github.com/googlevr/webvr-polyfill) by Google.

Now that we are in VR, we need to use head tracking for view navigation
rather than the traditional keyboard and mouse. ThreeJS has a great 
[VR Controls](https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/VRControls.js)
component that will help us out with that.


## Demo
- Demo of spheres in browser
- Demo of theatre in vr


## Next Generation
Overriding the renderer and blacklisting elements is only the first step. I see this
similar to the mobile web applications we have today. Everyone builds them but if 
you want the real native experience, we build them natively. I think the industry can
look at things like NativeScript has done with native mobile development in Angular
and apply it to VR and AR for a even more rich experience but still using Angular.
