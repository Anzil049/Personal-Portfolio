import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Code2 } from 'lucide-react';

const CustomNavbar = () => {
    const location = useLocation();
    const [expanded, setExpanded] = React.useState(false);

    return (
        <Navbar
            expanded={expanded}
            onToggle={(expanded) => setExpanded(expanded)}
            expand="lg"
            variant="dark"
            className="navbar-custom py-3"
            sticky="top"
        >
            <Container>
                <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)} className="d-flex align-items-center fw-bold text-accent">
                    <Code2 className="me-2" size={32} />
                    <span style={{ fontSize: '1.5rem' }}>ANZIL K</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)} className={`nav-link-custom ${location.pathname === '/' ? 'active' : ''}`}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)} className={`nav-link-custom ${location.pathname === '/about' ? 'active' : ''}`}>About</Nav.Link>
                        <Nav.Link as={Link} to="/skills" onClick={() => setExpanded(false)} className={`nav-link-custom ${location.pathname === '/skills' ? 'active' : ''}`}>Skills</Nav.Link>
                        <Nav.Link as={Link} to="/projects" onClick={() => setExpanded(false)} className={`nav-link-custom ${location.pathname === '/projects' ? 'active' : ''}`}>Projects</Nav.Link>
                        <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)} className={`nav-link-custom ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
