import { Outlet } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function Layout() {
    return (
        <>
            <header>
                <h1>Grupo 8</h1>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="/">FPW</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/games">Games</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/aboutUs">AboutUs</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            
            <main>
                <Outlet />
            </main>

            <footer>
                
            </footer>
        </>
    )
}

export default Layout;