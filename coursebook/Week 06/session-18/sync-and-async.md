# Synchronous vs Asynchronous JavaScript

## ✤ JavaScript is Synchronous

_at its base_, JavaScript is a synchronous, blocking, single-threaded language. That just means that only one operation can be in progress at a time.

<br>

> _That's not the entire story, though!_

But what if you have to get maybe over 500 images or audio from the database, and you don't want to wait till the function is done!!

> Synchronous code makes a programmer's life very difficult!


### the good news, you can manipulate JavaScript to *behave in an asynchronous* way

<br>


## ✤ What is Asynchronous?

asynchronous means you can move to another task before the previous one finishes. This way, with asynchronous programming you’re able to deal with *multiple requests simultaneously*, thus completing more tasks in a much shorter period of time.   

<br>
<br>

<p align="center">
  <img src="https://martech.zone/wp-content/uploads/2012/09/asynchronous.png" width='500'/>
</p>

> sync: executes tasks in sequence
>
> async: start something now and finish it later

<br>
<br>

## ❖ Site Speed and Asynchronous Javascript

With asynchronous programming, any part of your code that takes longer to run can be handled by a parallel entity that does not block the main code thread. 

<p align="center">
  <img src="https://cdn.buttercms.com/hmirWTF7TBCsX6mncY0P" width='500'/>
</p>



As you can see from the synchronous vs. asynchronous programming diagram, this allows us to get much more stuff done in a short amount of time and therefore can be very helpful in web applications.

<br>
<br>
<br>

---

### ☑︎ So to recap, 
synchronous code is executed in sequence – each statement waits for the previous statement to finish before executing. Asynchronous code doesn’t have to wait – your program can continue to run.

You do this to keep your site or **app responsive, reducing waiting time for the user.**