# Cascade and inheritance
Inheritance and the cascade are two fundamental concepts in CSS, that are important to understand. The two concepts are closely related, yet different:

* Inheritance is associated with how the elements in the HTML markup inherit properties from their parent (containing) elements and pass them on to their children.
* The cascade relates to CSS declarations being applied to a document, and how conflicting rules do or do not override each other.

## How inheritance works
Every element in an HTML document inherits all inheritable properties from its parent except the root element (<html>), which does not have a parent.

Whether or not the inherited properties will have any effect depends on other things, as described later in the section about the cascade. Just as a blue-eyed mother can have a brown-eyed child if the father has brown eyes, inherited properties in CSS can be overridden.

You can See an Example [here](https://webplatform.github.io/docs/tutorials/inheritance_and_cascade/#:~:text=can%20be%20overridden.-,An%20example%20of%20inheritance,-Copy%20the%20following)


## The Cascade
CSS an acronym of Cascading Style Sheets, so it is not a surprise that the cascade is an important concept. It is the mechanism that controls the end result when multiple, conflicting CSS declarations apply to the same element. There are three main concepts that control the order in which CSS declarations are applied:

1. Importance
2. Specificity
3. Source order

In this example: 
```css
* {
  font-family: "Comic Sans MS" !important;
}
```
Important declarations in a user style sheet will trump everything else, which is logical. In this case, no matter what the designer specified, and no matter what the browser’s default font family is set to, everything will be displayed in Comic Sans MS. The default browser rendering will only apply if those declarations aren’t overridden by any rules in a user style sheet or an author style sheet, since the user agent style sheet has the lowest precedence.






