import React from 'react';
import { Github, Linkedin, ExternalLink, Heart, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              DG<span className="dot">.</span>
            </a>
            <p className="footer-tagline">
              Full Stack Developer building scalable web applications with clean code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <nav className="footer-nav">
              {quickLinks.map((link) => (
                <a key={link.name} href={link.href} className="footer-link">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-socials">
              <a href="https://github.com/dhruvgupta9713-a11y" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/dhruv-gupta-660701285/" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://leetcode.com/u/DhruvGupta0009/" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="LeetCode">
                <ExternalLink size={18} />
              </a>
              <a href="mailto:dhruvgupta9713@gmail.com" className="footer-social" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Dhruv Gupta. Made with <Heart size={14} className="heart-icon" /> in India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
