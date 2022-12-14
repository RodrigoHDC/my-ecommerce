// Importamos clases de React-Bootstrap:
import Nav from 'react-bootstrap/Nav';
// Importamos las funciones de React-Router-Dom:
import { Outlet, Link } from 'react-router-dom';
// Importamos el componente del CartWidget:
import CartWidget from '../CartWidget/CartWidget';
import '../NavBar/NavBar.css';


const NavBar = () => {
    return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-2" id="menu">
    <div className="container-fluid">
    
    <Link className="navbar-brand" to={"/"}>
        <img className="logo mx-3 my-auto" src="../IMG/Logo/Logo-Nuevo.png" alt="Logo" width="200px" height="100px"/>
    </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/category/Rig">Rigs</Nav.Link>
              <Nav.Link as={Link} to="/category/Placa">Placas de Video</Nav.Link>
              <Nav.Link as={Link} to="/category/Fuente">Fuentes</Nav.Link>
              <Nav.Link as={Link} to="/category/Combo">Combos Minería</Nav.Link>
              <Nav.Link as={Link} to="/category/Riser">Risers</Nav.Link>
              <Nav.Link as={Link} to="/category/Estructura">Estructuras</Nav.Link>
            </ul>
          </div>
          
    </div>

          <CartWidget/>
    </nav>

      
    </>
  );
}
 
export default NavBar;
