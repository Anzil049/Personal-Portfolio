import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Home = () => {
    return (
        <section className="d-flex align-items-center min-vh-100 position-relative overflow-hidden">
            {/* Background Gradient */}
            <div
                style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, rgba(15,23,42,0) 70%)',
                    zIndex: -1
                }}
            />

            <Container>
                <Row className="align-items-center">
                    <Col lg={7}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-accent mb-2">Hi, my name is</p>
                            <h1 className="display-2 fw-bold mb-2">Anzil K.</h1>
                            <h2 className="display-4 fw-bold text-secondary mb-4">I build things for the web.</h2>
                            <p className="lead text-secondary mb-5" style={{ maxWidth: '600px' }}>
                                I'm a MERN Stack Developer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
                            </p>

                            <div className="d-flex gap-3">
                                <Button as={Link} to="/projects" variant="outline-primary" className="btn-custom">
                                    Check out my work
                                </Button>
                                <Button href="/contact" variant="link" className="text-decoration-none text-white d-flex align-items-center">
                                    Contact Me <ArrowRight size={20} className="ms-2" />
                                </Button>
                            </div>
                        </motion.div>
                    </Col>
                    {/* Optional: Add an image or illustration here */}
                </Row>
            </Container>
        </section>
    );
};

export default Home;
