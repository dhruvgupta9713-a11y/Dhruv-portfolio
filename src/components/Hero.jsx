import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-background"></div>
            <div className="container hero-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <span className="hero-greeting">Hello, I'm</span>
                    <h1 className="hero-name">Dhruv Gupta</h1>
                    <h2 className="hero-title">Full Stack Developer</h2>
                    <p className="hero-tagline">
                        Building scalable web applications with clean code and modern technologies.
                        Passionate about solving complex problems through elegant solutions.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
