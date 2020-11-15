
## Ecommerce APP

**We have two flows:**
1. Buyer/Customer

* I want to see all of the items available on the store
* I want to able to search for item on the store by the name 
* I want to able to filter items by the price or by category
* I want to add item to my Cart
* I want to be able to see the items inside my cart
* I want to be able to delete any items inside my cart
* I want to be able to see the total price of the items inside my cart
* I want to be able to disply the items either as a grid or a list
 
2. Seller
* I want to be able to add my product (name, detail, price, image[link], and category)
  * Should have the category as a list of options (dropdown menu)
* I want to be able to see all of my product
* I want to be able to search through my products
* I want to be able to delete my own product
* I want to be able to edit all the information of my product


**Important Note:** 
- You should have a pure functions 
- The app should be responsive, and should save its state even after closing the page `local storage`

**Hints:**
* The product item could be something lik this objec

  ```js
  {
    id: 0, 
    name: "T-shirt",
    details: ".....",
    price: 25,
    .....
    .....
  };
  ```
* You can use methods like `filter`, `map`, `sort`, `spread operator(...)`, `concat`, `includes`.


