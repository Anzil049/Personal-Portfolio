import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'Bootstrap', level: 85 },
    ];

    return (
        <section className="section-padding">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="display-4 fw-bold mb-5"><span className="text-accent">02.</span> Skills</h2>
                    <Row>
                        {skills.map((skill, index) => (
                            <Col md={6} className="mb-4" key={index}>
                                <div className="mb-2 d-flex justify-content-between">
                                    <span className="fw-bold">{skill.name}</span>
                                    <span className="text-white">{skill.level}%</span>
                                </div>
                                <ProgressBar
                                    now={skill.level}
                                    variant="info"
                                    style={{ height: '10px', backgroundColor: 'var(--bg-secondary)' }}
                                    className="rounded-pill"
                                />
                            </Col>
                        ))}
                    </Row>
                </motion.div>
            </Container>
        </section>
    );
};

export default Skills;
