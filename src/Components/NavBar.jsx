import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../public/images/LosMaitenesChile.png';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar" data-bs-theme="dark">
            <Container fluid>
                <img className='menu-logo' src={Logo} alt="logo los maitenes airsoft" />
                <Navbar.Brand className='fs-3' href="#">Los maitenes airsoft</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0 ml-auto" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link className='fs-5 inicio-first-element' href="#action1">inicio</Nav.Link>
                        <Nav.Link className='fs-5' href="#action2">nosotros</Nav.Link>
                        <Nav.Link className='fs-5' href="#action3">galería</Nav.Link>
                        <Nav.Link className='fs-5' href="#action4">contacto</Nav.Link>
                        <Nav.Link className='fs-5' href="#action5">trabaja con nosotros</Nav.Link>
                        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown> */}
                        {/* <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;