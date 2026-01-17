import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
            setStatus({ type: 'success', msg: 'Message sent successfully!' });
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            console.error(err);
            setStatus({ type: 'danger', msg: 'Failed to send message. Please try again.' });
        }
    };

    return (
        <section className="section-padding mb-5">
            <Container>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Row className="justify-content-center">
                        <Col md={8} lg={6}>
                            <div className="text-center mb-5">
                                <h2 className="display-4 fw-bold"><span className="text-accent">04.</span> Get In Touch</h2>
                                <p className="text-secondary">
                                    I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                                </p>
                            </div>

                            {status && <Alert variant={status.type} onClose={() => setStatus(null)} dismissible>{status.msg}</Alert>}

                            <Form onSubmit={handleSubmit} className="p-4 card-custom rounded">
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="bg-dark text-white border-secondary"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="bg-dark text-white border-secondary"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Your message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="bg-dark text-white border-secondary"
                                    />
                                </Form.Group>

                                <div className="d-grid">
                                    <Button variant="outline-primary" type="submit" className="btn-custom">
                                        Send Message
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
        </section>
    );
};

export default Contact;
