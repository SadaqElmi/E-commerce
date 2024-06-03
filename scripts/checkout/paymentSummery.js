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

export function paymentSummaryPageProduct() {
  let Total = 0;
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

  cart.cartItems.forEach((cartItem) => {
    const productId = cartItem.id;

    const matchedProduct = allProducts.find(
      (product) => product.id === productId
    );

    Total += matchedProduct.priceCents * cartItem.quantity;

    let carQuantity = 0;
    cart.cartItems.forEach((cartItem) => {
      carQuantity += cartItem.quantity;
    });
    const paymentHTML = `
      <h1 class="text-base font-medium text-gray-900">
                SubTotalItems:(${carQuantity})
              </h1>
              <div
                class="flex justify-between text-base font-medium text-gray-900"
              >
                <p>Subtotal</p>
                <p>$${formatMoneyCurrency(Total) / 100}</p>
              </div>
              <p class="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div class="mt-6">
                <a
                  href="#"
                  class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >Checkout</a
                >
              </div>
              <div
                class="mt-6 flex justify-center text-center text-sm text-gray-500"
              >
                <p>
                  or
                  <a
                    href="product.html"
                    type="button"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </p>
              </div>
    
              `;

    document.querySelector(".payment-summary").innerHTML = paymentHTML;
  });
}
