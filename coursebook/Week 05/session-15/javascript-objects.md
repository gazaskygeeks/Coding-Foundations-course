## What are JavaScript Objects?
*Objects*, in JavaScript, is it’s most important data-type and forms the building blocks for modern JavaScript. These objects are quite different from JavaScript’s primitive data-types(Number, String, Boolean, null, undefined and symbol) in the sense that while these primitive data-types all store a single value each (depending on their types).

- Objects are more complex and each object may contain any combination of these primitive data-types as well as object data-types.

## JavaScript Objects Syntax
An object can be created with curly brackets {…} with an optional list of properties. A property is a “key: value” pair, where a key is a string (also called a “property name”), and value can be anything.

To understand this rather abstract definition, let us look at an example of a JavaScript Object:
```javascript
const person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };
```
In the above example **“firstName”, “lastName”, “age” , “eyeColor”** are all **“keys”** and **“John”, “Doe”, 50 and “blue”** are **values** of these keys respectively.

> Keys are converted to strings by JavaScript and we will touch more on that later when we get to accessing the keys values

## Object Properties
Each of the object keys is referred to as **properties** of the object.
Properties can usually be changed, added, and deleted, but some are read only.


### Accessing properties of an object
Object members(properties or methods) can be accessed using two different ways:

1. **Dot Notation**:

    ```javascript
        objectName.propertyKey  //person.age
    ```

For example:
```javascript
const school = { 
    name : "Vivekanada School", 
    location : "Delhi", 
    established : 1995, 
    20 : 1000,
} 
  
// Output : Vivekanada School 
console.log(school.name);  
 
```

2. **Bracket Notation**
```javascript
  objectName["property"]  // person["age"]
```
Or 
```javascript
 objectName[expression]  // x = "age"; person[x]
```

Let's take the same example above but try to access the properties using the bracket notation.

```javascript
const location = 'location';
let school = { 
    name : "Vivekanada School", 
    location : "Delhi", 
    established : 1995, 
    20 : 1000,
} 
  
// Output : Vivekanada School 
console.log(school['name']);  
  
// Output: 1000 
console.log(school[location]); 
```

**The main differences between the two methods are**:

Unlike the dot notation, the bracket keyword works with any string combination, including, but not limited to multi-word strings.

For example:
```javascript
    somePerson.first name // invalid
    somePerson["first name"] // valid
```

Unlike the dot notation, the bracket notation can also contain names which are results of any expressions variables whose values are computed at run-time.

For instance :
```javascript
    let key = "first name" 
    somePerson[key] = "Name Surname"
```
Similar operations are not possible while using the dot notation.

### Looping through an object properties
To iterate over all existing enumerable keys of an object, we may use the **for...in** construct.

**Syntax**
```javascript
for (variable in object) {
  // code to be executed
}
```
**Note**: The block of code inside of the for...in loop will be executed once for each property.

Let's take an example:
```javascript
const person = {fname:"John", lname:"Doe", age:25};

for (x in person) {
  console.log(x) // will log fname, lname, and age
}
```

### Adding and deleting properties
#### Adding New Properties
You can add new properties to an existing object by simply giving it a value.

Assume that the person object already exists - you can then give it new properties:

Example
```javascript
  person.nationality = "English";
```

#### Deleting Properties
To Delete a property of an object we can make use of the delete operator.

Example
```javascript
const person = { 
    name : "Joe"
}  
  
// Output : Name 
console.log(person.name);  
delete person.name 
  
// Output : undefined 
console.log(person.name); 
```

## JavaScript Object Methods
A method is a function associated with an object, or, simply put a method is a property of an object that is a function. Methods are defined the way normal functions are defined, except that they have to be assigned as the property of an object.

```javascript
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```

You access an object method with the following syntax:

```javascript
objectName.methodName()
```
You will typically describe fullName() as a method of the person object, and fullName as a property.

The **fullName** property will execute (as a function) when it is **invoked** with ().

This example accesses the fullName() method of a person object:

Example
```javascript
name = person.fullName();
```

### Built-In Methods
There some built in methods that we can use with JavaScript objects and they can be really beneficial sometimes like:

- **Object.keys()**: creates an array containing the keys of an object.

Example
```javascript
// Initialize an object
const employees = {
    boss: 'Michael',
    secretary: 'Pam',
    sales: 'Jim',
    accountant: 'Oscar'
};

// Get the keys of the object
const keys = Object.keys(employees);

console.log(keys);
```
Output
```javascript=
["boss", "secretary", "sales", "accountant"]
```

- **Object.values**: creates an array containing the values of an object. 

Example
```javascript
// Initialize an object
const session = {
    id: 1,
    time: `26-July-2018`,
    device: 'mobile',
    browser: 'Chrome'
};

// Get all values of the object
const values = Object.values(session);

console.log(values);
```
Output
```javascript
[1, "26-July-2018", "mobile", "Chrome"]
```

- **Object.hasOwnProperty**: returns a boolean indicating whether the object has the specified property as its own property.

Example

```javascript
const object1 = new Object();
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// expected output: true
```

> These are not the only built-in methods and arrays are going to be disscused in the next session so it's fine you don't need to know them very well now

## JavaScript Objects Are Mutable
Objects are mutable: They are addressed by reference, not by value.

If person is an object, the following statement will not create a copy of person:
```javascript
let x = person;  // This will not create a copy of person.
```

The object **x** is not a copy of **person**. It is person. Both x and person are the same object.

Any changes to x will also change person, because x and person are the same object.

Example
```javascript
const person = {
        firstName:"John",
        lastName:"Doe",
        age:50,
        eyeColor:"blue"
    }

let x = person;
x.age = 10; // This will change both x.age and person.age
```

> Objects mutability maybe an advanced topic but it's good to get an idea about it from now so it's okay if you don't fully understand it
