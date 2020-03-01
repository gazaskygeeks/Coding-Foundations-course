## Formatting Page Content with HTML
We know now that we can add text to our HTML page using the `<p>` but how can we format this text in HTML

There are many ways of doing that but we will do it using some HTML elements:


| Element | Usage |
| ------- | ----- |
| `<b>`   | Highlight important information|
| `<strong>` |  Similarly to bold, to highlight key text|
|    `<i>`     |   To denote text    |
|    `<mark>`     |   Highlight the background of the text    |
|   `<small>`      |   To shrink the text    |
|     `<strike>`    |  To place a horizontal line across the text     |
|      `<u>`   |   Used for links or text highlights    |
|    `<sub>`     |    Typographical stylistic choice   |
|   `<sup>`      |    Another typographical presentation style|

[Check the difference between `<em>` and `<i>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em)

[Check the difference between `<b>` and `<strong>`](https://www.seobility.net/en/wiki/Strong_and_Bold_Tags)

To use or apply any of these formats on any text you need to just **wrap it** between the opening and closing tags

```html=
<p>
    this word is normal but this 
    <strong> word </strong> is bold
</p>
```
**The expected output**:
<p>
    this word is normal but this 
    <strong> word </strong> is bold
</p>


---


> In the following section, you will be introduced to some common HTML elements and we suggest that you try these elements on your own in a **CodePen** 

## Links
Ever come across a link on a webpage that took you to another one. these links are HTML links made using the `<a>` tag. In order for this tag to know where it should take the user when they click it, we have to give it an `href` attribute.

**Example**

```html=
<a href="www.google.com">Click Me</a>
```
**Can you guess where the link would take the user?** As you may have guessed when the user clicks this link he will be directed to **Google** page

**The expected output**:

<a href="www.google.com" target="_blank" rel="noreferrer noopener">Click Me</a>

- [Explaining the noreferrer and noopener in the link tag](https://blog.templatetoaster.com/noopener-noreferrer/)

## Images
In today’s modern digital world, images are everything. The `<img>` tag has everything you need to display images on your site.

In order for the image tag to display the image we need to provide it with the path to the image which can be a path for it on your device or a link from the web

```html=
<img src="images/image.jpg" alt="some image" />
```

**The expected output** is an image displayed with no specific width or height so it should take all the space that it needs (its original size).

<img src="https://images.unsplash.com/photo-1558495122-89ba11e1f697?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" alt="some image" />


## Lists
We can create different types of lists in HTML and these two are the most common used:

### Ordered List
The first is an `<ol>`: This is an ordered list of contents. For example:

1. An item
2. Another item
3. Another goes here.

Inside the `<ol>` tag we list each item on the list inside `<li>` `</li>` tags.

**For example**:
```html=
<ol>
    <li>An item </li>
    <li>Another item </li>
    <li>Another goes here </li>
</ol>
```
**The expected output**
<ol>
    <li>An item </li>
    <li>Another item </li>
    <li>Another goes here </li>
</ol>

### Unordered List
The second type of list that you may wish to include is an `<ul>` unordered list. This is better known as a bullet point list and contains no numbers.

**An example of this**:

```html=
<ul>
    <li>This is </li>
    <li>An Unordered </li>
    <li>List </li>
</ul>
```
**The expected output**
<ul>
    <li>This is</li>
    <li>An Unordered </li>
    <li>List </li>
</ul>

## Tables
When drawing a table we must open an element with the `<table>` opening tag. Inside this tag, we structure the table using the table rows, `<tr>`, and cells, `<td>`.

**An example of an HTML table is as follows**:

```html=
<table>
    <tr> 
        <td>Row 1 - Column 1</td>  
        <td>Row 1 - Colunm 2 </td>
        <td>Row 1 - Column 3 </td> 
    </tr> 
    <tr> 
        <td>Row 2 - Column 1</td> 
        <td>Row 2 - Column 2</td>  
        <td>Row 2 - Column 3</td> 
    </tr> 
</table>
```

<table>
    <tr> 
        <td>Row 1 - Column 1</td>  
        <td>Row 1 - Colunm 2 </td>
        <td>Row 1 - Column 3 </td> 
    </tr> 
    <tr> 
        <td>Row 2 - Column 1</td> 
        <td>Row 2 - Column 2</td>  
        <td>Row 2 - Column 3</td> 
    </tr> 
</table>

There are more additional elements that we can add to a table like the `<th>` which is for the table headings(A head/title for each column).

```html=
<table>
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>John</td>
        <td>Doe</td>
        <td>18</td>
    </tr>
</table>
```

The above HTML code above generates a table with two rows and three columns but the first row is for the table headings 

<table>
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>John</td>
        <td>Doe</td>
        <td>18</td>
    </tr>
</table>

**Hint**: By default, the tables won't have any borders (in modern browsers) but some browsers add borders and some default styles to them.
