import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaGithub, FaDocker, FaPython
} from 'react-icons/fa';
import {
  SiTailwindcss, SiExpress, SiMongodb, SiMysql,
  SiPostgresql, SiRedis, SiDjango, SiPostman,
  SiKubernetes, SiMui
} from 'react-icons/si';
import { Database, Globe, Server, Wrench, Brain } from 'lucide-react';
import './Skills.css';

const skillsData = [
  {
    category: 'Frontend',
    icon: <Globe size={22} />,
    color: '#3b82f6',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'ES6+', icon: <FaJs /> },
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Material UI', icon: <SiMui /> },
    ],
  },
  {
    category: 'Backend',
    icon: <Server size={22} />,
    color: '#10b981',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'REST APIs', icon: <Globe /> },
      { name: 'MVC Architecture', icon: <Server /> },
    ],
  },
  {
    category: 'Database',
    icon: <Database size={22} />,
    color: '#f59e0b',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'Redis', icon: <SiRedis /> },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: <Wrench size={22} />,
    color: '#ef4444',
    skills: [
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'CI/CD', icon: <Wrench /> },
    ],
  },
  {
    category: 'Core Skills',
    icon: <Brain size={22} />,
    color: '#8b5cf6',
    skills: [
      { name: 'DSA', icon: <Brain /> },
      { name: 'OOPs', icon: <Brain /> },
      { name: 'Problem Solving', icon: <Brain /> },
      { name: 'System Design', icon: <Server /> },
      { name: 'C++', icon: <FaPython /> },
      { name: 'Python', icon: <FaPython /> },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section-header">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Skills
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            My Technical Arsenal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="skills-category-card glass-card"
              whileHover={{ y: -6 }}
            >
              <div className="category-header">
                <div
                  className="category-icon-wrap"
                  style={{ background: `${category.color}15`, color: category.color }}
                >
                  {category.icon}
                </div>
                <h3 className="category-title">{category.category}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    className="skill-tag"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="skill-icon-wrapper">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
