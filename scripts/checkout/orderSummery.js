import { products } from "../../Backend/pageProduct.js";
import { mobile } from "../../Backend/mobile.js";
import { mobileIphones } from "../../Backend/iphones.js";
import { samsungProduct } from "../../Backend/samsung.js";
import { redmiProducts } from "../../Backend/redmi.js";
import { cart } from "../../data/cart.js";
import { renderCheckoutHeader } from "./headerTop.js";
export function orderSummaryPageProduct() {
  // Merge the products arrays
  const allProducts = [
    ...products,
    ...mobile,
    ...mobileIphones,
    ...samsungProduct,
    ...redmiProducts,
  ];

  let orderSummaryHTML = "";

  cart.cartItems.forEach((cartItem) => {
    const productId = cartItem.id;

    // Find the product in the merged array
    const matchedProduct = allProducts.find(
      (product) => product.id === productId
    );

    if (matchedProduct) {
      orderSummaryHTML += `
        <li class="flex py-6  pt-10 js-cart-item-container-${
          matchedProduct.id
        }">
          <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img src="${matchedProduct.image}" alt="${
        matchedProduct.name
      }" class="h-full w-full object-contain">
          </div>
          <div class="ml-4 flex flex-1 flex-col">
            <div>
              <div class="flex justify-between text-base font-medium text-gray-900">
                <h3><a href="#">${matchedProduct.name}</a></h3>
                <p class="ml-4">$${matchedProduct.priceCents / 100}</p>
              </div>
              <p class="mt-1 text-sm text-gray-500">${matchedProduct.color}</p>
            </div>
            <div class="flex flex-1 items-end justify-between text-sm">
              <p class="text-gray-500">${cartItem.quantity}</p>
              <div class="flex">
                <span type="button" class="font-medium text-indigo-600 hover:text-indigo-500 js-remove-link cursor-pointer" data-product-id="${
                  matchedProduct.id
                }">
                  Remove
                </span>
              </div>
            </div>
          </div>
        </li>
      `;
    }
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
