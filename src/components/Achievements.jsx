import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Zap, Target, BookOpen } from 'lucide-react';
import './Achievements.css';

const achievements = [
  {
    icon: <Target size={28} />,
    title: '650+ DSA Problems',
    description: 'Solved across LeetCode, GeeksforGeeks, and Codeforces, demonstrating strong algorithmic and problem-solving skills.',
    color: '#3b82f6',
  },
  {
    icon: <Star size={28} />,
    title: '3-Star CodeChef',
    description: 'Achieved 3-Star rating on CodeChef, reflecting consistent performance in competitive programming contests.',
    color: '#f59e0b',
  },
  {
    icon: <Trophy size={28} />,
    title: '1750+ LeetCode Rating',
    description: 'Attained a rating above 1750 on LeetCode through continuous problem-solving and contest participation.',
    color: '#10b981',
  },
  {
    icon: <BookOpen size={28} />,
    title: 'Amazon ML Summer School 2025',
    description: 'Selected participant, explored core ML concepts and real-world applications from Amazon engineers.',
    color: '#ef4444',
  },
  {
    icon: <Zap size={28} />,
    title: '3× SIH Participant',
    description: 'Participated 3 times in Smart India Hackathon, working on innovative problem statements in team-based environments.',
    color: '#8b5cf6',
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
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Achievements = () => {
  return (
    <section className="section achievements" id="achievements">
      <div className="container">
        <div className="section-header">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Achievements
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Milestones & Awards
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            Key accomplishments in my coding journey
          </motion.p>
        </div>

        <motion.div
          className="achievements-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="achievement-card glass-card"
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div
                className="achievement-icon"
                style={{
                  background: `${item.color}15`,
                  color: item.color,
                }}
              >
                {item.icon}
              </div>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-desc">{item.description}</p>
              <div className="achievement-glow" style={{ background: item.color }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
