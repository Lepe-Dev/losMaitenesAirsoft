import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '/images/LosMaitenesChile.png';
import { Link, Outlet } from 'react-router-dom';

function NavBar() {
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary navbar" data-bs-theme="dark">
            <Container fluid>
                <img className='menu-logo' src={Logo} alt="logo los maitenes airsoft" />
                <Navbar.Brand className='fs-3'  as={Link} to="/">Los maitenes airsoft</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0 ml-auto" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link className='fs-5 inicio-first-element' as={Link} to="/home">inicio</Nav.Link>
                        <Nav.Link className='fs-5'  as={Link} to="./About">nosotros</Nav.Link>
                        <Nav.Link className='fs-5'  as={Link} to="./Gallery">galería</Nav.Link>
                        <Nav.Link className='fs-5'  as={Link} to="./Contact">contacto</Nav.Link>
                        <Nav.Link className='fs-5'  as={Link} to="./WorkWithUs">trabaja con nosotros</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <section>
        <Outlet></Outlet>
        </section>
        </>
    );
}

export default NavBar;