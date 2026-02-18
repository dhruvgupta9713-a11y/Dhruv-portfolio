import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDesktop, FaDatabase, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiExpress, SiMongodb, SiMysql } from 'react-icons/si';
import './Skills.css';

const skillsData = [
    {
        category: "Frontend",
        skills: [
            { name: "HTML5", icon: <FaHtml5 className="skill-icon html" /> },
            { name: "CSS3", icon: <FaCss3Alt className="skill-icon css" /> },
            { name: "JavaScript", icon: <FaJs className="skill-icon js" /> },
            { name: "React.js", icon: <FaReact className="skill-icon react" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="skill-icon tailwind" /> },
            { name: "Framer Motion", icon: <SiFramer className="skill-icon framer" /> }
        ]
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", icon: <FaNodeJs className="skill-icon node" /> },
            { name: "Express.js", icon: <SiExpress className="skill-icon express" /> },
            { name: "REST APIs", icon: <FaDatabase className="skill-icon api" /> }
        ]
    },
    {
        category: "Database",
        skills: [
            { name: "MongoDB", icon: <SiMongodb className="skill-icon mongo" /> },
            { name: "MySQL", icon: <SiMysql className="skill-icon mysql" /> }
        ]
    },
    {
        category: "Tools & Others",
        skills: [
            { name: "Git", icon: <FaGitAlt className="skill-icon git" /> },
            { name: "GitHub", icon: <FaGithub className="skill-icon github" /> },
            { name: "VS Code", icon: <FaCode className="skill-icon vscode" /> },
            { name: "System Design", icon: <FaDesktop className="skill-icon sys" /> }
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100
        }
    }
};

const iconVariants = {
    float: {
        y: [0, -5, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const Skills = () => {
    return (
        <section className="section skills" id="skills">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Technical Skills
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="section-subtitle"
                >
                    My coding toolbox and areas of expertise
                </motion.p>

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
                            className="skills-category-card"
                            whileHover={{ y: -5 }}
                        >
                            <h3 className="category-title">{category.category}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill) => (
                                    <motion.span
                                        key={skill.name}
                                        className="skill-tag"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <motion.span
                                            variants={iconVariants}
                                            animate="float"
                                            className="skill-icon-wrapper"
                                        >
                                            {skill.icon}
                                        </motion.span>
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
