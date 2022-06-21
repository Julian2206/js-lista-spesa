/* Data una lista della spesa, 
    stampare sulla pagina (anche brutalmente, 
    basta che si vedano) 
    gli elementi della lista individualmente 
    con un ciclo while.
 */

// build an array with "obj";
const shoppingList = ["obj1", "obj2", "obj3", "obj4", "obj5", "obj6"];

// get html element by ID or querySelector/querySelectorAll;
const shoppingCart = document.getElementById("cart");

// set the counter to 0;
let index = 0;

while (index < shoppingList.length) {
  // create li elements;
  const cartElement = document.createElement("li");
  //set cartElement to inner html string
  cartElement.innerHTML = shoppingList[index];
  // append cartElement to html
  shoppingCart.append(cartElement);
  // counter index = index +1;
  index++;
}
