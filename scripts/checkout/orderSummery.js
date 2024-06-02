import { products } from "../../Backend/pageProduct.js";
import { mobileIphones } from "../../Backend/iphones.js";

import { cart } from "../../data/cart.js";

import { renderCheckoutHeader } from "./headerTop.js";

export function orderSummaryPageProduct() {
  let orderSummaryHTML = "";

  cart.cartItems.forEach((cartItem) => {
    const productId = cartItem.id;

    let matchPageProduct;
    products.forEach((product) => {
      if (product.id === productId) {
        matchPageProduct = product;
      }
    });

    orderSummaryHTML += ` 
          <li class="flex py-6  pt-10
          js-cart-item-container-${matchPageProduct.id} 
          ">
                        <div
                          class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                        >
                          <img
                            src="${matchPageProduct.image}"
                            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                            class="h-full w-full object-contain"
                          />
                        </div>
  
                        <div class="ml-4 flex flex-1 flex-col">
                          <div>
                            <div
                              class="flex justify-between text-base font-medium text-gray-900"
                            >
                              <h3>
                                <a href="#">${matchPageProduct.name}</a>
                              </h3>
                              <p class="ml-4">$90.00</p>
                            </div>
                            <p class="mt-1 text-sm text-gray-500">${matchPageProduct.color}</p>
                          </div>
                          <div
                            class="flex flex-1 items-end justify-between text-sm"
                          >
                            <p class="text-gray-500">${cartItem.quantity}</p>
  
                            <div class="flex">
                              <span
                                type="button"
                                class="font-medium text-indigo-600 hover:text-indigo-500 js-remove-link cursor-pointer" data-product-id="${matchPageProduct.id}"
                              >
                                Remove
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
      
      `;
  });

  document.querySelector(".order-summary").innerHTML = orderSummaryHTML;

  // delete btn
  document.querySelectorAll(".js-remove-link").forEach((link) => {
    link.addEventListener("click", () => {
      const { productId } = link.dataset;
      cart.removeFromCart(productId);
      console.log(productId);
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.remove();
      renderCheckoutHeader();
    });
  });
}

orderSummaryPageProduct();
