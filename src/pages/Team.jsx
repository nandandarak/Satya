import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Team.css'

const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Director of Research',
    description:
      'Leading expert in quantitative research methodologies with 15+ years of experience in policy analysis and strategic research.',
    image: '👩‍🔬',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Senior Data Analyst',
    description:
      'Specializes in advanced statistical modeling and data visualization, transforming complex datasets into actionable insights.',
    image: '👨‍💻',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Sustainability Research Lead',
    description:
      'Environmental scientist focused on sustainable development research and climate adaptation strategies.',
    image: '👩‍🔬',
  },
  {
    name: 'James Thompson',
    role: 'Strategic Consultant',
    description:
      'Business strategist with expertise in organizational development and evidence-based decision-making frameworks.',
    image: '👨‍💼',
  },
  {
    name: 'Dr. Aisha Patel',
    role: 'Research Methodology Expert',
    description:
      'Academic researcher specializing in mixed-methods research design and program evaluation.',
    image: '👩‍🏫',
  },
  {
    name: 'David Kim',
    role: 'Data Collection Specialist',
    description:
      'Expert in survey design, field research, and qualitative data collection across diverse contexts.',
    image: '👨‍💼',
  },
]

const Team = () => {
  return (
    <div className="team-page">
      <section className="team-hero section">
        <div className="container">
          <motion.div
            className="team-hero-content"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="page-title">Meet the Team</h1>
            <p className="page-subtitle">
              Our multidisciplinary team brings together expertise from research,
              data analysis, strategy, and sustainability
            </p>
          </motion.div>
        </div>
      </section>

      <section className="team-grid-section section">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="team-image">
                  <div className="team-image-placeholder">{member.image}</div>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-cta section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-title">Join Our Team</h2>
            <p className="cta-text">
              We're always looking for talented researchers, analysts, and
              consultants who share our passion for evidence-based solutions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="cta-button-large">
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Team
