

# CSS Transform and Transition 

This workshop will introduce you to CSS transitions and CSS transforms: the CSS power couple. When used together, these properties allow you to create simple animations and add valuable interaction and visual feedback for your users.

<br/>

> ## ✨  Lets start with Transform.

<br/>

## What Is Transform ❓

transforms move or change the appearance of an element.

## How ❓❗

With the CSS transform property you can rotate, move, skew, and scale elements. 

Transforms are triggered when an element changes states, such as on mouse-hover or mouse-click.

<br/>

> ### Lets start to see how can we apply `transform`  💻 🏃

<br/>


## 🔹 scale 

A method for resizing an element, increasing it or decreasing it based on the given value , it accepts negative and positive values : 👇

| type  | Description |
| ------------- | ------------- |
| scaleX(value px) | increases or decreases the width of an element |
| scaleY(value px) | increases or decreases the height of an element |
| scale(value px, value px) | increases or decreases the width and height of an element by providing values for both |
| scale(value px) | increases or decreases both width and height of an element by providing a single value |
| | |

### ✨ [Click here](https://codepen.io/alaataima/pen/YzZKJYB) to start Coding 💻

<br/>

## 🔹 rotate

With the rotate value, the element rotates clockwise or counterclockwise by a specified number of degrees. A positive value, such as 90deg, rotates the element clockwise, while a negative value, such as -90deg, rotates it counterclockwise.

| type  | Description |
| ------------- | ------------- |
|  rotateX(50deg) |  rotates the element relative to its x-axis. |
| rotateY(50deg) |  rotates the element relative to its y-axis. |
| rotate(50deg) | rotates the element relative to both x and y axis
| |  | 

### ✨ [Click here](https://codepen.io/alaataima/pen/YzZKJYB) to start Coding 💻

<br/>

## 🔹 translate

The translate value moves an element left/right and up/down. The movement is based on the parameters given for the X (horizontal) Y (vertical) axis.
| type  | Description |
| ------------- | ------------- |
| translateX(20px) | moves the element to the right. |
| translateX(-20px) | moves the element to the left. |
| translateY(20px) | moves the element downwards |
| translateY(-20px) | moves the element upwards.
| translate(20px, 20px) | the first value is for the x-axis and the second is for the y-axis
| |  | 


### ✨ [Click here](https://codepen.io/alaataima/pen/YzZKJYB) to start Coding 💻

<br/>

## 🔹 skew

With the skew value, the element skews (or tilts) one direction or the other based on the values given for the X and Y axes.

| type  | Description |
| ------------- | ------------- |
| skewX(25deg) | skew an element left. |
| skewX(-25deg) | skew an element right. |
| skewY(25deg) | skew an element down. |
| skewY(-25deg) | skew an element up.
| skew(25deg, 20deg)  | skews an element along the X-axis and the Y-axis.
| skew(25deg)  |  skews an element along the X-axis and the Y-axis value is set to zero.
| |  | 

### ✨ [Click here](https://codepen.io/alaataima/pen/YzZKJYB) to start Coding 💻

<br/>

## 🔹 Combine all methods 

<br/>

### 🔸 First way 

```javascript
    transform: translate(-10px, 20px) scale(1.3) rotateX(10deg) skewY(20deg);
```

<br/>

### 🔸 Second way 

By using matrix method that combines all the 2D transform methods into one :

* matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY()) 👇

```javascript
transform: matrix(1, -0.3, 0, 1, 0, 0);
```

### Finally, We did it 👏 💪

<br/>

> ## Now, Lets go to start with Transition 🏃🏃

* ### [Transition](./transition.md)