import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react';
// Importamos Firebase:
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  const itemDoesNotExist = {
    img: "https://www.pngitem.com/pimgs/m/599-5998799_block-icon-clipart-hd-png-download.png",
    title: "El item NO existe",
    stock: 0,
    price: 0,
};

  useEffect( () => {
      const querydb = getFirestore();
      const queryDoc = doc(querydb, 'Items', id);
      getDoc(queryDoc)

      .then((data) => {
        if(data.data() === undefined){
          setItem(itemDoesNotExist);
      }else {
      setItem({id: data.id, ...data.data() });
      }
  })
  .catch((err) => console.log('Error', err))

}, [id]);

  return (
    <ItemDetail item={item} fetched={{item: item, setItem: setItem}} />
    )
};

export default ItemDetailContainer;
