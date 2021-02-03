# Array Methods

**Author**: [@alaa-yasin](https://github.com/alaa-yasin) and [@Fatmasiam](https://github.com/Fatmasiam)

**Arrays have a good number of [methods](https://www.w3schools.com/jsref/jsref_obj_array.asp) such as _forEach()_, _map()_, _filter()_, _reduce()_, _sort()_, ..._etc_**

- What can you see after each method's name?
- What does that mean?
- What do you think the output will be if we don't write them?

```
[1,2,3].forEach; // ?
['Alaa', 'Islam', 'Aya'].map; //?
```

## So, what are methods?

**Methods are built-in or user-defined functions used in different cases.**

### - Built-in methods vs user-defined methods

- _Built-in method_ is any function that is provided by any language library. such as:

```js
[2, 3, 4].forEach();
[1, 2, true, "Ala'a"].map();
```

- Whereas, \_user-defined methods are functions defined by users themselves in order to have their work done. such as:

```js
const array = [];
array.foo = function (num) {
  return num * 3;
};
array.foo(3); //returns ??
```

**As we learned before, we can access arrays' elements by their index.**

```js
const numbers = [1, 2, 3];
numbers[0]; // 1
numbers[1]; //2
numbers[2]; //3
```

So, what if I have an array of 100 elements, and I want to _console.log_ everything in this array?
**Is it logical to access each element as this?**

```js
const cities = ['Gaza', 'Ramallah', ...etc]
cities[0];
cities[1];
...
...
...
cities[99];
```

## That is why methods are created :wink:

1. ### **pop/push, shift/unshift**

- [**push()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method adds one or more elements to the end of an array and returns the new length of the array.
- [**pop()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) method removes the last element from an array and returns that element. This method changes the length of the array.
- [**unshift()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) method adds one or more elements to the beginning of an array and returns the new length of the array.
- [**shift()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) method removes the first element from an array and returns that removed element. This method changes the length of the array.

### Array: Push() :

**The push() method can append one or more elements to the end of an array.**
For example:

```js
let names = ["Fatma", "Sama"];
names.push("Salwa");

console.log(names); // ['Fatma', 'Sama', 'Salwa']
// Push data onto the array. Push() appends elements to the end
// of the given array. Note that it can take more than one
// argument, each of which is individually appended to the array.
// In the output, notice that when push() takes multiple arguments
// they are appended in a left-to-right order (mimicing their
// appearence in the arguments list).
let letters = ["A", "B"];
letters.push("C", "D");

console.log(letters); // ['A', 'B', 'C', 'D'];
```

### Array: Pop()

**The pop() method pulls the last element off of the given array and returns it**
For example:

```js
let letters = ["A", "B", "C"];

// Pop the element off of the end of the array.
console.log(letters.pop()); // C
console.log(letters); // ['A', 'B']
```

### Array: Unshift()

**The unshift() method is like the push() method, only it works at the beginning of the array. The unshift() method can prepend one or more elements to the beginning of an array.**

For example:

```js
let colors = ["red"];

// Unshift data onto the array. Unshift() prepends elements to
// the beginning of the given array. Note that it can take more
// than one argument. In the output, notice that when unshift()
// takes multiple arguments, they are prepended in a right-to-left
// order (mimicing their appearence in the arguments list).
colors.unshift("yellow");
colors.unshift("green", "blue");

// Output resultant array.
console.log(colors); // ["green", "blue", "yellow", "red"]
```

### Array: Shift()

**The shift() method is like the pop() method, only it works at the beginning of the array. The shift() method pulls the first element off of the given array and returns it.**

For example:

```js
var numbers = [1, 2, 3];

// Shift the element off of the beginning of the array.
console.log(numbers.shift()); //1
console.log(numbers); // [2, 3]
```

![array-methods](array-methods.jpg)

2. ### **Array.forEach()**

```js
cities.forEach(function (city) {
  console.log(city);
}); // Gaza, Ramallah ,...etc
```

So, [forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) is a function that executes a provided function once for each array element in ascending order.

**forEach()** method returns 'undefined'. It doesn't change the original array.

3. ### **Array.map()**

```js
const cities = ["gaza", "ramallah"];
cities.map(function (city) {
  return city[0].toUpperCase() + city.slice(1);
}); // ['Gaza', 'Ramallah']
```

So. [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) is a function that creates a new array populated with the results of executing a provided function on every array element.
**map()** method returns a new array with the same number of the original array elements. It doesn't change the original array.

4. ### **Array.filter()**

```js
const ages = [15, 34, 54, 46, 10, 4, 5];
ages.filter(function (age) {
  return age < 18;
}); // [15, 10, 4, 5]
```

So, [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) is a function that creates a new array with all elements that pass the test implemented by the provided function.
**filter()** method returns a new array with a different number of the original array elements. It doesn't change the original array.

5. ### **Array.reduce()**

```js
const numbers = [1, 2, 3, 4];
const initialValue = 0;
numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, initialValue); // 10
```

### Let's split it:

```js
The first iteration:
accumulator = initialValue = 0
currentValue = first element = 1
first iteration output = 0 +  1 = 1
```

```js
The second iteration:
accumulator = first iteration output = 1
currentValue = second element = 2
second iteration output = 1 +  2 = 3
```

```js
The third iteration:
accumulator = second iteration output = 3
currentValue = third element = 3
third iteration output = 3 +  3 = 6
```

```js
The last iteration:
accumulator = third iteration output = 6
currentValue = last element = 4
last iteration output = 6 +  4 = 10
```

```js
So, The output value = 10
```

So, [reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) is a function that executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
**reduce()** method returns a single output value. It doesn't change the original array.

6. ### **Array.sort()**

#### To sort strings:

```js
const letters = ["a", "c", "d", "b", "e", "f"];

letters.sort(); // ["a", "b", "c", "d", "e", "f"]
```

#### To sort numbers in ascending order:

```js
const numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b;
}); // [1, 2, 3, 4, 5]
```

#### To sort numbers in descending order:

```js
const numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return b - a;
}); // [5, 4, 3, 2, 1]
```

So, [sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) is a function that sorts array elements in place and returns the sorted array.
**sort()** method returns a sorted array. It doesn't return a new array; it changes the positions of the elements in the original array.

7. ### **split and join**
   Here’s the situation from real life. We are writing a messaging app, and the person enters the comma-delimited list of receivers: John, Pete, Mary. But for us an array of names would be much more comfortable than a single string. How to get it?

- The **str.split(delim)** method does exactly that. It splits the string into an array by the given delimiter delim.

  In the example below, we split by a comma followed by space:

```js
let names = "Bilbo, Gandalf, Nazgul";

let arr = names.split(", ");

for (let name of arr) {
  console.log(`A message to ${name}.`); // A message to Bilbo  (and other names)
}
```

The `split` method has an optional second numeric argument – a limit on the array length. If it is provided, then the extra elements are ignored. In practice it is rarely used though:

```js
let arr = "Bilbo, Gandalf, Nazgul, Saruman".split(", ", 2);

console.log(arr); // Bilbo, Gandalf
```

**Split into letters**

```js
let str = "test";

console.log(str.split("")); // t,e,s,t
```

The [split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) method turns a String into an array of strings, by separating the string at each instance of a specified separator string.

**The call _arr.join(glue)_ does the reverse to split. It creates a string of arr items joined by glue between them.**

For instance:

```js
let arr = ["Bilbo", "Gandalf", "Nazgul"];

let str = arr.join(";"); // glue the array into a string using ;

console.log(str); // Bilbo;Gandalf;Nazgul
```

The [join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
