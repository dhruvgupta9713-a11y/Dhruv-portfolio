import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, ExternalLink } from 'lucide-react';
import './Hero.css';

const roles = [
  'Full Stack Developer',
  'Backend Developer',
  'Problem Solver',
  'MERN Stack Developer',
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout;

    if (!isDeleting && displayText === role) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(role.substring(0, displayText.length - 1));
      }, 40);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(role.substring(0, displayText.length + 1));
      }, 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="hero" id="home">
      {/* Animated background */}
      <div className="hero-bg-wrapper">
        <div className="hero-gradient hero-gradient-1" />
        <div className="hero-gradient hero-gradient-2" />
        <div className="hero-grid-bg" />
      </div>

      <div className="container hero-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hero-content"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hero-badge"
          >
            <span className="badge-dot" />
            Open to opportunities
          </motion.div>

          <h1 className="hero-name">
            Hi, I'm <span className="hero-name-accent">Dhruv Gupta</span>
          </h1>

          <div className="hero-role-wrapper">
            <span className="hero-role">
              {displayText}
              <span className="cursor">|</span>
            </span>
          </div>

          <p className="hero-tagline">
            B.Tech IT student at IIIT Bhopal, building scalable web applications
            with clean code. Passionate about solving complex problems — 
            <strong> 650+ DSA problems</strong> solved and counting.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
            <a href="/resume.pdf" download className="btn btn-outline">
              <Download size={18} /> Resume
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="hero-socials"
          >
            <a href="https://github.com/dhruvgupta9713-a11y" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/dhruv-gupta-660701285/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://leetcode.com/u/DhruvGupta0009/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LeetCode">
              <ExternalLink size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right side decorative code block */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hero-visual"
        >
          <div className="code-window">
            <div className="code-header">
              <span className="code-dot red" />
              <span className="code-dot yellow" />
              <span className="code-dot green" />
              <span className="code-filename">developer.js</span>
            </div>
            <pre className="code-body">
              <code>
{`const developer = {
  name: "Dhruv Gupta",
  role: "Full Stack Dev",
  college: "IIIT Bhopal",
  skills: [
    "React", "Node.js",
    "Django", "MongoDB"
  ],
  dsaProblems: 650,
  passion: "Building things
    that matter ✨"
};`}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
