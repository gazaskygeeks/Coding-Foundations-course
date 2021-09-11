# Before Starting let's refresh our mind and remember some basic and important information in CSS?

- What is CSS?
- Why we use CSS?
- How to link and add CSS to your HTML file!

<hr>

<br>

# CSS Selectors

## What is CSS selectors

**_Selectors_** are what allows you to target specific HTML elements and apply style to them.There are a wide variety of CSS selectors available, allowing for fine-grained precision when selecting elements to style.


<p align="center">
  <img width="450" src="https://user-images.githubusercontent.com/47992412/117127248-8571c680-ada4-11eb-9378-fc33aa43ab9d.png">
</p>

<br>
<br>

> the biggest key to understanding CSS is understanding selectors

### ✧ _First_ , lest see what is the CSS Rule Set (CSS Rules):

**_Rule Set_**: statement that tells browsers how to render particular elements on an HTML page.

<p align="center">
  <img width="450" src="https://user-images.githubusercontent.com/47992412/117206590-b6c9b100-adfb-11eb-8591-b079575a3285.png">
</p>


**Breaking that down...**

- The whole thing is a ➾ **rule set**.
- The curly braces and everything inside is a ➾ **declaration block**.
- The bit before the opening curly brace is a ➾ **_selector_**.
- Each key/value pair, as separated by a colon and ending in a semicolon, is a ➾ **declaration**.
- In those key/value pairs, **the key is a ➾ property** _(or property name)_, and the **value is a ➾ value** _(or property value)_.

  <br><br>

## CSS Selectors List

Selector                | Example             | Use
----------------------- | ------------------- | -------------------------------------------------------------
Tag Selector            | p{}                 | Used to call all p tags
ID Selector             | #para{}             | Used to call that unique element with id para.
Class Selector          | .para{}             | Used to call group of different elements with class para
Tag with Class Selector | p.para{}            | Used to call only p elements with class para
Grouping Selector       | h1, h3, h5{}        | Used to group `<h1>, <h3> <h5>` elements
Attribute Selector      | input[type="radio"] | Used to call an element on the basics of attribute and value.
Universal Selector      | *{}                 | Used to call all elements in web document.

<br>

**Explanation for some Selector:**

- **ID selector**

**ID Selector** is used to call an HTML Element by its _unique_ id name, id selector is called using _HASH ( #)_

```css
#happy {

}
```

> ID selectors are the most powerful type of selector, they _~~beat out~~_ other types of selectors

- **Class Selector**

**Class selectors** are your friend. They are probably the most useful and versatile selectors out there, used to call all html elements with same class name. class is called using _DOT ( .)_,

```css
.module {

}
```

- **Tag Selector**

in Tag Selector, any html element can be accessed in css using their tag name. Tags can be used more than once, so all elements will be called.

```css
h2 {

}
```

- **Attribute Selector**

**Attribute Selector** select an html element based on the attribute name or value. _Brackets []_ are used to write attribute or attribute with value in selector

```css
input[type="text"] {

}
```

--------------------------------------------------------------------------------

<br>

### ✧ Pseudo Class / Selectors

**Pseudo classes** are bolted on to selectors to _specify a state or relation_ to the selector.

⇾ _the form:_

<img width="450" src="https://user-images.githubusercontent.com/47992412/117215666-390ba280-ae07-11eb-9ed2-be2d9a795677.png">


⇾ _examples of usage_

- Links:

  targeting unvisited links, and visited, targeting, you guessed it, visited links, _are the most basic pseudo classes._

```css
a:link {
    color: blue;
}

a:visited {
    color: purple;
}
```

> in this snippet of code, will apply colors to all links in a page depending on whether the user has visited that page before or not

- Dynamic Pseudo Classes:

  the dynamic pseudo classes can be used to **_apply styles_** when something happens to something.

  - **active** ➾ is for when something activated by the user, such as when a link is clicked on.

  - **hover** ➾ is for a when something is passed over by an input from the user, such as when a cursor moves over a link.

  - **focus** ➾ is for when something gains focus, that is when it is selected by, or is ready for, keyboard input.

```css
a:active {
    color: red;
}

a:hover {
    text-decoration: none;
    color: blue;
    background-color: yellow;
}

input:focus, textarea:focus {
    background: #eee;
}
```

<br>

### Some Pseudo classes selector

Selector     | Description
------------ | --------------------------------------------------------------------------------------
:active      | Matches when the user activates (for example clicks on) an element.
:blank       | Matches an `<input>` element whose input value is empty.
:checked     | Matches a radio button or checkbox in the selected state.
:current     | Matches the element, or an ancestor of the element, that is currently being displayed.
:disabled    | Matches user interface elements that are in an disabled state.
:empty       | Matches an element that has no children except optionally white space.
:enabled     | Matches user interface elements that are in an enabled state.
:first       | In Paged Media, matches the first page.
:first-child | Matches an element that is first among its siblings.
:focus       | Matches when an element has focus.
:hover       | Matches when the user hovers over an element.
:read-only   | Matches an element if it is not user-alterable.
:read-write  | Matches an element if it is user-alterable.
:required    | Matches form elements that are required.

<br>

--------------------------------------------------------------------------------

> follow the [link](https://codepen.io/sara219/pen/ZEeELRM) to explain and understand the selectors with a live code!!
