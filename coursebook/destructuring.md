# Destructuring In JavaScript  <br>
#### 💥 Destructuring is a cool feature that came along with ES6. 
#### Simply destructuring implies breaking down a complex structure into simpler parts. In JavaScript, this complex structure is usually an object or an array.


## What is destructuring assignment ?  <br>
 The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects into distinct variables.

 ### ✳️ That is, we can extract data from arrays and objects and assign them to variables. 
 <hr> 
 
 ## Why destructuring ?  <br>
 Imagine if we want to extract a data from an array or an object. 

 Previously, without destructuring how will this be done ? 👇

 #### 🔹 With Array : 
 ```javascript
  var introduction = ["Hello", "I" , "am", "Sarah"];
    var greeting = introduction[0];
    var name = introduction[3];

    console.log(greeting); //"Hello"
    console.log(name); //"Sarah"
 ```
#### 🔹 With Object : 
```javascript
var student = {
  name: 'Ahmed',
  age: 15,
  country: "Palestine"
};

var name = student.name;
var age = student.age;
var country = student.country;

console.log(name); //"Ahmed"
console.log(age); //15
console.log(country); //"Palestine"
```
 We can see that when we want to extract data from an array or an object , we had to do the same thing over and over again. 
 
 ### ✳️ ES6 destucturing assignment makes it easier to extract this data, lets see how.
 <hr>

 ##  How to apply destructuring ?  <br>

This section discusses destructuring assignment of arrays and objects.

##  1- Array Destructuring : <br>


If we want to extract data using arrays, it's quite simple using destructuring assignment. 

Let's refer to our first example for arrays. Instead of going through that repetitive process, we'll do this. 👇

```javascript
    var introduction = ["Hello", "I" , "am", "Sarah"];
    var [greeting, pronoun] = introduction;

    console.log(greeting); //"Hello"
    console.log(pronoun); //"I"
```
We can also do this with the same result. 👇

```javascript
 var [greeting, pronoun] = ["Hello", "I" , "am", "Sarah"];

    console.log(greeting); //"Hello"
    console.log(pronoun); //"I"
```
### ✳️ Notice that the variables are set from left to right. So the first variable gets the first item in the array, the second variable gets the second variable in the array and so on.


### 🔹 Skipping Items in an Array :

What if we want to get just the first and last item or some specific items from our array ?

This can also be done. Look at the example below. 👇

```javascript
    var [greeting,,,name] = ["Hello", "I" , "am", "Sarah"];

    console.log(greeting); //"Hello"
    console.log(name); //"Sarah"
```
What just happened ? Look at the array on the left side of the variable assignment. Notice that instead of having just one comma, we had three.

### ✳️ So, The comma separator is used to skip values in an array. So if you want to skip an item on an array, just use a comma.
<hr>

## 2- Object Destructuring : <br>

  > 💡 By now you are already feeling like a destructuring ninja 😀, having gone through the rigours of understanding array destructuring.  The good news is that object destructuring is very much similar and straight forward so let’s dive in right away.

Basically, The object destructuring is used to extract properties from objects and bind them to variables, by using an object literal on the left-hand-side of an assignment expression for object destructuring.


Let's refer to our first example for objects. Instead of going through that repetitive process, we'll do this. 👇

```javascript
var student = {
  name: 'Ahmed',
  age: 15,
  country: "Palestine"
};

var {name, age, country} = student;

console.log(name); //"Ahmed"
console.log(age); //15
console.log(country); //"Palestine"
```

### 🔹 Extracting properties from nested objects :

In the previous examples, the objects were plain : the properties have primitive data types (integer, strings) but , Often objects can be nested in other objects.

To undersatnd how to work with this case, Look at the example below.👇 

```javascript
var student = {
  name: 'Ahmed',
  age: 15,
  country: "Palestine",
  address : {city : "Gaza"}
};

var {name, age, country, address:{city}} = student;

console.log(name); //"Ahmed"
console.log(age); //15
console.log(country); //"Palestine"
console.log(city); //"Gaza"
```

### 🔹 Aliases Feature : 

If you’d like to create variables of different names than the properties, then you can use the aliasing feature of object destructuring.

To undersatnd it, Look at the example below.👇 

```javascript
var student = {
  name: 'Ahmed',
  age: 15,
  country: "Palestine",
  address : {city : "Gaza"}
};

var { age:studentAge } = student;

console.log(studentAge); //15
```
`age` is the name of the property to access, `studentAge` is the variable name. After the destructuring, the variable `studentAge` contains the property value.

The equivalent code is :
```javascript
var studentAge = student.age; //15
```
So, the destucturing defines a new variable `studentAge` (alias variable), and assigns to it the value `student.age`.


