import { cart } from "../../data/cart.js";

const btnClose = document.querySelector(".btn-close-js");
const sideMenu = document.querySelector(".side-menu");
const open = document.querySelector(".btn-open-js");

btnClose.addEventListener("click", () => {
  sideMenu.style.display = "none";
});
open.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

export function renderCheckoutHeader() {
  function updateCarQuantity() {
    let cartTotal = 0;
    cart.cartItems.forEach((cartItem) => {
      cartTotal += cartItem.quantity;
    });
    document.querySelector(
      ".js-checkoutItems"
    ).innerHTML = `CheckoutItems: ${cartTotal}`;
  }
  updateCarQuantity();
}
renderCheckoutHeader();
