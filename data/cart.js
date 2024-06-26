class Cart {
  cartItems;
  #localStorageKey;

  constructor(localStorageKey) {
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }

  #loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));

    if (!this.cartItems) {
      this.cartItems = [
        {
          id: "2461iph1",
          quantity: 2,
        },
        {
          id: "2461iph2",
          quantity: 1,
        },
      ];
    }
  }

  saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(productId) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.id) {
        matchingItem = cartItem;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      this.cartItems.push({
        id: productId,
        quantity: 1,
      });
    }

    this.saveToStorage();
  }

  removeFromCart(productId) {
    const newCart = [];

    this.cartItems.forEach((cartItem) => {
      if (cartItem.id !== productId) {
        newCart.push(cartItem);
      }
    });

    this.cartItems = newCart;

    this.saveToStorage();
  }
  calculateCartQuantity() {
    let cartQuantity = 0;

    cart.cartItems.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    return cartQuantity;
  }
  updateQuantity(productId, newQuantity) {
    let matchId;
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.id) {
        matchId = cartItem;
      }
    });
    matchId.quantity = newQuantity;
    this.saveToStorage();
  }
}

export const cart = new Cart("Ecommerce");
