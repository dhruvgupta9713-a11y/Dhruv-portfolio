import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <p>&copy; {new Date().getFullYear()} Dhruv Gupta. All rights reserved.</p>
                <div className="footer-links">
                    {/* Social icons could go here too if desired */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
