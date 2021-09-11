# HTML Forms

## What is Form in HTML?!

HTML Forms are required to collect different kinds of user inputs, such as contact details like name, email address, phone numbers, or details like credit card information, etc.

Forms contain special elements called **controls** like inputbox, checkboxes, radio-buttons, submit buttons, etc. Users generally complete a form by modifying its controls _e.g._ entering text, selecting items, etc. and submitting this form to a web server for further processing.

> Here's a simple example of form:

```html
<form action="/action_page.js" method="POST">
    <input type="text" placeholder='your name'>
    <input type="password" placeholder='your password'>
    <input type="submit" value="Submit">
</form>
```

> The `<form></form>` tag is used to create an HTML form.

--------------------------------------------------------------------------------

<br>

## HTML Form Attribute

Attribute    | Value        | Description
------------ | ------------ | --------------------------------------------------------------
action       | _URL_        | Specifies where to send the form-data when a form is submitted
autocomplete | _on / off_   | Specifies whether a form should have autocomplete on or off
method       | _get / post_ | Specifies the HTTP method to use when sending form-data
name         | _text_       | Specifies the name of a form

<br>
<br>

## HTML Form Controls

There are different types of form **controls** that you can use to collect data using HTML form −

- Text Input
- Checkboxes
- Radio Box
- Select Box
- File Select
- boxes Hidden
- Submit and Reset Buttons

<br>

> Follow the link to have a look into a form and its structure! [here!](https://codepen.io/sara219/pen/VwpqwGW)

--------------------------------------------------------------------------------

<br>
<br>

## HTML Input

In HTML **`<input type=" ">`** is an important element of HTML form.The "type" attribute of input element can be various types, which defines information field. Such as :

```html
<input type="password" name="name">
```

> _gives a one-line password input field_

<br>
<br>

### Following is a list of all types of `<input>` element of HTML!

type=" " | Description
-------- | ------------------------------------------------------------------------------------
text     | Defines a one-line text input field
password | Defines a one-line password input field
submit   | Defines a submit button to submit the form to server
reset    | Defines a reset button to reset all values in the form.
radio    | Defines a radio button which allows select one option.
checkbox | Defines checkboxes which allow select multiple options form.
button   | Defines a simple push button, which can be programmed to perform a task on an event.
file     | Defines to select the file from device storage.
image    | Defines a graphical submit button.

<br>
<br>

# 🛑 Task

#### HTML5 added new types on `<input>` element, take 10 min to search and read about these new types and explain two or three to your mates!
