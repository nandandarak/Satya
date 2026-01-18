import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="page-title">About SATYAH</h1>
            <p className="page-subtitle">
              Research-driven consulting for evidence-based decision making
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-mission section">
        <div className="container">
          <div className="about-content">
            <motion.div
              className="mission-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-heading">Our Mission</h2>
              <p className="mission-paragraph">
                At SATYAH, we believe that the most impactful decisions are
                grounded in rigorous research, comprehensive data analysis, and
                strategic foresight. We are a research-driven consulting
                organization dedicated to empowering institutions, businesses,
                and policymakers with the insights they need to navigate complex
                challenges and drive sustainable growth.
              </p>
            </motion.div>

            <motion.div
              className="mission-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <span className="placeholder-icon">📊</span>
                  <p>Research & Analysis</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-values section">
        <div className="container">
          <motion.div
            className="values-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">Our Core Values</h2>
          </motion.div>

          <div className="values-grid">
            {[
              {
                title: 'Evidence-Based Research',
                description:
                  'Every recommendation is backed by rigorous research and validated data, ensuring reliability and accuracy in our insights.',
                icon: '🔬',
              },
              {
                title: 'Strategic Formulation',
                description:
                  'We transform research findings into actionable strategies that align with organizational goals and drive measurable outcomes.',
                icon: '🎯',
              },
              {
                title: 'Data-Backed Decision Making',
                description:
                  'We empower our clients with comprehensive data analysis that illuminates pathways to informed, confident decision-making.',
                icon: '📈',
              },
              {
                title: 'Sustainable Development',
                description:
                  'Our research and consulting services prioritize long-term sustainability, balancing economic, social, and environmental considerations.',
                icon: '🌱',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-approach section">
        <div className="container">
          <motion.div
            className="approach-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">Our Approach</h2>
            <div className="approach-text">
              <p>
                SATYAH combines academic rigor with practical expertise to
                deliver consulting services that bridge the gap between research
                and implementation. Our multidisciplinary team brings together
                researchers, analysts, strategists, and domain experts to
                provide comprehensive solutions tailored to your unique needs.
              </p>
              <p>
                Whether you're an educational institution seeking policy
                insights, a business navigating market complexities, a
                policymaker crafting evidence-based regulations, or an NGO
                working toward sustainable development, we partner with you to
                transform challenges into opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
