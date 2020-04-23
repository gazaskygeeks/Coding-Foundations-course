# DOM Manipulations 

As a web developer, you frequently need to manipulate the DOM, the object model that is used by browsers to specify the logical structure of web pages, and based on this structure to render HTML elements on the screen.

HTML defines the default DOM structure. However in many cases you may want to manipulate this with JavaScript, usually in order to add extra functionalities to a site.

![dom-tree](https://user-images.githubusercontent.com/29041512/79688580-d2e1cb00-8257-11ea-9f7f-4596d76d3dce.jpg)


## JavaScript Methods For DOM Manipulation
There are many **JavaScript methods** that **aid DOM manipulation**. You’d likely use these methods frequently in your code

### 1- [querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

The `querySelector()` method **returns the first element that matches one or more CSS selectors**. If no match is found, it returns `null`.

Before `querySelector()` was introduced, developers widely used the `getElementById()` method which **fetches an element with a specified `id` value**.

Although `getElementById()` is still a useful method, but with the newer querySelector() and querySelectorAll() methods we are free to **target elements based on any CSS selector**, thus we have more flexibility.

#### Syntax 
```js
var ele = document.querySelector(selector);
```
* `ele` – First matching element or `null` (if no element matches the selectors).   
* `selector` – one or more CSS selectors, such as `"#fooId"`, `".fooClassName"`, `".class1.class2"`, or `".class1, .class2"`.

#### Code Example
In this example, the first `<div>` gets selected with the `querySelector()` method and its color is changed to red.

##### HTML
```html
<p>paragraph one</p>
<p>paragraph two</p>
<div>div one</div>
<p>paragraph three</p>
<div>div two</div>
```
##### Javascript
```js
var firstDiv = document.querySelector('div');
firstDiv.style.color = 'red';
```

### 2- [querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)

Unlike `querySelector()` that returns only the first instance of all matching elements, `querySelectorAll()` **returns all elements that match the specified CSS selector**.

The matching elements are returned as a `NodeList` object that will be an empty object if no matching elements are found.

#### Syntax 
```js
var eles = document.querySelectorAll(selector);
```
* `eles` – A `NodeList` object with all matching elements as property values. The object is empty if no matches are found.
* `selector` – one or more CSS selectors, such as `"#fooId"`, `".fooClassName"`, `".class1.class2"`, or `".class1, .class2"`.

#### Code Example
The example below uses the same HTML as the previous one. However, in this example, all paragraphs are selected with `querySelectorAll()`, and are colored blue.

##### HTML
```html
<p>paragraph one</p>
<p>paragraph two</p>
<div>div one</div>
<p>paragraph three</p>
<div>div two</div>
```
##### Javascript
```js
var paragraphs = document.querySelectorAll('p');
for(var p of paragraphs)
  p.style.color = 'blue';
```

### 3- [addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

**Events** refer to what happens to an HTML element, such as clicking, focusing, or loading, to which we can react with JavaScript. We can assign JS functions to listen for these events in elements and do something when the event had occurred.

- There are three ways you can **assign a function to a certain event**.

If `foo()` is a custom function, you can register it **as a click event listener** (call it when the button element is clicked) in three ways:

1- **HTML** 
```html 
<button onclick=foo>Alert</button>
```
2- **Javascript**
```js
var btn = document.querySelector('button');
btn.onclick=foo;
```
3- **Javascript**
```js
var btn = document.querySelector('button');
btn.addEventListener('click', foo);
```
The method `addEventListener()` (the third solution) has **some pros** ; it is the latest standard – allowing the assignment of more than one function as event listeners to one event – and comes with a useful set of options.

#### Syntax 

```js
ele.addEventListener(evt, listener, [options]);
```
* `ele` – The HTML element the event listener will be listening for.   
* `evt` – The targeted event.   
* `listener` – Typically, a JavaScript function.    
* `options` – (optional) An object with a set of boolean properties (listed below).

| Options       | What happens, when it is set to true? |
| ------------- |:-------------------------------------:| 
| `capture`    | Stops event bubbling, i.e. prevents calling of any event listeners for the same event type in the element’s ancestors. To use this feature, you can use 2 syntaxes: <br/>`ele.addEventListener(evt, listener, true);` <br/>`ele.addEventListener(evt, listener, {capture:true});` |
| `once`    | Listener is called only the first time the event happens, then it is automatically detached from the event, and won’t be triggered by it anymore.  |
| `passive`    | The default action of the event cannot be stopped with the `preventDefault()` method. |

#### Code Example

##### HTML
```html
<button>Click Me</button>
``` 

##### Javascript 
```js
var btn = document.querySelector('button');
btn.addEventListener('click',foo);
function foo() { alert('hello'); }
```
### 4- [createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

The `createElement()` method **creates a new HTML element** using the **name of the HTML tag** to be created, such as `'p'` or `'div'`.

You can later add this element to the web page by using different **methods for DOM insertion**, such as `AppendChild()` [see later in this session].

#### Syntax

```js
document.createElement(tagName);
```
* `tagName` – **The name of the HTML tag you want to create**.

#### Code Example
With the following example, you can create a new paragraph element:

```js
var pEle = document.createElement('p')
```
### 5- [appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)

The `appendChild()` method **adds an element as the last child** to the HTML element that invokes this method.

The child to be inserted can be either a **newly created element**, or an **already existing one**. In the latter case, it will be moved from its previous position to the position of the last child.

#### Syntax

```js
ele.appendChild(childEle)
```
* `ele` – The HTML element to which `childEle` is added as its last child.
* `childEle` – The HTML element added as the last child of `ele`.

#### Code Example
In this example, we insert a `<strong>` element is as the child of a `<div>` element using the `appendChild()` and the aforementioned `createElement()` methods.

##### HTML
```html
<div></div>
```

##### Javascript
```js
var div = document.querySelector('div');
var strong = document.createElement('strong');
strong.textContent = 'Hello';
div.appendChild(strong);
```
### 6- [setAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
The `setAttribute()` method either **adds a new attribute** to an HTML element, or **updates the value** of an attribute that already exists.

#### Syntax
```js
ele.setAttribute(name, value);
``` 
* `ele` – The HTML element to which an attribute is added, or of which attribute is updated.
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
var div = document.querySelector('div');
div.setAttribute('contenteditable', '')
```

### 7- [getAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute)

The `getAttribute()` method **returns the value of a specified attribute** belonging to a certain HTML element.

#### Syntax
```js
ele.getAttribute(name);
```

* `ele` – The HTML element of which attribute is requested.    
* `name` – The name of the attribute.    

#### Code Example
In this example, we alert the value of the `contenteditable` attribute belonging to the `<div>` element with the help of the `getAttribute()` method.

##### HTML
```html
<div contenteditable=true>hello</div>
```
##### Javascript

```JavaScript
var div = document.querySelector('div');
alert(div.getAttribute('contenteditable'));
```

### 8- [removeAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute) 

The `removeAttribute()` method **removes a given attribute** of a specific HTML element.

#### Syntax
```js
ele.removeAttribute(name);
``` 

* `ele` – The HTML element of which attribute is to be removed.
* `name` – The name of the attribute.

#### Code Example
In this example, we remove the `contenteditable` attribute from the `<div>` element. As a result, the `<div>` won’t be editable any more.

##### HTML
```html
<div contenteditable=true>hello</div>
```
##### JavaScript
```js
var div = document.querySelector('div');
div.removeAttribute('contenteditable');
``` 
### Element properties 

Every element also has the properties `.innerHTML` and `.textContent` (as well as `.innerText` , which is similar to `.textContent`, but has some [important differences](http://perfectionkills.com/the-poor-misunderstood-innerText/) ). These hold the HTML and plain text content respectively. They are writable properties, meaning we can modify elements and their contents directly:

```js
// Replace the inner HTML
myElement.innerHTML = `
  <div>
    <h2>New content</h2>
    <p>beep boop beep boop</p>
  </div>
`

// Remove all child nodes
myElement.innerHTML = null

// Append to the inner HTML
myElement.innerHTML += `
  <a href="foo.html">continue reading...</a>
  <hr/>
`
``` 
Appending markup to the HTML as shown above is usually a bad idea though, as we’d lose any previously made property changes on the affected elements and bound event listeners. Setting the `.innerHTML` is good for completely throwing away markup and replacing it with something else, e.g. server-rendered markup. So appending elements would better be done like so:

```js
const link = document.createElement('a')
const text = document.createTextNode('continue reading...')
const hr = document.createElement('hr')

link.href = 'foo.html'
link.appendChild(text)
myElement.appendChild(link)
myElement.appendChild(hr)
```