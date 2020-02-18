# <span style="color: #CC4125">Session</span> 3: CSS-01

<h2 style="color: #CC4125">
What is CSS?
</h2>

_<span style='color: #d35400; font-weight: bold'>CSS</span>_ stands for **_Cascading Style Sheets,_** it allows you to style/design your web pages by describes how HTML elements are to be displayed.

**_Morning challenge:_** [Simple Example](https://codepen.io/fares98/pen/WNvxbKG?editors=1000)

---

<h2 style="color: #CC4125">
CSS Syntax:
</h2>

A set of rules that consists of a selector and a declaration block.

```CSS
selector {
  property: value;
  property: value;
  property: value;
}
```

**For Example:**

```CSS
h3 {
  color: blue;
  font-size: 25px;
  text-align: center;
}
```

- The property with the value called a declaration:

```CSS
 text-align: center;
```

![](https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/CSS-selectors/css-selectors.jpg)

- All the declarations for the same selector called declaration block.

```CSS
{
  color: blue;
  font-size: 25px;
  text-align: center;
}
```

 <div style="text-align:center; margin: 30px 0;">
 <img  src="https://www.littlewebhut.com/images/css_declaration.gif" /></div>

**<span style='color: #30336b'>Grouping Selectors:</span>**
_you can add the same style for many selectors, you just need to separate between them with commas,For example:._

```CSS
h4, h6, p, section {
  color: blue;
  font-size: 25px;
  text-align: center;
}
```

---

<h2 style="color: #CC4125">
CSS Selectors:
</h2>

part of the _<span style='color: #d35400; font-weight: bold'>CSS Syntax</span>_, that use to select the element which you need to apply the style on it.

**We have a lot of _<span style='color: #d35400; font-weight: bold'>CSS</span>_ selector but in this workshop we will talk about the basic _<span style='color: #d35400; font-weight: bold'>CSS</span>_ selectors.**

- **<span style='color: #30336b'>element: </span>** selects the elements which has the same name, For example:

```CSS
p {
  color: blue;
}
```

_In this example:_ this style will be applied to all the **<span style='color: #d35400; font-weight: bold'>p</span>** elements in your page.

- **<span style='color: #30336b'>#id: </span>** selects the elements which have the same id name, For example:

```CSS
#id-1 {
  background-color: black;
}
```

_In this example:_ this style will be applied to all the elements which have the **<span style='color: #d35400; font-weight: bold'>id-1</span>** id in your page.

- **<span style='color: #30336b'>.class: </span>** selects the elements which have the same class name, For example:

```CSS
.class-1 {
  border: 2px solid red;
}
```

_In this example:_ this style will be applied to all the elements which have the **<span style='color: #d35400; font-weight: bold'>class-1</span>** class in your page.

- **<span style='color: #30336b'>\*: </span>** This selector called _'universal'_ and use to select all the elements in the page, For example:

```CSS
* {
  box-sizing: border-box;
}
```

_In this example:_ this style will be applied to **<span style='color: #d35400; font-weight: bold'>all</span>** the elements in your page.

> Read more about the **<span style='color: #d35400; font-weight: bold'>box-sizing</span>** [here](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing).

<br/>

---

<h2 style="color: #CC4125">
Types of CSS Styles:
</h2>

If you have a web page that contains alot of HTML elements and you wanna give it a great-looking using _<span style='color: #d35400; font-weight: bold'>CSS</span>_ , how you can do that?

**There are three ways to do that:**

**<span style='color: #30336b'>1- Inline styles:</span>** used to apply a unique style to a specific HTML element, you’ll only need to add the style attribute to the HTML tag, For example:

```HTml
    <section style="border: 5px solid black">
      <p style="color: white; background-color: black; text-align: center">
        Paragraph 1
      </p>

      <p style="color: white; background-color: black; text-align: center">
        Paragraph 2
      </p>

      <p style="color: white; background-color: black; text-align: center">
        Paragraph 3
      </p>

      <p style="color: white; background-color: black; text-align: center">
        Paragraph 4
      </p>
    </section>
```

> **<span style='color: #d35400; font-weight: bold'>NOTE:</span>** This _<span style='color: #d35400; font-weight: bold'>CSS</span>_ type is not really recommended, as each HTML tag needs to be styled individually. Managing your website may become too hard if you only use inline _<span style='color: #d35400; font-weight: bold'>CSS</span>_, but you can use it if you wanna make a quick change of style where you don't wanna reusable it.

<br />

Imagine that you have 100 elements with the same style and you want to change the color for all of these elements, in this case, you'll need to change each element individually and you'll need a lot of time and hard work, so, what's the solution?

**<span style='color: #30336b'>2- Internal/Embedded Styles:</span>** used by adding `<style>` tag in the `<head>` section of your HTML document, you can configure _<span style='color: #d35400; font-weight: bold'>CSS</span>_ classes and IDs that can be used to style multiple elements in the same page, For example:

```HTML
  <head>
    ...elements
    <style>
      .text-container {
        border: 5px solid black;
      }

      .text {
        color: white;
        background-color: black;
        text-align: center;
      }
    </style>
  </head>

  <body>
    <section class="text-container">
      <p class="text">
        Paragraph 1
      </p>

      <p class="text">
        Paragraph 2
      </p>

      <p class="text">
        Paragraph 3
      </p>

      <p class="text">
        Paragraph 4
      </p>
    </section>
  </body>
```

After using this type, your previous problem solved, you have become able to edit many elements(that have the same selector) from one line on the same page, but now there is another problem if you have more than one page and there are mutual elements between these pages, are you going to edit all the pages? also, this needs a lot of time and hard work, so, what’s the solution?

**<span style='color: #30336b'>3- External/linked/remote styles: </span>** used by a link placed in the `<head>` section for your web page, the href attribute for this link is the path for your _<span style='color: #d35400; font-weight: bold'>CSS</span>_ file which contains your styles rule, For example:

```HTML
  <head>
    ...elements
    <link rel="stylesheet" href="./fileNAme.css" />
  </head>

  <body>
    <section class="text-container">
      <p class="text">
        Paragraph 1
      </p>

      <p class="text">
        Paragraph 2
      </p>

      <p class="text">
        Paragraph 3
      </p>

      <p class="text">
        Paragraph 4
      </p>
    </section>
  </body>
```

**CSS file:**

```CSS
.text-container {
border: 5px solid black;
}

.text {
color: white;
background-color: black;
text-align: center;
}

```

Now you have become able to edit many elements(that have the same selector) on many pages from one line on your style file.

<br />

> But don't forget that every page of your site should contain the link to the external _<span style='color: #d35400; font-weight: bold'>CSS</span>_ file.
>
> <br />

**Now, after getting knowledge of the types for making a style, what the best way that we preferred to use and why?**

\*The best way to styling the page is external styles, but **\*why?\*\***

There are alot of advantage to use this type, the most important advantages are:

- HTML was never intended formatting a web page, HTML was created to describe the content of a web page.

- Saves a lot of work, especially for styling a large website, so you can control the layout of multiple web pages all at once.

---

<h2 style="color: #CC4125">
CSS Pseudo-class
</h2>

The **<span style='color: #d35400; font-weight: bold'>CSS Pseudo-class</span>** is a keyword with a colon preceding it,
added to a selector and used to define the special state of the selected selector.

**_Syntax:_**

```CSS
selector:pseudo-class {
  property:value;
}
```

**There are many <span style='color: #d35400; font-weight: bold'>Pseudo-class</span> in <span style='color: #d35400; font-weight: bold'>CSS</span> but in this workshop, we will talk about the most used are as follows:**

- **<span style='color: #30336b'>:hover Pseudo-class: </span>** used to apply style on the selected element after the user hovers the cursor over this element, For example:

```CSS
h1:hover {
  color: white;
  background-color: black;
}
```

_In this example:_ when you **<span style='color: #d35400; font-weight: bold'>hover</span>** the cursor over the specified element, the color will change to white and the background-color will change to black.

- **<span style='color: #30336b'>:checked Pseudo-class: </span>** matches the checked selector (used for: radio button, checkbox button, and option element only), For example:

```CSS
input[type="radio"]:checked {
  display: none;
}
```

_In this example:_ if any input with radio type was **<span style='color: #d35400; font-weight: bold'>Checked</span>** won't appear, or if the user checks the input radio element, this input will hide.

> Read more about the **<span style='color: #d35400; font-weight: bold'>Attribute selectors</span>** (The selector that used in the example) [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

- **<span style='color: #30336b'>:enabled Pseudo-class: </span>** matches the enabled selector (the selectors that you can take an action on it, mostly with inputs), For example:

```CSS
input[type="text"]:enabled {
  background-color: gray
}
```

_In this example:_ if any input with text type was **<span style='color: #d35400; font-weight: bold'>Enabled</span>** will be with a gray background.

- **<span style='color: #30336b'>:disabled Pseudo-class: </span>** matches the disabled selector (not enable: the selectors that you can't take any action on it, mostly with inputs ), For example:

```CSS
input[type="text"]:disabled {
  background-color: red
}
```

_In this example:_ if any input with text type was **<span style='color: #d35400; font-weight: bold'>Disabled</span>** will be with a red background.

- **<span style='color: #30336b'>:first-child Pseudo-class: </span>** matches the first selector in the same parent, For example:

```CSS
h1:first-child {
  border: 1px solid red;
}
```

_In this example:_ this style will be applied to every **<span style='color: #d35400; font-weight: bold'>first h1</span>** element in the same parent.

- **<span style='color: #30336b'>:last-child Pseudo-class: </span>** matches the last selector in the same parent, For example:

```CSS
.class-1:last-child {
  background-color: blue;
}
```

_In this example:_ this style will be applied to every last element that has the **<span style='color: #d35400; font-weight: bold'>.class-1</span>** class in the same parent.

> **sometimes you need access to an element, but not the first or last element, maybe the second, the third, or the fourth ...etc. How you can do it?**

- **<span style='color: #30336b'>:nth-child(n) Pseudo-class: </span>** take an argument(n) and matches the selector that is the nth-child, For example:

```CSS
p:nth-child(3) {
  border: 1px solid red;
}
```

_In this example:_ this style will be applied to every p element that is the **<span style='color: #d35400; font-weight: bold'>Third</span>** element in the same parent.

<br />

> The **<span style='color: #d35400; font-weight: bold'>:nth-child(n)</span>** not only take a number, you can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)

<br />

**_We just talked about the basic pseudo class, if you interested you can read more [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)_**
