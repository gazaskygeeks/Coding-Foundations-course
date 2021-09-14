### <a id="variables">Variables and Constants</a>
**What do we mean by the word variable?**

Variable is a place where we can store our data, and we can do that using some special keywords like `var`, `let`, and `const` for constant "variable".

Let's assume that we have a person called `Ali` and his age is `30` and we want to store his age in our program. As we said, we have the variable which acts as a place to store our data so let's see how we will do that with the different ways of defining variables in JavaScript:

- **var**:
    ```js 
    var age = 30;
    ``` 

- **let**:
  ```js
  let age = 30;
  ```
- **const**:
  ```js
  const age = 30;
  ```
**So our steps of storing a value in a variable are:**

1. First, we write down one of the three ***keywords*** `var`, `let`, or `const`.

1. Then, we define the ***name*** of the variable which is `age` in our case.
   > 💡 You can name your variable whatever name you want but we need to follow a few rules mentioned below

1. Then to assign a value to a variable we use the single assignment operator `=` .

1. The final step is to assign the ***value*** which in this case the number `30` to the variable `age`.

<br>

**We can also store the value in two steps:**

1. Define the variable name (declaring step).
    ```js 
    var age;
    ``` 
1. Assign/Update the value `30` to the variable `age` (assigning step).
   ```js
    age = 30;
   ```
   >💡 Because we defined the variable `age` on step 1 so no need to use the keyword `var` again with step 2

<br>

**The general syntax for creating a variable:**
>var variableName = value;

<br>

> 💡 For now, the same thing we apply for defining the variable with `var` is also applied to `let`, and we will see the difference between `var` and `let` in later sessions.

<br>

**Now, let's see some examples**

```js
var x = 10; // declare variable x and assign the value 10 to x
x = 11; // re-assign the value of x to be 11

console.log(x); // print the value of x which is 11

let y = 20;

y = 10; // re-assign the value of y to be 10

console.log(y) // print 10
```

## But what about `const`?
We use const to define a constant variable, once we assign a value to the variable then we can't change it later and hence the name `const`

**Example**

```js
const x = 10; 

x = 20; // Error: Assignment to constant variable

const y; // Error : Missing initializer in const declaration

```

As we said, it is constant and we can't give it(re-assign) a different value to it, and also we can't declare a variable with `const` and not giving it a value because if we did that we wouldn't be able to give it a value later since it's constant and therefor the variable would be useless. And so this is the difference between `const` and the other two `(var and let)`

## When to use `var`, `let`, and `const`?

Nowadays it is "recommended" to use `let` and `const` instead of `var` (we will see why later). Use `let` whenever you are planning on changing the value of the variable, and `const` when you are planning on keeping the value as it is.

<br/>

### Rules for Naming Variables
JavaScript has only a few rules for variable names:

* Variable names are case sensitive:
  
  > `myName` and `myname` are two different variables

* Variable name ***must*** start with a letter, an underscore(_), or a dollar sign($) and you can't use numbers as the first character.

* Variable name must not contain symbols, spaces or any other punctuation marks.

* You can't use one of JavaScript's **reserved words** as a variable name.

Examples

```js
let b = 10;
let B = 10;

//valid variables name
let name;
let apple3;
let interestRate;
let _age;
let $myage;

//Invalid
let 3amel; // started with a number
let interest-rate; // dash (-)
let my name;
let my'name;

```

* Also, one of the best practices in naming variables in javascript is to follow the [camelCase](https://en.wikipedia.org/wiki/Naming_convention_(programming)) convention

Examples

```js
let myPlayer;
let favFootballTeam;
```

## Final words about `let` and `const`

`let` and `const` were introduced with the release of ECMAScript 2015, commonly known as ES6. So you are highly likely to see old applications that don't contain `let` and `const`.

## Practice Time 👨‍💻

Follow the following [instructions](https://repl.it/@CodeAcademy1/Declaring-Variables#instructions.md), then write your code inside the [index](https://repl.it/@CodeAcademy1/Declaring-Variables#index.js) file.

