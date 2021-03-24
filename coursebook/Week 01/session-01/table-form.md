### Building Semantic HTML Tables

The HTML `<table>` element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data. - from MDN


**Inside this `<table>` tag, we structure the table using:**

- `<tr>` - The table row element defines a row of cells which can include td and/or th tags

- `<th>` - The table header tag defines a cell as the "header" for group of cells. This is traditionally placed inside of a thead tag.

- `<td>` - The table data tag defines a cell of a table that contains some data.
- `<thead>`- The table head tag defines a set of rows which define the columns of a table
- `<tbody>`- *From MDN*:
> The HTML Table Body Element (`<tbody>`) defines one or more `<tr>` element data-rows to be the body of its parent `<table>` element 
(as long as no `<tr>` elements are immediate children of that table element.) In conjunction with a preceding `<thead>` and/or `<tfoot>` element, `<tbody>` provides additional semantic information for devices such as printers and displays. Of the parent table's child elements, <tbody> represents the content which, when longer than a page, will most likely differ for each page printed; while the content of `<thead>` and `<tfoot>` will be the same or similar for each page printed. For displays, `<tbody>` will enable separate scrolling of the `<thead>`, `<tfoot>`, and `<caption>` elements of the same parent `<table>` element. 
    
- `<tfoot>` - The table foot tag defines a set of rows summarizing the columns of the table.


**An example of an HTML table is as follows**:


``` html
<table>
    <thead>
        <tr>
            <th>heading</th>
            <th>heading</th>
            <th>heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>content</td>
            <td>content</td>
            <td>content</td>
        </tr>
        <tr>
            <td>content</td>
            <td>content</td>
            <td>content</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>content</td>
            <td>content</td>
            <td>content</td>
        </tr>
    </tfoot>
</table>
```
___________________________________________________________________________________________________________________________________________________________

### Building HTML Forms

**HTML Forms** are required, when you want to collect some data from the site visitor. *For example*, during user registration you would like to collect information such as name, email address, credit card, etc.

*From MDN*:
>HTML Forms are one of the main points of interaction between a user and a web site or application. They allow users to send data to the web site. Most of the time that data is sent to the web server, but the web page can also intercept it to use it on its own.

>An HTML Form is made of one or more widgets. Those widgets can be text fields (single line or multi line), select boxes, buttons, check boxes, or radio buttons. Most of the time, those widgets are paired with a label that describes their purpose.

The HTML **`<form>`** tag is used to create an HTML form and it has following syntax −
```html
<form action = "Script URL" method = "GET|POST">
   form elements like input, textarea etc.
</form>
```
| Attribute  | Description |
| ------------- | ------------- |
| action  | Backend script ready to process your passed data. |
| method  | Method to be used to upload data. The most frequently used are GET and POST methods.  |
| target | Specify the target window or frame where the result of the script will be displayed. It takes values like _blank, _self, _parent etc.  |
| enctype | You can use the enctype attribute to specify how the browser encodes the data before it sends it to the server. Possible values are **application/x-www-form-urlencoded** − This is the standard method most forms use in simple scenarios.**mutlipart/form-data** − This is used when you want to upload binary data in the form of files like image, word file etc.  |
 
 
####  :on: HTML Form Elements
*The **`<label>`** tag defines a label for several elements:*

| type=" "  | Description |
| ------------- | ------------- |
| text  | Defines a one-line text input field  |
| password | Defines a one-line password input field  |    
| submit | 	Defines a submit button to submit the form to server |    
|   reset | 	Defines a reset button to reset all values in the form. |    
| radio | Defines a radio button which allows select one option. |    
| checkbox	 | 	Defines checkboxes which allow select multiple options form.  |    
| button	 | Defines a simple push button, which can be programmed to perform a task on an event. |    
| file | Defines to select the file from device storage.  |    
| image| Defines a graphical submit button. |    

**HTML5 added new types on <input> element. Following is the list of types of elements of HTML5**
| type=" "  | Description |
| ------------- | ------------- |
| color  | Defines an input field with a specific color. |
| date | Defines an input field for selection of date.  |    
| datetime-local | 	Defines an input field for entering a date without time zone. |    
|   email | 	Defines an input field for entering an email address. |    
| month | Defines a control with month and year, without time zone. |    
| number	 | 	Defines an input field to enter a number.  |    
| url		 | Defines a field for entering URL |    
| week	 | Defines a field to enter the date with week-year, without time zone.  |    
| search | Defines a single line text field for entering a search string. |  
| tel | Defines an input field for entering the telephone number. |  


*Note*:The default value of the type attribute is **"text"**.

**Proper use of labels with the elements above will benefit: from *w3schools***
 - Screen reader users (will read out loud the label, when the user is focused on the element)
- Users who have difficulty clicking on very small regions (such as checkboxes) - because when a user clicks the text within the `<label>` element, it toggles the input (this increases the hit area). 

#### Tips and Notes
*Tip*: The **for** attribute of `<label>` must be equal to the **id** attribute of the related element to bind them together. A label can also be bound to an element by placing the element inside the `<label>` element. 

**Following is the description about types of <input> element with examples.**
1. `<input type="text">:`

<input> element of type "text" are used to define a single-line input text field.

```html
<form>  
    <label>Enter first name</label><br>  
    <input type="text" name="firstname"><br>  
    <label>Enter last name</label><br>  
    <input type="text" name="lastname"><br>  
    <p><strong>Note:</strong>The default maximum cahracter lenght is 20.</p>  
</form>  
```
[TRY IT!](https://codepen.io/pen/)


2. `<input type="password">:`

The <input> element of type "password" allow a user to enter the password securely in a webpage. The entered text in password filed converted into "*" or ".", so that it cannot be read by another user.

```html
<form>  
    <label>Enter User name</label><br>  
    <input type="text" name="firstname"><br>  
    <label>Enter Password</label><br>  
    <input type="Password" name="password"><br>  
    <br><input type="submit" value="submit">  
</form>
```
[TRY IT!](https://codepen.io/pen/)

3. `<input type="submit">:`

The <input> element of type "submit" defines a submit button to submit the form to the server when the "click" event occurs.
```html
<form action="https://www.javatpoint.com/html-tutorial">  
    <label>Enter User name</label><br>  
    <input type="text" name="firstname"><br>  
    <label>Enter Password</label><br>  
    <input type="Password" name="password"><br>  
    <br><input type="submit" value="submit">  
</form>  
```
[TRY IT!](https://codepen.io/pen/)

4. `<input type="reset">:`

The <input> type "reset" is also defined as a button but when the user performs a click event, it by default reset the all inputted values.

```html
<form>  
    <label>User id: </label>  
     <input type="text" name="user-id" value="user">  
              <label>Password: </label>  
     <input type="password" name="pass" value="pass"><br><br>   
     <input type="submit" value="login">  
      <input type="reset" value="Reset">  
</form>  
```
[TRY IT!](https://codepen.io/pen/)

5. `<input type="radio">`:

The <input> type "radio" defines the radio buttons, which allow choosing an option between a set of related options. At a time only one radio button option can be selected at a time.

```html
<form>  
  <p>Kindly Select your favorite color</p>  
  <input type="radio" name="color" value="red"> Red <br>  
  <input type="radio" name="color" value="blue"> blue <br>  
  <input type="radio" name="color" value="green">green <br>  
  <input type="radio" name="color" value="pink">pink <br>  
  <input type="submit" value="submit">  
</form>  
```
[TRY IT!](https://codepen.io/pen/)

6. `<input type="checkbox">`:

The <input> type "checkbox" are displayed as square boxes which can be checked or unchecked to select the choices from the given options.

*Note: :pencil2:*
 The "radio" buttons are similar to checkboxes, but there is an important difference between both types: radio buttons allow the user to select only one option at a time, whereas checkbox allows a user to select zero to multiple options at a time.

```html
<form>   
      <label>Enter your Name:</label>  
      <input type="text" name="name">  
      <p>Kindly Select your favourite sports</p>  
      <input type="checkbox" name="sport1" value="cricket">Cricket<br>  
      <input type="checkbox" name="sport2" value="tennis">Tennis<br>  
      <input type="checkbox" name="sport3" value="football">Football<br>  
      <input type="checkbox" name="sport4" value="baseball">Baseball<br>  
      <input type="checkbox" name="sport5" value="badminton">Badminton<br><br>  
      <input type="submit" value="submit">  
  </form>
```
[TRY IT!](https://codepen.io/pen/)

7. `<input type="button">`:

The <input> type "button" defines a simple push button, which can be programmed to control a functionally on any event such as, click event.

*Note: :pencil2:*  It mainly works with JavaScript.
```html
<form>  
     <input type="button" value="Clcik me " onclick="alert('you are learning HTML')">  
</form>  
```
[TRY IT!](https://codepen.io/pen/)

8. `<input type="file">`:

The <input> element with type "file" is used to select one or more files from user device storage. Once you select the file, and after submission, this file can be uploaded to the server with the help of JS code and file API.

```html
<form>  
     <label>Select file to upload:</label>  
     <input type="file" name="newfile">  
     <input type="submit" value="submit">  
</form> 
```
[TRY IT!](https://codepen.io/pen/)

9. `<input type="image">`:

The <input> type "image" is used to represent a submit button in the form of image.

```html
<!DOCTYPE html>  
<html>  
<body>  
<h2>Input "image" type.</h2>  
<p>We can create an image as submit button</p>  
  <form>  
    <label>User id:</label><br>  
     <input type="text" name="name"><br><br>  
     <input type="image" alt="Submit" src="login.png"  width="100px">  
  </form>  
  
 </body>  
</html>  
```
____________________________________________________________________________________________________________
#### Exercise:
**Create a Register Form**
- Username 
- Emai
- Password 
- repassword
- which is Favorite actor? *using radio type input*
    1.Will Smith
    2.Tom Hanks
    3.Johnny Depp
- Favorite Programming Language(s) Ruby *using checkbox type input*
   1.JavaScript
   2.Python
   3.Go
- Additional Comments 
- Button



