## The JavaScript `this` Keyword

In this workshop, we’re going to learn about the JavaScript keyword `this` and how the value of `this` is assigned in different scenarios.

<br/>

## What is `this` ?

Objects are the basic building blocks in JavaScript. There’s one special object available in JavaScript, the `this` object. You can see the value of `this` at every line of JavaScript execution. The value of `this` is decided based on how the code is being executed.


### 💡 So, The JavaScript `this` keyword refers to the object it belongs to.  
<br/>

---
<br/>

> Lets See How ❓ ❕


## All cases of `this` : 

<br/>


### 1. `this` Alone 

When used alone, the owner is the Global object, so `this` refers to the Global object which is `window`.

* Example -1- 

```javascript
var x = this; 
console.log(x); // window object
```

<br/>

### 2. `this` in a Function 

In a JavaScript function, the owner of the function is the default binding for `this`.

So, in a function, `this` refers to the Global object `Window`.

Example -2- 

```javascript
function myFunction() {
  return this; // window object
}
```

<br/>


### 3. `this` in an object Method 


In an object method, `this` refers to the "owner" of the method.
The person object is the owner of the fullName method so, `this` refers to person object in the following example : 

Example -3- 

```javascript
var person = {
  firstName: "John",
  lastName : "Doe",
  age       : 25,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```

<br/>


### 4. `this` in Event Handlers & Event Listner

In HTML event handlers and listner, `this` refers to the HTML element that received the event : 

Example -4- 

```javascript
<button onclick="this.style.display='none'">
  Click to Remove Me! // this refers to the <button>
</button>
```

Example -5- 

```javascript
<button class="remove-btn">
  Click to Remove Me!
</button>

<script>

let removeBtn = document.querySelector(".remove-btn")

removeBtn.addEventListener("click", function() {

    console.log(this); // refers to the <button>
   removeBtn.style.display = "none" 

} )

</script>

```

<br/>


### 5. `this` in Strict mode 

JavaScript strict mode does not allow default binding.

So, when used in global or in a function, in strict mode, `this` is undefined.

Example -6- 

```javascript
function myFunction() {
    "use strict";
  return this; // this here is undefined
}
```













