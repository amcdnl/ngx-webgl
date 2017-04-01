# Angular, Beyond the DOM

## History
We've came so far in the way we use and interact with computers. If we
look at the history of computer human interaction is actually quite amazing.

- Punch cards
- Keyboards
- Mice
- Touch

The ways we use these interfaces has evolved and so does the tools.
AngularJS helped us conquer the web with all magical 2-way binding.

## Enter VR
And things are evolving again and even more quickly now. Virtual reality
and augmented reality have been dominating the buzz lately. They've totally
changed the landscape of the way we interact with UIs.

Its funny though, the fundamental concepts behind VR have actually been around
since 1838. That pre-dates even photography! If you've ever heard the phrase
that nothing is new anymore, its just rehashes of the old this could never
be more true.

VR is accomplished through a technique called [stereoscopy](https://en.wikipedia.org/wiki/Stereoscopy).
Steroscopy is a technique for creating an illusion of depth in an image for binocular vision.
It basically presents two images offset separately to the left and right eye of the viewer.
When combined at close distance, it tricks the mind to give the perception of 3d depth.
If you add head tracking to move the image around, you've got VR as we know it today!

## WebVR
Now that we have these awesome technologies at our grasp, our tooling needs to evolve.
There are tools like Unity/etc that help create rich experiences via a thick-client
but there are a lot of use cases that can be accomplished just in web browsers.

The [WebVR specification](https://w3c.github.io/webvr/) was first introduced
in 2014 but wasn't til 2016 that the proposal hit 1.0. The key behind accomplishing
WebVR is actually WebGL. Because VR experiences are typically a rich experiences
we need to be able to tap into the computer GPU directly to pull off these immersively experiences.

There is an amazing list of tools out there that help us build interfaces with WebGL on
the web and even some that help us build VR too. One of the most prominent projects is ThreeJS,
which is basically like the jQuery for WebGL.

## Different Story, Same Problems
When building these interfaces we deal with all the same problems we do today like:

- Interaction Events such as Click, Keyboard and Touch
- Viewport Events such as Window Resize
- Lifecycle Hooks for init, render, destroy
- Animations
- Data flow

and in addition to that we have many more problems like:

- Desktop/Mobile WebVR
- Head Tracking
- Gestures
- Voice Recongition for Input rather than keyboard
- Shaders

The biggest one here we need to think about is when we are in VR, the way
we interact with the UI is totally different. User can't see their keyboard or
mouse so they need to use things like controllers or voice recognition.

Take a look at this code example, all I'm doing here is the boilerplate for setting up a scene
by adding a scene, a camera and some lights. I'm binding event to the window resize and requesting
a recursive animation frame. This is quite a bit of code, that is complex and prone to error for
something just as simple as creating the baseline.

## Light at end of the tunnel
Recently some new libraries have emerged like [AFrame](https://aframe.io/) to help
create more 'design-time' type webgl/webvr development that we've grown accustomed
to with frameworks like Angular and React. If you look at this code, at first glance
you might think its Angular code.

```html
<a-scene>
  <a-light type="ambient" color="#222">
  </a-light>
  <a-sphere id="mouth"
    color="#000"
    position="0 1 -4"
    shader="flat">
   </a-sphere>
</a-scene>
```

Its obviously not Angular code, but what if it could be? It has all the same 
characteristics like bindings, component composition, etc.

## Custom Renderers
The team behind Angular is always thinking one step ahead, in order
to accomplish the ability to render on all the different mediums like:

- Web via Browsers
- Mobile via NativeScript
- Desktop via Electron
- Universal via various backends

They abstracted the actual renderer. With this abstraction, we can use
Angular's component composition, templating, binding and then create
concrete implementations at the renderer level for each platform.

We can leverage this abstraction to create WebGL scenes the same way
AFrame does except using Angular as the engine.

If we want to create a markup based language, we will need to map
the WebGL objects to components in Angular. When we do this, we are now
rendering DOM to the body for no purpose at all. WebGL scenes typically
have hundreds of objects and if we all know one thing, the browser doesn't
like oodles of DOM.

To avoid rendering these components to the DOM, we can do is actually 
inherit from Angular's implementation of DOM Renderer and at the point where
we start creating DOM objects and appending them to the DOM, we blacklist
components that are our WebGL components and have no DOM representation.
This will allow us to use all the features of Angular component composition
and even bind to window events if needed but not actually incur  the penalty
of rendering to the DOM.

In the example below you can see how we can define a sphere
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

Under the hood, the code is quite simple. Rather than create a DOM elements, we
just create our THREEjs objects like:

```javascript
@Component({
  selector: 'ngx-sphere',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SphereComponent implements OnInit {

  ngOnInit(): void {
    const geometry = new SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
    const material = new MeshNormalMaterial();
    const sphere = new Mesh(geometry, material);

    sphere.position.y = this.positionY;
    sphere.position.x = this.positionX;
    sphere.position.z = this.positionZ;
  }

}
```

then in the scene component, we read out the `ContentChildren` and add them to the scene:

```javascript
@Component({
  selector: 'ngx-scene',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SceneComponent implements AfterContentInit {

  @ContentChildren(SphereComponent)
  sphereComps: any;

  ngAfterContentInit(): void {
    for(const mesh of this.sphereComps.toArray()) {
      this.scene.add(mesh.object);
    }
  }

}
```

and presto we have a WebGL scene with spheres!

## Applying Virtual Reality
The implementation of Virtual Reality in WebGL is actually relatively simple, we just need to
apply a filter to the scene to put it in a binocular steroscopy view. ThreeJS has a scene effect
called [VREffect](https://github.com/mrdoob/three.js/blob/dev/examples/js/effects/VREffect.js)
that will take care of this for us.

Once we have our scene rendering in a stereoscopic view, we need to tap the browser to enter WebVR mode.
Since WebVR is still pretty new, we need to use a [WebVR Polyfill](https://github.com/googlevr/webvr-polyfill)
to accomplish this. The polyfill allows us to:

- Enter chromless view
- Orientation
- Head Tracking

Now that we are in VR, we need to use head tracking for view navigation
rather than the traditional keyboard and mouse. ThreeJS has a great 
[VR Controls](https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/VRControls.js)
component that will help us out with that.

## Demo
- Demo of spheres in browser
- Demo of theatre in vr

## Next Generation
The techniques I demonstrated in this presentation are just work arounds,
in order to truely scale rich WebGL/WebVR experiences much more optimizations
are going to be made. In my sphere example, the performance threshold really
drops after about ~300 spheres but without the renderer optimization its about
~150.

I think in order to achieve very rich and immersive experences we are going to
need to look at native builds. NativeScript for example takes Angular markup
and builds native mobile applications so I see a strong oppertunity for the
same type of system for WebVR.
