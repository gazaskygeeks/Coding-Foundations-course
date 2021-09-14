# JavaScript Scope

## What is Scope?

**Scope** determines the visibility or accessibility of a variable or other resource in the area of your code. Scope refers to what the execution context of a particular piece of code is. One of the most important things this context determines is what variables are available to that piece of code.

In ES5 JavaScript, scope is exclusively delimited by functions. In ES6 JavaScript, block-scoping has been introduced via the `let` and `const` keywords. Both these things will be explained further on.

##  ✩ Global Scope

There's only one **global** scope in the JavaScript document. The area **outside** all the functions is consider the global scope and the variables defined inside the global scope can be accessed and altered in any other scopes.

```javascript
// global scope
let fruit = "apple";
console.log(fruit); // Logs: apple

function getFruit() {
  console.log(fruit); // Logs: apple
  return fruit;
}

getFruit(); // Returns: apple
```

## ✩ Local Scope

Variables that are usable only in a specific part of your code are considered to be in a local scope. These variables are also called local variables.

In JavaScript, there are two kinds of local scope: function scope and block scope.

### ➝  Function Scope

When you declare a variable in a function, you can access this variable only within that function. You can’t get this variable once you get out of it.

```js
// global scope (scope A)
var x = 5; // I'm globally scoped, I'm available everywhere

function addFive() {
  // local scope (scope B)
  var y = 5; // y is now available in scope B, but not scope A
  var plusFive = x + y; // x is available in scope B, because it was defined in global scope
  return plusFive;
}

console.log(addFive()); // Returns: 10
console.log(x); // Logs: 5
console.log(y); // ReferenceError
```

### ➝  Block Scope

A **block scope** is the area within `if statement`, `switch conditions` or `for` and `while loops`. Generally speaking, whenever you see **{curly brackets}**, it is a **block**. Block scoping was introduced to JavaScript via the `let` and `const` keywords, which are used to declare variables in the same way as `var`. The difference (in terms of scoping at least) is that while variables declared with `var` are available within the function in which they're defined, variables defined with `let` and `const` are only available within the block they're defined in:

```javascript
// global scope

var bar = "bar";

if (true) {
  // local block scope A
  let pam = bar + "pam"; // Value: barpam
  const j = 0;
  var k = 12;
}

for (let i = 0; i < 10; i++) {
  // local block scope B
  console.log(i); // Logs: 0 1 2 3 ... 9 (a number in each iteration)

  console.log(j); // ReferenceError
  console.log(pam); // ReferenceError
}

console.log(k); // Logs: 12
console.log(pam); // ReferenceError
console.log(i); // ReferenceError
console.log(j); // ReferenceError
```

So, lets add one more difference between `var`, `let` and `const`:

- Variables declared with `var` are function-scoped.
- Variables declared with `let` or `const` are block-scoped.


## ✩ Nested Scopes

Variables defined inside a function **cannot be accessed** from anywhere **outside** the function, because the variable is defined only in the scope of the function. However, a function can access all variables and functions defined inside its scope and inside its parent scope.

More formally, each function has access to its own local scope, and also the scope of the function that encloses it (or global scope, if there is no enclosing function).

```javascript
// global scope (scope A)
const a = "a";

function bar() {
  // local scope (scope B)
  // Has access to: scope B and scope A
  const b = "b";

  function pam() {
    // local scope (scope C)
    // Has access to: scope C, scope B and scope A
    const c = "c";
    if (true) {
      // local block scope (scope D)
      // Has access to: scope D, scope C, scope B and scope A
      const d = "d";
      return d + c + b + a;
    }
  }

  return pam();
}

console.log(a); // a
console.log(bar()); // can you guess the result ?
console.log(d); // ReferenceError
console.log(b); // ReferenceError
console.log(c); // ReferenceError
```