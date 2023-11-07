import { NavbarText } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import gmail from '../img/gmail.png';
import face from '../img/face.png';

function Footer() {
  return (
    <Navbar bg="primary" data-bs-theme="primary">
      <Container>
        <Navbar.Brand href="#home">Vintage Finds</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <div>
           <img src={face} height={20} width={20}></img>
          </div>
          <div>
          <img src={gmail} height={20} width={20}></img>
          </div>

         <NavbarText>
            Rua Vintage Finds, 123 - Fortaleza - CE
          </NavbarText>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;