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

**C**ascading **S**tyle **S**heets (CSS) is a markup language responsible for how your web pages will look like. It controls the colors, fonts, and layouts of your website elements.

This style sheet language also allows you to add effects or animations to your website. You can use it to display some CSS animations like click button effects, spinners or loaders, and animated backgrounds.

---

<h2 style="color: #34495e">
CSS Syntax:
</h2>

### What is a rule or "rule set"?

A rule or "rule set" is a statement that tells browsers how to render particular elements on an HTML page. A rule set consists of a selector followed by a declaration block.

```CSS
selector {
  property: value;
  property: value;
  property: value;
}
```

- The property with the value called a declaration OR Rule structure:

 <div style="text-align:center; margin: 30px 0;">
 <img  src="https://4.bp.blogspot.com/-nrJqxDUMAL4/ViCjLDQoG8I/AAAAAAAAAK0/O7Zmg3wLWqE/s1600/css-syntax.gif" /></div>
 
 
- All declarations for the same selector called declaration block.

 <div style="text-align:center; margin: 30px 0;">
 <img  src="https://www.littlewebhut.com/images/css_declaration.gif" /></div>

---

<h2 style="color: #34495e">
CSS Selectors:
</h2>

part of the **_CSS Syntax_**, that use to select the element which you need to apply the style on it.

We have a lot of CSS selector but in this workshop we will talk about the basic CSS selectors.

### Basic CSS Selectors:

- Tag
- Id
- Class
- Universal selector

<br/>

**Tag:** selects the elements which has the same tag name, for example:

```CSS
p {
  color: blue;
}
```

_In this example:_ this style will be applied to all the `p` elements in your page.

- **#id:** selects the elements which have the same id name, for example:

```CSS
#id-1 {
  background-color: black;
}
```

_In this example:_ this style will be applied to the element which has id `id`

- **.class:** selects the elements which have the same class name, for example:

```CSS
.class-1 {
  border: 2px solid red;
}
```

_In this example:_ this style will be applied to all the elements which have the `class-1` class in your page.

- **\*:** This selector called _'universal'_ and use to select all the elements in the page, for example:

```CSS
* {
  box-sizing: border-box;
}
```

_In this example:_ this style will be applied to `all` the elements in your page.

<br/>

**Descendant Selector:**
sometimes you need to access selectors that be inside other selectors(not single selectors as the previous examples), in this cases you need to use the _Descendant Selector_, you can use it by adding a `space` between the selectors, for example:

```CSS
section p {
  border: 2px solid red;
  text-align: center;
  font-weight: bold;
}
```

_In this example:_ this style will be applied on all p elements which be inside a section element (direct child and not direct child).

**HTML Example for the direct child and not direct child:**

```HTML
<!-- This p is a direct child for the section -->
<section>
  <p>This paragraph is inside the section</p>
</section>

<!-- This p is not a direct child for the section but it is a direct child for the article -->
<section>
  <article>
    <p>This paragraph is inside an article which is inside a section</p>
  </article>
</section>
```

**Grouping Selectors:**
_you can add the same style for many selectors, you just need to separate between them with commas, for example:_

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

If you have a web page that contains alot of HTML elements and you wanna give it a great-looking using **CSS**, _how you can do that?_

**There are three ways to do that:**

**<span style='color: #30336b'>1- Inline styles:</span>** used to apply a unique style to a specific HTML element, you’ll only need to add the style attribute to the HTML tag, for example:

```HTML
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

> **NOTE:** This `CSS` type is not really recommended, as each `HTML` tag needs to be styled individually. Managing your website may become too hard if you only use inline `CSS`, but you can use it if you wanna make a quick change of style where you don't wanna reusable it.

<br />

Imagine that you have 100 elements with the same style and you want to change the color for all of these elements, in this case, you'll need to change each element individually and you'll need a lot of time and hard work, so, what's the solution?

**2- Internal/Embedded Styles:** used by adding `<style>` tag in the `<head>` section of your HTML document, you can configure `CSS` classes and IDs that can be used to style multiple elements in the same page, for example:

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

**3- External/linked/remote styles:** used by a link placed in the `<head>` section for your web page, the href attribute for this link is the path for your _CSS_ file which contains your styles rule, For example:

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

> But don't forget that every page of your site should contain the link to the external `CSS` file.

<br />

**Now, after getting knowledge of the types for making a style, what the best way that we preferred to use and why?**

The best way to styling the page is external styles, but **_why?_**

There are alot of advantage to use this type, the most important advantages are:

- HTML was never intended formatting a web page, HTML was created to describe the content of a web page.

- Saves a lot of work, especially for styling a large website, so you can control the layout of multiple web pages all at once.

---

<h2 style="color: #34495e">
CSS Pseudo-class
</h2>

The **CSS Pseudo-class** is a keyword with a colon preceding it,
added to a selector and used to define the special state of the selected selector.

**Syntax:**

```CSS
selector:pseudo-class {
  property:value;
}
```

**There are many _Pseudo-class_ in _CSS_ but in this workshop, we will talk about the most used are as follows:**

### Basic Pseudo-classes

- hover
- checked
- enabled
- disabled
- first-child
- last-child
- nth-child(n)

* **:hover Pseudo-class:** used to apply style on the selected element after the user hovers the cursor over this element, for example:

```CSS
h1:hover {
  color: white;
  background-color: black;
}
```

_In this example:_ when you `hove` the cursor over the specified element, the color will change to white and the background-color will change to black.

- **:checked Pseudo-class:** matches the checked selector (used for: radio button, checkbox button, and option element only), for example:

```CSS
input[type="checkbox"]:checked {
  margin-left: 30px;
}
```

_In this example:_ if any input with checkbox type was `Checked` or if the user clicked any `checkbox input`, this input will move 30px to the right.

> Read more about the **Attribute selectors** (The selector that used in the example) [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

<br />

- **:enabled Pseudo-class:** matches the enabled selector (the selectors that you can take an action on it, mostly with inputs), for example:

```CSS
input[type="text"]:enabled {
  background-color: gray;
  font-weight: bold;
}
```

_In this example:_ if any input with text type was `Enabled` will be with a gray background.

- **:disabled Pseudo-class:** matches the disabled selector (not enable: the selectors that you can't take any action on it, mostly with inputs ), for example:

```CSS
input[type="text"]:disabled {
  background-color: red
}
```

_In this example:_ if any input with text type was `Disabled` will be with a red background.

- **:first-child Pseudo-class:** matches the first selector in the same parent, for example:

```CSS
h1:first-child {
  border: 1px solid red;
}
```

_In this example:_ this style will be applied to every first `h1` element in the same parent.

- **:last-child Pseudo-class:** matches the last selector in the same parent, for example:

```CSS
.class-1:last-child {
  background-color: blue;
}
```

_In this example:_ this style will be applied to every last element that has the `class-1` class in the same parent.

> **sometimes you need access to an element, but not the first or last element, maybe the second, the third, or the fourth ...etc. How you can do it?**

- **:nth-child(n) Pseudo-class:** take an argument(n) and matches the selector that is the nth-child, for example:

```CSS
p:nth-child(3) {
  border: 1px solid red;
}
```

_In this example:_ this style will be applied to every `p` element that is the `Third` element in the same parent.

<br />

> The **:nth-child(n)** not only take a number, you can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)

<br />

**We just talked about the basic pseudo class, if you interested you can read more [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)**

---

<h2 style="color: #34495e">
CSS Pseudo-elements
</h2>

The **CSS pseudo-element** is a keyword with two colons preceding it to differentiate them from pseudo-classes, added to a selector and lets you style a specific part of the selected element.

**_Syntax:_**

```CSS
selector::pseudo-element {
  property:value;
}
```

**We have only five _pseudo-element_ in CSS, follow to learn it:**

### All Pseudo-element:

- first-letter
- first-line
- selection
- after
- before

* **::first-letter Pseudo-element:** apply styles to the first letter in the element selected.

```CSS
p::first-letter{
  font-size: 25px;
  font-weight: bold;
}
```

_In this example:_ this style will be applied to the `first-letter` within every `p` element on your page.

- **::first-line Pseudo-element:** apply styles to the first line in the element selected.

```CSS
h3::first-line{
  font-weight: bold;
  font-size: 20px;
  color: blue;
}
```

_In this example:_ this style will be applied to the `first-line` within every `h3` element on your page.

- **::selection Pseudo-element:** apply styles to the part of an element that has been highlighted by a user, it's great for matching user-selected text to your site color scheme.

```CSS
p::selection{
  color: black;
  background-color: yellow
}
```

_In this example:_ this style will be applied to the part that you `selected` in all `p` elements on your page.

- **Other Examples**
  <div style="text-align:center; margin: 30px 0;">
  <img  src="https://nicolasjengler.github.io/life-after-modern-layout-properties/images/text-selection.gif" /></div>

* **::after Pseudo-element:** used to insert `content` before the content of an element without it needing to be in the `HTML`, for example:

```CSS
h3::after{
  content: 'Hello from CSS';
  color: red;
}
```

_In this example:_ you will see `Hello from CSS` `after` every `h3` element in your page.

- **::before Pseudo-element:** used to insert `content` before the content of an element without it needing to be in the `HTML`, for example:

```CSS
p::before{
  content:'';
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: blue;
  border-radius: 50%;
  margin-right: 5px;
}
```

_In this example:_ you will see `blue circle` `before` every `p` element in your page.

**Notes:**

- This Pseudo element should contain the "content" property.
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
