import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CarWidget/CarWidget';
function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src="https://static.vecteezy.com/system/resources/previews/028/053/341/non_2x/set-of-online-shop-logo-designs-template-illustration-graphic-of-shopping-bag-computer-and-mouse-logo-perfect-for-ecommerce-sale-store-web-element-company-emblem-vector.jpg" alt="logo" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#gpu">gpu</Nav.Link>
            <Nav.Link href="#ram">ram</Nav.Link>
            <Nav.Link href="#motherboard">motherboard</Nav.Link>
            <Nav.Link href="#fuente">fuente</Nav.Link>
            <Nav.Link href="#fuente"><CartWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar> </>
  );
};
export default NavBar;
