
## What is the DOM
The **HTML DOM** is a standard object model and programming interface for HTML. It defines:

- The HTML elements as objects
- The properties of all HTML elements
- The methods to access all HTML elements
- The events for all HTML elements

In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.


**The HTML DOM Tree of Objects**

When a web page is loaded, the browser creates a Document Object Model of the page.


![dom](https://www.w3schools.com/js/pic_htmltree.gif)

## DOM Methods
HTML DOM methods are **actions** you can perform (on HTML Elements).


### The DOM Programming Interface
The HTML DOM can be accessed with JavaScript (and with other programming languages).

In the DOM, all HTML elements are defined as **objects**.

The programming interface is the properties and methods of each object.

A **property** is a value that you can get or set (like changing the content of an HTML element).

A **method** is an action you can do (like add or deleting an HTML element).

#### Example
The following example changes the content (*the innerHTML*) of the `<p>` element with **id="demo"**:

```html 
<html>
<body>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>

</body>
</html>
```

In the example above, **getElementById** is a method, while **innerHTML** is a property.

### Finding HTML Elements

| Method | Description | 
| -------- | -------- | 
| document.getElementById(id)     | Find an element by element id     | 
| document.getElementsByTagName(name) | Find elements by tag name |
| document.getElementsByClassName(name) | Find elements by class name |

### Changing HTML Elements

| Property | Description | 
| -------- | -------- | 
| element.innerHTML =  new html content     | Change the inner HTML of an element    |
| element.attribute = new value | Change the attribute value of an HTML element|
| element.style.property = new style | Change the style of an HTML element |
| element.setAttribute(attribute, value) | Change the attribute value of an HTML element |


### Adding and Deleting Elements
|Method	| Description |
| -----  | ----------- |
|document.createElement(element) |	Create an HTML element|
|document.removeChild(element) |	Remove an HTML element |
|document.appendChild(element) |	Add an HTML element|
|document.replaceChild(new, old) |	Replace an HTML element|
|document.write(text) |	Write into the HTML output stream

[For a full refernce of the HTML DOM API visit this page](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API)


## JavaScript HTML DOM EventListener

We add **event listeners** to HTML elements when we want to wait for some kind of event to happen and then do something. A good example about this would be having a button that adds items to a shoping cart or changing the text color to red when a user submit false data in a form.

To do that we have a method called `addEventListener()` : 
- The **addEventListener()** method attaches an event handler to the specified element.

- The **addEventListener()** method attaches an event handler to an element without overwriting existing event handlers.

- You can add many event handlers to one element.

- You can add many event handlers of the same type to one element, i.e two "click" events.

- You can add event listeners to any DOM object not only HTML elements. i.e the window object.
- You can easily remove an event listener by using the **removeEventListener()** method.

### Syntax
```javascript 
element.addEventListener(event, function);

```

### Example
```javascript
element.addEventListener("click", function(){ alert("Hello World!"); });
```

When clicking the previous element we shall see an alert with Hello World

#### There are other events like:
- mouseover 
- mouseout
- And more

## Local Storage
Ever wanted to build a todo app in JavaScript but couldn't save the lists so whenever you open the browser again you wouldn't have the todo list you wrote? will if this happened with you or no you must at least have thought about it.

`LocalStorage` allows us to save data in the user's device (his browser) and its very simple to deal with

```javascript
localStorage.setItem('myCat', 'Tom');
```
In this way we tell the browser to save an object which has a key **myCat** and a value **Tom**

![Imgur](https://i.imgur.com/XLDhKEj.png)

Now to retreieve that value all we need to do is the following

```javascript
const cat = localStorage.getItem('myCat');
```

To remove that specifc key and its value
```javascript
localStorage.removeItem('myCat');
```

To clear local storage 
```javascript
// Clear all items
localStorage.clear();
```

Now that's great and all but the thing is local Storage accepts only text to be stored in it so what if you had an array for example

There are methods in JavaScript that can help us convert the array to text (JSON) and then change it back again to an array

```javascript
const people = ['mark', 'dark', 'will']

localStorage.setItem('people', JSON.stringify(people))
```

And when we want to retrieve it we can do this

```javascript
const people = JSON.parse(localStorage.getItem('people'))
```
