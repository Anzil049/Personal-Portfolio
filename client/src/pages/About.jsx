import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const About = () => {
    return (
        <section className="section-padding">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="display-4 fw-bold mb-4"><span className="text-accent">01.</span> About Me</h2>
                    <Row className="flex-column-reverse flex-lg-row align-items-center">
                        <Col lg={7}>
                            <p className="lead text-secondary">
                                Hello! My name is Anzil and I enjoy creating things that live on the internet. I am a passionate MERN Stack Developer with a Bachelor's degree in Computer Science from the University of Calicut.
                            </p>
                            <p className="text-secondary">
                                My interest in web development started when I decided to try building my own applications — turns out hacking together code was quite fun! Fast-forward to today, and I've had the privilege of working on various interesting projects. My main focus these days is building accessible, inclusive products.
                            </p>
                            <p className="text-secondary">
                                Here are a few technologies I've been working with recently:
                            </p>
                            <ul className="text-secondary columns-2 list-unstyled mt-3" style={{ columns: 2 }}>
                                <li><span className="text-accent">▹</span> HTML & CSS</li>
                                <li><span className="text-accent">▹</span> JavaScript (ES6+)</li>
                                <li><span className="text-accent">▹</span> React</li>
                                <li><span className="text-accent">▹</span> Node.js</li>
                                <li><span className="text-accent">▹</span> Express</li>
                                <li><span className="text-accent">▹</span> MongoDB</li>
                            </ul>
                        </Col>
                        <Col lg={5} className="mb-5 mb-lg-0 d-flex justify-content-center">
                            <div className="position-relative" style={{ width: '320px', maxWidth: '100%' }}>
                                <div style={{
                                    border: '2px solid var(--accent)',
                                    borderRadius: '4px',
                                    width: '300px',
                                    height: '400px',
                                    position: 'absolute',
                                    top: '20px',
                                    left: '20px',
                                    zIndex: 0
                                }}></div>
                                <div style={{
                                    width: '300px',
                                    height: '400px',
                                    position: 'relative',
                                    zIndex: 1,
                                    overflow: 'hidden',
                                    borderRadius: '4px'
                                }}>
                                    <img
                                        src={profileImg}
                                        alt="Anzil K"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
        </section>
    );
};

export default About;
