import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Code, Server, Database, Briefcase } from 'lucide-react';
import './About.css';

const stats = [
  { number: '650+', label: 'DSA Problems', icon: <Code size={20} /> },
  { number: '8.02', label: 'CGPA / 10', icon: <GraduationCap size={20} /> },
  { number: '2', label: 'Internships', icon: <Briefcase size={20} /> },
  { number: '3×', label: 'SIH Participant', icon: <Server size={20} /> },
];

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-header">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Get to know me
          </motion.h2>
        </div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-text-block"
          >
            <div className="about-info-tags">
              <span className="info-tag">
                <GraduationCap size={16} /> IIIT Bhopal
              </span>
              <span className="info-tag">
                <MapPin size={16} /> India
              </span>
              <span className="info-tag">
                <Calendar size={16} /> Graduating 2027
              </span>
            </div>

            <p className="about-paragraph">
              I'm a <strong>B.Tech Information Technology</strong> student at the Indian Institute of
              Information Technology, Bhopal, with a strong foundation in{' '}
              <strong>Data Structures & Algorithms</strong> and a passion for building
              scalable, production-grade web applications.
            </p>

            <p className="about-paragraph">
              Having solved over <strong>650+ problems</strong> across LeetCode, GeeksforGeeks,
              and Codeforces, I bring strong problem-solving skills to every project I build.
              My competitive programming journey includes a <strong>3-Star CodeChef</strong> rating
              and a <strong>1750+ rating on LeetCode</strong>.
            </p>

            <p className="about-paragraph">
              Through my internships as a <strong>Full Stack</strong> and <strong>Backend Developer</strong>,
              I've built production-ready REST APIs, designed database schemas, and delivered
              responsive, user-friendly interfaces using React.js, Node.js, and more.
            </p>

            <div className="about-highlight">
              <div className="highlight-bar" />
              <p>
                Currently looking for <strong>SDE internship opportunities</strong> at
                product-based companies where I can contribute to impactful engineering projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-stats"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -4 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
