## Arrays

**Author**: [@Fatmasiam](https://github.com/Fatmasiam)

---

 - [Arrays](#arrays)
 - [Array Declaration](#array-declaration)
 - [Manipulate Arrays](#manipulate-array)
 - [Loops](./loops.md)

## <a href='#arrays' id='arrays'>Arrays : </a>
### **Onedimensional Arrays**: :arrow_double_down: 
  Objects allow you to store keyed collections of values. That’s fine.

  But quite often we find that we need an ordered collection, where we have a 1st, a 2nd, a 3rd element and so on.     
  For example, we need that to store a list of something: users, goods, HTML elements etc.

  It is not convenient to use an object here, because it provides no methods to manage the order of elements. We can’t insert a new property “between” the existing ones. Objects are just not meant for such use.

  There exists a special data structure named Array, to store ordered collections.
    
#### What is **ARRAYS** means : 
  **Arrays** : Are single variables used to store ordered and different kind of elements(collections).

  _SO_ : the array variable can hold more than one value at a time.



## <a href='#array-declaration' id='array-declaration'>Array Declaration : </a>
  We have two ways to create(declare) empty array
  ```js
   1- let arr = new Array();
    // return arr = []
   2- let arr = [];
```
 Almost all the time, the second syntax is used. and **W**e can supply initial elements in the brackets:

 ```js
 
  let numbers = new Array(1, 2, 3);
  console.log(numbers); // [1, 2, 3]

  let colors = ['red', 'yellow', 'green', 'blue'];
  console.log(colors);  // ['red', 'yellow', 'green', 'blue']
 ```

### **Array elements are numbered, starting with zero. [This thing called indexing]**

   * We can get an element by its number in square brackets:

```js
                  0       1         2
  let colors = ['Red', 'Yellow', 'Green'];

  console.log( colors[0] ); // Red
  console.log( colors[1] ); // Yellow
  console.log( colors[2] ); // Green
```
   * We can replace an element:

```js
                               0         1       2
 colors[2] = 'Blue'; // now ['Red', 'Yellow', 'Blue']

```
   * …Or add a new one to the array:


```js
                               0        1       2       3 
 colors[3] = 'Pink'; // now ['Red', 'Yellow', 'Blue', 'Pink']

```
> The total count of the elements in the array is its `length`:


```js
console.log(colors.length);
// 4
```
### The **A**rray can store elements of any type.

  * For Example: 

```js
// mix of values
let arr = [ 'Apple', { name: 'Fatma' }, true, function() { console.log('hello'); } ];

// get the object at index 1 and then show its name
console.log( arr[1].name ); // Fatma

// get the function at index 3 and run it
arr[3](); // hello

```


## <a href='#manipulate-array' id='manipulate-array'>Manipulate Arrays : </a>
  -  arrays are mutable
  **So** array state can be modified after it is created. let's see the following example:

```js
  let arr = ["Fatma", "Ala'a"];
  arr[2]= "Sama"
  arr // ["Fatma", "Ala'a", "Sama"]
```

### **Multidimensional Arrays** : :arrow_double_down: 
  
  Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices:

```js
                         
let activities =  [  
          /*0*/    /*1*/  
  /*0*/ ['Working ', 9],
  /*1*/ ['Eating  ', 2],
  /*2*/ ['Commute ', 2],
  /*3*/ ['Sleeping', 7],
];

console.log( activities[1] ); //  ['Eating  ', 2]
console.log( activities[3] ); //  ['Sleeping', 7]

console.log( activities[1][1] ); // 2
console.log( activities[0][0] ); // Working
console.log( activities[3][0] ); // Sleeping

activities[4] = ['Study   ', 10];
 
now 
activities = [
        ["Working ", 9]
        ["Eating  ", 2]
        ["Commute ", 2]
        ["Sleeping", 7]
        ["Study  ", 10] 
    ] ;

```

