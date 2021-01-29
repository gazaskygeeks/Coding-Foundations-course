# Types of CSS Styles:

If you have a web page that contains alot of HTML elements and you wanna give it a great-looking using **CSS**, _how you can do that?_

**There are three ways to do that:**

**<span>1- Inline styles:</span>** used to apply a unique style to a specific HTML element, you’ll only need to add the style attribute to the HTML tag, for example:

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
    <link rel="stylesheet" href="fileNAme.css" />
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
