# JavaScript Arrow Function

**Arrow function** is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a **_cleaner way_** compared to regular functions.

This Function

```javascript
let sum = function(a, b) {
    return a + b
}
```

can be written like this, using **Arrow Function**

```javascript
let sum = (a, b) => a + b
```

> the arrow function has one expression **a + b** so it returns the result of the expression.

--------------------------------------------------------------------------------

## Arrow Function Syntax

The syntax of the arrow function is:

```javascript
let myFunction = (arg1, arg2, ...argN) => {
    statement(s)
}
```

Here,

- `myFunction` is the name of the function
- `arg1, arg2, ...argN` are the function arguments
- `statement(s)` is the function body

--------------------------------------------------------------------------------

## Arrow Function Parameters

- If there are **0 Parameters**, arrow functions **use empty parenthesis**:

```javascript
() => { statements }
```

example,

```javascript
let greet = () => console.log('Hello');
greet(); // Hello
```

- If there is **1 Parameter**, arrow functions can **omit the parenthesis** around the parameter:

```javascript
parameter => { statements }
```

example,

```javascript
let greet = x => console.log(x);
greet('Hello'); // Hello
```

- If there are **+2 Parameters**, parameters **go inside parenthesis**:

```javascript
(param1, param2, ...) => { statements }
```

example,

```javascript
let greet = (greeting, name) => console.log(`${greeting} ${name}`);
greet('Hello', 'Olivia!!'); // Hello Olivia!!
```

--------------------------------------------------------------------------------

## JavaScript arrow functions and _this_ value

```javascript
const car = {
  brand: 'Ford',
  model: 'Fiesta',
  start: function() {
    console.log(`Started ${this.brand} ${this.model}`)
  },
  stop: () => {
    console.log(`Stopped ${this.brand} ${this.model}`)
  }
}

car.start()   // Started Ford Fiesta

car.stop()   // Stopped undefined undefined
```

`this` in the _start()_ method refers to the **object itself.**

But in the _stop()_ method, which is an arrow function, **it doesn't.**

this is not bound to the object instance. It points to what this points to in the _outer scope_.

This implies that **arrow functions are not suitable to be used for object methods when you want to access `this`**.

--------------------------------------------------------------------------------

### after you are done with the WS, solve the [tasks](./tasks.md)
