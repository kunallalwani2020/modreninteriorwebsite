import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // Array of products with id, title, price, quantity, etc.
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const product = action.payload;
      const existingProductIndex = state.products.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex > -1) {
        // If the product already exists, update its quantity
        state.products[existingProductIndex].quantity += product.quantity || 1;
      } else {
        // If the product does not exist, add it to the cart
        state.products.push({
          ...product,
          quantity: product.quantity || 1,
        });
      }
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.products.find(
        (product) => product.id === productId
      );
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.products.find(
        (product) => product.id === productId
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productId
      );
    },
  },
});

export const { add, incrementQuantity, decrementQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
cartSlice.js

