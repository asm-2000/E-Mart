import React, { useState } from "react";
import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../../Store/orderStore";
import CartDetail from "../../Components/CartDetails/CartDetail";
import { cartActions } from "../../Store/cartStore";

function Cart()
{
    const cartProducts = useSelector((state)=> state.cart.items);
    const quantity = useSelector((state)=> state.cart.quantity);
    const dispatch = useDispatch();
    function cartRemoveHandler()
    {
        dispatch(cartActions.removeFromCart());
    }
    return <div className={styles.div_root}>
        <h2>Showing items in your Cart</h2>

        {quantity !==0 && cartProducts.map((item)=> (<CartDetail  detail={item}></CartDetail>))}
        {quantity === 0 && <div className={styles.noitem}>
            No items in your cart to show !!</div>}
    </div>
}
export default Cart;