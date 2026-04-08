import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Flikt Technology Web Solution',
    location: 'Remote',
    period: 'Dec 2025 — Jan 2026',
    tools: 'Node.js, Express.js, React.js, Flask',
    highlights: [
      'Developed a responsive and user-friendly web interface using React.js, focusing on clean UI design and smooth navigation across multiple devices.',
      'Built and integrated RESTful APIs using Node.js and Express.js, enabling efficient data processing and seamless frontend-backend communication.',
    ],
  },
  {
    role: 'Backend Development Intern',
    company: 'Roots Technology',
    location: 'Remote',
    period: 'Sept 2025 — Nov 2025',
    tools: 'Node.js, Express.js, MongoDB, MySQL',
    highlights: [
      'Developed and maintained backend services using Node.js and Express.js, implementing modular and scalable API structures for smooth data flow.',
      'Worked with databases such as MongoDB and MySQL to design efficient schemas, perform CRUD operations, and optimize queries for real-world use cases.',
    ],
  },
];

const Experience = () => {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="section-header">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Experience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Where I've Worked
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            Professional experience building real-world products
          </motion.p>
        </div>

        <div className="timeline">
          <div className="timeline-line" />
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-dot">
                <Briefcase size={16} />
              </div>
              <div className="timeline-card glass-card">
                <div className="timeline-meta">
                  <span className="timeline-period">
                    <Calendar size={14} /> {exp.period}
                  </span>
                  <span className="timeline-location">
                    <MapPin size={14} /> {exp.location}
                  </span>
                </div>
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <div className="timeline-tools">
                  <span className="tools-label">Tech:</span> {exp.tools}
                </div>
                <ul className="timeline-highlights">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
