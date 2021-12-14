# :dart: Box Model

do you know how `margin`, `padding`, `border` ? I will assume you know them, so now let's dive deep and understand how they are working precisely.

**this is the box model**.

![final result](https://i.imgur.com/NmN7hEi.png)

- **margin**: is the space between the border of the element and the surrounded elements (orange area). **margin** is a shorthand for `margin-top`, `margin-right`, `margin-bottom` and `margin-left`.

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

- **padding**: is the space between the content of the element and the border of the element (green area). **padding** is a shorthand for `padding-top`, `padding-right`, `padding-bottom` and `padding-left`.

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

> all these properties work if the element is not an inline element, if the element is inline, so width and height properties will not work.

--------------------------------------------------------------------------------

# :dart: CSS display Inline vs Inline-Block vs Block

### 📍 **display: inline**:

Displays an element as an inline element. _Any height and width properties will have no effect_.

<img width="400" alt="Screen Shot 2021-12-13 at 6 31 20 PM" src="https://user-images.githubusercontent.com/47992412/145849538-1476c446-1f90-485e-b38a-afbe84515d72.png">

This one displays the element inline or on the same line. In other words, inline elements do **NOT start** on a new line and only takes up as much width as its content. So, if you try to set any width and height, it will have NO effects.

```css
.inline-element {
  display: inline;
  width: 1000px; /* ❌ won't have any effect */
  height: 1000px; /* ❌ won't have any effect */
}
```

### 📍 **display: block**:

here the element will presented as a block so the element will add a new break line before and after it, in this case the element will follow the box model so we can control the width, hight, margin, padding and border of the element

<img width="400" alt="Screen Shot 2021-12-13 at 6 31 20 PM" src="https://user-images.githubusercontent.com/47992412/145853592-1b2281f7-86e0-455b-be27-d029441f20bb.png">

### 📍 **display: inline-block**:

Displays an element as an inline-level block container. _You CAN set height and width values_.

<img width="400" alt="Screen Shot 2021-12-13 at 6 31 20 PM" src="https://user-images.githubusercontent.com/47992412/145851564-6b9e8b9a-7e64-4e52-a701-c66baa3e318b.png">

Alright, let's move on to inline-block. It’s essentially the same thing as inline, except that you can set height and width values and The top and bottom margins/paddings are respected.

```css
.inline-block-element {
  display: inline-block;
  width: 1000px; /* ✅  yes, it will work */
  height: 1000px; /* ✅  yes, it will work */
}
```

--------------------------------------------------------------------------------

<br>

## Exercise

Try to make this page in css.

![final result](https://i.imgur.com/uY5f2Xq.png)

<br><br>
