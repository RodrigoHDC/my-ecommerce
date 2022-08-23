import React from 'react';
import Title from '../Title/Title';
import ItemCount from '../ItemCount/ItemCount';

export const ItemListContainer = () => {

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    } 

    return ( 
        <>
        <Title greeting='Rodrigo' />
        <ItemCount initial={1} stock={3} onAdd={onAdd} />
        </>
     );
}
 
export default ItemListContainer;