
## HTML

HTML stands for Hyper Text Markup Language. It is used to design web pages using a markup language. HTML is the combination of Hypertext and Markup language. Hypertext defines the link between the web pages. A markup language is used to define the text document within tag which defines the structure of web pages.

## HTML5

### HTML5 is the latest version of Hypertext Markup Language that adds a handful of new HTML elements we can use to better define our page’s content for search engines

### What HTML5 do

- It supports audio and video controls with the use of `<audio>` and `<video>` tags.
- Vector graphics is additionally an integral a part of HTML5 like SVG and `<canvas>`, examples on `<canvas>`:
  - https://codepen.io/Tibixx/pen/eXOyXg
  - https://codepen.io/EntropyReversed/pen/ZPEpWg
- HTML5 language is more mobile-friendly.
- `doctype` declaration is quite simple and easy.
- Character encoding is simple and easy.
- New element for web structure like nav, header, footer etc.

## Semantics

- #### Semantics is the study of the meanings of words and phrases in a language.

- #### Semantic elements = elements with a meaning.

- #### A semantic element clearly describes its meaning to both the browser and developer.

### What’s a Semantic Element

Semantic Elements refer to HTML elements that have a specific meaning. For example `<h1>` is a semantic element. It tells google bots that the content within the tag is the most significant header contained in the HTML document. `<div>` on the other hand, is a non-semantic element as it only indicates a division in the HTML document and provide no information on what goes before, after or within the tag.

### What are the semantic tags that HTML5 brought us?

| Tag         | Description                                                            |
| ----------- | ---------------------------------------------------------------------- |
| `<header>`  | Specifies a header for a document or section                           |
| `<section>` | Defines a section in a document                                        |
| `<nav>`     | Defines navigation links                                               |
| `<main>`    | Specifies the main content of a document                               |
| `<article>` | Defines an article                                                     |
| `<figure>`  | Specifies self-contained content, like illustrations, diagrams, photos |
| `<footer>`  | Defines a footer for a document or section                             |

Elements such as `<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, and `<footer>` act more or less like `<div>` elements. They group other elements together into page sections. However where a `<div>` tag could contain any type of information, it is easy to identify what sort of information would go in a semantic `<header>` region.

- #### It is much easier to read

- #### It has greater accessibility. (screen readers also find semantic elements easier to understand)

### Lets look at these 2 snippets of html:

- This block of code does not use semantic elements

```
<div id="header"></div>
<div class="section">
	<div class="article">
		<div class="figure">
			<img>
			<div class="figcaption"></div>
		</div>
	</div>
</div>
<div id="footer"></div>s
```

- And this block of code uses semantic elements:

```
<header></header>
<section>
	<article>
		<figure>
			<img>
			<figcaption></figcaption>
		</figure>
	</article>
</section>
<footer></footer>
```