**Authors**: @yosefanajjar & @fares98

**Maintainer**: @MohammedYehia

# Welcome To The CSS Animations Workshop!

This workshop is designed to introduce you to a modern topic in CSS which is **CSS Animations**, there will be a fine explanation of what is it and how to do it, so by the end of the workshop you are expected to understand CSS **Transform**, **Transition**, **Animation** properties and how to make your own **keyframes** in CSS.

## What is CSS Animations?

_CSS Animations_ allows you to change an element style, like moving an element from left to right for a specific amount of times. They consist of two things **CSS styles** describing how the element will look like and **keyframes** that specifies the styles of the element in the start and the end of the animation.

**Important Note**: you can make simple animations without using keyframes by using the transform and transition properties.

## Making an Animation

Before we get into that, we need to make sure that you understand some important CSS properties that we have mentioned before like:

<h2>
Transform
</h2>

_The transform_ CSS property used for changing the shape and position of the affected element and allows you to **translate**, **rotate**, **scale**, and **skew** elements.

- **Translate**: A method for moving the element from its current position:

  - <span>translateX(px):</span> moves the element relative to its X-axis
  - <span>translateY(px):</span> moves the element relative to its Y-axis
  - <span>translate(px, px):</span> the first value is for the x-axis and the second is for the y-axis

```css=
    transform: translate(50px, -20px);
```

![translate-new](https://user-images.githubusercontent.com/29041512/72687419-6c131100-3ab2-11ea-82c5-1c12fd06175a.gif)

In the example above, the targeted element is moved 50px to the right and 20px to the top from its current position

**_Hint:_**

> **_all the transform methods can accept positive or negative value._**

- **Scale**: A method for resizing an element, increasing it or decreasing it based on the given value:

  - <span>scaleX(value)</span> increases or decreases the width of an element
    - <span>scaleY(value)</span> increases or decreases the height of an element
    - <span>scale(value, value)</span> increases or decreases the width and height of an element by providing values for both
    - <span>scale(value)</span> increases or decreases both width and height of an element by providing a single value

```css=
    transform: scale(2);
```

![scale](https://user-images.githubusercontent.com/29041512/72687701-6539cd80-3ab5-11ea-8788-dafdeb4faf93.gif)

In the example above, the targeted element will be scaled 200% horizontally and vertically.

- **Rotate**: A method for rotating an element clockwise or counter-clockwise according to a given degree:

  - <span>rotateX(value)</span> rotates the element relative to its x-axis
    - <span>rotateY(value)</span> rotates the element relative to its y-axis
    - <span>rotate(value)</span> rotates the element relative to both x and y axis

```css=
    transform: rotate(50deg);
```

![rotate1](https://user-images.githubusercontent.com/29041512/72687958-dbd7ca80-3ab7-11ea-9544-2eed12fc8838.gif)

In the example above, is rotated 50 degress clockwise, when giving negative values it would be rotated counter-clockwise

- **Skew**: A method that skews an element:

  - <span>skewX(deg)</span> skews an element along the X-axis by the given angle
  - <span>skewY(deg)</span> skews an element along the Y-axis by the given angle
  - <span>skew(deg, deg)</span> skews an element along the X and Y-axis by the given angles to each on of them
  - <span>skew(deg)</span> skews an element along the X-axis and the Y-axis value is set to zero

```css=
    transform: skew(20deg, 30deg);
```

![skew](https://user-images.githubusercontent.com/29041512/72688146-4fc6a280-3ab9-11ea-8d84-69e23951f26c.gif)

In the example above the element is skewed 20deg along the X-axis and 30deg along the Y-axis.

- all : all methods: - transform: translate(px, px) scale(num) rotate(deg) skew(deg, deg);

```css=
    transform: translate(-10px, 20px) scale(1.3) rotateX(10deg) skewY(20deg);
```

![all](https://user-images.githubusercontent.com/29041512/72688296-73d6b380-3aba-11ea-83ab-2cbbfb6a7458.gif)

- matrix: a method combines all the 2D transform methods into one:
  - matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())

```css=
transform: matrix(1, -0.3, 0, 1, 0, 0);
```

![matrix](https://user-images.githubusercontent.com/29041512/72688378-6241db80-3abb-11ea-8c75-208c2661c644.gif)

- helper:
  https://html-css-js.com/css/generator/

---

<h2>
Transition
</h2>

_Transition_ allow us to perform animations without using JavaScript! it allows you to change property values smoothly, over a given duration.

**How to use transitions?**

1. Specify a property for the transition.
2. Specify a duration time for the transition (ie. 2s)

**The transition consists of**:

1. <span>transition-property: </span> a property using to specify the property (properties) that you want to apply the transition to it.

```css=
transition-property: width;
```

_In this case, the transition would apply on the width property only._

- **Several Property Values**

  - if you have more than one property you want to apply to it, you can add it in the same line:

  ```css=
  transition-property: width, height, background-color;
  ```

  - if you want to apply the transition on all properties you can use the method <span>all</span>:

  ```css=
  transition-property: all;
  ```

**if you added this code to the element style, the code could not run, but _why?_
because we didn't add the second important property that is :**

2. <span>transition-duration: </span> a property using to specify the time that you want to apply the transition within it.

```css=
transition-duration: 2s;
```

You may specify multiple durations, each duration will be applied to the corresponding property as specified by the <span>transition-property</span>.

```css=
transition-property: width, height, background-color;
transition-duration: 2s, 3s, 4s;
```

if you think that this way confuses, you can use an easier way to implement the same code by the <span>transition</span> property:

```css=
transition: width 2s, height 3s, background-color 4s;
```

and you can use the <span>transition</span> property with <span>all</span> methode:

```css=
transition: all 3s;
```

_in this case, all properties will take the same time._

**For Example:**
**Change Several Property Values:**

```css=
div {
  width: 100px;
  height: 100px;
  transition: width 2s, height 4s;
}
```

In the example above we have a transition for the element that will happen when the width and height values change, but **how will it change?**

```css=
div:hover {
  width: 300px;
  height: 200px;
}
```

![transition-several](https://user-images.githubusercontent.com/29041512/72688847-2fe6ad00-3ac0-11ea-8115-03616b572689.gif)

3. <span>transition-delay: </span> a property specifies the time delay ( the time that should wait ) before starting the transition:

```css=
transition-delay: 3s;
```

_In this case, the transition will start after 3 seconds from load the page._

**_Hints:_**

> **_This is property is optional, which means you can make an animation without using it._**

> **_you can use several values exactly as you used in the <span>transition-duration</span> property:_**

```css
 {
  transition-property: width, height, background-color;
  transition-duration: 2s, 3s, 4s;
  transition-delay: 1s, 0.5s, 1.5s;
}

or: {
  transition: width 2s 1s, height 3s 0.5s, background-color 4s, 1.5s;
}
```

4. <span>transition-timing-function: </span> a property specifies the speed curve of the transition effect.

**_Hints:_**

> **_This is property is optional, which means you can make an animation without using it._**

> **_There are many values for this property, but we will discuss the five most used values in this workshop._**

- <span>linear: </span>the same speed from start to end.

- <span>ease: </span>slow start, then fast, then end slowly.

- <span>ease-in: </span>slow start.

- <span>ease-out: </span>a slow end.

- <span>ease-in-out: </span>slow start and end.

```css
transition-timing-function: ease (default value);
```

5. <span>transition: </span> a property is a shortcut for all the transition properties, in another meaning is property includes all the transition properties.

```css
transition: all 4s linear 2s;
```

in this example, the transition would apply on all properties for the element within 4 seconds after delay 2 second by the linear method.

<!--
**For Example**
```css=
div {
	width: 100px;
    background: yellow;
	transition: width 3s;
}
```
In the example above we have a transition for the element that will happen when the width value changes, but **how will it change?**

A good example about this would be when you hover the element
```css=
div:hover {
	width: 200px;
}
```
![transition](https://user-images.githubusercontent.com/29041512/72688703-af737c80-3abe-11ea-9589-860c1fa535d7.gif)

**Change Several Property Values:**
```css=
div {
  width: 100px;
  height: 100px;
  transition: width 2s, height 4s;
}

div:hover {
  width: 300px;
  height: 200px;
}

```

![transition-several](https://user-images.githubusercontent.com/29041512/72688847-2fe6ad00-3ac0-11ea-8115-03616b572689.gif)

  -->

<h2>
Animation
</h2>

**Now** after we have known how we can use the <span>Transforms</span> and <span>Transitions</span>, We are ready to use CSS <span>Animation</span>.

**Before we start we need to know it is:**

<span>@keyframes:</span> a rule that specifies the animation code (the animation code will be inside it), it contains a style list, each style with a specified percentage.

To start creating a keyframe you need to add <span>keyframe_name</span>, this name will be used to control the animation.

```css=
@keyframes keyframe_name {
  0%   {first code}
  25%  {second code}
  50%  {third code}
  75%  {fourth code}
  100% {fifth code}
}

```

you can create keyframe without keyframe percentage, you can use:

```css=
@keyframes keyframe_name {
  from   {first code}
  to {last code}
}
```

This code mean:

```css=
@keyframes keyframe_name {
  0%   {first code}
  100% {last code}
}
```

**_Now we can create good animation_**

We have a lot of properties in the animation:

1. <span>animation-duration</span>
2. <span>animation-delay</span>
3. <span>animation-timing-function</span>

we use these properties as we used the transition property

```css
 {
  animation-duration: 2s;
  animation-delay: 1s;
  animation-timing-function: linear;
}

or: {
  animation: 2s linear 1s;
}
```

you may have many keyframes, did you ask yourself how this code will run the wanted animation?

honestly, this code wouldn't run any animation, to specify the wanted animation, you need to use:

4. <span>animation-name:</span> this is will be the name that you added to the keyframe

```css=
animation-name:keyframe_name;
```

5. <span>animation-iteration-count:</span> a property specifies the number of times that you want to run.

```css
animation-iteration-count: 5;
```

in this case, the animation will run 5 times then will stop, if you don't need to stop the animation, you can use:

```css
animation-iteration-count: infinite;
```

6. <span>animation-direction:</span> a property specifies from where the animation will run (from start, from the end, in alternate cycles)

- **normal:** The animation will run as normal (from 0% 100%). This is the default.

- **reverse:** The animation will run in the reverse direction (fro 100% to 0%)

<!-- * **alternate:** The animation will run from the start, then from the end.

* **alternate-reverse:** The animation will run from the end, then from the start. -->

7. <span>animation-fill-mode:</span>

- **none**: the animation will not edit any styles before the animation run (Default value).

- **forwards**: the element will stop with the style set by the last keyframe.

- **backwards**: the element will start with the style set by the first keyframe, not the default style.

- **both**: the element will start with the style set by the first keyframe, and will stop with the style set by the last keyframe.

8. <span>animation:</span> a property is a shortcut for all the animation properties, in another meaning is property includes all the animation properties.

```css
animation: keyframe_name 5s linear 2s infinite reverse;
```

in this example, the keyframe_name animation would run from end to start after 2 seconds delay, duration 5 seconds, by the linear method, and this animation wouldn't stop.
