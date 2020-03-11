
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