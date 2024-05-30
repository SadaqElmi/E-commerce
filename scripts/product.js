import { products } from "../Backend/pageProduct.js";
import { formatMoneyCurrency } from "./moneyCurrecy/money.js";
import { cart } from "../data/cart.js";

const btnClose = document.querySelector(".btn-close-js");
const sideMenu = document.querySelector(".side-menu");
const open = document.querySelector(".btn-open-js");

// ? Mobile reponsive
btnClose.addEventListener("click", () => {
  sideMenu.style.display = "none";
});
open.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

let summerHTML = "";

products.forEach((product) => {
  summerHTML += `
       <div class="group relative">
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
            >
              <img
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
              src="${product.image}"
              />
            </div>
            <div class="mt-4 flex justify-between">
              <div class="gap-2 flex flex-col">
                <h3 class="text-sm text-gray-700">${product.name}</h3>
                <p class="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <div class="right-info-product flex flex-col gap-2 items-center">
                <p class="text-sm font-medium text-gray-900">$${formatMoneyCurrency(
                  product.priceCents
                )}</p>
                <button
                  class="text-white pl-4 pr-4 py-2 rounded-sm bg-sky-400 pointer text-sm add-to-js "
                 
                   data-product-id="${product.id}"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
  
  `;
});

document.querySelector(".product").innerHTML = summerHTML;

function updateQuantity() {
  let cartQuantity = cart.calculateCartQuantity();

  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}

updateQuantity();
// add btn
document.querySelectorAll(".add-to-js").forEach((btn) => {
  btn.addEventListener("click", () => {
    const productId = btn.dataset.productId;
    console.log(productId);
    cart.addToCart(productId);
    updateQuantity();
  });
});

console.log(products);
