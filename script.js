/* Data una lista della spesa, 
    stampare sulla pagina (anche brutalmente, 
    basta che si vedano) 
    gli elementi della lista individualmente 
    con un ciclo while.
 */

const shoppingList = ["obj1", "obj2", "obj3", "obj4", "obj5", "obj6"];

const shoppingCart = document.getElementById("cart");

let index = 0;

while (index < shoppingList.length) {
  const cartElement = document.createElement("li");
  cartElement.innerHTML = shoppingList[index];
  shoppingCart.append(cartElement);
  index++;
}
