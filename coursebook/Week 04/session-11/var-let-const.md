# `var`, `let`, and `const` – What's the Difference?

One of the features that came with ES6 is the addition of `let` and `const` which can be used for variable declaration. The question now is, what makes them different from `var` which we've been using?

In this workshop, we'll discuss `var`, `let` and `const` with respect to their scope, use, and hoisting.

Before we start, lets talk a bit about scope in JavaScript (we'll talk more about scope in the next workshop).

## JavaScript Scope

Scope is the accessibility of variables and functions in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code. So, scope essentially means where your variables are available for use

Don't worry much about scope now, since it's not our topic for this workshop and we will talk about it more in the next workshop.But, we may come across the word **scope** in this workshop, so be ready.

```js
// simple example to illustrate a basic idea about scope
var x = 5; // I'm globally scoped, you can use me everywhere

var findSum = function (a, b) {
  var y = 10; // You can only use me inside the findSum function
  console.log(x); // Logs: 5
  console.log(y); // Logs: 10
  return a + b;
};

console.log(x); // Logs: 5
console.log(y); // Logs: undefined
```

## Differences between (`var`, `let`, `const`)

**1. `var`**

Before the advent of ES6, `var` declarations ruled as a King. Let us get to understand `var` more.

- `var` variables can be re-declared:

**Example (1)**

```javascript
// Re-declare var

var greeter = "hey hi";

var greeter = "say Hello instead";

console.log(greeter); // result: say Hello instead
```

- `var` variables can be updated:

**Example (2)**

```javascript
// Update var

var greeter = "hey hi";

greeter = "say Hello instead";

console.log(greeter); // result: say Hello instead
```

- Hoisting of `var`:

  Hoisting is a JavaScript mechanism where variables declarations are moved to the top of their scope(we'll talk more about scope in the next workshop) before code execution. What this means is that if we do:

**Example (3)**

```javascript
console.log(greeter); // result: undefined

var greeter = "say hello";
```

...it is interpreted like

**Example (4)**

```javascript
var greeter;

console.log(greeter); // result: undefined

greeter = "say hello";

console.log(greeter); // result: say hello
```

So, `var` variables are hoisted to the top of their scope and initialized with a value of `undefined`.

**2. `let`**

`let` is preferred for variable declaration now. It's no surprise as it comes as an improvement to the `var` declarations.

**Example (1)**

```javascript
let greeting = "say Hi";

let times = 4;

if (times > 3) {
  let hello = "say Hello instead";

  console.log(hello); // result: say Hello instead
}
```

- `let` can be updated:

  Like `var`, `let` can be updated.

**Example (2)**

```javascript
let greeting = "say Hi";

greeting = "say Hello instead";

console.log(greeting); // result: say Hello instead
```

- `let` declarations are hoisted to the top:

  Unlike `var` which is initialized with a value of `undefined`, the `let` keyword is not initialized. So if you try to use `let` variable before declaration, you'll get a Reference Error.

**Example (3)**

```javascript
console.log(greeting); // Uncaught ReferenceError: Cannot access 'greeting' before initialization.

let greeting = "say Hello instead";
```

- `let` can't be re-declared:

**Example (4)**

```javascript
// This will return an error:

let greeting = "say Hi";

let greeting = "say Hello instead"; //error: Identifier 'greeting' has already been declared
```

**3. `const`**

Variables declared with `const` maintain constant values. `const` declarations share some similarities with `let` declarations.

- `const` cannot be updated or re-declared:

  This means that the value of a variable declared with `const` remains the same. It cannot be updated or re-declared. So if we declare a variable with `const`, we can neither do:

**Example (1)**

```javascript
const greeting = "say Hi";

greeting = "say Hello instead"; //error: Assignment to constant variable.
```

...nor

**Example (2)**

```javascript
const greeting = "say Hi";

const greeting = "say Hello instead"; //error: Identifier 'greeting' has already been declared
```

- Hoisting of `const`:

  Just like `let`, `const` declarations are hoisted to the top but are not initialized.

**Example (3)**

```javascript
console.log(greeting); // Uncaught ReferenceError: Cannot access 'greeting' before initialization.

const greeting = "say Hello instead";
```

## Wrap-up

- `var` variables can be updated and re-declared within its scope; `let` variables can be updated but not re-declared; `const` variables can neither be updated nor re-declared.

- They are all hoisted to the top of their scope. But while `var` variables are initialized with undefined, `let` and `const` variables are not initialized.

- While `var` and `let` can be declared without being initialized, `const` must be initialized during declaration.
