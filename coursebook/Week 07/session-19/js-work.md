# How JavaScript works

how does JS do everything it does? 🤔

This is the question that is frequently on our minds! *How JS work, what its mechanism and what happens inside the engine!!*

---

<br>

## 📍 NATURE OF JAVASCRIPT

**JS is a single-threaded and single concurrent programming language**, which means it *can handle one task at a time* or, in other words, a piece of code at a time

JavaScript is an **interpreted** language. This means we do not have to compile the JavaScript source code before sending it to the browser. An interpreter can take the raw JavaScript code and run it for you.

JavaScript is also a **dynamically typed language**, unlike C and C++. This means variables declared using var can store any type of data type like int, string, boolean and also complex data types like object and array.
The lack of type system is what makes JavaScript slow to run



**Now**,  we’ll go through all these concepts in detail and explain how JavaScript actually runs...

---

## 📍 The JavaScript Engine

A popular example of a JavaScript Engine is **Google’s V8 engine**. The V8 engine is used inside Chrome and Node.js for example. 

simplified view of what the engine looks like:


<p align="center">
  <img src="https://miro.medium.com/max/1400/1*OnH_DlbNAPvB9KLxUCyMsA.png" width='350'/>
</p>

The Engine consists of two main components:
* **Memory Heap** — this is where the memory allocation happens
* **Call Stack** — this is where your stack frames are as your code executes

---

<br>

## 📍 The Call Stack

JavaScript is a single-threaded programming language, which means it has a *single Call Stack*. Therefore it can do one thing at a time.

**The Call Stack is a data structure which records basically where in the program we are**. If we step into a function, we put it on the top of the stack. If we return from a function, we pop off the top of the stack. ~~That’s all the stack can do.~~

<br>

<p align="center">
  <img src="https://i.imgur.com/vDMw9eS.gif"/>
</p>

<br>

Let’s see an example. Take a look at the following code:

```js
function baz() {
  console.log('Hello from baz')
}

function bar() {
  baz()
}

function foo() {
  bar()
}

foo()
```

When the engine starts executing this code, the Call Stack will be empty. Afterwards, the steps will be the following:

![](https://cdn-images-1.medium.com/max/1600/1*rRoLpv-Zrmpa-srNhwlbvA.gif)


<br>
<br>

*so*, JavaScript is **synchronous, blocking, single-threaded language**

> What do we mean by it being synchronous, and can we change this behavior?

