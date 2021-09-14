## JavaScript Functions

A JavaScript **function** is a block of code designed to perform a particular task. The main advantage of using functions is code **reuse**: Define the code once, and use it many times.

Use the same code many times with different arguments, to produce different results.

## Function Declaration

To define a JavaScript function, we use the `function` keyword, followed by a **name** followed by a set of **parentheses ()**.

The code to be executed by the function is placed inside curly brackets {}.

```js
function name() {
  // code to be executed
}
```

**Note:** Function names can contain letters, digits, underscores, and dollar signs (same rules as variables) written in camel case. In addition, it's a best practice to actually tell what the function is doing by giving the function name a verb as prefix. This verb as prefix can be anything (e.g. get, fetch, push, apply, calculate, compute, post). It's a soft rule to consider for having more self-descriptive JavaScript functions.

Let's write our first function.

```js
// Here, we are declaring a function named sayHello that would log Hello World when it is called
function sayHello() {
  console.log("Hello World");
}
```

## Function Invocation (calling a function)

To execute the code inside the function you need to invoke it (call it). To call a function, start with the name of the function, then follow it with the parentheses.

```js
// Declaring a function named greet
function greet() {
  console.log("Welcome to the FUNdamentals course.");
}

// Calling the function
greet(); // Logs: Welcome to the FUNdamentals course.
```

Once the function is defined, JavaScript allows us to call it as many times as we want to.

```js
// We want to keep saying that Javascript is fun, let's declare a function to do it!
function printJsIsFun() {
  console.log("JavaScript is FUN!");
}

// Calling the function
printJsIsFun(); // Logs: JavaScript is FUN!

// Calling the function again
printJsIsFun(); // Logs: JavaScript is FUN!

// And again
printJsIsFun(); // Logs: JavaScript is FUN!
```

## Function Parameters

Function can take parameters. Function **parameters** are the names listed inside the parentheses () in the function's definition.

```js
function name(param1, param2, param3) {
  // some code
}
```

**Note:** As with variables, parameters should be given **names**, which are separated by commas within the parentheses.

After defining the parameters, you can use them inside the function.

```js
// This function takes in one parameter, which is called name
function sayHello(name) {
  console.log("Hello, " + name);
}
```

## Function Arguments

Function **arguments** are the real values passed to (and received by) the function. When calling a function, we provide the parameters value **(arguments)** inside the parentheses. We can define a single function, and pass different parameter values **(arguments)** to it.

```js
// This will execute the function's code each time for the provided argument

function sayMyName(name) {
  console.log("My name is " + name);
}

// Here, the argument "Heisenberg" is the value of the parameter name
sayMyName("Heisenberg"); // Logs: My name is Heisenberg

// Here, the argument "Turing" is the value of the parameter name
sayMyName("Turing"); // Logs: Mu name is Turing
```

## Multiple Parameters

We can define multiple parameters for a function by comma-separating them.

When calling a function, we must provide the arguments in the same order in which we defined them.

```js
// This function takes in two parameters: name and age
function printPersonDetails(name, age) {
  console.log(name + "is" + age + " years old.");
}

printPersonDetails("Mark", 27); // Logs: Mark is 27 years old.
```

**Note:** JavaScript functions do not check the number of arguments received. If a function is called with missing arguments (fewer than declared), the missing values are set to `undefined`.

```js
function sayGreeting(greeting) {
  console.log(greeting);
}

sayGreeting("Hello"); // Logs: Hello
sayGreeting("Hi"); // Logs: Hi

// Notice, we are not passing any arguments for this call
sayGreeting(); // Logs: undefined
```

## Function Return

A function can have an optional `return` statement. It is used to return a value from the function. This statement is useful when making calculations that require a result. For example, let's calculate the product of two numbers, and return the result:

```js
function findProduct(a, b) {
  return a * b; // Function returns the product of a and b
}

const product = findProduct(5, 3); // Function is called, return value will end up in product
console.log(product); // Logs: 15
```

If we do not return anything from a function, it will return undefined.

```js
/* This function takes two parameters, calculate their sum then logs it BUT it doesn't have a return statement.
Even though it logs the sum, it returns undefined */
function findSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

const result = findSum(5, 7); // Logs: 12
console.log(result); // Logs: undefined
```

When JavaScript reaches a return statement, the function stops executing.

```js
function printNumber() {
  console.log("one");
  return;
  console.log("two");
}

printNumber(); // Logs: one
// Function stop executing before it can get to the second log statement due to the return statement before it
```

## Function Expression

A JavaScript function can also be defined using an **expression**. A function expression can be stored in a variable.

```js
const findProduct = function (a, b) {
  return a * b;
};
```

After a function expression has been stored in a variable, the variable can be used as a function. Functions stored in variables do not need function names. They are always called using the variable name.

```js
const findSquare = function (num) {
  return num * num;
};

const squareOfTwo = findSquare(2); // Result: 4
```

**Note:** With function expression, the function name can be omitted.
