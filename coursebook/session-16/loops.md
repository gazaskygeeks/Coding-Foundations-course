## <a href='#loops' id='loops'>Loops: while and for </a>

**Author**: [@Fatmasiam](https://github.com/Fatmasiam)
----

  >Loops are handy, if you want to run the same code over and over again, each time with a different value.
We often need to repeat actions.
For example, outputting goods from a list one after another or just running the same code for each number from 1 to 10.
Loops are a way to repeat the same code multiple times.

## The **“while”** loop:
### The `while` loop has the following syntax:
 ```js
 while (condition) {
  // code
  // so-called "loop body"
}
 ```
While the `condition` is truthy, the code from the `loop` body is executed.

For instance, the loop below outputs i while i < 3:

```js
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  console.log( i );
  i++;
}
```

A single execution of the loop body is called an _iteration_. The **loop** in the example above makes three _iterations_.

If `i++` was missing from the example above, the loop would repeat (in theory) forever.
In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.

Any expression or variable can be a loop condition, not just comparisons:
the condition is evaluated and converted to a boolean by `while`.

For instance, a shorter way to write `while (i != 0)` is `while (i)`:

```js
let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( i );
  i--;
}
```
### **NOTE** :100: 
```js
 /* Curly braces are not required for a single-line body.
 If the loop body has a single statement, we can omit the curly braces {…}:*/ 

 let i = 3;
 while (i) alert(i--);

```


## The **“do…while”** loop
The condition check can be moved below the loop body using the `do..while` syntax:

```js
do {
  // loop body
} while (condition);

```
The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

**For example:**

```js
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

```
This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.

## The **“for”** loop
 The for loop is more complex, but it’s also the most commonly used loop.

### It looks like this:
```js
for (begin; condition; step) {
  // ... loop body ...
}
```

Let’s learn the meaning of these parts by example. The loop below runs `console.log(i);` for `i` from `0` up to (but not including) `3`:

```js
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  console.log(i);
}

```
### Let’s examine the `for` statement part-by-part:

----

| part | |  |
| -------- | -------- | -------- |
| begin     | `i = 0`      | Executes once upon entering the loop.     |
| condition     | `i < 3	`  | Checked before every loop iteration. If false, the loop stops.  |
| body     | `console.log( i )`      | Runs again and again while the condition is truthy.|
| step     | `i ++ `      | Executes after the body on each iteration.  |


### The general loop algorithm works like this:

```js
Run begin
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...
```

That is, **begin** executes once, and then it iterates: after each **condition** test, **body** and **step** are executed.

If you are new to loops, it could help to go back to the example and reproduce how it runs step-by-step on a piece of paper.

Here’s exactly what happens in our case:

```js
// for (let i = 0; i < 3; i++) console.log(i)

// run begin
let i = 0
// if condition → run body and run step
if (i < 3) { console.log(i); i++ }
// if condition → run body and run step
if (i < 3) { console.log(i); i++ }
// if condition → run body and run step
if (i < 3) { console.log(i); i++ }
// ...finish, because now i == 3

```

## Breaking the loop

#### Normally, a loop exits when its condition becomes falsy.

#### But we can force the exit at any time using the special break directive.

#### For example, the loop below asks the user for a series of numbers, `“breaking”` when no number is entered:

```js
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)
  
  sum += value;

}
console.log( 'Sum: ' + sum );
```

The **`break`** directive is activated at the line **`(*)`** if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop. Namely, alert.

The combination “infinite **`loop`** + break as needed” is great for situations when a loop’s condition must be checked not in the beginning or end of the loop, but in the middle or even in several places of its body.

## Continue to the next iteration

The **`continue`** directive is a “lighter version” of **break**. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

We can use it if we’re done with the current iteration and would like to move on to the next one.

The loop below uses **`continue`** to output only odd values:

```js
for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  console.log(i); // 1, then 3, 5, 7, 9
}
```

#### For even values of `i`, the `continue` directive stops executing the body and passes control to the next iteration of `for` (with the next number). So the `console.log(i)` is only called for odd values.


# Summary
### We covered 3 types of loops:

* `while` – The condition is checked before each iteration.
* `do..while` – The condition is checked after each iteration.
* `for (;;)` – The condition is checked before each iteration, additional settings available.
* 
To make an “infinite” loop, usually the `while(true)` construct is used. Such a loop, just like any other, can be stopped with the `break` directive.

If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the `continue` directive.


# Let's have a quick exercise  [Reverse String](https://leetcode.com/problems/reverse-string/)

#### For more information about loops click [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#break_statement) 
