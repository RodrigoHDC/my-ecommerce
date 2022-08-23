import React from "react";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/itemCart";

const Cart = () => {
    const {cart, totalPrice} = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito!</p>
                <Link to="/">Hacer Compras!</Link>
            </>
        );
    }
            return ( 
                <>
                {
                    cart.map(item => <ItemCart key={item.id} item={item} />)
                }
                <p>
                    total: {totalPrice()}
                </p>
                {/* <button onClick={handleClick}>Emitir Orden de Compra!</button> */}
                <Link to='/form' className='boton'>Terminar compra</Link>
                </>
             )
        }
 
export default Cart;