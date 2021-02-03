## Higher Order Functions
At the previous session you have learned what is functions at JavaScript and how to create them which called first order functions.
At this workshop you will study an advanced thing relates to functions called higher Order Functions.
 
 > Lets Start 😀

### What is Higher Order Functions ?

Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them.

In simple words, A Higher-Order function is a function that receives a function as an argument or returns the function as output.
<hr>

### Examples OF Higher Order Functions :
<br>

💡 The most popular examples of higher order functions are array methods, they take a function as an argument.

> Lets see how do they work ❓❓

### 🔹 map() method : 

Look at the code below,👇 the `map()` take a function as an argument.

```javascript
var numbers = [65, 44, 12, 4];
function myFunction(num) {
  return num * 10;
}
var newArray = numbers.map(myFunction);
```

### 🔹 filter() method : 

Look at the code below,👇 the `filter()` take a function as an argument.

```javascript
var ages = [32, 33, 12, 40];

function checkAges(age) {
  return age >= 30
}

var newArray = ages.filter(checkAges);
```

> ### Try another methods alone 👨‍💻
<hr>

### 🔸  Creating Our own Higher-Order Function :
<br>

Up until this point, we saw various Higher-order functions built into the language.

 Now let’s create our own Higher-order function.
 <br />

 * Taking a function as an argument : 

 ```javascript
 function doOperation(operation, number1, number2) {
    return operation(number1, number2)
}

function sumBothNumbers(number1, number2) {
    return number1 + number2
}

doOperation(sumBothNumbers, 3, 5) // the result is 8
 ```
  As you see above,👆  the `doOperation` function takes 3 arguments :  the function `operation` and `number1`, `number2`.
  <br><br>


  * Returning a function : 

  ```javascript
  function multiplyBy(multiplier) {
    return function result(num) {
        return num * multiplier;
    }
}

 multiplyBy(3)(4); // the result is 12

 OR 

 var functionResult = multiplyBy(3);
 functionResult(4) // the result is 12
```
  As you see above,👆  the `multiplyBy` function return a function.


