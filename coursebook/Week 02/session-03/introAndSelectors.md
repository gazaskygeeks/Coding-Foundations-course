# CSS Intro & CSS Selectors

<h2 style="color: #34495e">
What is CSS?
</h2>

**C**ascading **S**tyle **S**heets (CSS) is defines how HTML elements are to be displayed. It's manage the layouts, colors and fonts of your website elements.

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

[![](https://i.imgur.com/zUq6gi2.png)](https://codepen.io/fares98/pen/GRJWqmJ)

- **#id:** selects the elements which have the same id name, for example:

```CSS
#id-1{
  font-size: 20px;
  border: 2px solid blue;
}
```

_In this example:_ this style will be applied to the element which has id `id`

[![](https://i.imgur.com/zUq6gi2.png)](https://codepen.io/fares98/pen/PoqpzKN)

- **.class:** selects the elements which have the same class name, for example:

```CSS
.class-1{
  font-weight: bold;
  color: darkblue;
}
```

_In this example:_ this style will be applied to all the elements which have the `class-1` class in your page.

[![](https://i.imgur.com/zUq6gi2.png)](https://codepen.io/fares98/pen/oNXZLGr)

- **\*:** This selector called _'universal'_ and use to select all the elements in the page, for example:

```CSS
*{
  margin: 10px;
  font-weight: bold;
  color: darkblue;
  box-sizing: border-box;
}
```

_In this example:_ this style will be applied to `all` the elements in your page.

[![](https://i.imgur.com/zUq6gi2.png)](https://codepen.io/fares98/pen/yLNMJvv)

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

[![](https://i.imgur.com/zUq6gi2.png)](https://codepen.io/fares98/pen/poJeEJO)

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
