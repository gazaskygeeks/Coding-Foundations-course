
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

we use ```font-family``` to determine the [typeface](https://www.mentalfloss.com/article/82867/whats-difference-between-font-and-typeface) of text, we can use built-in (Generic Family) typeface or get a new one from [Google Fonts](https://fonts.google.com) like
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
what if you have selected not avaliable font? , then css will used another font which is called fallback font.
Like:

<img src="https://i.imgur.com/J5JgbB0.png" alt="final result" width="700" />


CSS here will try to use ```Cairo```, if ```Cairo``` is not exists then CSS will try to use ```sans-serif```, if ```sans-serif``` is not exists then CSS will use ```Courier New``` ...etc
> Default fallback font Times New Roman
