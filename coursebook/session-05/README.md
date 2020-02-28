# Session-05: CSS-03

**Author**: [@kannanhassouna](https://github.com/kannanhassouna)

### [Morning Challenge](morning-challenge.md)

## Learning Outcomes

- Understand how to use fonts in CSS.
- Understand how to use google fonts in CSS.
- Understand layout in CSS.
- Understand what is Inline-Block in CSS.
- Understand what is float in CSS.
- Understand what is Block-Model in CSS.

### Prepare Yourself

- Open your text editor ([vs-code](https://code.visualstudio.com/) recommended).
- Create a new file `index.html`
- Create another file `index.css`
- Copy the code from this [link](https://codepen.io/machine-1/pen/bGdEVRX) to your html and css files.
- Install [live-server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
- Open your `index.html` file with live server by right click on the file and choose `open wih live server`.
- You are good to go. 🎉🎉

---

## Fonts In CSS

fonts are important in any website, developers use fonts to make their websites more elegant, so how to use fonts in css ?
CSS provides us with many properties to customize fonts, like: 

- ```font-family```
- ```font-size```
- ```font-weight```
- ```color```
- ```text-decoration```
- ```text-align```
- ```text-transform```
- ```text-indent```
- ```letter-spacing```
- ```line-height```
- ```direction```
- ```text-shadow```
- ```word-spacing```

### ```Font-Family```

we use ```font-family``` to determine the typeface of text, we can use built-in (Generic Family) typeface or get a new one from [Google Fonts](https://fonts.google.com) like
> Default font is Times New Roman

### Built-in(Generic Family):

```html
    <!-- index.html -->
    <p>Hello World</p>
```

```css
    p { font-family: "Times New Roman" }
```

> Common generic font families include serif (such as Times New Roman, Bodoni, and Garamond), sans-serif (such as MS Arial, MS Verdana, and Univers), and monospace (such as Courier, MS Courier New, and Prestige).

### Google Fonts

sometimes you like to use modren fonts, which are not included in the generic family, so you could use google fonts, to use fonts from google you have to follow these steps:

- Go to [Google Fonts](https://fonts.google.com).
- Select the Font.
- look at the right top and click on select this font.
- then you will get a new pop-up at the bottom of the page.
- click on this pop-up and copy the html code to your html file.
- then you can use the font in any place you would like.

#### ```index.html```

<img src="https://i.imgur.com/LbnKDmq.png" alt="final result" width="700" />

#### ```index.css```

<img src="https://i.imgur.com/tKEUmmL.png" alt="final result" width="400" />


### Fallback: 
what if you have selected not avaliable font? , then css will use another font which is called fallback font.
Like:

<img src="https://i.imgur.com/J5JgbB0.png" alt="final result" width="700" />


CSS here will try to use ```Cairo```, if ```Cairo``` is not exists then CSS will try to use ```sans-serif```, if ```sans-serif``` is not exists then CSS will use ```Courier New``` ...etc
> Default fallback font Times New Roman

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
- **padding**: is the space between the content of the element and the border of the element (green area).
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

here the element will be presented as a block so the element will add a new line before and after it, in this case the element will follow the ```box model``` so we can control the ```width```, ```hight```, ```margin```, ```padding``` and ```border``` of the element.

#### ```display: inline```

here the element will not add a new lines before and after, and we can't control the ```width```, ```height```, ```padding```,```margin```, and border of the element.

#### ```display: inline-block```

here the element will be treated as ```inline``` else you can take control of ```width``` and ```height```.

### Excercie

Try to make this page in css.

<img src="https://i.imgur.com/uY5f2Xq.png" alt="final result"  />

### Useful Resources
- [Box Model](https://css-tricks.com/the-css-box-model/)
- [Typograhpy in CSS](https://css-tricks.com/typography-for-developers/)
- [CSS Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)
- [MDN](https://developer.mozilla.org/en-US/docs/)
- [Display In CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/display)