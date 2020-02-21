### Introduction to JavaScript
JavaScript is a popular web-based programming language that powers the dynamic behavior on most websites it also considered as a very powerful client-side scripting language. JavaScript is used mainly for enhancing the interaction of a user with the webpage. Alongside HTML and CSS, it is a core technology that makes the web run.
JavaScript can be used to change the status of a button when it is clicked on, create a chat window at the bottom of your screen, or even create a web-based game. It's also being used widely in game development and Mobile application development.

![](https://www.guru99.com/images/JavaScript/javascript1_1.png))


### Brief History 
JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then the name was changed to JavaScript three months later. This was somewhat of a marketing move at the time, with Java being very popular around then.

### ECMAScript
Often in the JavaScript community you'll hear the word ECMAScript thrown around as well, as in ECMAScript 2015 (abbreviated to ES2015, or sometimes ES6). So what's the difference between ECMAScript and JavaScript? There are plenty of resources online discussing the difference, but essentially **ECMAScript is a standard. JavaScript is an implementation of that standard.** The standard dictates certain features and sets of functionality, but there can be different implementations that follow the standard. There are many different JavaScript engines that implement the ECMAScript standard and are competing for dominance; the most popular right now is Google's V8 engine, but you can see a list of others [here](https://en.wikipedia.org/wiki/JavaScript_engine).

JavaScript standardization is now run by a committee called TC39, which governs how ECMAScript features are designed, starting with ECMAScript 2016 (or what is called ES2016).

### How to Run Javascript 
Being a scripting language, JavaScript cannot run on its own. In fact, the browser is responsible for running JavaScript code. When a user requests an HTML page with JavaScript in it, the script is sent to the browser and it is up to the browser to execute it. The main advantage of JavaScript is that all modern web browsers support JavaScript. So, you do not have to worry about whether your site visitor uses Internet Explorer, Google Chrome, Firefox or any other browser. JavaScript will be supported. Also, JavaScript runs on any operating system including Windows, Linux or Mac.

### Tools For JavaScript Development
To help you start working with JavaScript, you should install a few tools:

- Web Browser 
you can use any browser (e.g. Google chrome, Firefox or Safari) but we highly encourage you to use **Google Chrome** for all of your web development because it has great tools for working with JavaScript in your browser.

- Text Editor
There are many text editors used for development (e.g Sublime,Visual Studio Code (VS code), Bracket, Atom , Notpad++ and others), **VS code** would be our favorite option because it includes built-in JavaScript IntelliSense, debugging, formatting, code navigation, refactorings, and many other advanced language features.

### Where we will be writing most of our JavaScript ?
#### short scripts : 
For most of our short JavaScript examples, we will be using the **Chrome console**. 

**There is two ways to open up the console:**
1- press Ctrl + Shift + J on Windows and Linux or  Option + Command + j on a Mac.
2- right click on the web page, select Inspect, and then move to the tab called Console.

**let's start by alerting a message In the Chrome Console, type the following:**
```javascript=
alert('Welcome in women crash course !');
```
**also type:**
```javascript=
console.log('This is first javascript session');
```


#### long scripts : 
**There are many ways to write long scripts:**

1- **Using an online editor:**
There are a number of websites out there that will let you write a larger chunk of code (e.g. Repl.it , [JS Bin](http://jsbin.com/?html,output), [JS Fiddle](https://jsfiddle.net/), and [CodePen](https://codepen.io/)).These tools are helpful learning tools to use until you get more comfortable combining HTML, CSS, and JavaScript but aren't use to write extensive JavaScript applications.

2- **Adding JavaScript in an HTML file:**
You should place all your JavaScript code within <script> tags (<script> and </script>) if you are keeping your JavaScript code within the HTML document itself. This helps your browser distinguish your JavaScript code from the rest of the code. 

```HTML 
<html>
<head>
<title>My First JavaScript code!!!</title>
<script type="text/javascript">
    alert("Hello World!");
</script>
</head>
<body>
</body>
</html>
```
3- **Separating JavaScript and HTML in 2 Files:**
This is a better practice, especially when your HTML and JavaScript files get longer. To do this, you still need to include a script tag in your HTML File, but this tag should link to a separate JavaScript file.Here's how you could do that if you have a file called test.js:

```HTML
<!DOCTYPE html>
<html>
<head>
<title>JavaScript Test Page</title>
</head>
<body>

<p>This is to test linking javascript file withing HTML file</p>
<script src="test.js"></script>
</body>
</html>
```
**and in your test.js file type your scripts for example:** 
```javascript=
alert('Coming to you from test.js!');
```
### Variables 
The word "variable" may be most familiar to you from math class, when you often use letters like x or y to represent numbers.This idea also exists in programming languages.
Using variables lets us write code that's easier to read and also easier to change. To see why variables are useful, suppose you want to log a set of greetings to the console:

```javascript=
console.log("Hi, Alex!");
console.log("How are you, Alex ?");
console.log("Bye Bye, Alex.");
```
This works fine, but if you want to change the person's name from "Alex" to something else it will be exchausting to change name many times in javascript file but by using variables you have to declare it in one place and change it once. In JavaScript, you initialize variables using the **var** keyword.

**so Let's rewrite the example above to use a variable:** 
```javascript=
var Name = "Alex";
console.log("Hi, " + Name + "!");
console.log("How are you, " + Name + "?");
console.log("Bye Bye, " + Name + ".");
```
##### The `var` word declares a variable, optionally initializing it to a value. 

#### variable Declaration:

#### Syntax: 
> var varname1 [= value1] [, varname2 [= value2] ... [, varnameN [= valueN]]];

##### `varnameN`
Variable name. It can be any legal identifier.  

##### `valueN Optional`
Initial value of the variable. It can be any legal expression. Default value is undefined.

**Examples :**

1- Declaring and initializing variables
```javascript=
var name; // declare a variable
name = 'Alex'; //initializing name variable with a value
var a = 0, b = 0; //Declaring and initializing two variables
var x=1, y=2, z=3; //Declaring and initializing three variables
```
2- Assigning two variables with single string value
```javascript=
var firstLetter = 'A';
var secondLetter = firstLetter;

// ...is equivalent to:

var firstLetter, secondLetter = firstLetter = 'A';
```

#### Variable Scope:
The scope of a variable declared with var is its current execution context, which is either the enclosing function or, for variables declared outside any function, global. If you re-declare a JavaScript variable, it will not lose its value.

Assigning a value to an undeclared variable implicitly creates it as a global variable (it becomes a property of the global object) when the assignment is executed.

**The differences between declared and undeclared variables are:**

1- Declared variables are constrained in the execution context in which they are declared. Undeclared variables are always global.

```javascript=
function x() {
  y = 1;     // Throws a ReferenceError in strict mode.
  var z = 2;
}

x();

console.log(y); // 1
console.log(z); // Throws a ReferenceError: z is not defined outside x.
```
2- Declared variables are created before any code is executed. Undeclared variables do not exist until the code assigning to them is executed.

```javascript=
console.log(x);                // "undefined" or "" depending on browser
console.log('printing...'); // printing...
```
```javascript=
var x = 100;
console.log(x);                // 100
console.log('printing...'); // printing...
```
3- Declared variables are a non-configurable property of their execution context (function or global). Undeclared variables are configurable (e.g. can be deleted).
```javascript=
var x = 100;
y = 200;

delete this.x; // Throws a TypeError in strict mode. Fails silently otherwise.
delete this.y;

console.log(x, y); // Throws a ReferenceError.
// The 'y' property was deleted and no longer exists.
```
Because of these three differences, failure to declare variables will very likely lead to unexpected results. Thus **it is recommended to always declare variables, regardless of whether they are in a function or global scope.**

### Data Types in JavaScript: 
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


javaScript is known as **a "weakly" typed language**. What this means is that when you create variables and assign them to values, you do not have to specify the type of data you are working with.ub like statically (or strongly) typed languages, like Java and C++, you do need to specify the type.

Now let's look at data types a little more.

### String 
a string is a set of characters enclosed in quotes. A string can be defined using single or double quotes :
```javascript=
var morningGreeting = 'Good Morning !'; //using single quotes
var EveningrGeeting = "Good Evening !"; // using double quotes
```
So what is the difference between the two ways of initializing a string? Well, first of all, if you want quotes in your string, it's nice to have another option to start and end the string:

```javascript=
var phrase = 'Alex said, "I haven\'t been to Newyork", the other day.';
```
What would happen if you try to use double quotes to create the previous string instead of using single quotes? `Try it in your console`

**Notice** there is a backslash before the single quote in haven't.it's called escape character and it tells JavaScript that the single quote in the string should not be used to end the string. `Try removing the backslash from the string and seeing what happens in your JavaScript console.`

**To find the length of a string (in code units), access its length property:**
```javascript=
'hello'.length; // 5
```
### Number 
JavaScript numbers can be positive,negative or decimal numbers:

```javascript=
var positiveNumber = 5;
var negativeNumber = -5;
var decimalNumber= 3.14159265;
```
The standard **arithmetic operators** are supported, including addition, subtraction, modulus (or remainder) arithmetic, and so forth. 
```javascript=
var a = 2 + 3; // addition
var b = 4.2 - 0.2; // subtraction
var x = 5 * 10; // multiplication  
var y = 100 / 4 //divison
var z = 10 % 3; //modulus 
```
There's also a **built-in object** that we did not mention earlier called Math that provides advanced mathematical functions and constants:
```javascript=
Math.sin(3.5);
var circumference = 2 * Math.PI * r;
var a = 4.5;
var b = 5.9;
var c = Math.sqrt(a * a + b * b); 
```
A special value called **NaN** (short for "Not a Number") is returned if the string is non-numeric, NaN is toxic: if you provide it as an operand to any mathematical operation, the result will also be NaN:
```javascript=
NaN + 3; // NaN
```
and you can test for NaN using the built-in isNaN() function:
```javascript=
isNaN(NaN); // true
```
JavaScript also has the special values Infinity and -Infinity:
```javascript=
 50 / 0; //  Infinity
-50 / 0; // -Infinity
```
You can test for Infinity, -Infinity and NaN values using the built-in isFinite() function:
```javascript=
isFinite(1 / 0); // false
isFinite(-Infinity); // false
isFinite(NaN); // false

```
### Boolean 
A boolean type can only be in one of two states, `true` or `false` (both of which are keywords) Any value can be converted to a boolean according to the following rules:
1- false, 0, empty strings (""), NaN, null, and undefined all become false.
2- All other values become true.
```javascript=
var pizzaIsGood = true;
var pizzaIsBad = false;

```
You can perform this conversion explicitly using the Boolean() function:
```javascript=
Boolean('');  // false
Boolean(234); // true

```
Boolean types are a very useful tool for controlling our program. For example, if a user is signed in, you might want to show them a link to update their profile; but if a user is not logged in, you'd probably just want to show them a sign-in link. This sort of behavior, where the code that gets executed is conditioned on something else, happens all the time in programming. We'll learn more about how to deal with these situations in the next session.

### null 
a value that indicates a deliberate non-value (and is only accessible through the null keyword).It signifies an intentional absence of data.
```javascript=
var secondAddress = null;
```

### undefined
a value of type undefined that indicates an uninitialized variable — that is, a value hasn't even been assigned yet. 
```javascript=
var noValue;  // The value here will be undefined
```
also you can also explicitly set a variable to undefined:
```javascript=
var favoriteFood = "Candy";
// Changed your mind
var favoriteFood = undefined;
```
### Symbol
 The Symbol() function returns a value of type symbol, **Every symbol value returned from Symbol() is unique** .  A symbol value may be used as an identifier for object properties; this is the data type's primary purpose.
 To create a new primitive symbol, you write Symbol() with an optional string as its description:
 ```javascript=
 let sym1 = Symbol()
let sym2 = Symbol('foo')
Symbol('foo') === Symbol('foo')  // false, every one had unique value.
 ```

### Figuring out a variable's type in JavaScript
In JavaScript, we have a keyword called typeof that returns the type of the variable 
```javascript=
typeof ""; - "string"
typeof 10; - "number"
typeof true; - "boolean"
typeof Symbol(); - "symbol"
typeof undefined; - "undefined"
typeof null; // hmmm, this is not what we expect, it returns "object"!
```

### Converting between types
Sometimes you'll need to convert a value from one type to another. For example, maybe you want to do some math on a couple of numbers, but you get the numbers from a form and they have a value of string so you need to convert this string to number then !

#### Examples: 

**Converting to a number**

There are several ways you can convert a value to a number. One way is to parse the number, using **parseInt**, **parseFloat** or **Number function** that it doesn't parse, it simply tries to convert the entire string directly to a number.

```javascript=
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

The toString method will convert any value which is not undefined or null into a string. 

```javascript=
var num = 2;
var bool = false;

num.toString(); // "2";
bool.toString(); // "false";

```
**Converting to a boolean (!!)**
We'll talk about the **(!)** operator later. but for now, you need to know that **(!!)** will convert a value to its boolean equivalent. Here are a couple of examples:

```javascript=
var greeting = "hi";
var nothing = 0;

!!greeting; // true
!!nothing; // false
```