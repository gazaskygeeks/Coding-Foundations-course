# Function scopes

## What is Scope?
**Scope** determines the **visibility or accessibility** of a variable or other resource in the area of your code.

## Global Scope
There's only **one Global scope** in the JavaScript document. The area **outside** all the functions is consider the global scope and the variables defined inside the global scope can be accessed and altered in any other scopes.

### Example:

```javascript 
//global scope
let fruit = 'apple'
console.log(fruit);        //apple

function getFruit(){
    console.log(fruit);    //fruit is accessible here
}

getFruit();                //apple
```

## Local Scope
Variables declared **inside the functions** become **Local** to the function and are considered in the corresponding **local scope**. **Every Functions has its own scope**. Same variable can be used in different functions because they are bound to the respective functions and are not mutual visible.

### Example: 

```javascript 
//global scope
function foo1(){
    //local scope 1
    function foo2(){
        //local scope 2
    }
}

//global scope
function foo3(){
    //local scope 3
}

//global scope
```

**Local scope** can be divided into **function scope and block scope**. The concept of block scope is introduced in ECMA script 6 (ES6) together with the new ways to declare variables -- const and let.

### Function Scope 
Whenever you **declare a variable in a function**, the variable is **visible only within the function**. You can't access it outside the function. `var` is the keyword to define variable for a function-scope accessibility.

### Example:

```javascript
function foo(){
    var fruit ='apple';
    console.log('inside function: ',fruit);
}

foo();                    //inside function: apple
console.log(fruit);       //error: fruit is not defined
```

### Block Scope 

A **block scope** is the area within **if, switch conditions or for and while loops**. Generally speaking, whenever you see **{curly brackets}, it is a block**. In **ES6**, `const` and `let` keywords allow developers to declare variables in the **block scope**, which means those variables exist only within the corresponding block.

### Example:

```javascript 
function foo(){
    if(true){
        var fruit1 = 'apple';        //exist in function scope
        const fruit2 = 'banana';     //exist in block scope
        let fruit3 = 'strawberry';   //exist in block scope

    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

foo();
//result:
//apple
//error: fruit2 is not defined
//error: fruit3 is not defined
```
## Lexical Scope 
Another point to mention is the lexical scope. **Lexical scope** means the children scope have the access to the variables defined in the parent scope. The children functions are lexically bound to the execution context of their parents.

### Example:

```javascript
function foo1(){
    var fruit1 = 'apple';        
    const fruit2 = 'banana';     
    let fruit3 = 'strawberry';
    function foo2(){
        console.log(fruit1);
        console.log(fruit2);
        console.log(fruit3);
    }
    foo2();
}

foo1();

//result:
//apple
//banana
//strawberry

``` 
## Nested Scopes 

**Variables** defined **inside** a function **cannot be accessed** from anywhere **outside** the function, because the variable is **defined only in the scope of the function**. However, a function can access all variables and functions defined inside the scope in which it is defined.

In other words, a **function** defined in the **global scope** can access all **variables** defined in the **global scope**. A **function defined inside another function** can also access all variables defined in its **parent function**, and any other variables to which the parent function has access.

### Example:

```javascript
// These variables are defined in the global scope
let num1 = 20,
    num2 = 3,
    name = 'John';

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore() {
  let num1 = 2,
      num2 = 3;
  
  function add() {
    return name + ' scored ' + (num1 + num2);
  }
  
  return add();
}

getScore(); // Returns "John scored 5"
```
## Exercise :
solve the question in this [link](https://leetcode.com/problems/reverse-only-letters/ )    
**Note:** 
don't forget to change the language to `javascript` before you start.
