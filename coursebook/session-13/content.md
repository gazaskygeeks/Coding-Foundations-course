
## <a href='#scope' id='scope'>Scopes </a>

JavaScript has a feature called Scope.Understanding scope will make your code stand out, reduce errors and help you make powerful design patterns with it.

**What is Scope?**

Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.

**Scope in JavaScript**

In the JavaScript language there are two types of scopes:

- Global Scope
- Local Scope

Variables defined inside a function are in local scope while variables defined outside of a function are in the global scope. Each function when invoked creates a new scope.

> Lets discuss them in details.

**1. Global Scope**

When you start writing JavaScript in a document, you are already in the Global scope. There is only one Global scope throughout a JavaScript document. A variable is in the Global scope if it's defined outside of a function.

**Example (1):**

```javascript
// the scope is by default global

var name = 'Hammad';
```

- Variables inside the Global scope can be accessed and altered in any other scope.

**Example (2):**

```javascript
var name = 'Hammad';

console.log(name); // logs 'Hammad'

function logName() {
    console.log(name);  // 'name' is accessible here and in everywhere else
}

logName(); // logs 'Hammad'

```

**2. Local Scope**

Variables defined inside a function are in the local scope. Each function has its own scope, and any variable declared within that function is only accessible from that function and any nested functions.

```javascript
Explaination :

// Global Scope
function someFunction() {
    // Local Scope #1
    function someOtherFunction() {
        // Local Scope #2
    }
}

// Global Scope
function anotherFunction() {
    // Local Scope #3
}
// Global Scope
```

```javascript
Example (1) :

console.log(carName)
// code here can NOT use carName
// logs : 'Uncaught ReferenceError: carName is not defined'

function myFunction() {
  var carName = "Volvo";
  console.log(carName)

  // code here CAN use carName
  // logs : Volvo

}
```

**[Click here for more explaination](https://scotch.io/tutorials/understanding-scope-in-javascript#toc-scope-in-javascript)**

## <a href='#variable' id='variable'>Var, let and const- what's the difference ?

</a>
variable
One of the features that came with ES6 is addition of ``` let ``` and ``` const ``` which can be used for variable declaration. The question now is, what makes them different from ``` var ``` which has been in use ?

> In this workshop, var, let and const will be discussed with respect to their scope, use and hoisting.

**1. VAR**

Before the advent of ES6, var declarations ruled as King. There are issues associated with variables declared with var though. That is why it was necessary for new ways to declare variables to emerge. First though, let us get to understand var more before we discuss one of such issues.

- Scope of var :

  var declarations are globally scoped or function/locally scoped.

```javascript
// Here, greeter is globally scoped because it exists outside a function while hello is function scoped. So we cannot access the variable hello outside of a function.

 var greeter = "hey hi";

    function newFunction() {
        var hello = "hello";
    }
```

- Var variables can be re-declared and updated :


    That means that we can do this within the same scope and won't get an error.

```javascript
// Re-declare var

Example (1) :

    var greeter = "hey hi";
    var greeter = "say Hello instead";
```

```javascript
// Update var

Example (2) :

    var greeter = "hey hi";
    greeter = "say Hello instead";

```

- Hoisting of var
  Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. What this means is that if we do this:

```javascript
 console.log (greeter);
    var greeter = "say hello"
```

It is interpreted as this

```javascript
  var greeter;
    console.log(greeter); //greeter is undefined
    greeter = "say hello"
```

So var variables are hoisted to the top of its scope and initialized with a value of undefined.

- Problem with var

  There's a weakness that comes with var. I'll use the example below to explain this.

```javascript
  var greeter = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead";
    }

    console.log(greeter) //"say Hello instead"
```

So, since times > 3 returns true, greeter is redefined to "say Hello instead". While this is not a problem if you knowingly want greeter to be redefined, it becomes a problem when you do not realize that a variable greeter has already been defined before.
If you have use greeter in other parts of your code, you might be surprised at the output you might get. This might cause a lot of bugs in your code. This is why the let and const is necessary.

**2. LET**

Let is preferred for variable declaration now. It's no surprise as it comes as an improvement to the var declarations. It also solves this problem that was raised in the last subheading. Let's consider why this is so.

- Let is block scoped :

  A block is chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block. So a variable declared in a block with the let is only available for use within that block. Lets explain this with an example :

```javascript
Example (1) :

   let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);//"say Hello instead"
    }
   console.log(hello) // hello is not defined
```

We see that using hello outside its block(the curly braces where it was defined) returns an error. This is because let variables are block scoped .

- Let can be updated but not re-declared.

  Just like var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.

```javascript
    let greeting = "say Hi";
    greeting = "say Hello instead";
```

This will return an error :

```javascript
let greeting = "say Hi";
    let greeting = "say Hello instead";//error: Identifier 'greeting' has already been declared
```

However, if the same variable is defined in different scopes, there will be no error.

```javascript
 let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting);//"say Hello instead"
    }
    console.log(greeting);//"say Hi"
```

**Why is there no error in the previous example ?**

This is because both instances are treated as different variables since they have different scopes.

- Hoisting of let

  Just like var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.

**3. CONST**

Variables declared with the const maintain constant values. const declarations share some similarities with let declarations.

- Const declarations are block scoped :

  Like let declarations, const declarations can only be accessed within the block it was declared.

- Const cannot be updated or re-declared :

  This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const, we can neither do this :

  ```javascript
   const greeting = "say Hi";
   greeting = "say Hello instead";//error : Assignment to constant variable.
  ```

  nor this :

  ```javascript
   const greeting = "say Hi";
   const greeting = "say Hello instead";//error : Identifier 'greeting' has already been declared
  ```

- Hoisting of const

      Just like let, const declarations are hoisted to the top but are not initialized.

## <a href='#loops' id='loops'>Loops </a>

Loops are used to execute the same block of code again and again, as long as a certain condition is met. The basic idea behind a loop is to automate the repetitive tasks within a program to save the time and effort.

### Kinds of Loops: 

JavaScript supports different kinds of loops:
- **for** — loops through a block of code until the counter reaches a specified number.
- **while** : loops through a block of code while a specified condition is true.
- **do…while** — loops through a block of code once; then the condition is evaluated. If the condition is true, the statement is repeated as long as the specified condition is true.
- **for…in** — loops through the properties of an object.
- **for…of** — loops over iterable objects such as arrays, strings, etc.

### The for Loop

The `for` loop repeats a block of code as long as a certain condition is met. It is typically used to execute a block of code for certain number of times. Its syntax is:

```javascript
for(initialization; condition; increment) {
    // Code to be executed
}
```

The parameters of the `for` loop statement have following meanings:

- **initialization** : it is used to initialize the counter variables, and evaluated once unconditionally before the first execution of the body of the loop.

- **condition** — it is evaluated at the beginning of each iteration. If it evaluates to true, the loop statements execute. If it evaluates to false, the execution of the loop ends.

- **increment** — it updates the loop counter with a new value each time the loop runs.

### **Example:**

```javascript 
for(let i=1; i<=5; i++) {
    console.log("The number is " + i );
}
```
The previous example defines a loop that starts with `i=1`. The loop will continued until the value of variable `i` is less than or equal to 5. The variable `i` will increase by 1 each time the loop runs.

### The while Loop:  

The `while` loop loops through a block of code as long as the specified condition evaluates to true. As soon as the condition fails, the loop is stopped. The generic syntax of the `while` loop is:

```javascript 
while(condition) {
    // Code to be executed
}
```
### **Example:**

```javascript
let i = 1;
while(i <= 5) {    
    console.log("The number is " + i );
    i++;
} 
```
The previous example defines a loop that will continue to run as long as the variable `i` is less than or equal to 5. The variable `i` will increase by 1 each time the loop runs.

### The do...while Loop
The `do-while` loop is a variant of the `while` loop, which evaluates the condition at the end of each loop iteration. With a `do-while` loop the block of code executed once, and then the condition is evaluated, if the condition is true, the statement is repeated as long as the specified condition evaluated to is true. The generic syntax of the `do-while` loop is:

```javascript
do {
    // Code to be executed
}
while(condition);
``` 

### **Example:**

```javascript
let i = 1;
do {
    console.log("The number is " + i );
    i++;
}
while(i <= 5);
```
The JavaScript code in the previous example defines a loop that starts with i=1. It will then print the output and increase the value of variable i by 1. After that the condition is evaluated, and the loop will continue to run as long as the variable i is less than, or equal to 5.

### Difference Between while and do...while Loop

The `while` loop differs from the `do-while` loop in one important way — with a `while` loop, the condition to be evaluated is tested at the beginning of each loop iteration, so if the conditional expression evaluates to false, the loop will never be executed.

With a `do-while` loop, on the other hand, the loop will always be executed once even if the conditional expression evaluates to false, because unlike the `while` loop, the condition is evaluated at the end of the loop iteration rather than the beginning.