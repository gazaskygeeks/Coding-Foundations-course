# Functions 

**Functions** are one of the fundamental building blocks in JavaScript. A **function** is a JavaScript `procedure` that is a set of statements that performs a task or calculates a value. To use a **function**, you must define it somewhere in the scope from which you wish to call it.

## Why do we need functions

The main difference between **JavaScript** and most other languages is that **JavaScript** allows us to create a **function** as a stand alone entity.

This allows us to create compact code that is **easy to understand**, partially because **functions** can appear anywhere in the code where an expression can appear. This feature can **eliminate** the need to pollute your code with unnecessary names when a function isn’t going to be referenced from multiple places within the code. **Functions** are the fundamental building blocks for **reusable code libraries**.

**You can **reuse code**: Define the code once, and use it many times.You can use the same code many times with different arguments, to produce different results.**

## Function Declaration
A JavaScript function is defined with the `function` keyword, followed by a name, followed by parentheses ().

- **Function names** can contain letters, digits, underscores, and dollar signs (same rules as variables).

- **The parentheses** may include parameter names separated by commas:
(parameter1, parameter2, ...).

- **The code** to be executed, by the function, is placed inside curly brackets: {}.

```javascript
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
``` 
> A **Function** is much the same as a Procedure or a Subroutine, in other programming languages.

### Example : 
the following code defines a simple function named `square`:

```javascript 
function square(number) {
  return number * number;
}
```
The function `square` takes one parameter, called `number`. The function consists of one statement that says to return the parameter of the function (that is, `number`) multiplied by itself. 
The statement `return` specifies the value returned by the function:

```javascript
return number * number;
``` 

## Invoking a Function

**Functions** execute when the function is **called**. This process is known as **invocation**. You can invoke a function by referencing the function name, followed by an open and closed parenthesis: ().

To **invoke** our function in the previous example, we call it, while passing in the singular parameter. Here I am calling this function with the number `3`:

```javascript
 square(3);
 // 9
```
If your function has **no parameters**, you can invoke it with an empty set of parenthesis:

```javascript
function logStmt1(){
  console.log('The first statment');
}
logStmt1();
// The first statment
```

## Parameters vs. Arguments 
If you’re new to JavaScript, you may have heard the terms parameters and arguments used interchangeably. While very similar, there is an important distinction to make between these two keywords.

**Parameters** are used when defining a function, they are the names created in the function definition. In fact, during a function definition, we can pass in up to 255 parameters! **Parameters** are separated by commas in the ().Here’s an example with two parameters — param1 & param2:

```javascript
const param1 = true;
const param2 = false;
function twoParams(param1, param2){
  console.log(param1, param2);
}
```
**Arguments**, on the other hand, are the values the function receives from each parameter when the function is **invoked**. In the above example, our two arguments are `true & false`.

```javascript
twoParams(true,false); 
```

Function **parameters** are listed inside the parentheses () in the function definition.  
Function **arguments** are the values received by the function when it is invoked.   
Inside the function, the arguments (the parameters) behave as local variables.   

### Example : 
This example calls a function to convert tempreture degree from Fahrenheit to Celsius:

```javascript
// use fahrenheit as parameter 
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
// invoke toCelsius function and pass `77` as an argument
toCelsius(77); // 25
``` 
## Function expression
While the function declaration above is syntactically a statement, functions can also be created by a function expression.

The `function` keyword can be used to define a function inside an expression.
You can also define functions using the Function constructor and a function declaration.

### Example 1:

```javascript
var x = function(y) {
   return y * y;
};
// call it 
x(5); // 25
```

### Example 2 :
```javascript 
const getRectArea = function(width, height) {
  return width * height;
}
// call it easily by 
console.log(getRectArea(3,4)); // 12
```

### Syntax :

```javascript 
let myFunction = function [name]([param1[, param2[, ..., paramN]]]) {
   statements
};
```
- **name** [Optional]:   
The function name. Can be omitted, in which case the function is anonymous. The name is only local to the function body.   
- **paramN** [Optional]:   
The name of an argument to be passed to the function.
- **statements** [Optional]:    
The statements which comprise the body of the function.

As of ES2015, you can also use arrow functions

### Function Return  
When JavaScript reaches a `return` statement, the function will stop executing.
If the function was invoked from a statement, JavaScript will **"return"** to execute the code after the invoking statement.

Functions often compute a `return` value. The `return` value is **"returned" back to the "caller"**:

### Example :
```javascript
// Calculate the product of two numbers, and return the result:

var x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}
// The result in x will be: 12
```

## Returning value vs console.log()

`return` evaluates its argument (if supplied) and ends the execution of the containing function immediately.

`console.log` evaluates its argument and prints it, continuing the execution of the function it's called from.

### Example : 

```javascript
function print_number() {
  console.log('one');
  return;
  console.log('two');
}
```
If you then call `print_number()`, you'll see the output `one`, but you won't see the output `two`, because `return` ends execution of `print_number` before it can get to console.log('two');

