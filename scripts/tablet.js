import { formatMoneyCurrency } from "./moneyCurrecy/money.js";
import { tabletProducts } from "../Backend/tablet.js";

const btnClose = document.querySelector(".btn-close-js");
const sideMenu = document.querySelector(".side-menu");
const open = document.querySelector(".btn-open-js");

btnClose.addEventListener("click", () => {
  sideMenu.style.display = "none";
});
open.addEventListener("click", () => {
  sideMenu.style.display = "block";
});
let mobileHTML = "";

tabletProducts.forEach((productTbalet) => {
  mobileHTML += `
       <div class="group relative">
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
            >
              <img
              class="h-full w-full object-contain lg:h-full lg:w-full"
              src="${productTbalet.image}"
              />
            </div>
            <div class="mt-4 flex justify-between">
              <div class="gap-2 flex flex-col">
                <h3 class="text-sm text-gray-700">${productTbalet.name}</h3>
                <p class="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <div class="right-info-product flex flex-col gap-2 items-center">
                <p class="text-sm font-medium text-gray-900">$${formatMoneyCurrency(
                  productTbalet.priceCents
                )}</p>
                 <button
                  class="text-white pl-4 pr-4 py-2 rounded-sm bg-sky-400 pointer text-sm add-to-js "
                 
                   data-product-id="${productTbalet.id}"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
  `;
});

document.querySelector(".product-mobiles").innerHTML = mobileHTML;
