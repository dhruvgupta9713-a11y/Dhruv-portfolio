import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">Have a project in mind or want to say hi?</p>

                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Let's Connect</h3>
                        <p>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>

                        <div className="contact-links">
                            <a href="mailto:dhruv@example.com" className="contact-link">
                                <Mail className="icon" /> dhruv@example.com
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <Github className="icon" /> GitHub
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <Linkedin className="icon" /> LinkedIn
                            </a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
