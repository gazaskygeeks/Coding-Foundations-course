# Tasks

## Search

- **When you should not use the arrow function?**
- **Arrow functions do not have arguments binding! <ins> what do we mean by that!</ins>**

## Rewrite with arrow functions

1.

```javascript
function splitBill(amount, numPeople) {
    return `Each person needs to pay ${amount / numPeople}`
}

// console.log(splitBill(10, 2));
// console.log(splitBill(10, 4));
// console.log(splitBill(10, 5));
```

2. 

```javascript
function countdown(startingNumber, step) {
  let countFromNum = startingNumber + step;
  return function decrease() {
    countFromNum -= step;
    return countFromNum;
  }
}
// const countingDown = countdown(20, 2);

```