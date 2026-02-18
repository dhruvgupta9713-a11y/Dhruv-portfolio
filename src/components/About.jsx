import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section className="section about" id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="about-text"
                    >
                        <p>
                            I am a Computer Science student with a strong foundation in Data Structures and Algorithms.
                            My journey in software development is driven by a passion for building scalable and efficient web applications.
                        </p>
                        <p>
                            As an aspiring Full Stack Developer, I enjoy bridging the gap between front-end engineering and back-end architecture.
                            I am constantly learning new technologies and best practices to write clean, maintainable code.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="about-cards"
                    >
                        <div className="about-card">
                            <Code className="about-icon" size={32} />
                            <h3>Frontend</h3>
                            <p>Creating responsive and interactive UIs.</p>
                        </div>
                        <div className="about-card">
                            <Server className="about-icon" size={32} />
                            <h3>Backend</h3>
                            <p>Building robust APIs and server-side logic.</p>
                        </div>
                        <div className="about-card">
                            <Database className="about-icon" size={32} />
                            <h3>Database</h3>
                            <p>Designing efficient data schemas.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
