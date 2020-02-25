## Setup, Text Editors & Other Tools
To go through the course and be able to apply what you learn in the workshops you need to have the following:

- **A Browser**: Chrome (preferred), or Firefox or any modern browser 
- **A Text Editor**: VS Code (preferred), Atom, Sublime Text, Brackets or your preferred choice 

Make sure that you have these two installed before you continue.

**Note**: Throughout the course we will use **Codepen** to try out/test some code snippets and these we will share with you so it would be great if you create a Codepen account now.


## What is HTML?
HTML stands for **H**yper **T**ext **M**arkup **L**anguage, HTML is the **standard markup** language for Web pages and HTML elements are the building blocks of HTML pages.

### The History of HTML
HTML was first created by Tim Berners-Lee, Robert Cailliau, and others starting in 1989.

**Hypertext** means that the document contains links that allow the reader to jump to other places in the document or to another document altogether. The latest version is known as HTML5.

A **Markup Language** is a way that computers speak to each other to control how text is processed and presented. To do this HTML uses two things: tags and attributes

Read more: https://html.com/#ixzz6DGtsrDHr


## HTML Elements
As we mentioned in the previous paragraph, **HTML Elements** are the building blocks of a webpage. An HTML element is a **start tag** and an **end tag** with content in between.

```html=
<h1> Hello World </h1>
```

This is an example of an HTML element which represents a big heading as you can see the starter tag is `<h1>` and the end tag is `</h1>` and the content `hello world` goes between them.



![](https://www.bluekatanasoft.com/wp-content/uploads/element-structure.png)


**The basic elements of an HTML page are**:

- A text header, denoted using the `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` tags.
- A paragraph, denoted using the `<p>` tag.
- A horizontal ruler, denoted using the `<hr>` tag.
- A link, denoted using the `<a>` (anchor) tag.
- A list, denoted using the `<ul>` (unordered list), `<ol>` (ordered list) and `<li>` (list element) tags.
- An image, denoted using the `<img>` tag
- A divider, denoted using the `<div>` tag
- A text span, denoted using the `<span>` tag


## HTML Attributes
HTML elements can have attributes, **Attributes** provide additional information about the element, Attributes come in **name/value pairs** like **charset="utf-8"**


![](https://i.imgur.com/6Ux4eE0.jpg)


**These are some basic HTML attributes**:
- The **href** attribute 
HTML links are defined with the <a> tag. The link address is specified in the href attribute:

```html=
<a href="https://www.google.com">This is a link</a>
```

- The **src** Attribute
HTML images are defined with the `<img>`tag. The filename of the image source is specified in the src attribute:

```html=
<img src="image.jpg">
```

- The **style** Attribute
The *style* attribute is used to specify the styling of an element, like color, font, size etc.

```html=
<p style="color:red">This is a red paragraph.</p>
```

- The **title** Attribute
Here, a title attribute is added to the `<p>` element. The value of the title attribute will be displayed as a tooltip when you mouse over the paragraph:

```html=
<p title="This is a tooltip">
    This is a paragraph.
</p>
```


For a full reference about HTML attributes visit:
https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes


## The HTML DOM
When a web page is loaded, the browser creates a **D**ocument **O**bject **M**odel of the page. With the HTML DOM, **JavaScript** can access and change all the elements of an HTML document.

**The HTML DOM model is constructed as a tree of Objects:**

![image of the dom](https://www.w3schools.com/js/pic_htmltree.gif)

From W3school https://www.w3schools.com/js/js_htmldom.asp

We will learn more about the HTML DOM later in the course but its good to know what is it from now.


## Basic HTML Structure For Web Page 
Here are the tags that pretty much any HTML page should have:

- `<!DOCTYPE html>`: This tag specifies the language you will write on the page. In this case, the language is HTML 5.

- `<html>`: This tag signals that from here on we are going to write in HTML code.

- `<head>`: This is where all the metadata for the page goes — stuff mostly meant for search engines and other computer programs.

- `<body>`: This is where the content of the page goes.



![](https://i.imgur.com/cWDj15R.jpg)

This is how your average HTML page is structured visually.
