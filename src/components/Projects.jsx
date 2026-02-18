import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online shopping platform with user authentication, product catalog, cart functionality, and payment gateway integration.",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        github: "#",
        demo: "#"
    },
    {
        title: "Task Management App",
        description: "A collaborative task manager allowing users to create boards, lists, and cards with real-time updates using WebSockets.",
        tech: ["React", "Socket.io", "Node.js", "PostgreSQL"],
        github: "#",
        demo: "#"
    },
    {
        title: "Weather Dashboard",
        description: "A responsive weather application that provides real-time weather data and forecasts using the OpenWeatherMap API.",
        tech: ["JavaScript", "HTML/CSS", "API Integration"],
        github: "#",
        demo: "#"
    }
];

const Projects = () => {
    return (
        <section className="section projects" id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">Some things I've built</p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="project-card"
                        >
                            <div className="project-header">
                                <Folder size={40} className="project-icon" />
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech-list">
                                {project.tech.map(tech => (
                                    <span key={tech} className="project-tech-item">{tech}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
