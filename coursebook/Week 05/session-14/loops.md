## <a href='#loops' id='loops'>Loops: while and for </a>

## **Author**: [@Fatmasiam](https://github.com/Fatmasiam)

As we learned previously in the [loop](.session-13/loops) session

> Loops are handy, if you want to run the same code over and over again, each time with a different value.
> We often need to repeat actions.
> For example, outputting goods from a list one after another or just running the same code for each number from 1 to 10.
> Loops are a way to repeat the same code multiple times.

# **NOW** How loops work with arrays:

## The **“while”** loop:

```js
let colors = ["Red", "Yellow", "Orange"];
let i = 0;
while (i < colors.length) {
  // i shows 0, then 1, then 2
  console.log(colors[i]); // this will print the console for colors[0], colors[1], colors[2]
  i++;
}
```

A single execution of the loop body is called an _iteration_. The **loop** in the example above makes three _iterations_.

**If** `i++` was missing from the example above, the loop would repeat (in theory) forever.
In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.

> The following example uses the while loop statement to add 5 random numbers between 0 and 10 to an array:

```js
// create an array of five random number between 1 and 10
let randomNumbers = [];
let count = 0;
const size = 10;

while (count < size) {
  randomNumbers.push(Math.round(Math.random() * 10));
  count++;
  console.log("The current size of the array is " + count);
}

console.log(randomNumbers);
```

In this example: :arrow_double_up:

- First, declare and initialize an array.
- Second, add a random number between 0 and 10 in each loop iteration inside the `while` statement. If the value of the `count` equals the value of the `size` variable, the loop stops.

## The **“do…while”** loop

The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

**For example:**

```js
let alpha = ["A", "B"];
let i = 0;
do {
  console.log(alpha[i]); // print the alpha[0], alpha[1]
  i++;
} while (i < alpha.length);
```

**Refreshing Question** :keycap_star: ==> separate[explain] the work for the previous example if the condition will `i <= alpha.length`

## The **“for”** loop

The for loop is more complex, but it’s also the most commonly used loop.

```js
let names = ["Fiona", "Sama", "Diana"]; /*condition*/ /*step*/
/*begin*/ for (let i = 0; i < names.length; i++) {
  // i shows 0, then 1, then 2
  console.log(names[i]); // names[0], names[1], names[2]
}
```

Here’s exactly what happens in our case:

```js
// for (let i = 0; i < names.length; i++) console.log(names[i])

// run begin
let i = 0;
// if condition → run body and run step
/* i = 0*/
if (i < names.length) {
  console.log(names[0]);
  i++;
}

// if condition → run body and run step
/* i = 1*/
if (i < names.length) {
  console.log(names[1]);
  i++;
}

// if condition → run body and run step
/* i = 2*/
if (i < names.length) {
  console.log(names[2]);
  i++;
}

/* i = 3*/
// ...finish, because now i == 3
```

# Summary

### We covered 3 types of loops:

- `while` – The condition is checked before each iteration.
- `do..while` – The condition is checked after each iteration.
- `for (;;)` – The condition is checked before each iteration, additional settings available.
- To make an “infinite” loop, usually the `while(true)` construct is used. Such a loop, just like any other, can be stopped with the `break` directive.

If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the `continue` directive.

# Let's have a quick exercise [Reverse String](https://leetcode.com/problems/reverse-string/)
