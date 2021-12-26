# DOM Manipulations

As a web developer, you frequently need to manipulate the DOM, the object model that is used by browsers to specify the logical structure of web pages, and based on this structure to render HTML elements on the screen.

HTML defines the default DOM structure. However in many cases you may want to manipulate this with JavaScript, usually in order to add extra functionalities to a site.

![dom-tree](https://www.tutorialstonight.com/assets/js/dom-tutorial.webp)

---
---

# ♦️ JavaScript Methods For DOM Manipulation

There are many **JavaScript methods** that **aid DOM manipulation**. You’d likely use these methods frequently in your code

## 🔹 Getting Element by ID

returns an Element object representing the element whose **id** property matches the specified string. 

Let’s say we want to access an `h1` within id header , we can use dom selector getElementById

HTML:
```html
<h1 id="header">Welcome to the Web</h1>
```
Javascript:

```js
let heading = document.getElementById("heading");
```
---

## 🔹 Getting Element by TagName
To get all elements in the DOM using the element tag, we can use

> `document.getElementsByTagName(“<name of the tag>”);`

It will return ***HTMLCollection*** which will contain elements selected.

```js
let elements = document.getElementsByTagName("p");
```

---

## 🔹 Getting Elements by ClassName

To get elements having same class name we can use below

> `document. getElementsByClassName (“<name of the class>”);`

To select elements having class as content we can use below script.

```js
let contents = document.getElementsByClassName("content");
```
It will return ***HTMLCollection*** 


> What is the difference between Get element by ID and querySelector?

---
## 🔹 Get Element by querySelector

The `querySelector()` method **returns the first element that matches one or more CSS selectors**. If no match is found, it returns `null`.


#### Syntax

```js
const element = document.querySelector(selector);
```

* `element` – First matching element or `null` (if no element matches the selectors).
* `selector` – one or more CSS selectors, such as `"#fooId"`, `".fooClassName"`, `".class1.class2"`, or `".class1, .class2"`.

#### Code Example

In this example, the first `<div>` gets selected with the `querySelector()` method and its color is changed to red.

##### HTML

```html
<p>paragraph one</p>
<p>paragraph two</p>
<div>div one</div>
<p>paragraph three</p>
<div class="first">div two</div>
<div id="second">div three</div>
```

##### Javascript

```js
// select an element based on tag name (div here)
const firstDiv = document.querySelector('div');
firstDiv.textContent; // div one
firstDiv.style.color = 'red'; // this will change its color to red

//select a div using the class name
const secondDiv = document.querySelector('.first');
secondDiv.textContent; // div two

//select a div using the id
const thirdDiv = document.querySelector('#second');
thirdDiv.textContent; // div three
```

---
## 🔹 querySelectorAll


Unlike `querySelector()` that returns only the first instance of all matching elements, `querySelectorAll()` **returns all elements that match the specified CSS selector**.

The matching elements are returned as a `NodeList` object that will be an empty object if no matching elements are found.

#### Syntax

```js
const elements = document.querySelectorAll(selector);
```

* `elements` – A `NodeList` object with all matching elements as property values.
* `selector` – one or more CSS selectors, such as `"#fooId"`, `".fooClassName"`, `".class1.class2"`, or `".class1, .class2"`.

#### Code Example

The example below uses the same HTML as the previous one. However, in this example, all paragraphs are selected with `querySelectorAll()`, and are colored blue.

##### HTML

```html
<p>paragraph one</p>
<p>paragraph two</p>
<div>div one</div>
<p>paragraph three</p>
<div class="first">div two</div>
<div id="second">div three</div>
```

##### Javascript

```js
// select all elements have (p) tag
const paragraphs = document.querySelectorAll('p');
for (const p of paragraphs) // to make loop on paragraphs
  p.style.color = 'blue';
```

---
##  🔹 addEventListener()

**Events** refer to what happens to an HTML element, such as clicking, focusing, or loading, to which we can react with JavaScript. We can assign JS functions to listen for these events in elements and do something when the event had occurred.

* There are three ways you can **assign a function to a certain event**.

If `foo()` is a custom function, you can register it **as a click event listener** (call it when the button element is clicked) in three ways:

1- **HTML**

```html
<button onclick="foo()">Alert</button>
```

2- **Javascript** - first way

```js
const btn = document.querySelector('button');
btn.onclick = foo;
```

3- **Javascript** - second way

```js
const btn = document.querySelector('button');
btn.addEventListener('click', foo);
```

The method `addEventListener()` (the third solution) has **some pros** ; it is the latest standard – allowing the assignment of more than one function as event listeners to one event – and comes with a useful set of options.

#### Syntax

```js
element.addEventListener(event, listener, [options]);
```

* `element` – The HTML element the event listener will be listening for.
* `event` – The targeted event.
* `listener` – Typically, a JavaScript function.
* `options` – (optional) An object with a set of boolean properties (listed below).

| Options   |                                                                                                                             What happens, when it is set to true?                                                                                                                             |
| --------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `capture` | Stops event bubbling, i.e. prevents calling of any event listeners for the same event type in the element’s ancestors. To use this feature, you can use 2 syntaxes: <br/>`element.addEventListener(event, listener, true);` <br/>`element.addEventListener(event, listener, {capture:true});` |
| `once`    |                                                                       Listener is called only the first time the event happens, then it is automatically detached from the event, and won’t be triggered by it anymore.                                                                       |
| `passive` |                                                                                                     The default action of the event cannot be stopped with the `preventDefault()` method.                                                                                                     |


<br>
<br>
<br>


#### Code Example

##### HTML

```html
<button>Click Me</button>
```

##### Javascript

```js
const btn = document.querySelector('button');
btn.addEventListener('click', foo);
function foo() {
  alert('hello');
}
```

---
## 🔹 Create Element
The `createElement()` method **creates a new HTML element** using the **name of the HTML tag** to be created, such as `'p'` or `'div'`.

You can later add this element to the web page by using different **methods for DOM insertion**, such as `AppendChild()` [see later in this session](https://github.com/gazaskygeeks/Fundamentals-course/blob/week6-session17-review/coursebook/Week%2006/session-17/DOM-manipulations.md#5--appendchild).

#### Syntax

```js
document.createElement(tagName);
```

* `tagName` – **The name of the HTML tag you want to create**.

#### Code Example

With the following example, you can create a new paragraph element:

```js
const pElement = document.createElement('p');
```

---
## 🔹 appendChild()

The `appendChild()` method **adds an element as the last child** to the HTML element that invokes this method.

The child to be inserted can be either a **newly created element**, or an **already existing one**. In the latter case, it will be moved from its previous position to the position of the last child.

#### Syntax

```js
element.appendChild(childElement);
```

* `element` – The HTML element to which `childElement` is added as its last child.
* `childElement` – The HTML element added as the last child of `element`.

#### Code Example

In this example, we insert a `<strong>` element is as the child of a `<div>` element using the `appendChild()` and the aforementioned `createElement()` methods.

##### HTML

```html
<div></div>
```

##### Javascript

```js
// select the first div
const div = document.querySelector('div');

// create new element (<strong> </strong>)
const strong = document.createElement('strong');
strong.textContent = 'Hello';
div.appendChild(strong);
```

---
##  🔹 setAttribute()

The `setAttribute()` method either **adds a new attribute** to an HTML element, or **updates the value** of an attribute that already exists.

#### Syntax

```js
element.setAttribute(name, value);
```

* `element` – The HTML element to which an attribute is added, or of which attribute is updated.
* `name` – The name of the attribute.
* `value` – The value of the attribute.

#### Code Example

In this example, we add the `contenteditable` attribute to a `<div>` by making use of the `setAttribute()` method, which will turn its content editable.

##### HTML

```html
<div>hello</div>
```

#### Javascript

```js
const div = document.querySelector('div');

// set new attribute for the div element
div.setAttribute('contenteditable', ''); // <div contenteditable></div>
```
---
##  🔹 getAttribute()

The `getAttribute()` method **returns the value of a specified attribute** belonging to a certain HTML element.

#### Syntax

```js
element.getAttribute(name);
```

* `element` – The HTML element of which attribute is requested.
* `name` – The name of the attribute.

#### Code Example

In this example, we alert the value of the `contenteditable` attribute belonging to the `<div>` element with the help of the `getAttribute()` method.

##### HTML

```html
<div contenteditable="true">hello</div>
```

##### Javascript

```JavaScript
const div = document.querySelector('div');
alert(div.getAttribute('contenteditable')); // true
```
---
##  🔹 removeAttribute()

The `removeAttribute()` method **removes a given attribute** of a specific HTML element.

#### Syntax

```js
element.removeAttribute(name);
```

* `element` – The HTML element of which attribute is to be removed.
* `name` – The name of the attribute.

#### Code Example

In this example, we remove the `contenteditable` attribute from the `<div>` element. As a result, the `<div>` won’t be editable any more.

##### HTML

```html
<div contenteditable="true">hello</div>
```

##### JavaScript

```js
const div = document.querySelector('div');
div.removeAttribute('contenteditable');
```


---

# ♦️ Adding CSS styles

CSS rules can be applied like any other property; note though that the properties are camel-cased in JavaScript:

```js
myElement.style.marginLeft = '2em';
```

If we want certain values, we can obtain these via the `.style` property. However, this will only give us styles that have been explicitly applied. To get the computed values, we can use, `window.getComputedStyle()`. It takes the element and returns a [CSSStyleDeclaration](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration) containing all styles from the element itself as well as those inherited from its parents:

```js
window.getComputedStyle(myElement).getPropertyValue('margin-left');
```

---
# ♦️ Element properties

Every element also has the properties `.innerHTML` and `.textContent` (as well as `.innerText` , which is similar to `.textContent`, but has some [important differences](http://perfectionkills.com/the-poor-misunderstood-innerText/) ). These hold the HTML and plain text content respectively. They are writable properties, meaning we can modify elements and their contents directly:

```js
// Replace the inner HTML
myElement.innerHTML = `
  <div>
    <h2>New content</h2>
    <p>beep boop beep boop</p>
  </div>
`;

// Remove all child nodes
myElement.innerHTML = null;

// Append to the inner HTML
myElement.innerHTML += `
  <a href="foo.html">continue reading...</a>
  <hr/>
`;
```

Appending markup to the HTML, as shown above, is usually **a bad idea though**, as we’d lose any previously made property changes on the affected elements and bound event listeners. Setting the `.innerHTML` is good for completely throwing away markup and replacing it with something else, e.g. server-rendered markup. So appending elements would better be done like so:

```js
const link = document.createElement('a');

// creates a new Text node
const text = document.createTextNode('continue reading...');

const hr = document.createElement('hr');

link.href = 'foo.html';
link.appendChild(text);
myElement.appendChild(link);
myElement.appendChild(hr);
```

**Difference between using `createTextNode with appendChild` vs `textContent`**:

If you have a `span` and you want to change its text , what do you think is better to use ?
1- **createTextNode with appendChild**

```js
const my_text = document.createTextNode('Hello!');
span.appendChild(my_text);
```

2- **textContent**

```js
span.textContent = 'hello';
```

The fundamental difference is that:

* `createTextNode()` is a **_method_** and works just as its name says: it **creates an element** then you must do something with it (like in your example, where you append it as a child);
  so it is useful if you want to have a new element and place it somewhere.
* `textContent` is a **_property_** you may get or set, with a unique statement and nothing else;
  so it is useful when you **only want to change the content** of an already existing element.

**Now** in this case, you want to **change the text** of the element:
So if your `span` looks like this

```html
<span>Original text</span>
```

and you used `createTextNode` then it will end with:

```html
<span>Original textHello!</span>
```

because you **appended your textNode**.

> So you should use `textContent` in this case.
