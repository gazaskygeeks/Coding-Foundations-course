- ### Building Semantic HTML Tables

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


```html
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
- ### Building HTML Forms

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
