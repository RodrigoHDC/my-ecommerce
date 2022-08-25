import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Purchase = () => {

    const { orderId, setOrderId } = useContext(CartContext);
    return (
    <Card className='mx-auto my-auto mt-5' style={{ width: '20rem' }}>
      <Card.Img variant="center" className='mx-auto my-auto' src="../IMG/Logo/Logo-Nuevo.png" alt="Logo" width="200px" height="100px" />
      <Card.Body>
        <Card.Title>Compra Realizada con Éxito!</Card.Title>
        <Card.Text>
          Su número de órden es: {orderId}
        </Card.Text>
        <Link to="/" className="link" onClick={() => setOrderId("")}>
        <Button variant="primary">Volver a Inicio</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Purchase;
