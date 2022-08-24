import React from "react";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/itemCart";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

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


                <div className="d-flex w-50 mx-auto my-auto"> 
                    <Table striped>
                    <tbody>
                        <tr>

                        <th>
                            <Link to='/form' className='boton'>
                            <Button variant="primary">Finalizar Compra!</Button>
                            </Link>   
                        </th>

                        <th>
                            <p className="text-end mx-2 my-2"> Total: USD {totalPrice()}</p> 
                        </th>

                        </tr>
                    </tbody>
                    </Table>
                    </div>

                </>
             )
        }
 
export default Cart;