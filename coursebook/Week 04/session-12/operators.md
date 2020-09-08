# Types of Operators in JavaScript

JavaScript has many types of operators and at this workshop we will discuss comparison and logical operators.

## <a href='#comparison-operators' id='comparison-operators'>

## Comparison Operators </a>

Comparison operators are used to compare its operands and evaluate down to a single Boolean value of either `True` or `False`.

Comparison operator is also called binary operator because it requires two operands, one before the operator and one after the operator so, we can say that the comparison operator compares its operands and returns a logical value based on whether the comparison is true.The operands can be numerical, string, logical, or object values.

### General Syntax

`operand1` **operator** `operand2`

### Comparison Operators have two types

#### 1- Strict comparison

| Operator |         Description         |   Example   | Result |
| :------: | :-------------------------: | :---------: | :----: |
|   ===    |   Equal in value and type   | `1 === '1'` | false  |
|   !==    | Not equal in value and type | `1 !== '1'` |  true  |

#### 2- Type-converting comparison (or Abstract)

| Operator |       Description        | Example  | Result |
| :------: | :----------------------: | :------: | :----: |
|    ==    |         Equal to         |  `1==1`  |  true  |
|    !=    |       Not equal to       | `1 != 2` |  true  |
|    >     |       Greater than       | `1 > 2`  | false  |
|    <     |        Less than         | `1 < 2`  |  true  |
|    >=    | Greater than or equal to | `1 >= 1` |  true  |
|    <=    |  Less than or equal to   | `2 <= 1` | false  |

> ### Lets discuss them:

#### 1- A strict comparison is only true if the operands are of the same type and the contents match

- Identity / strict equality (`===`)
  The identity operator returns true if the operands are strictly equal.

```javascript
6 === '6'; // false
2 === 2; // true
```

- Non-identity / strict inequality (`!==`)
  The non-identity operator returns true if the operands are not equal and/or not of the same type.

```javascript
6 !== '6'; // true
3 !== 2; // true
```

#### 2- The more commonly-used abstract comparison converts the operands to the same type before making the comparison

- Equality (`==`)

```javascript
1 == 1; // true
'1' == 1; // true (the string is converted to a number value).

1 == true; // true (true is converted to 1).
0 == false; // true (false is converted to 0).
```

- Inequality (`!=`)

```javascript
1 != 2; // true
1 != '1'; // false
```

#### 3- For relational abstract comparisons, the operands are first converted to primitives, then to the same type, before comparison

```javascript
4 > 3; // true
false <= 0; // true
1 >= true; // true
5 < 2; // false
```

> Note : Keep this note until you start with JavaScript object session but, just to know If an object (object isn't a primitive type) is compared with a number or string, JavaScript attempts to convert the object to a primitive value, a String or Number value.

**[Click to read more about comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)**

### Truthy values VS Falsy values

#### 1. Falsy value : is a value that is considered false when encountered in a Boolean context

| Falsy values                       |
| ---------------------------------- |
| False                              |
| Null : (the absence of any value ) |
| NAN : ( not a number)              |
| Undefined : ( the primitive value) |
| 0 : (The number zero)              |
| Empty string : (`''`,`""`,` `` `)  |

#### 2. Truthy value : All values are truthy unless they are defined as falsy

<a href='#logical-operators' id='logical-operators'>

---

## Logical Operators </a>

Logical operators are typically used with Boolean (logical) values to return a Boolean value.However, they actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they will return a non-Boolean value.

### There are three logical operators in JavaScript

#### 1. `&&` (AND)

The `&&` operation returns the first falsy value or the last value if no falsy value is found.

Example (1) :

```javascript
// Evaluates conditions from left to right.
// For each operand, converts its value to a boolean. If the result is false, it stops the evaluation of the expression and returns the original value of that operand.
// If all operands have been evaluated (i.e. all conditions are truthy), then it returns the last operand value.

a1 = true && true; // t && t returns true
a2 = true && false; // t && f returns false
a3 = false && 3 == 4; // f && f returns false
a4 = 'Cat' && 'Dog'; // t && t returns "Dog"
a5 = false && 'Cat'; // f && t returns false
a6 = 'Cat' && false; // t && f returns false
a7 = '' && false; // f && f returns ''
```

Example (2) :

```javascript
var a = 1;
var b = 2;
var c = 0;
var d = a && b;
console.log(d); // 2 returns last value
var e = c && a;
console.log(e); // 0 returns first falsy value
var f = a && b && c;
console.log(f); // 0 last value
```

#### 2. `||` (OR)

The OR (`||`) operation returns the first truthy value or the last value if no truthy value is found.

```javascript
// Evaluates conditions from left to right.
// For each operand, it converts the value to a boolean. If the result is true, the evaluation of the expression stops and returns the original value of that operand.
// If all operands are evaluated (i.e. all conditions were falsy), then it returns the last operand value.
var a = 2;
var b = 0;

var c = a || b;
console.log(c); // 2 : first truthy value
c = b || a;
console.log(c); // 2 : last value
```

#### 3. `!` (Not)

The not operation (`!`) returns the inverse boolean value of the variable. It is a unary operation, so it operates on single operand.

```javascript
// Converts the operand value to a boolean.

var a = 1;

!a; // return false
```

##### `!!` (Double NOT)

The single `!` converts a value to its truthy or falsely value, which is technically a boolean. But if you need to a real boolean representation of a value for your expression you must convert it to a real boolean value using a double not `!!`.

```javascript
Example (1) :

var a = 1;

!!a; // return true
__________________________________________________

Example(2) :

let v = 0;

v ? true : false  //equals false
!v ? true : false  //equals true
!!v //false

v = 1;

v ? true : false  //equals true
!v ? true : false  //equals false
!!v //true

typeof !!v // boolean
```

**[Click here for more explanation](https://levelup.gitconnected.com/secrets-of-logical-%EF%B8%8F-operator-in-javascript-98efbae5e8aa)**

- #### Operator Precedence:

The below operations are listed based on operator precedence. i.e, ! is higher precedence and || is lower precedence.

1. `!` (NOT)

2. `&&` (AND)

3. `||` (OR)

```javascript
true || (false && false); // returns true, because && is executed first
```

**[Click here for more explanation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)**

---

## <a href='#conditional-statements' id='conditional-statements'>Conditional Statements</a>

In JavaScript we have the following conditional statements :

- if
- else
- else if
- switch

**Lets discuss them:**

### 1. `if` statement

Use `if` to specify a block of code to be executed, if a specified condition is true.

```javascript
// Syntax
if (condition) {
  // block of code to be executed if the condition is true
}

---
// Example:
If the time is less than 20:00, create a "Good day" greeting.

var time = 10;
var greeting;
if (time < 20) {
  greeting = "Good day";
}
```

### 2. `else` statement

Use `else` to specify a block of code to be executed, if the same condition is false.

```javascript
// Syntax
if (condition) {
  // block of code to be executed if the condition is true
} else {
  // block of code to be executed if the condition is false
}

---
// Example:
// If the time is less than 20:00, create a "Good day" greeting, otherwise "Good evening".

var time = 22;
var greeting;
if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

what will happened if we wrote `greeting = "Good evening";` without `else` like this?

```javascript
var time = 22;
var greeting;
if (time < 20) {
  greeting = "Good day";
}
greeting = "Good evening";
```

### 3. `else if` statement

Use `else if` to specify a new condition to test, if the first condition is false

```javascript
// Syntax
if (condition1) {
  // block of code to be executed if condition1 is true
} else if (condition2) {
  // block of code to be executed if the condition1 is false and condition2 is true
} else {
  // block of code to be executed if the condition1 is false and condition2 is false
}
// Conditions order is important here!

---
// Example:
// If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening".

var time = 23;
var greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

### 4. `switch` statement

The `switch` statement executes a block of code depending on different cases. it evaluates an expression.The value of the expression is then compared with the values of each case in the structure. If there is a match, the associated block of code is executed.

Let’s emphasize that the equality check is always strict. The values must be of the same type to match.

```javascript
// Syntax
switch (expression) {
  case x: // if (expression === x)
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
```

#### Switch features

- The `switch` statement is often used together with a `break` or a `default` keyword (or both).
- The `break` keyword breaks out of the switch block. This will stop the execution of more execution of code
- The `default` keyword specifies some code to run if there is no case match.

```javascript
let a = '5';
switch (a) {
  case 3:
    alert('Too small');
    break;
  case 4:
    alert('Exactly!');
    break;
  case 5:
    alert('Too large');
    break;
  default:
    alert("I don't know such values");
}

// result :
alert("I don't know such values");
```

- If `break` is omitted, the program continues execution at the next case in the switch statement.

```javascript
var foo = 0;
switch (foo) {
  case -1:
    console.log('negative 1');
    break;
  case 0:
    console.log(0);
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}

// result : 0, 1
```

- If multiple cases match the provided value, the first case that matches is selected.

```javascript
var foo = 0;
switch (foo) {
  case -1:
    console.log('negative 1');
    break;
  case 0:
    console.log(0);
    break;
  case 0:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}

// result : 0
```

- If there is no `break` then the execution continues with the next cases without any checks.

```javascript
var a = 2 + 2;

switch (a) {
  case 3:
    alert('Too small');
  case 4:
    alert('Exactly!');
  case 5:
    alert('Too big');
  default:
    alert("I don't know such values");
}

// result :

alert('Exactly!');
alert('Too big');
alert("I don't know such values");
```

- Different switch cases share the same code.

```javascript
var foo = 0;
switch (foo) {
  case -1:
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}
```

**[Click here for more examples](https://javascript.info/switch)**

#### When should you use switch instead of if/else statements?

switch is the perfect solution for long, nested if/else statements (cleaner syntax). [read more about this](https://www.geeksforgeeks.org/switch-vs-else/)
