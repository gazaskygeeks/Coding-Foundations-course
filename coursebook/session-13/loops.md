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
The previous example defines a loop that starts with `i=1`. The loop will continue as long as the value of the variable `i` is less than or equal to 5. The variable `i` will increase by 1 each time the loop runs.

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

### break statement

Use the `break` statement to terminate a loop or switch.The syntax of the `break` statement looks like this:

```javascript 
break;
```

`break` terminates the innermost enclosing while, do-while, for, or switch immediately and transfers control to the following statement.

### **Example:**

```javascript
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
```
The previous example iterates through the numbers from 0 to 10 until it reaches to the number 3, it will terminates loop and getting out from it.

### continue statement

The `continue` statement can be used to restart a while, do-while, for. `continue` terminates the current iteration of the innermost enclosing while, do-while, or for statement and continues execution of the loop with the next iteration. In contrast to the `break` statement, `continue` does not terminate the execution of the loop entirely. In a while loop, it jumps back to the condition. In a for loop, it jumps to the increment-expression.

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