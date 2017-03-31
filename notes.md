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
Steroscopy is a technique for creating an illusion of depth in an image for bionocular vision.
It basically presents two images offset seperately to the left and right eye of the viewer.
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
the web and even some that help us build VR too. One of the most promiment projects is ThreeJS,
which is basically like the jQuery for WebGL.

Take a look at this code example, all I'm doing here is the boilerplate for setting up a scene
by adding a scene, a camera and some lights. I'm binding event to the window resize and requesting
a recursive animation frame. This is quite a bit of code, that is complex and prone to error for
something just as simple as creating the baseline.

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
mouse so they need to use things like controllers or voice recongition.

```html
<a-scene antialias="true">
```

aframe looks like angular2

angular2 can help us solve the new problems renders

show ui

show impl;ementation

add ngconf logo to balls

## One Angular to rule them all
Angular is a amazing framework! It can do so much more than what we think of 
when it comes to traditional web dev frameworks!

It helps developers build ui's for a variety of mediums like:

- Web via Browsers
- Mobile via NativeScript
- Desktop via Electron
- Universal via various backends

Isn't that amazing? A javascript framework can do all of that!

We've really taken a big leap from the forms ui's in the browser 
we were accustomed to building in Angular 1 apps.

## The next step in ui
As we continue to explore the new capabilities we can achieve
in both Angular and the modern web, we can't help but think of
the major breakthroughs in technology we've seen in the past couple
of years around VR and AR. Its totally changing the landscape of
how we interact of interfaces and build them.

And the web is adapting, teams like Mozilla and Google are putting
a lot of work into the [WebVR specification](https://w3c.github.io/webvr/).

The key to actually accomplishing WebVR is WebGL. WebGL enables us
to create these rich interfaces in the browser. It leverages
your computer's GPI directly so you can pull off that immersive
experience to your user.

## Same problems, different story
WebGL isn't a new technology, it started in 2013 but didn't land final spec until 2017. 
WebVR first showed up in 2014 but it wasn't til 2016 that the 1.0 proposal release.

There has been libraries like [threejs](https://threejs.org/)  that have helped us tame WebGL with
all of its complexity and shifting specs. But if you start looking at the code
you write to achieve these interfaces in these libraries it kind of reminds me of jQuery spaghetti code. [Reference](https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_colors.html)

code is complex, very basic, error prone

Looking at this code, we see the same problems we deal with in Angular:

- Interaction Events such as Click, Keyboard and Touch
- Viewport Events such as Window Resize
- Lifecycle Hooks for init, render, destroy
- Animations
- Data flow

in addition to the typical problems we deal with in application development,
you have new challenges such as:

- Desktop/Mobile WebVR
- Head Tracking
- Gestures
- Voice Recongition for Input rather than keyboard
- Shaders

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
Think back to one of my first slides, how does Angular actually achieve 
rendering in all those different platforms?

The team behind Angular is always thinking one step ahead, in order
to accomplish the ability to render on all the different mediums they
abstracted the actual renderer. With this abstraction, we can use
Angular's component composition, templating, binding to create views
for all those mediums.

tell why blacklist

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
appendChild(parent: any, newChild: any): void {
  if(this.blacklist.indexOf(parent.tagName) === -1) {
    parent.appendChild(newChild);
  }
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

show implementation details

## Applying Virtual Reality
VR is accomplished through applying [stereoscopy](https://en.wikipedia.org/wiki/Stereoscopy) technique
which tricks the eye by creating an illusion of depth. This technique dates back to the 1838 with
drawings, this was before photography was even invented!

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
Overriding the renderer and blacklisting elements is only the first step. We
still have quite a bit of performance penalities just due to the overhead of
using Angular. I think there is a lot of improvements that could be chipped away
at to make this feasible at scale.

I see WebVR similar to the mobile web applications we have today. Everyone builds them but if 
you want the real native experience, we build them natively. I think the industry can
look at things like NativeScript has done with native mobile development in Angular
and apply it to VR and AR for a even more rich experience but still using Angular.
