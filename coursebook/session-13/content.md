
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

```javascript
Example (1) :

// the scope is by default global

var name = 'Hammad';
```

- Variables inside the Global scope can be accessed and altered in any other scope.

```javascript
Example (2) :

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

Loops are handy, if you want to run the same code over and over again, each time with a different value.
Often this is the case when working with arrays:

**instead of writing**

```javascript
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";
```
**you can write**
```javascript
let i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
```
### Kinds of Loops: 
JavaScript supports different kinds of loops:
- **for** : loops through a block of code a number of times.
- **while** : loops through a block of code while a specified condition is true.
- **do/while** : loops through a block of code while a specified condition is true.

