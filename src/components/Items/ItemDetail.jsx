import { useState, useContext } from "react";
import ItemCount from "../Count/ItemCount";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);
  const [amount, setAmount] = useState(0);
  const { id, category, title, description, price, stock, img, color, ROI} = item;
  
  const {addProduct} = useContext(CartContext);
  const onAdd = (amount) => {
    setAmount(amount);
    addProduct(item, amount);
    setGoToCart(true);
  }

  return (
    <>
    <Container>
      <Row>

        <Col>
         <Card.Img variant="top mx-auto" src={img} style={{width: "30rem"}} />
        </Col>

        <Col xs={6}  className='mt-5'>
          <Card.Title>{title}</Card.Title>
          <hr />
          <Card.Text>{category}</Card.Text>
          <hr />
          <Card.Text>{description}</Card.Text>
          <hr />
          <Card.Text>{color}</Card.Text>
          <hr />
          <Card.Text>{ROI}</Card.Text>
          <hr />
          <Card.Text>USD {price}</Card.Text>
          <hr />
          <Card.Text>Stock Disponible: {stock}</Card.Text>
          <hr />

          <div>
            {
              goToCart ? <Link to='/cart' className="boton"><Button variant="primary">Finalizar Compra!</Button></Link> : <ItemCount key={id} stock={stock} initial={0} onAdd={onAdd} />
            }
          </div>
        </Col>

      </Row>
    </Container>
    </>
  );
}

export default ItemDetail;