import {
  products,
  mobile,
  mobileIphones,
  samsungProduct,
  redmiProducts,
  oppoProducts,
  huaweiProducts,
  vivoProducts,
  tabletProducts,
  samsungTabletProduct,
  appleIpadProducts,
  tshirtPrdoct,
  laptopProducts,
  fanaanadProducts,
  shaatiProducts,
  hpLaptopProducts,
  appleLaptopProducts,
  airpodsProducts,
  shortAirpodsProducts,
  headPhonesProducts,
} from "../../Backend/ProductData.js";
import { cart } from "../../data/cart.js";
import { renderCheckoutHeader } from "./headerTop.js";
import { formatMoneyCurrency } from "../moneyCurrecy/money.js";
import { paymentSummaryPageProduct } from "./paymentSummery.js";

export function orderSummaryPageProduct() {
  const allProducts = [
    ...products,
    ...mobile,
    ...mobileIphones,
    ...samsungProduct,
    ...redmiProducts,
    ...oppoProducts,
    ...huaweiProducts,
    ...vivoProducts,
    ...tabletProducts,
    ...samsungTabletProduct,
    ...appleIpadProducts,
    ...tshirtPrdoct,
    ...fanaanadProducts,
    ...shaatiProducts,
    ...laptopProducts,
    ...hpLaptopProducts,
    ...appleLaptopProducts,
    ...airpodsProducts,
    ...shortAirpodsProducts,
    ...headPhonesProducts,
  ];

  let orderSummaryHTML = "";

  cart.cartItems.forEach((cartItem) => {
    const productId = cartItem.id;

    const matchedProduct = allProducts.find(
      (product) => product.id === productId
    );

    if (matchedProduct) {
      orderSummaryHTML += `
        <li class="flex py-6 pt-10 js-cart-item-container-${matchedProduct.id}">
          <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img src="${matchedProduct.image}" alt="${
        matchedProduct.name
      }" class="h-full w-full object-contain">
          </div>
          <div class="ml-4 flex flex-1 flex-col">
            <div>
              <div class="flex justify-between text-base font-medium text-gray-900">
                <h3><a href="#">${matchedProduct.name}</a></h3>
                <p class="ml-4">$${formatMoneyCurrency(
                  matchedProduct.priceCents / 100
                )}</p>
              </div>
              <p class="mt-1 text-sm text-gray-500">${matchedProduct.color}</p>
            </div>
            <div class="flex flex-1 items-center justify-between text-sm gap-10">
              <p class="text-gray-500 quantity-label js-quantity-label-${
                matchedProduct.id
              }">${cartItem.quantity}</p>
              <div class="flex gap-2">
                <input type="number" class="quantity-input bg-gray-200 rounded-sm js-quantity-input-${
                  matchedProduct.id
                }" />
                <span type="button" class="font-medium text-indigo-600 hover:text-indigo-500 js-save-link cursor-pointer save-quantity-link" data-product-id="${
                  matchedProduct.id
                }">Save</span>
                <span type="button" class="font-medium text-indigo-600 hover:text-indigo-500 js-update-link cursor-pointer" data-product-id="${
                  matchedProduct.id
                }">Update</span>
                <span type="button" class="font-medium text-indigo-600 hover:text-indigo-500 js-remove-link cursor-pointer update-quantity-link" data-product-id="${
                  matchedProduct.id
                }">Remove</span>
              </div>
            </div>
          </div>
        </li>
      `;
    } else {
      console.error(`Product not found for cart item with ID: ${productId}`);
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
      paymentSummaryPageProduct();
      orderSummaryPageProduct();
    });
  });

  // update btn
  document.querySelectorAll(".js-update-link").forEach((link) => {
    link.addEventListener("click", () => {
      const { productId } = link.dataset;
      console.log(productId);
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.classList.add("is-editing-quantity");
    });
  });

  // save btn
  document.querySelectorAll(".js-save-link").forEach((link) => {
    link.addEventListener("click", () => {
      const { productId } = link.dataset;
      const quantityInput = document.querySelector(
        `.js-quantity-input-${productId}`
      );
      const newQuantity = Number(quantityInput.value);
      if (newQuantity < 0 || newQuantity >= 1000) {
        alert("Quantity must be at least 0 and less than 1000");
        return;
      }
      cart.updateQuantity(productId, newQuantity);

      const quantityLabel = document.querySelector(
        `.js-quantity-label-${productId}`
      );
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.classList.remove("is-editing-quantity");

      quantityLabel.innerHTML = newQuantity;
      renderCheckoutHeader();
      paymentSummaryPageProduct();
    });
  });
}

orderSummaryPageProduct();
