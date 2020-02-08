# Sesion 01: HTML-01
Welcome to the first sesion about HTML, this is going to be a great guide to get you sarted with HTML which is what every web page consists of.

**Learning Outcomes**
- Picking a code editor and get familiar with other tools we will be using in the course 
- Basic understanding of HTML: DOM, Element, Attributes
- Understand the basic file structure for a web page 
- Formatting Page Content with HTML
- Get to know and use some HTML elements: Links, Lists, Tables and more

**Note**: In the end of the workshop we will have 15 mins for a questions so prepare questions fo us.


---


## Setup, Text Editors & Other Tools
To go throgh the course and be able to apply what you learn in the workshops you need to have the following:

- **A Browser**: Chrome (preferred), or Firefox or any modern browser 
- **A Text Editor**: VS Code (preferred), Atom, Sublime Text, Brackets or your prefered choice 

Make sure that you have these two installed before you continue.

**Note**: Through out the course we will use **Codepen** to try out/test some code snippets and these we will share with you so it would be great if you create a Codepen account now.


## What is HTML?
HTML stands for **H**yper **T**ext **M**arkup **L**anguage, HTML is the **standard markup** language for Web pages and HTML elements are the building blocks of HTML pages.

### The History of HTML
HTML was first created by Tim Berners-Lee, Robert Cailliau, and others starting in 1989.

**Hypertext** means that the document contains links that allow the reader to jump to other places in the document or to another document altogether. The latest version is known as HTML5.

A **Markup Language** is a way that computers speak to each other to control how text is processed and presented. To do this HTML uses two things: tags and attributes

Read more: https://html.com/#ixzz6DGtsrDHr


## HTML Elements
As we mentioned in the previous paragraph, **HTML Elements** are the building blocks of a webpage. An HTML element is a **start tag** and an **end tag** with content in between.

```htmlmixed=
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


![](https://ianrmedia.unl.edu/images/resources/html-anatomy.png)

**These are some basic HTML attributes**:
- The href attribute 
HTML links are defined with the <a> tag. The link address is specified in the href attribute:

```htmlmixed=
<a href="https://www.google.com">This is a link</a>
```

- The src Attribute
HTML images are defined with the `<img>`tag. The filename of the image source is specified in the src attribute:

```htmlmixed=
<img src="image.jpg">
```

- The style Attribute
The <span style="color: red">style</span> attribute is used to specify the styling of an element, like color, font, size etc.

```htmlmixed=
<p style="color:red">This is a red paragraph.</p>
```

- The title Attribute
Here, a title attribute is added to the `<p>` element. The value of the title attribute will be displayed as a tooltip when you mouse over the paragraph:

```htmlmixed=
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



![basic html page](https://html.com/wp-content/uploads/html-homepage-layout-demo.webp)

This is how your average HTML page is structured visually.


## Formatting Page Content with HTML
We know now that we can add text to our HTML page using the `<p>` but how can we format this text in HTML

There are many ways of doing that but we will do it using some HTML elements:


| Element | Usage |
| ------- | ----- |
| `<b>`   | Highlight important information|
| `<strong>` |  Similarly to bold, to highlight key text|
|    `<i>`     |   To denote text    |
|    `<em>`     |    Usually used as image captions   |
|    `<mark>`     |   Highlight the background of the text    |
|   `<small>`      |   To shrink the text    |
|     `<strike>`    |  To place a horizontal line across the text     |
|      `<u>`   |   Used for links or text highlights    |
|    `<sub>`     |    Typographical stylistic choice   |
|   `<sup>`      |    Another typographical presentation style|

To use or apply any of these formats on any text you need to just **wrap it** between the opening and closing tags

```htmlmixed=
<p>
    this word is normal but this  <strong> word </strong> is bold
</p>
```

## Links
Ever come across a link in a webpage that took you to another one. these links are HTML links made using the `<a>` tag. In order for this tag to know where it should take the user when they click it we have to give it an `href` attribute.

**Example**

```htmlmixed=
<a href="www.google.com">Click Me</a>
```
**Can you guess where the link would take the user?** As you may have guessed when the user click this link he will be directed to **Google** page

## Images
In today’s modern digital world, images are everything. The `<img>` tag has everything you need to display images on your site.

In order for the image tag to display the image we need to provide it with the path to the image which can be a path for it on your device or a link from the web

```htmlmixed=
<image src="images/image.jpg" alt="some image" />
```


## Lists
We can create different types of lists in HTML and thses two are the most common used:

### Ordered List
The first is an `<ol>`: This is an ordered list of contents. For example:

1. An item
2. Another item
3. Another goes here.

Inside the `<ol>` tag we list each item on the list inside `<li>` `</li>` tags.

For example:
```htmlmixed=
<ol>
<li>An item </li>
<li>Another item </li>
<li>Another goes here </li>
</ol>
```

### Unordered List
The second type of list that you may wish to include is an `<ul>` unordered list. This is better known as a bullet point list and contains no numbers.

An example of this is:

```htmlmixed=
<ul>
<li>This is </li>
<li>An Unordered </li>
<li>List </li>
</ul>
```

## Tables
When drawing a table we must open an element with the `<table>` opening tag. Inside this tag, we structure the table using the table rows, `<tr>`, and cells, `<td>`.

**An example of an HTML table is as follows**:

```htmlmixed=
<table>
    <tr> 
        <td>Row 1 - Column 1</td>  
        <td>Row 1 - Colunm 2 </td>
        <td>Row 1 - Column 3 </td> 
    </tr> 
    <tr> 
        <td>Row 2 - Column 1</td> 
        <td>Row 2 - Column 2</td>  
        <td>Row 2 - Column 3</td> 
    </tr> 
</table>
```


