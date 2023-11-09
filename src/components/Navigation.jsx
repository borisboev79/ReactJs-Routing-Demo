import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Navigation = () => {
    return(

        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>React Router</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} style={({isActive}) => isActive ? {backgroundColor: '#0d6efd', color: 'white', borderRadius: '10px'} : {}} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} style={({isActive}) => isActive ? {backgroundColor: '#0d6efd', color: 'white', borderRadius: '10px'} : {}} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} style={({isActive}) => isActive ? {backgroundColor: '#0d6efd', color: 'white', borderRadius: '10px'} : {}} to="/contacts">Contacts</Nav.Link>
            <Nav.Link as={NavLink} style={({isActive}) => isActive ? {backgroundColor: '#0d6efd', color: 'white', borderRadius: '10px'} : {}} to="/characters">Characters</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Navigation;