# CSS Animation

adding animation to your website or app is a powerful way to draw users attention to important areas of your product and add interest to your interface.

✨ So, In this post we’re going to walk through the basics of CSS animation.

![](https://images.thoughtbot.com/blog+animations/animation-direction.gif)

<br/>

## 🔹 The Building Blocks of Animations

<br/>

CSS animations are made up of two basic building blocks.

* Keyframes - a rule that specifies the animation code (the animation code will be inside it), it contains a style list, each style with a specified percentage.

* Animation Properties - assign the @keyframes   to  a specific CSS element and define how it is animated.

> Let’s look at each individually.

<br/>

### 🔸 1-  Keyframes 

<br/>

Keyframes are the foundation of CSS animations. They define what the animation looks like at each stage of the animation timeline. Each @keyframes is composed of :

* **Name of the animation :** A name that describes the animation, for example, bounceIn.

* **Stages of the animation :** Each stage of the animation is represented as a percentage. 0% represents the beginning state of the animation. 100% represents the ending state of the animation. Multiple intermediate states can be added in between.

* **CSS Properties :** The CSS properties defined for each stage of the animation timeline.

<br/>

**✨ Example -1-**

> Let’s take a look at a simple @keyframes I’ve named “bounceIn”. This @keyframes has three stages. At the first stage (0%), the element is at opacity 0 and scaled down to 10 percent of its default size, using CSS transform scale. At the second stage (60%) the element fades in to full opacity and grows to 120 percent of its default size. At the final stage (100%), it scales down slightly and returns to its default size.👇

```javascript
@keyframes bounceIn {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
```

<br/>

 ### 🔸 2- Animation Properties

 <br/>

 Once the `@keyframes` are defined, the animation properties must be added in order for your animation to function.

✨ Animation properties do two things :

* They assign the `@keyframes` to the elements that you want to animate.

* They define how it is animated.

<br/>

> The animation properties are added to the CSS selectors (or elements) that you want to animate. You must add the following two animation properties for the animation to take effect : 👇

* animation-name: The name of the animation, defined in the @keyframes.

* animation-duration: The duration of the animation, in seconds (e.g., 5s) or milliseconds (e.g., 200ms).

<br/>

**✨ Example -1-**

> Continuing with the above bounceIn example, we’ll add animation-name and animation-duration to the div that we want to animate. 👇

```javascript
div {
  animation-duration: 2s;
  animation-name: bounceIn; //keyframe_name
}

//Shorthand syntax:

div {
  animation: bounceIn 2s;
}
```

**✨ [Click here](https://codepen.io/alaataima/pen/qBrBpGm?editors=0110), to start coding** 

<br/>

### 🔸 We have a lot of properties in the animation :

<br/>

* **animation-duration**

* **animation-delay**

* **animation-timing-function**

```javascript
div {
    animation-name: bounceIn; //keyframe_name
    animation-duration: 2s;
    animation-delay: 1s;
    animation-timing-function: linear;
}

//Shorthand syntax:

div {
    animation: bounceIn 2s linear 1s;
}
```

**✨ [Click here](https://codepen.io/alaataima/pen/qBrBpGm?editors=0110), to start coding** 


<br/>

* **animation-iteration-count**

    a property specifies the number of times that you want to run.

```javascript

// 1- In this case, the animation will run 5 times then will stop.

div {

    animation-iteration-count: 5;
}

 // 2- if you don't need to stop the animation, you can use :

div {

    animation-iteration-count: infinite;
}
```

**✨ [Click here](https://codepen.io/alaataima/pen/qBrBpGm?editors=0110), to start coding** 


<br/>

* **animation-direction**

   a property specifies from where the animation will run (from start, from the end, in alternate cycles)

  * normal: The animation will run as normal (from 0% 100%). This is the default.

  * reverse: The animation will run in the reverse direction (fro 100% to 0%)

**✨ [Click here](https://codepen.io/alaataima/pen/qBrBpGm?editors=0110), to start coding** 

<br/>

* **animation-fill-mode**

    specifies if the animation styles are visible before or after the animation plays. 
    It has many properties as the following  : 

  * none: the animation will not edit any styles before the animation run (Default value).

  * forwards: the element will stop with the style set by the last keyframe.

  * backwards: the element will start with the style set by the first keyframe, not the default style.

  * both: the element will start with the style set by the first keyframe, and will stop with the style set by the last keyframe.

**✨ [Click here](https://codepen.io/alaataima/pen/qBrBpGm?editors=0110), to start coding** 

<br/>

## 🔹 Animation Property Shorthand

Each animation property can be defined individually, but for cleaner and faster code, it’s recommended that you use the animation shorthand.

```
animation: [animation-name] [animation-duration] [animation-timing-function]
[animation-delay] [animation-iteration-count] [animation-direction]
[animation-fill-mode] [animation-play-state];
```