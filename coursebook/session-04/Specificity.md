
## Specificity in CSS

as you know in CSS before apply any properties you have to select the element, to select elements you have many methods like select by **id**, **class**, **tagName**, **attributes** or we can style it directly by inline style, but if you have selected the element from two places and you have changed the color of the element in both places which one will apply?
like :

> **index.html**
<img src="https://i.imgur.com/0G0bfyj.png" alt="final result" width="500" />

> **index.css**
<img src="https://i.imgur.com/kUjtBA6.png" alt="final result" width="500" />

> **Final Result**
<img src="https://i.imgur.com/EdeP2jN.png" alt="final result" width="500" />

so why css applied the second one?, because select by ```id``` is stronger than select by ```class```.

### Comprehensive Image
<img src="https://cms-assets.tutsplus.com/uploads/users/30/posts/34141/image/spec-01.svg" alt="final result" width="800" />

---
