# A friendly web development tutorial

HyperText Markup Language, Cascading Style Sheets, and JavaScript are the languages that run the web. They're very closely related, but they're also designed for very specific tasks. Understanding how they interact will go a long way towards becoming a _web developer_. We'll be expanding on this throughout the Course, but the gist of it is:

- **HTML** is for adding meaning to raw content by marking it up.
- **CSS** is for formatting that marked up content.
- **JavaScript** is for making that content and formatting interactive.


![web](https://internetingishard.netlify.app/html-css-javascript-905348.7c291929.png)

For example, you might mark some particular run of text as a paragraph with this HTML:

```html
<p id='para'>This is a paragraph.</p>
```

Then, you can set the color of that paragraph with some CSS:

```css
p {
  color: #276969;
}
```
And, if you want to get fancy, you can re-write that paragraph when the user clicks it with some JavaScript 

```js
var p = document.getElementById('para');
p.addEventListener('click', function(event) {
  p.innerHTML = 'You clicked it!';
});
```

<br>

# Code Yourself!


<p align="center">
  <img width="450" src="https://internetingishard.netlify.app/becoming-a-web-developer-0530f1.3b5388b5.png">
</p>

