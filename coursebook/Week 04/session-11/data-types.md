### <a id="datatypes">Data Types in JavaScript:</a>

- String
- Number
- Boolean
- null
- undefined
- Symbol (new in ES2015)
- Object
   - Function
   - Array
   - Date
   - RegExp


javaScript is known as **a "weakly" typed language**. What this means is that when you create variables and assign them values, you do not have to specify the type of data you are working with like statically (or strongly) typed languages, like Java and C++, you do need to specify the type.

Now let's look at data types a little more.

### String 
a string is a set of characters enclosed in quotes. A string can be defined using single or double quotes :
```javascript
let morningGreeting = 'Good Morning !'; //using single quotes
let EveningGreeting = "Good Evening !"; // using double quotes
```
So what is the difference between the two ways of initializing a string? Well, first of all, if you want quotes in your string, it's nice to have another option to start and end the string:

```javascript
let phrase = 'Alex said, "I haven\'t been to Network", the other day.';
```
What would happen if you try to use double quotes to create the previous string instead of using single quotes? `Try it in your console`

**Notice** there is a backslash before the single quote in haven't. It's called escape character and it tells JavaScript that the single quote in the string should not be used to end the string. `Try removing the backslash from the string and seeing what happens in your JavaScript console.`

**To find the length of a string (in code units), access its length property:**
```javascript
'hello'.length; // 5
```
### Number 
JavaScript numbers can be positive,negative or decimal numbers:

```javascript
let positiveNumber = 5;
let negativeNumber = -5;
let decimalNumber= 3.14159265;
```
The standard **arithmetic operators** are supported, including addition, subtraction, modulus (or remainder) arithmetic, and so forth. 
```javascript
let a = 2 + 3; // addition
let b = 4.2 - 0.2; // subtraction
let x = 5 * 10; // multiplication  
let y = 100 / 4 //division
let z = 10 % 3; //modulus 
```
There's also a **built-in object** that we did not mention earlier called Math that provides advanced mathematical functions and constants:
```javascript
Math.sin(3.5);
let circumference = 2 * Math.PI * r;
let a = 4.5;
let b = 5.9;
let c = Math.sqrt(a * a + b * b); 
```

JavaScript also has the special values Infinity and -Infinity:
```javascript
 50 / 0; //  Infinity
-50 / 0; // -Infinity
```
You can test for Infinity, -Infinity values using the built-in **isFinite()** function:
```javascript
isFinite(1 / 0); // false
isFinite(-Infinity); // false

```
### Boolean 
A boolean type can only be in one of two states, `true` or `false` (both of which are keywords) . 

```javascript
let pizzaIsGood = true;
let pizzaIsBad = false;

```
Boolean types are a very useful tool for controlling our program. For example, if a user is signed in, you might want to show them a link to update their profile; but if a user is not logged in, you'd probably just want to show them a sign-in link. This sort of behavior, where the code that gets executed is conditioned on something else, happens all the time in programming. We'll learn more about how to deal with these situations in the next session.

### null 
a value that indicates a deliberate non-value (and is only accessible through the null keyword).It signifies an intentional absence of data.
```javascript
let secondAddress = null;
```

### undefined
a value of type undefined that indicates an uninitialized variable — that is, a value hasn't even been assigned yet. 
```javascript
let noValue;  // The value here will be undefined
```
also you can also explicitly set a variable to undefined:
```javascript
let favoriteFood = "Candy";
// Changed your mind
let favoriteFood = undefined;
```
### Symbol
 The Symbol() function returns a value of type symbol, **Every symbol value returned from Symbol() is unique** .  A symbol value may be used as an identifier for object properties; this is the data type's primary purpose.
 To create a new primitive symbol, you write Symbol() with an optional string as its description:
 ```javascript
let sym1 = Symbol()
let sym2 = Symbol('foo')
Symbol('foo') === Symbol('foo')  // false, every one had unique value.
 ```

### Figuring out a variable's type in JavaScript
In JavaScript, we have a keyword called **typeof** that returns the type of the variable 
```javascript
typeof "";         // "string"
typeof 10;         // "number"
typeof true;       // "boolean"
typeof Symbol();   //  "symbol"
typeof undefined;  // "undefined"
typeof null;       // hmmm, this is not what we expect, it returns "object"!
```

### Converting between types
Sometimes you'll need to convert a value from one type to another. For example, maybe you want to do some math on a couple of numbers, but you get the numbers from a form and they have a value of string so you need to convert this string to number then !

#### Examples: 

**Converting to a number**

There are several ways you can convert a value to a number. One way is to parse the number, using **parseInt**, **parseFloat** or **Number function** that it doesn't parse, it simply tries to convert the entire string directly to a number.

```javascript
parseInt("8"); // 8
parseFloat("8"); // 8
parseInt("3.14"); // 3
parseFloat("3.14"); // 3.14
parseInt("5.7hello"); // 5
parseFloat("5.7hello"); // 5.7
parseInt("w3.whateverString"); // NaN (not a number)
parseFloat("w3.whateverString"); // NaN (not a number)
Number("2"); // 2
Number("3.14"); // 3.14
Number("2.whateverString"); // NaN 
Number("w3.whateverString"); // NaN
```
**Converting to a string**

The **toString** method will convert any value which is not `undefined` or `null` into a string. 

```javascript
let num = 2;
let bool = false;

num.toString(); // "2";
bool.toString(); // "false";

```
