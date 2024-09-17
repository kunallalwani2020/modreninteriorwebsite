// const { configureStore } = require("@reduxjs/toolkit");
import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./CartSlice";
const cartStore = configureStore({ reducer: { cart: addReducer } });
export default cartStore;
