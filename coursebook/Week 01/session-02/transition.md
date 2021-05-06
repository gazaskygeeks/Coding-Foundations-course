
# CSS Transition 

This workshop will introduce you to CSS transitions, and how to use it with CSS transform. When used together, these properties allow you to create simple animations and add valuable interaction and visual feedback for your users.

<br/>

> ## ✨  Lets start with Transition.

<br/>

## What Is Transition ❓

 transitions make the element smoothly and gradually change from one state to another.

## How ❓❗

Transitions are the grease in the wheel of CSS transforms. Without a transition, an element being transformed would change abruptly from one state to another. By applying a transition you can control the change, making it smooth and gradual.

<br/>

## ✨ Transition properties 

> #### Note : transitions can also be used elsewhere where elements change from one style to another (e.g., when a button changes color on hover) not with transform only.

<br/>

### 🔹 transition-property (required)

The transition-property specifies the CSS property where the transition will be applied. You may apply a transition to an individual property (e.g., background-color or tranform), many properties or to all properties in the rule-set (i.e., all).

🔸 Example - 1 - : 

```javascript
div {
  transition-property: transform; //just one property
  transition-property: width, height, background-color; // many ptoperties
  transition-property: all; // all properties
   } 
```

> Note : if you added this code to the element style, the code could not run, but why ❓❗❗ because we didn't add the second important property that is transition-duration.

### ✨ [Click here](https://codepen.io/alaataima/pen/eYvOQRP) to start Coding 💻

<br/>

### 🔹 transition-duration (required)

The transition-duration property specifies the time span of the transition. You can specify in seconds or milliseconds.

🔸 Example - 2 - : 

```javascript
div {
    transition-property: all;
    transition-duration: 3s;
   } 

   //Shorthand syntax

   div {
  transition: all 3s;
}
```
```javascript
div {
    transition-property: width, height, background-color;
    transition-duration: 2s, 3s, 4s;
   } 

   //Shorthand syntax

   div {
  transition: width 2s, height 3s, background-color 4s;
}
```
### ✨ [Click here](https://codepen.io/alaataima/pen/eYvOQRP) to start Coding 💻

<br/>


### 🔹 transition-timing-function (optional)

The transition-timing-function property allows you to define the speed of the transition over the duration. The default timing is ease.
There are many values for this property which are : 👇

* linear: the same speed from start to end.

* ease: slow start, then fast, then end slowly.

* ease-in: slow start.

* ease-out: a slow end.

* ease-in-out: slow start and end.

🔸 Example - 3 - : 

```javascript
div {
    transition-property: all;
    transition-duration: 3s;
    transition-timing-function: ease-in-out;
   } 

   //Shorthand syntax

   div {
    transition: all 3s ease-in-out;
}
```
### ✨ [Click here](https://codepen.io/alaataima/pen/eYvOQRP) to start Coding 💻

<br/>

### 🔹 transition-delay (optional)

The transition-delay property allows you to specify when the transform will start. By default, the transition starts as soon as it is triggered (e.g., on mouse hover). However, if you want to transition to start after it is triggered you can use the transition delay property.


🔸 Example - 4 - : 

```javascript
div {
    transition-property: all;
    transition-duration: 3s;
    transition-timing-function: ease-in-out;
    transition-delay: 1s;

   } 

   //Shorthand syntax

   div {
    transition: all 3s ease-in-out 1s;
}
```
### ✨ [Click here](https://codepen.io/alaataima/pen/eYvOQRP) to start Coding 💻

<br/>

### 🔹Shorthand syntax 

Each transition property can be defined individually, but for cleaner and faster code, it’s recommended that you use the transition shorthand.

Here’s the full shorthand sequence. Again, the first two properties are required.

```
div {
    transition: transition-property transition-duration transition-timing-function transition-delay;
}
```


<br/>

> ## Now, We are ready to use CSS Animation.💻🏃

* ### [Animation](./animation.md)

