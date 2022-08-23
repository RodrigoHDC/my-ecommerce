import React from "react";
import { addDoc, collection, getFirestore, updateDoc, doc } from 'firebase/firestore';

export const CartContext = React.createContext();
// const CartContext = React.createContext([]);
// export const useCartContext = () => useContext(CartContext);

const CartProvider = ( props ) => {
    const [cart, setCart] = React.useState([]);
    const [orderId, setOrderId] = React.useState("");


    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart([...cart, { ...item, quantity}]);
        }
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    };

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.some(product => product.id === id);

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const sendOrder = (total, buyerData) => {
        const timestamp = Date.now(); 
        const fecha = new Date(timestamp);

        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        const order = {
            buyerData,
            items: cart,
            fecha,
            total
        };

        addDoc(orderCollection, order)
            .then((res) => {
                setOrderId(res.id);
                updateStock(order);
                clearCart();
            })
            .catch((err) => console.log(err));
    };

    const updateStock = (order) => {
        const db = getFirestore();

        order.items.forEach((item) => {
            const orderQuantity = item.quantity;
            const itemStock = parseInt(item.stock);
            const docRef = doc(db, "cookies", item.id);
            updateDoc(docRef, {stock: itemStock - orderQuantity});
        });
    }
    
    return ( 
        <CartContext.Provider value={{
            cart,
            orderId,
            setOrderId,
            setCart,
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            sendOrder,
        }}>
            { props.children }
        </CartContext.Provider>
     );
}
 
export default CartProvider;