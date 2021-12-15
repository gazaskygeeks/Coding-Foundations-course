## Loops 

Loops are used to execute the same block of code again and again, as long as a certain condition is met. The basic idea behind a loop is to automate the repetitive tasks within a program to save the time and effort.

### Types of Loops: 

JavaScript supports different types of loops:
- **for** : loops through a block of code while a specified condition is true. 
- **while** : loops through a block of code while a specified condition is true.
- **do…while** : loops through a block of code once; then the condition is evaluated. If the condition is true, the statement is repeated as long as the specified condition is true.
- **for…in** : loops through the properties of an object.
- **for…of** : loops over iterable objects such as arrays, strings, etc.

### The for Loop

The `for` loop repeats a block of code as long as a certain condition is met. It is typically used to execute a block of code for certain number of times. Its syntax is:

```javascript
for(initialization; condition; step) {
    // loop body
}
```

The parameters of the `for` loop statement have following meanings:

- **initialization** : it is used to initialize the counter variables, and evaluated once unconditionally before the first execution of the body of the loop.

- **condition** — it is evaluated at the beginning of each iteration. If it evaluates to true, the loop statements execute. If it evaluates to false, the execution of the loop ends.

- **step** — it updates the loop counter with a new value each time the loop runs.

### **Example:**

```javascript 
for(let i=1; i<=5; i++) {
    console.log("The number is " + i );
}
```
The previous example defines a loop that starts with `i=1`. The loop will continue as long as the value of the variable `i` is less than or equal to 5. The variable `i` will increase by 1 each time the loop runs.

#### Let’s examine the `for` statement part-by-part:

----

| part | |  |
| -------- | -------- | -------- |
| begin     | `i = 1`      | Executes once upon entering the loop.     |
| condition     | `i <= 5	`  | Checked before every loop iteration. If false, the loop stops.  |
| body     | `console.log("The number is "+ i )`  | Runs again and again while the condition is truthy.|
| step     | `i++ `      | Executes after the body on each iteration.  |


### The while Loop:  

The `while` loop loops through a block of code as long as the specified condition evaluates to true. As soon as the condition fails, the loop is stopped. The generic syntax of the `while` loop is:

```javascript 
while(condition) {
    // loop body
}
```
While the `condition` is truthy, the code from the `loop` body is executed.

### **Example:**

```javascript
let i = 1;
while(i <= 5) {   // shows 1,then 2,then 3,then 4,then 5  
    console.log("The number is " + i );
    i++;
} 
```
The previous example defines a loop that will continue to run as long as the variable `i` is less than or equal to 5. The variable `i` will increase by 1 each time the loop runs.

A single execution of the loop body is called an _iteration_. The **loop** in the example above makes five _iterations_.

If `i++` was missing from the example above, the loop would repeat (in theory) forever.
In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.

Any expression or variable can be a loop condition, not just comparisons:
the condition is evaluated and converted to a boolean by `while`.

For instance, a shorter way to write `while (i != 0)` is `while (i)`:

```js
let i = 5;
while(i) {   // when i becomes 0, the condition becomes falsy, and the loop stops.
    console.log("The number is " + i );
    i--;
} 
```
### **NOTE** :100: 
```js
 /* Curly braces are not required for a single-line body.
 If the loop body has a single statement, we can omit the curly braces {…}:*/ 

 let i = 5;
 while (i) console.log(i--);

```

### The do...while Loop
The `do-while` loop is a variant of the `while` loop, which evaluates the condition at the end of each loop iteration. With a `do-while` loop the block of code executed once, and then the condition is evaluated, if the condition is true, the statement is repeated as long as the specified condition evaluated to is true. The generic syntax of the `do-while` loop is:

```javascript
do {
    // loop body
} while(condition);
``` 

The loop will first execute the body, then check the condition, and while it’s truthy, execute it again and again.

### **Example:**

```javascript
let i = 1;
do {
    console.log("The number is " + i );
    i++;
}
while(i <= 5);
```
The JavaScript code in the previous example defines a loop that starts with `i=1`. It will then print the output and increase the value of the variable `i` by 1. After that, the condition is evaluated, and the loop will continue to run as long as the variable `i` is less than, or equal to 5.

**Avoid infinite loops.** Make sure the condition in a loop eventually becomes false—otherwise, the loop will never terminate! The statements in the following while loop execute forever because the condition never becomes false:

```javascript 
// Infinite loops are bad!
while (true) {
  console.log('Hello, world!');
}
```
### Difference Between while and do...while Loop

The `while` loop differs from the `do-while` loop in one important way — with a `while` loop, the condition to be evaluated is tested at the beginning of each loop iteration, so if the conditional expression evaluates to false, the loop will never be executed.

With a `do-while` loop, on the other hand, the loop will always be executed at least once even if the conditional expression evaluates to false because unlike the `while` loop, the condition is evaluated at the end of the loop iteration rather than the beginning.

### The general loop algorithm works like this:

```js
Run begin
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...
```

That is, **begin** executes once, and then it iterates: after each **condition** test, **body** and **step** are executed.

### break statement

Normally, a loop exits when its condition becomes falsy.
But we can force the exit at any time using the special `break` directive.

`break` terminates the innermost enclosing while, do-while, for, or switch immediately and transfers control to the following statement. The syntax of the `break` statement looks like this:

```javascript 
break;
```

### **Example:**

```javascript
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
```
The previous example iterates through the numbers from 0 to 9 until it reaches to the number 3, it will terminates loop and getting out from it.

### continue statement

The `continue` statement can be used to restart a while, do-while, for. `continue` terminates the current iteration of the innermost enclosing while, do-while, or for statement and continues execution of the loop with the next iteration. In contrast to the `break` statement, `continue` does not terminate the execution of the loop entirely. In a `while` loop, it jumps back to the condition. In a `for` loop, it jumps to the increment-expression.

The syntax of the `continue` statement looks like the following:

```javascript
continue;
```
### **Example:**

```javascript
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
```

In This example skips the value of 3 and continues with the next iteration in the loop.

------
For recap, let's check these examples:

### **Example:**

```javascript
for (var x=0; x<=15; x++) {
        if (x === 0) {
            console.log(x +  " is even");
        }
        else if (x % 2 === 0) {
            console.log(x + " is even");   
        }
        else {
            console.log(x + " is odd");
        }
}
```
what do you think previouse code do? 

that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

### **Example:**

```javascript
function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

const result = reverseString('Hello World!');
console.log(result);
```
what do you think previouse code do? 
