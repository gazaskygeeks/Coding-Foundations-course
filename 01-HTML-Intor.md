# Sesion 01: HTML-01
Welcome to the first session about HTML, this is going to be a great guide to get you started with HTML which is what every web page consists of.

**Learning Outcomes**
- Picking a code editor and get familiar with other tools we will be using in the course 
- Basic understanding of HTML: DOM, Element, Attributes
- Understand the basic file structure for a web page 
- Formatting Page Content with HTML
- Get to know and use some HTML elements: Links, Lists, Tables and more

**Note**: At the end of the workshop we will have 15 mins for questions so prepare questions for us.


---


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

```html=
<p>
    this word is normal but this 
    <strong> word </strong> is bold
</p>
```
**The expected output**:
<p>
    this word is normal but this 
    <strong> word </strong> is bold
</p>


---


> In the following section, you will be introduced to some common HTML elements and we suggest that you try these elements on your own in a **CodePen** 

## Links
Ever come across a link on a webpage that took you to another one. these links are HTML links made using the `<a>` tag. In order for this tag to know where it should take the user when they click it, we have to give it an `href` attribute.

**Example**

```html=
<a href="www.google.com">Click Me</a>
```
**Can you guess where the link would take the user?** As you may have guessed when the user clicks this link he will be directed to **Google** page

**The expected output**:

<a href="www.google.com">Click Me</a>


## Images
In today’s modern digital world, images are everything. The `<img>` tag has everything you need to display images on your site.

In order for the image tag to display the image we need to provide it with the path to the image which can be a path for it on your device or a link from the web

```html=
<img src="images/image.jpg" alt="some image" />
```

**The expected output** is an image displayed with no specific width or height so it should take all the space that it needs (its original size).

<img src="https://images.unsplash.com/photo-1558495122-89ba11e1f697?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" alt="some image" />


## Lists
We can create different types of lists in HTML and these two are the most common used:

### Ordered List
The first is an `<ol>`: This is an ordered list of contents. For example:

1. An item
2. Another item
3. Another goes here.

Inside the `<ol>` tag we list each item on the list inside `<li>` `</li>` tags.

**For example**:
```html=
<ol>
    <li>An item </li>
    <li>Another item </li>
    <li>Another goes here </li>
</ol>
```
**The expected output**
<ol>
    <li>An item </li>
    <li>Another item </li>
    <li>Another goes here </li>
</ol>

### Unordered List
The second type of list that you may wish to include is an `<ul>` unordered list. This is better known as a bullet point list and contains no numbers.

**An example of this**:

```html=
<ul>
    <li>This is </li>
    <li>An Unordered </li>
    <li>List </li>
</ul>
```
**The expected output**
<ul>
    <li>This is</li>
    <li>An Unordered </li>
    <li>List </li>
</ul>

## Tables
When drawing a table we must open an element with the `<table>` opening tag. Inside this tag, we structure the table using the table rows, `<tr>`, and cells, `<td>`.

**An example of an HTML table is as follows**:

```html=
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

There are more additional elements that we can add to a table like the `<th>` which is for the table headings(A head/title for each column).

```html=
<table>
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>John</td>
        <td>Doe</td>
        <td>18</td>
    </tr>
</table>
```

The above HTML code above generates a table with two rows and three columns but the first row is for the table headings 

<table>
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>John</td>
        <td>Doe</td>
        <td>18</td>
    </tr>
</table>

**Hint**: By default, the tables won't have any borders (in modern browsers) but some browsers add borders and some default styles to them.


## Exercise 

Now that you know most of HTML elements that are used in most websites you should be able to make your own page with these elements so here is your task

**Make An HTML Page About Yourself That Contains:**

1. Your name which should be in an `<h1>` tag 
2. A paragraph about yourself using the `<p>` tag and the text formatting tags **at least two** of them
2. An image of you using the `<img>` tag and specify a width and a height for it (150px/150px) and don't forget to add the **alt** attribute to it
3. Make an ordered list about things that you like the most it could be about movies, songs, etc and make sure to give this list a heading using `<h2>` or `<h3>` heading elements
4. Make an unordered list about goals you are looking to achieve sooner or later in your life, make sure to give it a heading like the previous list
6. Each of these lists should include at least 4 items and one nested item under one of the items for example
 <li>
    Hello Song
    <ul>
        <li>By Adel</li>
    </ul>
</li>

7. Make a table about your friends or any other people that has four columns and these columns has a heading (first name, last name, age, nickname) and fill it up with at least **three** data entries


#### Congrats that's it! You have finished the workshop now look at the resources that we used in the workshop to learn more:

https://www.w3schools.com/html/default.asp
https://html.com/
https://www.learn-html.org/
