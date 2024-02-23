import {  createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 let items = [];
 const cartSlice = createSlice({
  name: "cart",
  initialState:{
    items : items,
    quantity:0
  },
  reducers: {
    addtoCart( state,action)
     {
      const productDetail = action.payload;
      const existingProduct = state.items.find((item)=> item.prodId === productDetail.prodId);
      if (existingProduct)
      {
        existingProduct.prodQuantity = existingProduct.prodQuantity + productDetail.prodQuantity;
         state.quantity = state.quantity + productDetail.prodQuantity;
      }
      else
      {
        state.items.push(productDetail)
        state.quantity++;
      }
    },
    removeFromCart(state,action)
    {
      const productId = action.payload;
      const existItem = state.items.find((item)=> item.prodId === productId);
      state.items = state.items.filter((item)=> item.prodId !== productId);
      state.quantity = state.quantity - existItem.prodId;
    }
  },
});

export default  cartSlice.reducer;
export const cartActions = cartSlice.actions; 