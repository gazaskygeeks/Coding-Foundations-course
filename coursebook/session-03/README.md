# <span style="color: #34495e">Session 3: CSS-01</span>

<h2 style="color: #34495e">
Menu
</h2>

- [Learning Outcomes](./learning-outcomes.md)
- [Research](./research-topics.md)
- [Resources](./resources.md)

---

<h2 style="color: #34495e">
What is CSS?
</h2>

_<span style='color: #7f8c8d; font-weight: bold'>CSS</span>_ stands for **_Cascading Style Sheets,_** it allows you to style/design your web pages by describes how HTML elements are to be displayed.

---

<h2 style="color: #34495e">
CSS Syntax:
</h2>

A set of rules that consists of a selector and a declaration(s).

```CSS
selector {
  property: value;
  property: value;
  property: value;
}
```

- The property with the value called a declaration:

 <div style="text-align:center; margin: 30px 0;">
 <img  src="https://4.bp.blogspot.com/-nrJqxDUMAL4/ViCjLDQoG8I/AAAAAAAAAK0/O7Zmg3wLWqE/s1600/css-syntax.gif" /></div>
 
 
* All declarations for the same selector called declaration block.

 <div style="text-align:center; margin: 30px 0;">
 <img  src="https://www.littlewebhut.com/images/css_declaration.gif" /></div>
 
***

<h2 style="color: #34495e">
CSS Selectors:
</h2>

part of the _<span style='color: #7f8c8d; font-weight: bold'>CSS Syntax</span>_, that use to select the element which you need to apply the style on it.

We have a lot of _<span style='color: #7f8c8d; font-weight: bold'>CSS</span>_ selector but in this workshop we will talk about the basic _<span style='color: #7f8c8d; font-weight: bold'>CSS</span>_ selectors.

### Basic CSS Selectors:

- Tag
- Id
- Class
- Universal selector

<br/>

- **<span style='color: #30336b'>Tag: </span>** selects the elements which has the same tag name, [Example](https://codepen.io/fares98/pen/GRJWqmJ).

- **<span style='color: #30336b'>#id: </span>** selects the elements which have the same id name, [Example](https://codepen.io/fares98/pen/PoqpzKN).

* **<span style='color: #30336b'>.class: </span>** selects the elements which have the same class name, [Example](https://codepen.io/fares98/pen/oNXZLGr).

- **<span style='color: #30336b'>\*: </span>** This selector called _'universal'_ and use to select all the elements in the page, [Example](https://codepen.io/fares98/pen/yLNMJvv).

> Read more about the **<span style='color: #7f8c8d; font-weight: bold'>box-sizing</span>** [here](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing).

<br/>

**<span style='color: #30336b'>Descendant Selector:</span>**
sometimes you need to access selectors that be inside other selectors(not single selectors as the previous examples), in this cases you need to use the _Descendant Selector_, you can use it by adding a `space` between the selectors, [Example](https://codepen.io/fares98/pen/poJeEJO).

**<span style='color: #30336b'>Grouping Selectors:</span>**
_you can add the same style for many selectors, you just need to separate between them with commas,for example:_

```CSS
h4, h6, p, section {
  color: blue;
  font-size: 25px;
  text-align: center;
}
```

**Simple Exercise for the CSS selectors** [here](https://codepen.io/fares98/pen/WNvxbKG?editors=1000)

---

<h2 style="color: #34495e">
Types of CSS Styles:
</h2>

If you have a web page that contains alot of HTML elements and you wanna give it a great-looking using _<span style='color: #7f8c8d; font-weight: bold'>CSS</span>_ , how you can do that?

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

> **<span style='color: #7f8c8d; font-weight: bold'>NOTE:</span>** This _<span style='color: #7f8c8d; font-weight: bold'>CSS</span>_ type is not really recommended, as each HTML tag needs to be styled individually. Managing your website may become too hard if you only use inline _<span style='color: #7f8c8d; font-weight: bold'>CSS</span>_, but you can use it if you wanna make a quick change of style where you don't wanna reusable it.

<br />

Imagine that you have 100 elements with the same style and you want to change the color for all of these elements, in this case, you'll need to change each element individually and you'll need a lot of time and hard work, so, what's the solution?

**<span style='color: #30336b'>2- Internal/Embedded Styles:</span>** used by adding `<style>` tag in the `<head>` section of your HTML document, you can configure _<span style='color: #7f8c8d; font-weight: bold'>CSS</span>_ classes and IDs that can be used to style multiple elements in the same page, For example:

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

**<span style='color: #30336b'>3- External/linked/remote styles: </span>** used by a link placed in the `<head>` section for your web page, the href attribute for this link is the path for your _<span style='color: #7f8c8d; font-weight: bold'>CSS</span>_ file which contains your styles rule, For example:

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

> But don't forget that every page of your site should contain the link to the external _<span style='color: #7f8c8d; font-weight: bold'>CSS</span>_ file.

<br />

**Now, after getting knowledge of the types for making a style, what the best way that we preferred to use and why?**

\*The best way to styling the page is external styles, but **\*why?\*\***

There are alot of advantage to use this type, the most important advantages are:

- HTML was never intended formatting a web page, HTML was created to describe the content of a web page.

- Saves a lot of work, especially for styling a large website, so you can control the layout of multiple web pages all at once.

---

<h2 style="color: #34495e">
CSS Pseudo-class
</h2>

The **<span style='color: #7f8c8d; font-weight: bold'>CSS Pseudo-class</span>** is a keyword with a colon preceding it,
added to a selector and used to define the special state of the selected selector.

**_Syntax:_**

```CSS
selector:pseudo-class {
  property:value;
}
```

**There are many <span style='color: #7f8c8d; font-weight: bold'>Pseudo-class</span> in <span style='color: #7f8c8d; font-weight: bold'>CSS</span> but in this workshop, we will talk about the most used are as follows:**

### Basic Pseudo-classes

- hover
- checked
- enabled
- disabled
- first-child
- last-child
- nth-child(n)

* **<span style='color: #30336b'>:hover Pseudo-class: </span>** used to apply style on the selected element after the user hovers the cursor over this element, [Example](https://codepen.io/fares98/pen/qBdRovE).

- **<span style='color: #30336b'>:checked Pseudo-class: </span>** matches the checked selector (used for: radio button, checkbox button, and option element only), [Example](https://codepen.io/fares98/pen/ExjZEBq).

> Read more about the **<span style='color: #7f8c8d; font-weight: bold'>Attribute selectors</span>** (The selector that used in the example) [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

<br />

- **<span style='color: #30336b'>:enabled Pseudo-class: </span>** matches the enabled selector (the selectors that you can take an action on it, mostly with inputs), this value is the default value for the inputs.

- **<span style='color: #30336b'>:disabled Pseudo-class: </span>** matches the disabled selector (not enable: the selectors that you can't take any action on it, mostly with inputs ), [Example](https://codepen.io/fares98/pen/GRJrdWO).

* **<span style='color: #30336b'>:first-child Pseudo-class: </span>** matches the first selector in the same parent, [Example](https://codepen.io/fares98/pen/RwPKyQx).

- **<span style='color: #30336b'>:last-child Pseudo-class: </span>** matches the last selector in the same parent, [Example](https://codepen.io/fares98/pen/dyoNKOK).

> **sometimes you need access to an element, but not the first or last element, maybe the second, the third, or the fourth ...etc. How you can do it?**

- **<span style='color: #30336b'>:nth-child(n) Pseudo-class: </span>** take an argument(n) and matches the selector that is the nth-child, [Example](https://codepen.io/fares98/pen/abOpKBL).

> The **<span style='color: #7f8c8d; font-weight: bold'>:nth-child(n)</span>** not only take a number, you can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)

<br />

**_We just talked about the basic pseudo class, if you interested you can read more [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)_**

---

<h2 style="color: #34495e">
CSS Pseudo-elements
</h2>

The **<span style='color: #7f8c8d; font-weight: bold'>CSS pseudo-element</span>** is a keyword with two colons preceding it to differentiate them from pseudo-classes, added to a selector and lets you style a specific part of the selected element.

**_Syntax:_**

```CSS
selector::pseudo-element {
  property:value;
}
```

**We have only five <span style='color: #7f8c8d; font-weight: bold'>pseudo-element</span> in CSS, follow to learn it:**

### All Pseudo-element:

- first-letter
- first-line
- selection
- after
- before

* **<span style='color: #30336b'>::first-letter Pseudo-element: </span>** apply styles to the first letter in the element selected, [Example](https://codepen.io/fares98/pen/RwPKyBQ).

- **<span style='color: #30336b'>::first-line Pseudo-element: </span>** apply styles to the first line in the element selected, [Example](https://codepen.io/fares98/pen/PoqWeyd).

* **<span style='color: #30336b'>::selection Pseudo-element: </span>** apply styles to the part of an element that has been highlighted by a user, it's great for matching user-selected text to your site color scheme, [Example](https://codepen.io/fares98/pen/WNvRJPB).

- **Other Example**
  <div style="text-align:center; margin: 30px 0;">
  <img  src="https://nicolasjengler.github.io/life-after-modern-layout-properties/images/text-selection.gif" /></div>

* **<span style='color: #30336b'>::after Pseudo-element: </span>** used to insert `content` after the content of an element without it needing to be in the `HTML`, [Example](https://codepen.io/fares98/pen/LYVxrPO).

- **<span style='color: #30336b'>::before Pseudo-element: </span>** used to insert `content` before the content of an element without it needing to be in the `HTML`, [Example](https://codepen.io/fares98/pen/GRJrGJw).

**Notes:**

- The (after, before) pseudo elements should contain the "content" property.
- The content prop may be empty, string, or image, you can read more about it [here](https://css-tricks.com/almanac/selectors/a/after-and-before/)
- using `after` you can make a style not insert text only
- the result appears as a Dom element but actually it's not a Dom element.
- It is inline by default.

---

<h2 style="color: #34495e">
What's the difference between the Pseudo-classes & Pseudo-elements?
</h2>

| Pseudo-classes                                                                         | Pseudo-elements                                            |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| sets style properties for an element when the element is in a particular special state | styled some specific parts of the elements.                |
| use to style element that already finds in the HTML elements                           | use to create elements that not found in the HTML elements |

<br />
<br />

**Finally**: Can we combine Pseudo-classes and Pseudo-element, Why not?

You can combine between it by this syntax:

```CSS
selector:pseudo-class::pseudo-element{
  property: value;
  property: value;
  property: value;
}
```

**_Try it_**

**The Exercise >>** [here](./exercise.md)
