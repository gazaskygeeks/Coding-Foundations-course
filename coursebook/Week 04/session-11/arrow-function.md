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

----

## Rewrite with arrow functions!

1.

```javascript
function splitBill(amount, numPeople) {
    return `Each person needs to pay ${amount / numPeople}`
}

// console.log(splitBill(10, 2));
// console.log(splitBill(10, 4));
// console.log(splitBill(10, 5));
```

2. 

```javascript
function countdown(startingNumber, step) {
  let countFromNum = startingNumber + step;
  return function decrease() {
    countFromNum -= step;
    return countFromNum;
  }
}
// const countingDown = countdown(20, 2);

```