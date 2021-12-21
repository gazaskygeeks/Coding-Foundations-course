
# Array Methods

Understanding array methods is an important step towards being able to write clean, functional code, and it opens doors to more powerful techniques of functional and reactive programming.


The strength of JavaScript arrays lies in the array methods. Array methods are functions built-in to JavaScript that we can apply to our arrays — Each method has a unique function that performs a change or calculation to our array and saves us from writing common functions from scratch.

---

<br>

### ♦︎ The **`indexOf()`** method

You may want to know the index position of an element in array. You can use the `indexOf()` method to get that. 

```js
const names = ['tom', 'alex', 'bob', 'john'];

names.indexOf('alex'); // returns 1
```
`indexOf()` returns the index of the first occurrence of an element in the array. If an element is not found, the `indexOf()` method returns -1.

```javascript
names.indexOf('rob'); // returns -1
```

----

### ♦︎ **Pop, Push, Shift and unshift Methods**

JavaScript gives us four methods to add or remove items from the beginning or end of arrays:

- **pop()**: Remove an item from the end of an array

```js
let cats = ['Bob', 'Willy', 'Mini'];

cats.pop(); //'Mini'

console.log(cats) //['Bob', 'Willy']
```
> ‣ pop() returns the removed item.

<br>

- **push()**: Add items to the end of an array

```js
let cats = ['Bob'];

cats.push('Willy'); // ['Bob', 'Willy']

cats.push('Puff', 'George'); // ['Bob', 'Willy', 'Puff', 'George']
```
> ‣ push() returns the new array length.

<br>

- **shift()**: Remove an item from the beginning of an array

```js
let cats = ['Bob', 'Willy', 'Mini'];

cats.shift() // 'Bob'
console.log(cats) // ['Willy', 'Mini']
```

> ‣ shift() returns the removed item.

<br>

- **unshift()**: Add items to the beginning of an array

```js
let cats = ['Bob'];

cats.unshift('Willy'); // ['Willy', 'Bob']

cats.unshift('Puff', 'George'); // ['Puff', 'George', 'Willy', 'Bob']

```
> ‣ unshift() returns the new array length.

<br>

<img width="578" alt="Screen Shot 2021-12-15 at 12 25 17 PM" src="https://user-images.githubusercontent.com/47992412/146169616-550f0d7f-370f-4249-9fe4-4ce70b080380.png">

----


### ♦︎ Array Iterator Methods

Now we're gonna learn about **array iterator methods**. These are very useful methods for iterating through array and performing computations, making decisions, filtering out stuff, and more.

- 🔸 **`forEach()`**

The `forEach()` method calls a function and iterates over the elements of an array

The syntax of the forEach() method is:

```js
array.forEach(function(currentValue, index, arr))
```

Here,

- **function(currentValue, index, arr)** :  a function to be run for each element of an array
- **currentValue** - the value of an array
- **index** *(optional)* - the index of the current element
- **arr** *(optional)* - the array of the current elements

<br>

The forEach() method is used to iterate over an array

```js
let students = ['Olivia', 'Ava', 'Matthew']

// using forEach
students.forEach(function(item) {
    console.log(item);
}
```
output: 
```
Olivia
Ava
Matthew
```

Updating the Array Elements: 

As we have seen in the above example, the `forEach()` method is used to iterate over an array, it is quite simple to update the array elements. For example,

```js
let students = ['Olivia', 'Ava', 'Matthew']

// using forEach
students.forEach((item, index, arr) => {

    // adding strings to the array elements
    arr[index] = 'Hello ' + item;
})

console.log(students);
```

Output

```
["Hello Olivia", "Hello Ava", "Hello Matthew"]
```

--

<br>

- 🔸 **`map()`**

The map() method creates a new array with the results of calling a function for every array element.

map syntax:

```js
let new_array = arr.map(function(element, index, array) {
    // Return value for new_array
})
```

For example, suppose you have the following array element:
```js
let arr = [3, 4, 5, 6];
```
Now imagine you are required to **multiply each of the array's elements by 3**. You might consider using a for loop as follows:

```js
let arr = [3, 4, 5, 6];

for (let i = 0; i < arr.length; i++){
  arr[i] = arr[i] * 3;
}

console.log(arr); // [9, 12, 15, 18]
```

But you can actually use the **`Array.map()`** method to achieve the same result. 

Here's an example:
```js
let arr = [3, 4, 5, 6];

let modifiedArr = arr.map( ele => {
    return ele *3;
});

console.log(modifiedArr); // [9, 12, 15, 18]
```

--

<br>

- 🔸 **`filter()`**

The `filter()` method returns a new array with all elements that pass the test defined by the given function.

filter() syntax: 

```js
let new_array = arr.filter(function (element, index, array) {
    // Return true or false
})
```

In the following example, odd numbers are "filtered" out, leaving only even numbers.

```js
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]
```

another example: 

```js
const products = [
    { productName: "TV", price: "1000" },
    { productName: "Pendrive", price: "200" },
    { productName: "Camera", price: "450" },
    { productName: "Mouse", price: "120" }
];

const filteredProducts = products.filter((item) => {
    return item.price > 200;
});

console.log(filteredProducts);

/*
[
    { productName: "Television", price: "1000" },
    { productName: "Camera", price: "450" }
]
*/
```


----

These are just a few methods of Array methods, for now, you should start to learn other useful methods, like `slice()`, `split()` and `join()` ...etc, 

> ***check this useful article:*** 
>
>[The JavaScript Array Handbook – JS Array Methods Explained with Examples](https://www.freecodecamp.org/news/the-javascript-array-handbook/)