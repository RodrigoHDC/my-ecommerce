import React from "react";
import { CartContext } from "../../context/CartContext";
import Table from 'react-bootstrap/Table';
import { useContext } from "react";
import Button from 'react-bootstrap/Button';

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
    <div className="d-flex w-50 mx-auto my-auto"> 
    <Table striped>
      <tbody>
        <tr>
          <th>
          <img src={item.img} alt={item.title} width="60%" />
          </th>

          <th>
          <p className="justify-content-center">{item.title}</p>
          </th>

          <th>
          <p>Cantidad: {item.quantity}</p>
          </th>
          
          <th>
          <p>Precio: USD {item.price}</p>
          </th>

          <th>
          <p>Subtotal: USD {item.quantity * item.price}</p>
          </th>

          <th>
          <Button variant="danger" size="sm" className="text-center mt-4 mb-4" onClick={() => removeProduct(item.id)}>Eliminar</Button>
          </th>

          </tr>
      </tbody>
    </Table>
    </div>
  );
}



export default ItemCart;





