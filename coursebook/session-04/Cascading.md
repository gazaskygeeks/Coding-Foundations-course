

## Cascading in CSS

in simple words cascading in CSS is when there is more than one source to style the html element CSS will combine them together the get the final result.

let me explain consider you have two CSS files first one select button with id `#button` and add orange background to the button and the second file select button with id `#button` and change the size of the text to something like `24px`, here is the idea CSS will combine them together and will figure out that you try to style the same element.

> CSS does this behind the scenes

### Benefits from Cascading

- To style the elements from multiple place.
- **DISADVANTAGE** when the developer come to the debug the code, he has to all check all places affect the element

## Example

first file:  
<img src="https://i.imgur.com/ETjTRee.png" alt="first file" width="400" />

second file:  
<img src="https://i.imgur.com/XmizeeZ.png" alt="second file" width="400" />

final result: (this result you will not see it, CSS did it behind the scenes)  
<img src="https://i.imgur.com/FZZXxdK.png" alt="final result" width="400" />

<img src="https://i.imgur.com/4yDmZsA.png" alt="final result" width="400" />

### Your turn to try

- open `index.html` and add an element there.
- open `index.css` file style that element.
- create a new CSS file `index2.css` and link it to html file.
- try to style the same element from the new file.
- you have to see the element effected by the two places

#### LAST NOTE : that could happen in the same file when you select the element twice in the same file