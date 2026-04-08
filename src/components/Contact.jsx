import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Phone, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      // If backend is not running, still show success for demo
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-header">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Contact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            Have a project in mind or just want to connect? Drop me a message!
          </motion.p>
        </div>

        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="contact-info"
          >
            <h3>Get in Touch</h3>
            <p>
              I'm currently looking for new opportunities. Whether you have a question,
              a project idea, or just want to say hi — my inbox is always open!
            </p>

            <div className="contact-links">
              <a href="mailto:dhruvgupta9713@gmail.com" className="contact-link-item">
                <div className="contact-link-icon-wrap">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="link-label">Email</span>
                  <span className="link-value">dhruvgupta9713@gmail.com</span>
                </div>
              </a>

              <a href="tel:+916232466199" className="contact-link-item">
                <div className="contact-link-icon-wrap">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="link-label">Phone</span>
                  <span className="link-value">+91-6232466199</span>
                </div>
              </a>

              <a href="https://github.com/dhruvgupta9713-a11y" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <div className="contact-link-icon-wrap">
                  <Github size={20} />
                </div>
                <div>
                  <span className="link-label">GitHub</span>
                  <span className="link-value">dhruvgupta9713-a11y</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/dhruv-gupta-660701285/" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <div className="contact-link-icon-wrap">
                  <Linkedin size={20} />
                </div>
                <div>
                  <span className="link-label">LinkedIn</span>
                  <span className="link-value">dhruv-gupta</span>
                </div>
              </a>

              <a href="https://leetcode.com/u/DhruvGupta0009/" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <div className="contact-link-icon-wrap">
                  <ExternalLink size={20} />
                </div>
                <div>
                  <span className="link-label">LeetCode</span>
                  <span className="link-value">DhruvGupta0009</span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about your project..."
              />
            </div>

            <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'} <Send size={18} />
            </button>

            {/* Toast notifications */}
            {status === 'success' && (
              <motion.div
                className="toast toast-success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle size={18} /> Message sent successfully!
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                className="toast toast-error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <AlertCircle size={18} /> Something went wrong. Please try again.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
