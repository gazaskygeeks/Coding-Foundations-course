# Asynchronous JavaScript

❕ Why is it difficult to get to work using synchronous code?!

Let's look at a quick example. When you fetch an image from a server, you can't return the result immediately


```js
let response = fetch('myImage.png');
let result = response.blob();
// display your image blob in the UI somehow
```

That's because you don't know how long the image will take to download, so when you come to run the second line it will **throw an error**  because the response is not yet available. 

Instead, you need your code to wait until the response is returned before it tries to do anything else to it.

There are two main types of asynchronous code style you'll come across in JavaScript code, **old-style callbacks** and **newer promise-style code**. 

---

<br>

## ✤ Asynchronous Callbacks: *I'll call back once I'm done!*

In JavaScript, you can pass a function as an argument to a function. This function that is passed as an argument inside of another function is called a **callback function**


```javascript
// function
function greet(name, callback) {
    console.log(`Hi ${name}`);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);
```

*the output*

```json
Hi Peter
I am callback function
```

**In the above program :** 

 there are two functions. While calling the `greet()` function, two arguments (*a string value and a function*) are passed.

 The `callMe()` function is a callback function.



 ```js
 const message = function() {  
    console.log("This message is shown after 3 seconds");
}
setTimeout(message, 3000);
 ```

**“setTimeout”**, built-in method in JavaScript which calls a function or evaluates an expression after a given period of time. 

*So here*, the “message” function is being called after 3 seconds have passed. 
> (1 second = 1000 milliseconds)

the message function is being called after something happened but not before. So the message function is an example of a callback function.


### ❕ callback hell → multiple async operations

if we need to complete multiple asynchronous steps in sequence, callbacks become unmanageable and result in the infamous callback hell.

```js
// ! callback hell
firstRequest(function(response) {
    secondRequest(response, function(nextResponse) {
        thirdRequest(nextResponse, function(finalResponse) {
            console.log('Final response: ' + finalResponse);
        }, failureCallback);
    }, failureCallback);
}, failureCallback);
```
To avoid this pattern happening, we will see now **`Promises`**.

---
<br>

## ✤ Promise: *I promise a result!*


A promise in JavaScript is similar to a promise in real life. A promise has 2 possible outcomes: it will either be kept when the time comes, or it won’t.

This is also the same for promises in JavaScript. When we define a promise in JavaScript, it will be resolved when the time comes, or it will get rejected.

Promise is an object, There are 3 states of the Promise object:

- **Pending**: Initial State, before the Promise succeeds or fails
- **Resolved**: Completed Promise
- **Rejected**: Failed Promise

<br>

<p align="center">
  <img src="https://miro.medium.com/max/1400/1*10vA-8de9Xya8PJO_mw9PA.png" width='500'/>
</p>


---
### Creating and Using A Promise Step by Step

- **Firstly**, we use a constructor to create a Promise object:

```js
const myPromise = new Promise();
```

- It takes two parameters, *one for success `(resolve)`* and *one for fail `(reject)`*:

```js
const myPromise = new Promise((resolve, reject) => {  
    // condition
});
```

- **Finally**, there will be a `condition`. 
     - If the condition is met, the Promise will be resolved, 
     - otherwise it will be rejected

```js
const myPromise = new Promise((resolve, reject) => {  
    let condition;  
    
    if(condition is met) {    
        resolve('Promise is resolved successfully.');  
    } else {    
        reject('Promise is rejected');  
    }
});
```
So we have created our first Promise ✅



after the condition is done, we have to case to handle: One for resolved promises and one for rejected.
We handle the two cases using two method :

- `then( )` for resolved Promises:

    The `then( )` method is called after the Promise is resolved. Then we can decide what to do with the resolved Promise. (ex: log a message)

    ```js
    myPromise.then((message) => {  
    console.log(message);
    });
    ```

- `catch( )` for rejected Promises:
   
   if the promise gets rejected, it will jump to the `catch( )` method and this time we will see a different message on the console.

   ```js
   .catch((message) => { 
    console.log(message);
    }); 
   ```

<br>
<br>

example: 

```js 
let mathPromise = new Promise((res, rej) => {
  let sum = 6 + 9
  // Condition
  if (sum === 19) {
    res('right')
    // condition met 
  } else {
    rej('wrong')
    // fail
  }
})

mathPromise
  .then((msg) => {
    console.log(`this is a ${msg}`)
  })
  .catch((msg) => {
    console.log(`this is a ${msg}`)
  })
  // handle the cases of resolve and reject
```