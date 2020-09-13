### Building Semantic HTML Tables

The HTML `<table>` element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data. - from MDN


Inside this <table> tag, we structure the table using:

- `<tr>` - The table row element defines a row of cells which can include td and/or th tags

- `<th>` - The table header tag defines a cell as the "header" for group of cells. This is traditionally placed inside of a thead tag.

- `<td>` - The table data tag defines a cell of a table that contains some data.
- `<thead>`- The table head tag defines a set of rows which define the columns of a table
- `<tbody>`- From MDN:
T> he HTML Table Body Element (<tbody>) defines one or more <tr> element data-rows to be the body of its parent <table> element 
(as long as no <tr> elements are immediate children of that table element.) In conjunction with a preceding <thead> and/or <tfoot> element, <tbody> provides additional semantic information for devices such as printers and displays. Of the parent table's child elements, <tbody> represents the content which, when longer than a page, will most likely differ for each page printed; while the content of <thead> and <tfoot> will be the same or similar for each page printed. For displays, <tbody> will enable separate scrolling of the <thead>, <tfoot>, and <caption> elements of the same parent <table> element.
    
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
