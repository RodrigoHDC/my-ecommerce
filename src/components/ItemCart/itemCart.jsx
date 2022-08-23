import React from "react";
import { CartContext } from "../../context/CartContext";
import Table from 'react-bootstrap/Table';
import { useContext } from "react";

const ItemCart = ({ item }) => {
    const { removeProduct } = useContext(CartContext);

//     return (
//         <div>
//             <img src={item.img} alt={item.title} width="10%" />
//             <p>Título: {item.title}</p>
//             <p>Cantidad: {item.quantity}</p>
//             <p>Precio U.: {item.price}</p>
//             <p>Sbutotal: ${item.quantity * item.price}</p>
//             <button onClick={() => removeProduct(item.id)}>Eliminar</button>
//         </div>
//     )
// };


return (
    <div className="w-75 mx-auto my-auto"> 
    <Table striped>
      <tbody>
        <tr>
          <th>
          <img src={item.img} alt={item.title} width="30%" />
          </th>

          <th>
          <p className="justify-content-center">{item.title}</p>
          </th>

          <th>
          <p>Cantidad: {item.quantity}</p>
          </th>
          
          <th>
          <p>Precio U.: {item.price}</p>
          </th>

          <th>
          <p>Sbutotal: ${item.quantity * item.price}</p>
          </th>

          <th>
          <button onClick={() => removeProduct(item.id)}>Eliminar</button>
          </th>

          </tr>
      </tbody>
    </Table>
    </div>
  );
}



export default ItemCart;





