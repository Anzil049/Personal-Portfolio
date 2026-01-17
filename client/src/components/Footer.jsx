import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer bg-secondary-custom py-4 mt-auto">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
                        <h5 className="text-accent mb-1">Portfolio</h5>
                        <p className="small mb-0 text-white-50">&copy; {new Date().getFullYear()} Anzil K. All rights reserved.</p>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <div className="d-flex justify-content-center justify-content-md-end gap-3">
                            <a href="#" className="text-secondary text-hover-accent"><Github size={20} /></a>
                            <a href="#" className="text-secondary text-hover-accent"><Linkedin size={20} /></a>
                            <a href="#" className="text-secondary text-hover-accent"><Instagram size={20} /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
