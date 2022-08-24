import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
    const {totalProducts} = useContext(CartContext);

    return ( 
        <>
            <div className="d-flex">
            <Link to={"/cart"}>
            <img src="../IMG/Carrito/cart.png" alt="Logo" width="40px" height="30px"/>
            </Link>
            <span>{totalProducts() || ''}</span>
            </div>
        </> 
    );
}
 
export default CartWidget;