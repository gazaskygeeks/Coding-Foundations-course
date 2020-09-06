### <a id="variables">Variables and Constants</a>
**What do we mean by the word variable?**

Variable is a place where we can store our the data, and we can do that using some special keywords like `var`, `let`, and `const` for constant "variable".

Let's assume that we have a person called `Ali` and his age is `30` and we want to store his age in our program. as we said we have the variable which act as a place to store our data so let's see how we will do that with the different ways of defining variables in JavaScript:

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
So our steps of store a value in a variable are: 
1. We first write down one of the tree ***keywords*** `var`, `let`, or `const`.
2. Then we define the ***name*** of the variable which is `age` in our case.
   > 💡 You can name your variable whatever name you want
3. Then to assign a value to a variable we use the single assignment operator `=` .
4. Final step is to assign the ***value*** which in this case the number `30` to the variable age.

***Note:*** we can also store the value on two steps:
1. define the variable name (declaring step).
    ```js 
    var age;
    ``` 
2. Assign/Update the value `30` to the variable `age` (assigning step).
   ```js
    age = 30;
   ```
   >💡 Because we defined the variable `age` on step 1 so no need to use the keyword `var` again with step 2

**The general syntax creating a variable:**
>var variableName = value;

> 💡 for now the same thing we apply for defining the variable with `var` is also will be applied to `let`, and we will see the difference between `var` and `let` in later sessions.

<br>

**Now let's see some examples**

```js
var x = 10; // declare variable x and assign the value 10 to x
x = 11; // re-assign the value of x to be 11

console.log(x); // print the value of x which is 11

let y = 20;

y = 10;

console.log(y) // print 10
```

## But what about `const`?
we use const to define constant variable, once we assign a value to the variable then we can't change it later and hence the name `const`

**Example**

```js
const x = 10; 

x = 20; // Error: Assignment to constant variable

const y; // Error : Missing initializer in const declaration

```

As we said, it is constant and we can't give it(re-assign) a different value to it, and also we can't declare a variable with const and not giving it  a value because if did that then because it is a constant then we wouldn't be able to give a value later and the variable would be useless and so this is the difference between `const` and the other two `(var and let)`

## When to use `var`, `let`, and `const`?

Nowadays it is "recommended" to use let and const instead of var(we will see why later) but you should use `let` whenever you are planning on changing the value of the variable, and `const` when you are planning on keeping the value as it is.

<br/>

### Rules for Naming Variables
JavaScript has only a few rules for variable names:

* The first character ***must*** be a letter or an underscore (_). You can't use a number as the first character.

* The rest of the variable name can include any letter, any number, or the underscore. You can't use any other characters, including spaces, symbols, and punctuation marks.

* As with the rest of JavaScript, variable names are case sensitive. That is, a variable named `Interest_Rate` is treated as an entirely different variable than one named `interest_rate`.

* There's no limit to the length of the variable name.

* You can't use one of JavaScript's **reserved words** as a variable name. All programming languages have a supply of words that are used internally by the language and that can't be used for variable names because doing so would cause confusion (or worse). Note, too, that JavaScript also has many **keywords** that should be avoided as well.

Examples

```js
let b = 10;
let B = 10;

//valid variables name
let name;
let apple3;
let interestRate;

//Invalid
let 3amel; // started with number
let interest-rate; // dash (-)

```

* Also some of the best practices with naming variable in javascript is to follow the [camelCase](https://en.wikipedia.org/wiki/Naming_convention_(programming)) convention

Examples

```js
let myPlayer;
let faveFootballTeam;
```

## Final words about `let` and `const`

`let` and `const` were introduced with the release of ECMAScript 2015, commonly known as ES6. So you are highly likely to see legacy applications that don't contain `let` and `const`.

