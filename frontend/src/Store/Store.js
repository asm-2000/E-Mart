import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartStore";
import orderReducer from "./orderStore";

const store = configureStore({reducer:{cart: cartReducer, order: orderReducer}});
export default store;