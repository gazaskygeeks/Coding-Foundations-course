# Flexbox 👩‍💻

flexbox is technique to layout,organize and distribute HTML elements in efficient way,also manage the space between elements in more sophisticated way.


In flexbox, there are two main components you have to recognize them before start play around with flexbox which are **flex-container**, **flex-elements**

![flex container and elements](https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/07/1404915977flex-container-and-elements.png)

and there is something else you have to know before dive in flex box, as we said before flexbox is direction-agnostic so it works with the both direction and each one has it's own name, which are **Main Axis**, **Cross Axis**
![dirctions in flexbox](https://i.imgur.com/NRx4Hb3.png)

> the default direction is horizental

let's begin with simple example, let's add some boxes (flex elements) inside an conatiner (flex container):
```html
<div class="container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">3</div>
<div>
```

```css
/* Flex Container */
.container {
    display: flex;
    background: #333;
}

/* Flex Items */
.box {
    width: 300px;
    height: 300px;
    color: #fff;
    font-size: 60px;
    background: orange;
    margin: 5px;
}
```

- Did you see how the layout of the **flex elements** order?
Here CSS ordered elements one by one, start from the **Main Axis** and put them horizontally according to its direction which is by default is the row(horizontal direction).


So,this is the most basic usage of flexbox, now let's play with the direction of flex: 

 **row** (default)
```css
.container{
    flex-direction: row;
}
```
Here the elements will start order from left and right.

 **row-reverse**
```css
.container{
    flex-direction: row-reverse;
}
```
Here the elements will start order from right to left.


 **column**
```css
.container{
    flex-direction: column;
}
```
Here the elments will start order from top to bottom.

**column-reverse**
```css
.container{
    flex-direction: column-reverse;
}
```
Here the elments will start order from bottom to top.



### Manage Extra Space

right now let's learn how to manage the extra space in the flex system, let's start in manage the space in the main axis:
>here we will assume two things:

> 1-  space is the space in the **Main Axis**

> 2-  the direction is row (horizontally)
> 

we can manage the main axis space using ```justify-content``` in flex-container: 

**center**
```css
.container{
    justify-content: center;
}
```
Here the elements will place at the center and extra spaces will be around them

**flex-start**
```css
.container{
    justify-content: flex-start;
}
```
Here the space will place after the last element


**flex-end**
```css
.container{
    justify-content: flex-end;
}
```
Here the space will place before the first element.

**space-between**
```css
.container{
    justify-content: space-between;
}
```
Items display with equal spacing between them.

**space-around**
```css
.container{
    justify-content: space-around;
}
```
Items display with equal spacing around them.


This image, taken from an CSS-Tricks article on justify-content, does a good job illustrating the difference between the values listed above:


![](https://www.w3.org/TR/css-flexbox-1/images/flex-pack.svg)


>here we will assume two things:

> 1-  space is the space in the **Cross Axis**

> 2-  the direction is row (horizontally)


**flex-start**
```css
.container{
    align-items: flex-start;
}
```
Here the extra space (of the cross axis) will be bellow flex-elements.

> when i mean after all elements I mean the elements will start to place into the container from where the flex-start in the cross axis.

**flex-end**
```css
.container{
    align-items: flex-end;
}
```
Here the extra space (of the cross axis) will be above flex-elements.


**center**
```css
.container{
    align-items: center;
}
```
Here the extra space (of the cross axis) will be distributed equally above and bellow flex-elements which will make the element in the middle of cross axis.

### **Flex-Elements Order**:
flexbox provides a way to determine the order of each element, which is a property you can use in flex-elements.

> default value for order property is **zero**
> 

flexbox start placing elements from lower to larger values
example:
```css
.box-1 {
    order:2;
}

.box-2 {
    order: -1;
}

.box-3 {
    order: 3;
}

.box-4 {
    order: 4;
}

```

so we have the following values : 2, -1, 3, 4 so CSS we reorder them to -1 -> 2 -> 3 -> 4

and the final result will be :
![final result](https://i.imgur.com/3jFOMYi.png)

<br/>

## 🔸 Exercise 

### ✨ we have a brillient practical exercise for you here we will solve it with each other




