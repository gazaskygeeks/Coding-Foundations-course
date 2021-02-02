# Asynchronicity in Javascript

## Introduction
Javascript is a single threaded language.

This means it has one call stack and one memory heap synchronously.

In simpler terms, it means that every piece of code will only be executed after the previous code's execution is complete, you **cannot** - like Java for example - distribute your work load on multiple threads.

But this could be quite troubling, as you could in very common cases want your code to complete it's execution while some other task is running, say for example, you want to fetch some data from an API, you don't want your website to freeze until the request is complete, you want to keep doing things and when handle the request when it's complete.

To solve this issue, Javascript get's help from WebAPIs provided by the browser (Or C++ APIs in case of NodeJS) using "The event loop".

## Event loop

![alt](https://miro.medium.com/max/1600/1*iHhUyO4DliDwa6x_cO5E3A.gif)

When a Javascript code encounters a non-blocking (asyncrounous) function, it pushes that function to execute via the WebAPIs, and out of the main stack execution, when the async function is completed, the API pushes it to the callback queue, which empties back to the stack **only when the stack is empty**.

For example:

```js
console.log('1');

setTimeout(
  function () { console.log('2') },
  5000
)

console.log('3');
```
This code will work as following:
1. log '1' (So far so good)
2. Encountered a set timeout, an async function, hand it to the WebAPI, and it will process the state of the function there
3. log '3'
4. The WebAPI will wait for 5 seconds (5000 milliseconds), then it will push the function inside the `setTimeout` to the callback queue
5. The callback queue will check if the stack is empty, and it is since we've executed all synchronous statements
6. The callback queue will push to the stack
7. log '2'
Output:
```
1
3
2
```

So, async functions will be processed by the WebAPI, and when they're done, they'll be handed to the callback queue, and after the stack is cleared, it'll pass it to the main stack again.

## Asyncrounous patterns

### Promise

```js
doSomeCoolThingsInWebsite();

const fetchPizza = new Promise((resolve, reject) => {
  try {
    const pizza = synchronousPizzaCall();
    resolve(pizza);
  } catch (error) {
    reject(error);
  }
})

function whenThePizzaGetsHere (pizza) {
  // bon appetit
}

function afterWeAteThePizza (leftovers) {
  // Give to dog
}

function whenTheDeliveryCrashes (crashInfo) {
  // OH NO!
}

fetchPizza()
  .then(whenThePizzaGetsHere)
  .then(afterWeAteThePizza)
  .catch(whenTheDeliveryCrashes);

doSomeMoreCoolThingsInWebsite();
```

In this example, we're calling some function `synchronousPizzaCall`, and when that call is done, we will execute the functions `whenThePizzaGetsHere`, `afterWeAteThePizza` in case of success or `whenTheDeliveryCrashes` in case of errors on the response of that call.
The benefit of this is that we are able to continue the execution of our cool code even when the request is not complete yet or if it took longer than we're comfortable with.

Take this following code:
```js
doSomeCoolThingsInWebsite();


function whenThePizzaGetsHere (pizza) {
  // bon appetit
}

function afterWeAteThePizza (leftovers) {
  // Give to dog
}

function whenTheDeliveryCrashes (crashInfo) {
  // OH NO!
}

try {
  const pizza = synchronousPizzaCall();
  const leftovers = whenThePizzaGetsHere(pizza);
  afterWeAteThePizza(leftovers);
} catch (crashInfo) {
  whenTheDeliveryCrashes(crashInfo);
}

doSomeMoreCoolThingsInWebsite();
```

Imagine that ordering pizza forces you to stand still and not move at all, not fun, right? You want to be able to do other things while your delivery arives, and that's exactly the difference between the two.

This example is somewhat similar to the one above, you will do some cool code, then you'll call for pizza, you will wait until that is done, then after that you'll do something with your pizza or handle the errors, and afterwards you'll continue executing your cool code.

The key difference is that in the first example, the rest of your cool code doesn't necessarily need to wait for your pizza call, while in the second, nothing will be executed until your call resolves.

### Callbacks

**Key note**: Callbacks are not necessarily used for asyncrounous functions, that's just where they are occasionaly needed.

Callbacks are simply functions passed as arguments to other functions, to be executed at a certain point.

Take this example:

```js
doSomeCoolThingsInWebsite();

function whenThePizzaGetsHere (error, pizza) {
  if (error) {/* Handle it */}
  // bon appetit
}

/**
 * @callback pizzaCallCallback
 * @param {Object|null} error - Error object, null if no error.
 * @param {Object} [response] - Response object if no error.
 */

/**
 * @param {pizzaCallCallback} callback - A callback to run.
 */
function pizzaCall (callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if (callback)
          callback(null, xhttp.responseText);
      }
      // We won't be handling any errors here for this example
  };
  xhttp.open("GET", "/pizza", true);
  xhttp.send();
}

pizzaCall(whenThePizzaGetsHere);

doSomeMoreCoolThingsInWebsite();
```

You don't need to understand XHR for now, we'll get into that when we talk about Fetch and API calls, just understand that the function `pizzaCall` creates a new XHR request, which is asyncrounous, and when the call is complete, the function will call `callback`.
Look at the function `callback` as a custom function to process the response for some arbitrary API request.

From the example, you cannot but notice that callbacks require being well documented, meaning that the function `pizzaCall` will always supply the function `callback` with a defined set of arguments.

Another simpler example that doesn't relate to asyncrounousity but explains callbacks well is array methods, like `forEach` and `map`.

```js
const numbers = [1,2,3,4,5,6];
function evens (number, index) {
  return number % 2 === 0;
}

const evenNumbers = numbers.filter(evens);
// even numbers = [2, 4, 6];
```

In this case, `evens` is a callback that is passed to the filter function, and we always expect that `evens` is going to be passed the same arguments [[documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#parameters)].

### Async/Await

The async/await pattern is just a special syntax to execute promises and asynchronous functions, let's dig right in.

```js
doSomeCoolThingsInWebsite();

async function asyncFetchPizza () {
  try {
    const response = await fetch('/pizza');
    return response.body.pizza;
  } catch (error) {
    throw new Error(error);
  }
}

function whenThePizzaGetsHere (pizza) {
  // bon appetit
}

function afterWeAteThePizza (leftovers) {
  // Give to dog
}

function whenTheDeliveryCrashes (crashInfo) {
  // OH NO!
}

asyncFetchPizza()
  .then(whenThePizzaGetsHere)
  .then(afterWeAteThePizza)
  .catch(whenTheDeliveryCrashes);

doSomeMoreCoolThingsInWebsite();
```

You don't have to know much about the `fetch` except that it's a promise that executes calls and resolves when the call is done.
Other than that, the async/await pattern is just a fancy way of writing promises.

## Summary

Javascript does only one thing at a time, but it can give things to WebAPI to do, and when the API is done it pushes the execution to the callback queue, and the queue pushes the execution to the main stack once the main stack is free/empty.

Promises are functions that take a function as an argument, and resolves/rejects when that function executes the `resolve` or `reject` function.

A callback function is just a function `A` that is given as an argument to function `B` with the expectation that function `B` will execute function `A`. Like array methods or even promises.

Async/Await pattern is just a sparkly thing.

## References

Much recommended [video](https://www.youtube.com/watch?v=8aGhZQkoFbQ) about the event loop and how javascript works under the hood.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
