# Calculator

## Introduction

In this project you'll be creating a pretty neat toy for your portfolio to flex your DOM manipulation skills. You're going to make an **on-screen calculator using JavaScript, HTML, and CSS.**

Important Note: Before you get started with this calculator project, we need to cover a word of warning. As you look into how to evaluate complex mathematical statements in JavaScript, **you will likely come across the tantalizing `eval()` function. However, this function can be very dangerous and should not ever be used!** You'll need to build your own functions to evaluate expressions as part of this calculator project.


## Assignment

Here are some use cases (abilities your project needs to have):

1. Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser's console.

    - [ ] add
    - [ ] subtract
    - [ ] multiply
    - [ ] divide

2. Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

3. Create a basic HTML calculator with buttons for each digit, each of the above functions and an "Equals" key.

    - [ ] There should also be a display for the calculator, go ahead and fill it with some dummy numbers so you can get it looking right.
    - [ ] Add a "clear" button.
    - [ ] Make it look nice using an external CSS sheet!


4. Create the functions that populate the display when you click the number buttons... you should be storing the 'display value' in a variable somewhere for use in the next step.

5. Make the calculator work! You'll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then `operate()` on them when the user presses the "=" key.

    - [ ] You should already have the code that can populate the display, so once `operate()` has been called, update the display with the 'solution' to the operation.
    - [ ] This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don't feel bad if it takes you a while to figure out the logic.

6. Gotchas: watch out for and fix these bugs if they show up in your code:

    - [ ] Users should be able to string together several operations and get the right answer: `12 + 7 - 5 * 3` etc. The behavior we're looking for should be something like [this](https://www.online-calculator.com/).
    - [ ] You should round answers with long decimals so that they don't overflow the screen.
    - [ ] Pressing = before entering all of the numbers or an operator could cause problems!
    - [ ] Pressing "clear" should wipe out any existing data.. make sure the user is really starting fresh after pressing "clear"
    - [ ] Display a snarky error message if the user tries to divide by 0... don't let it crash your calculator!



7. Now you should have a working calculator, well done! Now we're going to add a currency converter:

    - [ ] Create 4 new buttons that will convert the number the user has typed into the calculator into different currencies:
    - [ ] Shekels into US Dollars
    - [ ] Dollars into Shekels
    - [ ] Shekels into Euros
    - [ ] Euros into Shekels
    - [ ] Create the functions in JavaScript to run these calculations - get the correct conversion rates from google
    - [ ] Wire all the JS up to the HTML!
