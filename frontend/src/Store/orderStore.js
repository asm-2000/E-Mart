import { createSlice } from "@reduxjs/toolkit";


const orderSlice = createSlice({
    name: "order",
    initialState:{
        items:[],
        payment:"COD"
    },
    reducers:
    {
        placeOrder(state,action){
            const productDetail = action.payload;
            state.items.push(productDetail);
        },
        cancelOrder(state,action){
            const cancelledProduct = action.payload;
            state.items.filter((item)=>cancelledProduct.prodId !== item.prodId);
        }
    }
})
export const orderActions = orderSlice.actions;
export default  orderSlice.reducer;