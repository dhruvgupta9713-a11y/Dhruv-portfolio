import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: 'Travel AI',
    description:
      'A full-stack TravelAI platform using the MERN stack to generate personalized travel recommendations based on user preferences. Features optimized MongoDB schemas and real-time data rendering.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/dhruvgupta9713-a11y',
    category: 'fullstack',
    highlight: 'MERN Stack',
  },
  {
    title: 'SmartAttendAI',
    description:
      'A smart attendance system using facial recognition to automatically detect and mark attendance in real-time. Built with OpenCV, Face Recognition library, and a Streamlit + Flask web interface.',
    tech: ['OpenCV', 'Face Recognition', 'NumPy', 'Pandas', 'Streamlit', 'Flask'],
    github: 'https://github.com/dhruvgupta9713-a11y',
    category: 'backend',
    highlight: 'AI / ML',
  },
  {
    title: 'HealthStack',
    description:
      'A scalable full-stack healthcare platform with authentication, appointment scheduling, real-time chat, and video consultations using WebRTC. Optimized PostgreSQL schemas for patient records.',
    tech: ['React.js', 'Django', 'PostgreSQL', 'REST APIs', 'WebRTC'],
    github: 'https://github.com/dhruvgupta9713-a11y/HealthStack',
    category: 'fullstack',
    highlight: 'Healthcare',
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Backend / AI', value: 'backend' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-header">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Projects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Featured Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            Projects I've built to solve real problems
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="projects-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="project-card glass-card"
                whileHover={{ y: -6 }}
              >
                <div className="project-header">
                  <div className="project-icon-wrap">
                    <Folder size={28} />
                  </div>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="project-link-icon"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <span className="project-badge">{project.highlight}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech} className="project-tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
