## Layout In CSS 👩‍💻

the layout is how to organize the elements on your website such as put two divisions in the same row or to put the text beside the image.

CSS provides alot of techniques  to orgnizaed the position of elements in the page, like:

- float.
- inline-Block
- box model
- flexbox
- grid

in this session we will discuss float, inline-block, box model.

### Float

The ```float``` property is used for positioning and formatting content e.g. let an image float left to the text in a container.

values of float could be:

- left (position the element to left).
- right (position the element to right).
- inherit (return the element to normal flow).

when ```float``` has value ```left``` then the element will position to left and if there is extra space for the next element then the next element will move to right: 

#### html

<img src="https://i.imgur.com/IMtIMg0.png" alt="final result" width="700" />

#### css

<img src="https://i.imgur.com/tQJjju3.png" alt="final result" width="700" />

#### final result

<img src="https://i.imgur.com/M1wh1VA.png" alt="final result" width="700" />

> if the float get right as a value then the element will move to the right.

### Box Model:

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

>all these properties work if the element is not an inline element, if the element is inline then these properties will not work.

### display property

display property control how the element will interact with the other elements and has different values :

- **block**.
- **inline**.
- **inline-block**.

#### ```display: block```

here the element will presented as a block so the element will add a new line before and after it, in this case the element will follow the ```box model``` so we can control the ```width```, ```hight```, ```margin```, ```padding``` and ```border``` of the element.

#### ```display: inline```

here the element will not add a new lines before and after, and we can't control the ```width```, ```height```, ```padding```,```margin```, and border of the element.

#### ```display: inline-block```

here the element will be treated as ```inline``` but you can take control of ```width``` and ```height```.
### Excercie

Try to make this page in css.

<img src="https://i.imgur.com/uY5f2Xq.png" alt="final result"  />
