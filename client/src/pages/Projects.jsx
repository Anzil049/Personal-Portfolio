import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Project One",
            description: "A static portfolio website built with simple HTML and CSS. Showcases basic design principles and layout skills.",
            tech: ["HTML", "CSS", "Design"],
            link: "#",
            github: "#"
        },
        {
            title: "Project Two",
            description: "A dynamic web application built with React and Node.js. Features user authentication and real-time data updates.",
            tech: ["React", "Node.js", "MongoDB", "Socket.io"],
            link: "#",
            github: "#"
        },
        {
            title: "Project Three",
            description: "An e-commerce dashboard with data visualization and reporting tools.",
            tech: ["Vue.js", "Firebase", "Chart.js"],
            link: "#",
            github: "#"
        }
    ];

    return (
        <section className="section-padding">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="display-4 fw-bold mb-5"><span className="text-accent">03.</span> Projects</h2>
                    <Row>
                        {projects.map((project, index) => (
                            <Col lg={4} md={6} className="mb-4" key={index}>
                                <Card className="h-100 card-custom text-white">
                                    <Card.Body className="d-flex flex-column">
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <Folder size={40} className="text-accent" />
                                            <div className="d-flex gap-3">
                                                <a href={project.github} className="text-light text-hover-accent"><Github size={20} /></a>
                                                <a href={project.link} className="text-light text-hover-accent"><ExternalLink size={20} /></a>
                                            </div>
                                        </div>
                                        <Card.Title className="fw-bold mb-3">{project.title}</Card.Title>
                                        <Card.Text className="text-secondary flex-grow-1">
                                            {project.description}
                                        </Card.Text>
                                        <div className="mt-3">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="me-3 small text-secondary font-monospace">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </motion.div>
            </Container>
        </section>
    );
};

export default Projects;
