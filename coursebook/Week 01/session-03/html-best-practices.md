# HTML Best Practices

HTML best practices help developers offer innovative and highly interactive websites and web apps. These best practices help you develop the most feature-rich and business-centric applications.

**For writing maintainable and scalable HTML documents:**

✅ Start with DOCTYPE

DOCTYPE is required for activating standard mode.

Bad:

```html
<html>
  ...
</html>
```

Good:

```html
<!DOCTYPE html>
<html>
  ...
</html>
```

--------------------------------------------------------------------------------

✅ Don't use character references as much as possible If you write an HTML document with UTF-8, almost all characters (including Emoji) can be write directly.

Bad:

```html
<p><small>Copyright © 2014 W3C<sup>®</sup></small></p>
```

Good:

```html
<p><small>Copyright © 2014 W3C<sup>®</sup></small></p>
```

--------------------------------------------------------------------------------

✅ Put white spaces around comment contents Some character cannot be used immediately after comment open or before comment close.

Bad:

```html
<!--This section is non-normative-->
```

Good:

```html
<!-- This section is non-normative -->
```

--------------------------------------------------------------------------------

✅ Don't put white spaces around tags and attribute values There is no reason for doing this.

Bad:

```html
<h1 class=" title " >HTML Best Practices</h1>
```

Good:

```html
<h1 class="title">HTML Best Practices</h1>
```

--------------------------------------------------------------------------------

✅ Don't mix quotation marks

Bad:

```html
<img alt="HTML Best Practices" src='/img/logo.jpg'>
```

Good:

```html
<img alt="HTML Best Practices" src="/img/logo.jpg">
```

--------------------------------------------------------------------------------

✅ Don't separate attributes with two or more white spaces Your weird formatting rule confuses someone.

Bad:

```html
<input   name="q"  type="search">
```

Good:

```html
<input name="q" type="search">
```

--------------------------------------------------------------------------------

✅ Omit boolean attribute value It's easy to write, isn't it?

Bad:

```html
<audio autoplay="autoplay" src="/audio/theme.mp3">
```

Good:

```html
<audio autoplay src="/audio/theme.mp3">
```
---

✅ Add lang attribute
lang attribute will help translating an HTML document.

Bad:

```html
<html>
```
Good:
```html
<html lang="en-US">
```

---

✅ Specify document character encoding
UTF-8 is not default in all browsers yet.

Bad:

```html
<head>
  <title>HTML Best Practices</title>
</head>
```

Good:

```html
<head>
  <meta charset="UTF-8">
  <title>HTML Best Practices</title>
</head>
```

---

✅ Place figcaption element as first or last child of figure element

Spec disallows `figcaption` element in the middle of `figure` element.

Bad:

```html
<figure>
  <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
  <figcaption>“HTML Best Practices” Cover Art</figcaption>
  <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
</figure>
```

Good:

```html
<figure>
  <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
  <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
  <figcaption>“HTML Best Practices” Cover Art</figcaption>
</figure>
```

---

✅ Use main element
main element can be used wrapping contents.

Bad:

```html
<div id="content">
  ...
</div>
```
Good:
```html
<main>
  ...
</main>
```

---

✅ Avoid div element as much as possible
div element is an element of last resort.

Bad:
```html
<div class="chapter">
  ...
</div>
```

Good:

```html 
<section>
  ...
</section>
```

--- 

✅ Use lowercase markup

Your HTML markup can be written in lowercase or uppercase and the web page will render correctly. However, **it is best practice to keep tag names in lowercase because it is easier to read and maintain**.

---

✅ The `<br>` element is not for layout

Do not use the `<br>` to format your document or to add space between elements.
A rule of thumb here would be that, if it can be formatted by defining margin or padding in CSS, then you should not use `<br>`.