# Box Model:dart:

do you know how ```margin```, ```padding```, ```border``` ?
I will assume you know them, so now let's dive deep and understand how they are working precisely.

**this is the box model**.

<img src="https://i.imgur.com/NmN7hEi.png" alt="final result" width="700" />

- **margin**: is the space between the border of the element and the surrounded elements (orange area).
**margin** is a shorthand for ```margin-top```, ```margin-right```, ```margin-bottom``` and ```margin-left```.
```css
h1 {
    /* This: */
    margin: 20px 10px 5px;
    /* Is the same as: */
    margin-top:20px;
    margin-right:10px;
    margin-bottom:5px;
    margin-left:10px;
} 
```
- **padding**: is the space between the content of the element and the border of the element (green area).
**padding** is a shorthand for ```padding-top```, ```padding-right```, ```padding-bottom``` and ```padding-left```.
```css
div {
    /* This: */
    margin: 20px;
    /* Is the same as: */
    margin-top:20px;
    margin-right:20px;
    margin-bottom:20px;
    margin-left:20px;

    /* This: */
    padding: 10px 20px;
    /* Is the same as: */
    padding-top:10px;
    padding-right:20px;
    padding-bottom:10px;
    padding-left:20px;
}
```

- **border**: is the space between the margin and the content of the element(yellow area).
- **width**: is the width of the content of the element.
- **height**: is the height of the content of the element.

>all these properties work if the element is not an inline element, if the element is inline,  so width and height properties will not work.

___________________________________________________________________________________________________________________________________________________________________

### display property :dart:

display property control how the element will interact with the other elements and has different values :

- **block**.
- **inline**.
- **inline-block**.

#### ```display: block```

here the element will presented as a block so the element will add a new break line before and after it, in this case the element will follow the ```box model``` so we can control the ```width```, ```hight```, ```margin```, ```padding``` and ```border``` of the element.

#### ```display: inline```

here the element will not add a new break lines before and after, and we can't control the ```width```, ```height```, ```padding```,```margin```, and border of the element.

#### ```display: inline-block```

here the element will be treated as ```inline``` but you can take control of ```width``` and ```height```.

## Display: inline-block
Compared to ```display: inline```, the major difference is that ```display: inline-block``` allows to set a ```width``` and ```height``` on the element.

Also, with ```display: inline-block```, the ```top``` and ```bottom``` ```margins```/```paddings``` are respected, but with ```display: inline``` they are not.

Compared to ```display: block```, the major difference is that ```display: inline-block``` does not add a ```line-break``` after the element, so the element can sit next to other elements.

The following example shows the different behavior of ```display: inline```, ```display: inline-block``` and ```display: block```:

### Example:
```css
span.a {
  display: inline; /* the default for span */
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 1px solid blue;
  background-color: yellow;
}

span.b {  display: inline-block;
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 1px solid blue;
  background-color: yellow;
}

span.c {
  display: block;
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 1px solid blue;
  background-color: yellow;
}
```
![](https://i.imgur.com/HF13J4v.png)
![](https://i.imgur.com/IgqPgPa.png)
![](https://i.imgur.com/lEi0RZN.png)

### Using inline-block to Create Navigation Links:
One common use for display: inline-block is to display list items horizontally instead of vertically. The following example creates horizontal navigation links:
```css
.nav {
  background-color: yellow;
  list-style-type: none;
  text-align: center; 
  padding: 0;
  margin: 0;
}

.nav li {
  display: inline-block;
  font-size: 20px;
  padding: 20px;
}
```
![](https://i.imgur.com/hBIqYMW.png)

## inline-block vs float:
You can create a grid of boxes that fills the browser width and wraps nicely. This has been possible for a long time using float, but now with inline-block it's even easier. inline-block elements are like inline elements but they can have a width and height. Let's look at examples of both approaches.

### The Hard Way (using float):
```css
.box {
  float: left;
  width: 200px;
  height: 100px;
  margin: 1em;
}
.after-box {
  clear: left;
}
```
![](https://i.imgur.com/g86ogis.png)

### The Easy Way (using inline-block):
You can achieve the same effect using the inline-block value of the display property.
```css
.box2 {
  display: inline-block;
  width: 200px;
  height: 100px;
  margin: 1em;
}
```
![](https://i.imgur.com/VNGjknZ.png)

### Excercie

Try to make this page in css.

<img src="https://i.imgur.com/uY5f2Xq.png" alt="final result"  />


<br/>
<br/>

> ## Now, Lets go to start with position layout 🏃🏃

* ### [Position](./position.md)