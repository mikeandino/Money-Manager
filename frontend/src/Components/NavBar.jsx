import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Outlet } from 'react-router-dom';

function NavBar() {
    return(
    <div>        
        <Navbar expand="lg" className="bg-body-tertiary" fixed="top"  data-bs-theme="dark">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto'>
                        <Nav.Link> <NavLink to="/"> Home </NavLink> </Nav.Link>
                        <Nav.Link> <NavLink to="/route1"> Route1 </NavLink> </Nav.Link>
                        <Nav.Link> <NavLink to="/route2"> Route2 </NavLink> </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet/>
    </div>
    );
}

export default NavBar;