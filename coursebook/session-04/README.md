# Session-03: CSS-02

**Author**: [@machine](https://github.com/machine-1)

## Learning Outcomes

- Understand why we need comments in CSS.
- Understand how to add comments in CSS.
- Understand what is cascading in CSS.
- Understand what is inheritance in CSS.
- Understand what is Specificity in CSS.
- Understand how to represent colors in CSS.
- Understand why we use HEX, Named Colors.

### Prepare Yourself

- Open your text editor ([vs-code](https://code.visualstudio.com/) recommended).
- Create a new file `index.html`
- Create another file `index.css`
- Copy the code from this [link](https://codepen.io/machine-1/pen/bGdEVRX) to your html and css files.
- Install [live-server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
- Open your `index.html` file with live server by right click on the file and choose `open wih live server`.
- You are good to go. 🎉🎉

---

## Commments In CSS

everyone likes to know what is the benefits of doing something, so let us know what is the benefits from comments in CSS

### Benefits from CSS comments

- to remove the complexity from the source code ([source code](https://en.wikipedia.org/wiki/Source_Code) is the written code).
- To guide the writer or the reader to the used ideas.
- To explain why the writer have used this technique over the others.
- To disable some lines of code.
- to debuging the source code ([debugging](https://en.wikipedia.org/wiki/Debugging) in simple words is to check and resolve the [bugs](https://en.wikipedia.org/wiki/Bug) in source code).

> any commented code will not be compiled and will not affect the html document like `/* color: green; */` will not make the text green because the line is commented

so now we know why we need comments now let us know how to make comments in CSS.

![comments in CSS](https://media.giphy.com/media/iHycW4GwQtRkUSiOMJ/giphy.gif)

> commented code not working
<img src="https://i.imgur.com/D5ginxP.png" alt="first file" width="700" />

> Result 
<img src="https://i.imgur.com/pzuAnQM.png" alt="first file" width="700" />

### The steps to add comments in CSS

- add forward slash followed by astricks `/*`.
- write your comments.
- and at the end add astricks followed with forward slash `*/`.

### Your turn to add comments

- open `index.css` file.
- try to find a place to add comments.

---

## Cascading in CSS

in simple words cascading in CSS is when there is more than one source to style the html element CSS will combine them together the get the final result.

let me explain consider you have two CSS files first one select button with id `#button` and add orange background to the button and the second file select button with id `#button` and change the size of the text to something like `24px`, here is the idea CSS will combine them together and will figure out that you try to style the same element.

> CSS does this behind the scenes

### Benefits from Cascading

- To style the elements from multiple place.
- **DISADVANTAGE** when the developer come to the debug the code, he has to all check all places affect the element

## Example

first file:  
<img src="https://i.imgur.com/ETjTRee.png" alt="first file" width="400" />

second file:  
<img src="https://i.imgur.com/XmizeeZ.png" alt="second file" width="400" />

final result: (this result you will not see it, CSS did it behind the scenes)  
<img src="https://i.imgur.com/FZZXxdK.png" alt="final result" width="400" />

<img src="https://i.imgur.com/4yDmZsA.png" alt="final result" width="400" />

### Your turn to try

- open `index.html` and add an element there.
- open `index.css` file style that element.
- create a new CSS file `index2.css` and link it to html file.
- try to style the same element from the new file.
- you have to see the element effected by the two places

#### LAST NOTE : that could happen in the same file when you select the element twice in the same file

---

## Inheritance in CSS

CSS supports inheritance, that means if the parent has some properties then will give them to his children (children here are the nested elements).

but let us know who is the parent and who are the children ?
<img src="https://i.imgur.com/lwG0jrz.png" alt="final result" width="500" />

So, CSS supports transfer the properties (CSS properties) from the parent to the children.
like if the color of text in the parent is **Orange** then be default (else you changed it) the color of text in the children will be **Orange**.

Example :

> #### **1 - index.html**
>
> <img src="https://i.imgur.com/R7DhzwW.png" alt="final result" width="500" />
>
> #### **2 - index.css**
>
> <img src="https://i.imgur.com/rm4dLum.png" alt="final result" width="500" />
> #### **3 - final result**
>
> <img src="https://i.imgur.com/KF6oMw2.png" alt="final result" width="500" />
> final note: not all properties are inherited so here is a reference of all inherited properties in css [Inherited Properties In CSS](https://stackoverflow.com/questions/5612302/which-css-properties-are-inherited/#answer-5612360)

---

## Specificity in CSS

as you know in css before apply any properties you have to select the element, to select elements you have many methods like select by **id**, **class**, **tagName**, **attributes** or we can style it directly by inline style, but if you have select the element from two palces and you have changed color of the element in both palces which one will applie.
like :

> **index.html**
<img src="https://i.imgur.com/0G0bfyj.png" alt="final result" width="500" />

> **index.css**
<img src="https://i.imgur.com/kUjtBA6.png" alt="final result" width="500" />

> **Final Result**
<img src="https://i.imgur.com/EdeP2jN.png" alt="final result" width="500" />

so why css applied the second one?, because select by id is stronger than select by class.

### Comprehensive Image
<img src="https://cms-assets.tutsplus.com/uploads/users/30/posts/34141/image/spec-01.svg" alt="final result" width="800" />

---

## Colors in CSS

first of all before we dive into colors in CSS let us know how the computer deal with colors in simple way.
computer deals with colors using three main colors **green**, **blue** and **yellow** (aka:RGB), computer mixed these three colors togother to get the required color using range for each one and this range starts from 0 to 255 like:
| COLOR | (RED, GREEN, BLUE) | NOTES |
|---|---|---|
| BLACK | (0, 0, 0) | darkness one |
| WHITE | (255, 255, 255) ||
| RED | (255, 0, 0) |pure red|
| YELLOW | (255, 255, 0) |pure yellow|
| BLUE | (0, 0, 255) | pure yellow|
| GREEN | (0, 255, 0) | pure green|

### CSS provides alot of methods to introduce colors Like:

- Named Colors.
- Using **RGB** method.
- Using **HEX** Colors.

### 1 - Named Colors:

you can introduce the colors in css using the name of the color like **green**, **blue**, **yellow** ..etc Like.
<img src="https://i.imgur.com/rm4dLum.png" alt="final result" width="500" />

and it's the most intuitive one if you want red color just insert his name.

### 2 - RGB:

as we said before computers use three colors to represent all colors in the world so CSS provide a method to mix between these colors called `rgb`, `rgba` ( to introduce transparent) while `a is alpha` and represent ```alpha``` in values from 0 to 1 some examples:
| COLOR | (RED, GREEN, BLUE) | NOTES |
|---|---|---|
| BLACK | rgb(0, 0, 0) | darkness one |
| WHITE | rgb(255, 255, 255) ||
| RED | rgb(255, 0, 0) |pure red|
| YELLOW | rgb(255, 255, 0) |pure yellow|
| BLUE | rgb(0, 0, 255) | pure yellow|
| GREEN | rgb(0, 255, 0) | pure green|
| LIGHT GREEN | rgba(0, 255, 0, .5) | pure green with alpha equal .5|

### 2 - HEX:

we now know computers use three colors to represent any color in the universe, there are many ways to represent these three colors one of them was normal number decimal number and there is another one using hex decimal number

> if you don't know how to convert decimal to hex-decimal this section will be hard to you to understand so don't feel like a fool in this section 🙂.

| COLOR  | #HEXNUMBER | NOTES        |
| ------ | ---------- | ------------ |
| BLACK  | #000000    | darkness one |
| WHITE  | #111111    |              |
| RED    | #ff0000    | pure red     |
| YELLOW | #ffff00    | pure yellow  |
| BLUE   | #0000ff    | pure yellow  |
| GREEN  | #00ff00    | pure green   |

### Related Subjects:

- [Hex-Decimal colors](https://www.mathsisfun.com/hexadecimal-decimal-colors.html)
- [Colors in computers](http://markfairchild.org/WhyIsColor/Questions/4-5.html)
- [HEX and decimal](https://www.rapidtables.com/convert/number/hex-to-decimal.html)
- [Cascading in css](http://css.maxdesign.com.au/selectutorial/advanced_cascade.html)
- [Inheritance in css](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance)
- [Comments](<https://en.wikipedia.org/wiki/Comment_(computer_programming)>)
- [Why Comments](https://wiki.c2.com/?CommentCostsAndBenefits)
- [MDN for developers](https://developer.mozilla.org/en-US/docs/Web)
