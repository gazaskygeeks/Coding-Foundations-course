# The butter of writing Clean Code.


## Intro

As a Software Developer, you are likely to be working with different teams that have different standards and different design patterns. The fallback in this case is that you will be reading other developers code on daily bases as they will read yours as well.

I can assure you there will always be difficult times when the quality of the code will punch write in the nose and make you feel bad that you "Can't actually understand what the heck is going on?"

We will always go through this constantly, and it's not your fault that you couldn't figure it out as fast as you hoped, and there will be times when you prefers a refactor over investing time in analyzing a piece of software for enhancement or a fix.

That is when you will start believing that Clean Code matters, since 90% of coders can make it work, your job is to make it work ***in style***!

---

## What is Clean Code?

There are way too many different opinions about what a Clean Code really is? in the form of articles, codebases and books. Out of all of these, the most straight forward definition of a Clean Code that is:

> A Clean Code is a code that is EASY to *understand*, EASY to *implement* ,and EASY to *change*

```javascript
// Arguments
/*
 * fn createUser:
 * receives: args[]
 * {
 *  firstName: string,
    lastName: string
 * }
 * 
 * output: object{}
 * User{}
 * User = {
     * id: number,
     * firstName: string,
 * }
 * */
function createUser(firstName, lastName) {
    const newUserID = generateUniqueID();
    const fullName = `${firstName} ${lastName}`;

    return {
        id: newUserID,
        firstName,
        fullName,
        lastName
    }
}

// createUser('Marwa', 'AlBaba')
```

We will use the previous JavaScript snippets to explain in further what does each of the three EASYs in definition are.

**Easy to *understand*:** The previous Function is pretty straight-forward for who knows a little JavaScript or even uses a language that is close to this syntax and can understand basic English.

First of all, it has a clear naming: *"createUser"* that starts with a verb: *"create"*, and states what it's going to create: *"User"*.

```javascript
const isUserActive = boolean;
const hasUserId = boolean;

// is EntityName Something = boolean;
// has EntintyName Something = boolean;
```

We can also see that *the only job* the Function is *responsible* for is returning/creating a new `User{id, firstName, lastName, fullName}` using the two arguments it received `firstName`, `lastName`, and it attaches two more properties to the `User{}` which are a uniquely generated ID that is returned upon the call of the `generateUniqueID` method, and the `fullName` that is a concatination of both the args we received.

From that we are applying key factors of writing a Clean Code:
1. Decomposition: We should mostly aim to decomposing our functions that each would have a single responsibility. In other words, split your code into smaller objects and functions that each has it's one and only one job.

2. Naming convention: We named the function as we supposed to, we should start with a verb that is followed by the related noun that is going to be affected by that verb: `createUser`, `generateUniqueID`, `sayHello`.
3. Execution flow in this code is pretty simple.
4. Different objects collaborating with each other: We have seen how `createUser` and `generateUniqueID` shared the goal of finally producing a unique user in a clear way.
5. Role and Responsibility: I bit you figured out what kind of responsibility both the Functions used in the code sinppets have by just reading there names.


**EASY to *implement*:** A perfect implementation of that Function would be:

```javascript
const userJohnDoe = createUser('John', 'Doe');
// { id: 2020121119875431, firstName: 'John', lastName: 'Doe', fullName: 'John Doe' }
```

We can derive from the above call and output, calling the `createUser` function is always going to result an output of a `User{}` that has two more properties in addition to the ones we already sent.

A clean code -function in that case-, is a function that will always return the same output for the same args no matter how many time it's called.

**EASY to *change*:**

Is any code considered to be clean when it's hard for other developers, or you for that matter to improve, fix or maintain? Definitly, Not!

Our task:
Allow the webapp user to add three more arguments: `username`, `avatar` and `dateOfBirth`, in which will be included in the `User{}` for that user.

```javascript
function createUser(firstName, lastName, username, avatar, dateOfBirth) {
    const newUserID = generateUniqueID();
    const fullName = `${firstName} ${lastName}`;
    
    return {
        id: newUserID,
        firstName,
        fullName,
        lastName,
        username,
        avatar,
        dateOfBirth
    }
}
```

It is easy right? but, just hold on for a second and look how many arguments the Function has now?

Let's talk about something called Destructuring Assignment in JS (EcmaScript6).

```javascript

const userObject =  {
    id: 2020121119875431,
    firstName: 'John',
    lastName: 'Doe'
};


const id = userObject.id;
const firstName = userObject.firstName;
const lastName = userObject.lastName;

// Equivalent
const { id, firstName, lastName } = userObject;


// --> userJohnID --> 2020121119875431

```

```javascript
// Object Destructring
function createUser(userObject) {
    const { firstName, lastName, username, avatar, dateOfBirth } = userObject;
    const newUserID = generateUniqueID();
    const fullName = `${firstName} ${lastName}`;
    
    return {
        id: newUserID,
        firstName,
        fullName,
        lastName,
        username,
        avatar,
        dateOfBirth
    }
}

// Implementation

const haneenUserObj = {
    firstName: 'Haneen',
    lastName: 'Shahwan',
    username: 'haneensh',
    avatar: 'someurl',
    dateOfBirth: 'somedob'
}

const haneenUser = createUser(haneenUserObj);
```

In the previous example we took advantage of the Destructuring feature that EcmaScript6 introduced (a JavaScript standarad that was released on 2015), Which allow us to simply define a variable `firstName` by calling for a property name that lives with-in a predefined Object `userObject`.

Some people would actually do this:

```js
function createUser(userObject) {
    const { firstName, lastName, ...restUserObject } = userObject;
    const newUserID = generateUniqueID();
    const fullName = `${firstName} ${lastName}`;
    
    return {
        id: newUserID,
        firstName,
        lastName,
        fullName,
        ...restUserObject
    }
}
```

In here, we also took advantage of ES6 Object Spreading to extract all the properties with-in `userObject` and attach them to the `User{}`.

Does it work? Yes, and it's totally legal, but, wouldn't that be a little risky? more uncomfortably not-knowing what the userObject actually has with-in?

I always prefer to create a strictly known Objects for the sake of readability, security and type assuring. Which way are you comfortable with?

<!-- LINTERS -->

---

## Who cares about writing Clean Code?

Definitly a tricky question, I assume most of us get overwhelmed by tight deadlines and fast paced working environment, especially with the rising number of StartUps that urgues business owners to speed up the process of launching a software or extending it.

**Do business owners care?** I bet Yeah! they do, they hire better developers, QA teams, and work with Agile environment, but still, they still won't sacrifice a little bit more time for the Tech Team to afford writing a Well-written, Clean and some times TESTED code.

**What about the Users?** Definitly, not! the only thing a user cares about in an application is that he can painlessly perform a specific job without needing to ever complain about the product.

They don't know what's which Tech Stack the app is developed with, and they will most likely never think about what lies behind that UI.

Then who for Pete's sake? YOU should, and that's why:

How many times did you jump to a code you have written only 2 months ago, and had to break it down into pieces and costed you a couple cups of coffee to figure it the heck out?

It's pretty known that we all live such moments, and for the sake of keeping you coffee money in your pocket, saving yourself from negative thoughts, and also making your co-workers lives easier: WRITE IT CLEAN and SIMPLE as if it was to be explained for a 5 years old.

### Why the Clean Code?

- Ease the future mainatinability and scalability of a codebase.
- Help you write the right tests! it will be easier for you to write tests for a code that you completely understand how it flows from A to Z.
- Increase your feeling of satisfaction about your own code.
- Every code you write is a codebase that is maintaines by a team is more likely to be read tenth of times from different people, your job is to make their tasks easier to deliver and not to make harder with nasty code.