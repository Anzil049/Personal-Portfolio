import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Code2 } from 'lucide-react';

const CustomNavbar = () => {
    const location = useLocation();

    return (
        <Navbar expand="lg" variant="dark" className="navbar-custom py-3" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center fw-bold text-accent">
                    <Code2 className="me-2" size={32} />
                    <span style={{ fontSize: '1.5rem' }}>Portfolio</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className={`nav-link-custom ${location.pathname === '/' ? 'active' : ''}`}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className={`nav-link-custom ${location.pathname === '/about' ? 'active' : ''}`}>About</Nav.Link>
                        <Nav.Link as={Link} to="/skills" className={`nav-link-custom ${location.pathname === '/skills' ? 'active' : ''}`}>Skills</Nav.Link>
                        <Nav.Link as={Link} to="/projects" className={`nav-link-custom ${location.pathname === '/projects' ? 'active' : ''}`}>Projects</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className={`nav-link-custom ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
