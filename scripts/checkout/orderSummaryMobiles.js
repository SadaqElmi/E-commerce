import { mobile } from "../../Backend/mobile.js";

import { cart } from "../../data/cart.js";

export function orderSummaryMobiles() {
  let orderSummaryMobileHTML = "";

  cart.cartItems.forEach((cartItem) => {
    const productId = cartItem.id;

    let matchProductMobile;
    mobile.forEach((product) => {
      if (product.id === productId) {
        matchProductMobile = product;
      }
    });

    orderSummaryMobileHTML += ` 
          <li class="flex py-6  pt-10
          js-cart-item-container-${matchProductMobile.id} 
          ">
                        <div
                          class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                        >
                          <img
                            src="${matchProductMobile.image}"
                            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                            class="h-full w-full object-cover object-center"
                          />
                        </div>
  
                        <div class="ml-4 flex flex-1 flex-col">
                          <div>
                            <div
                              class="flex justify-between text-base font-medium text-gray-900"
                            >
                              <h3>
                                <a href="#">${matchProductMobile.name}</a>
                              </h3>
                              <p class="ml-4">$90.00</p>
                            </div>
                            <p class="mt-1 text-sm text-gray-500">${matchProductMobile.color}</p>
                          </div>
                          <div
                            class="flex flex-1 items-end justify-between text-sm"
                          >
                            <p class="text-gray-500">${cartItem.quantity}</p>
  
                            <div class="flex">
                              <span
                                type="button"
                                class="font-medium text-indigo-600 hover:text-indigo-500 js-remove-link cursor-pointer" data-product-id="${matchProductMobile.id}"
                              >
                                Remove
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
      
      `;
  });

  document.querySelector(".order-summary").innerHTML = orderSummaryMobileHTML;

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
      orderSummaryMobiles();
    });
  });
}

orderSummaryMobiles();
