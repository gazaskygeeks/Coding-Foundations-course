## CSS Layout - The position Property

- The position property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).

### There are five different position values:

- static
- relative
- fixed
- absolute
- sticky

Top, bottom, left, and right properties are used to position the elements but you should set the position property first to make it work.
They also work differently depending on the position value.

- ### position: static;
``` Static``` is the default positioned value that given to the HTML elements.
Static positioned elements are not affected by the top, bottom, left, and right properties.
it is always positioned according to the normal flow of the page
### Example:
```css
.box-static {
  position: static;
}
```
![](https://i.imgur.com/fP8nzt8.png)
- ### position: relative;
The element is positioned according to the normal flow of the document.
Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.
### Example:
```css
box-relative {
    position: relative;
    top: 40px; left: 40px;
}
```
![](https://i.imgur.com/weJCVTL.png)
- ### position: fixed;
It is positioned relative to the initial containing block established by the viewport
which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.
A fixed element does not leave a gap in the page where it would normally have been located.
### Example:
```css
box.fixed{
    position: fixed;
    bottom: 100px;
    right: 0;

}
```
![](https://i.imgur.com/9EtBfvW.png)
- ### position: absolute;
It is positioned relative to its closest positioned ancestor, if any; otherwise, it is placed relative to the initial containing block. Its final position is determined by the values of top, right, bottom, and left.
However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.
### Example:
```css
div.relative {
  position: relative;
  width: 400px;
  height: 200px;
  border: 3px solid #73AD21;
}

div.absolute {
  position: absolute;
  top: 80px;
  right: 0;
  width: 200px;
  height: 100px;
  border: 3px solid #73AD21;
}
```
![](https://i.imgur.com/KVArL8D.png)
- ### position: sticky;
An element with position: sticky; is positioned based on the user's scroll position.
A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).
### Example:
```css
div.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 5px;
  background-color: #cae8ca;
  border: 2px solid #4CAF50;
}
```
### >> [Click here](https://www.w3schools.com/css/tryit.asp?filename=trycss_position_sticky) <<
- ### Overlapping Elements
When elements are positioned, they can overlap other elements.
The z-index property specifies the stack order of an element (which element should be placed in front of, or behind, the others).
An element can have a positive or negative stack order.
### Example:
```css
img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
```
![](https://i.imgur.com/dxPShnZ.png)

An element with greater stack order is always in front of an element with a lower stack order.

**Note: If two positioned elements overlap without a z-index specified, the element positioned last in the HTML code will be shown on top.**
***

### Task

![](https://www.rithmschool.com/content/html_css_fundamentals/layout_mock1.png)

