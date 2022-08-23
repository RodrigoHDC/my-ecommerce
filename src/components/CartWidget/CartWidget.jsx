import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const {itemCount} = useContext(CartContext);

    return ( 
        <>
        <ion-icon name="cart"></ion-icon>
        <span>{itemCount || ''}</span>
        </>  
    );
}
 
export default CartWidget;