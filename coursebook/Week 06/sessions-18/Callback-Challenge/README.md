**Author**: [@finnhodgkin](https://github.com/finnhodgkin)

**Maintainer**: [@finnhodgkin](https://github.com/finnhodgkin)  

# Traffic light callback challenge:vertical_traffic_light:

![traffic light gif](https://user-images.githubusercontent.com/22300773/27510355-77a53678-5906-11e7-8215-845f9c987e09.gif)

## Setup

1. Clone the repo

```
$ git clone https://github.com/foundersandcoders/morning-challenge-traffic-lights.git
```

2. Open the folder in your favourite text editor.

3. For instant feedback on all your changes run live server :sparkles:

```
$ npm i && npm run live
```

## What is a first-class function?

JavaScript's functions are "first-class". This means that they are treated exactly the same as any other type of data (eg, strings, numbers, arrays ect). This allows them to be assigned to variables, stored in arrays, passed to functions as arguments or returned from functions. In JavaScript this means that functions can be passed around, and are only ever invoked when followed by parens ```()```.

Here are some examples of how functions can be used.

#### Functions can be invoked/called:
```
function greeting(firstName, lastName) {
  alert('Hello ' + firstName + '  ' + lastName);
}
greeting('Bob', 'Belcher'); // Hello Bob Belcher
```

#### Functions can be assigned to a variable:
```
var greeting = function(firstName, lastName) {
  alert('Hello ' + firstName + '  ' + lastName);
}
greeting('Tina', 'Belcher'); // Hello Tina Belcher
```

#### Functions can be passed around as data:
```
function greeting(p1, p2) {
  return "Hello " + p1 + " and " + p2
}

function firstBelcher() {
  return "Bob Belcher";
}

function secondBelcher() {
  return "Tina Belcher";
}

greeting(firstBelcher(), secondBelcher()); // Hello Bob Belcher and Tina Belcher
```



## Your task

Your task is to replicate the traffic lights shown above. The only file you'll
need to edit is `script.js`. Hopefully the instructional comments will speak for
themselves.

If you get stuck check out the [hints branch](https://github.com/foundersandcoders/morning-challenge-traffic-lights/tree/hints).

### Part 1:

Light up the first traffic light in the following order:

+ :green_apple: green
+ :sun_with_face: yellow
+ :red_circle: red
+ :red_circle::sun_with_face: red & yellow
+ :green_apple: green

### Part 2:

Display the red light for longer:

+ :green_apple: green
+ :sun_with_face: yellow
+ :red_circle: red (3 seconds)
+ :red_circle::sun_with_face: red & yellow
+ :green_apple: green

### Part 3:

Loop the light so it plays forever.

> Hint: recursion worked for me...

### Part 4:

Loop the second light with the following rules:

+ Green should show only when the other light is red.
+ When transitioning from green to red, show yellow.
+ If the other light is green or yellow, show red.
+ When transitioning from red to green show yellow and red simultaneously.

:vertical_traffic_light: If successful you should see something like the
gif above. :tada:

### Solutions:

Check out the two solution branches (solution and solution-fun) for two complete examples
