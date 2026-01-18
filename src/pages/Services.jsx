import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import './ServicesPage.css'

const ServicesPage = () => {
  const containerRef = useRef(null)

  // Parallax for ambient layers
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const yMath = useTransform(scrollYProgress, [0, 1], [0, -100])

  // Floating animation variant (Ambient)
  const floatContinuous = (duration) => ({
    y: [0, -30, 0],
    opacity: [0.03, 0.05, 0.03],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut"
    }
  })

  // 3-Layer Progressive Reveal Variants

  // Layer 1: Title (Always visible, clean, subtle shift on hover)
  const titleVariant = {
    rest: { y: 0, opacity: 0.9 },
    hover: {
      y: -5,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  // Layer 2: Description (Fades in on hover)
  const descriptionVariant = {
    rest: { opacity: 0, y: 10, height: 0 },
    hover: {
      opacity: 0.9,
      y: 0,
      height: "auto",
      transition: { duration: 0.5, delay: 0.1, ease: "easeOut" }
    }
  }

  // Layer 3: Features (Fades in deeper, acts as metadata)
  const featuresVariant = {
    rest: { opacity: 0, y: 10 },
    hover: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.3, ease: "easeOut" }
    }
  }

  const detailedServices = [
    {
      title: 'Research and Analysis',
      videoUrl: '/videos/research.mp4',
      description:
        'Comprehensive research methodologies and in-depth analysis to uncover insights that drive strategic decisions.',
      features: ['Qualitative Design', 'Meta-Analyses', 'Primary Data', 'Statistical Analysis'],
    },
    {
      title: 'Data Collection',
      videoUrl: '/videos/data-collection.mp4',
      description:
        'Systematic data gathering and advanced analytical techniques to transform raw information into actionable intelligence.',
      features: ['Survey Design', 'Focus Groups', 'Data Mining', 'Visualization'],
    },
    {
      title: 'Consultancy',
      videoUrl: '/videos/consultancy.mp4',
      description:
        'Expert guidance and strategic consulting to help organizations navigate complex challenges and opportunities.',
      features: ['Strategic Planning', 'Optimization', 'Process Improvement', 'Change Management'],
    },
    {
      title: 'Sustainability',
      videoUrl: '/videos/sustainability.mp4',
      description:
        'Evidence-based research focused on creating sustainable solutions for long-term environmental and social impact.',
      features: ['Impact Assessments', 'ESG Analysis', 'Climate Adaptation', 'SDG Alignment'],
    },
    {
      title: 'Strategic Planning',
      videoUrl: '/videos/strategy.mp4',
      description:
        'Data-driven strategic planning that aligns organizational goals with actionable roadmaps for success.',
      features: ['Competitive Analysis', 'Roadmap Development', 'KPI Definition', 'Implementation'],
    },
    {
      title: 'Monitoring (M&E)',
      icon: '📋',
      videoUrl: '/videos/me.mp4',
      description:
        'Comprehensive monitoring and evaluation frameworks to track program effectiveness and measure long-term impact.',
      features: ['Logic Framework', 'Impact Assessment', 'Outcome Evaluation', 'Quality Assurance'],
    },
  ]

  return (
    <div className="services-page" ref={containerRef}>
      {/* Ambient Math Background */}
      <div className="page-ambient-bg">
        <motion.div className="page-math-symbol pm1" animate={floatContinuous(25)} style={{ y: yMath }}>∫ dx</motion.div>
        <motion.div className="page-math-symbol pm2" animate={floatContinuous(20)} style={{ y: yMath }}>∑</motion.div>
        <motion.div className="page-math-symbol pm3" animate={floatContinuous(30)} style={{ y: yMath }}>P(A|B)</motion.div>
        <motion.div className="page-math-symbol pm4" animate={floatContinuous(22)} style={{ y: yMath }}>lim</motion.div>
      </div>

      <section className="services-hero section">
        <div className="container">
          <motion.div
            className="services-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="page-title">Our Capabilities</h1>
            <p className="page-subtitle">
              Comprehensive solutions tailored to your research and strategic needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="detailed-services-section">
        <div className="container">
          <div className="detailed-services-grid">
            {detailedServices.map((service, index) => (
              <motion.article
                key={index}
                className="detailed-service-panel"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <div className="service-panel-media">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="service-panel-video"
                  >
                    <source src={service.videoUrl} type="video/mp4" />
                  </video>
                  {/* Subtle Gradient Wash - Always present for depth */}
                  <div className="service-panel-wash" />

                  {/* Interactive Content Layer */}
                  <div className="service-explore-content">
                    {/* Layer 1: Title Group (The Anchor) */}
                    <motion.div
                      className="explore-header-group"
                      variants={titleVariant}
                    >
                      <span className="context-label">Capability</span>
                      <h2 className="explore-title">
                        {service.title}
                      </h2>
                      <div className="explore-divider" />
                    </motion.div>

                    {/* Layer 2: Description (Reveal on Hover) */}
                    <div className="explore-body-container">
                      <motion.p
                        className="explore-description"
                        variants={descriptionVariant}
                      >
                        {service.description}
                      </motion.p>

                      {/* Layer 3: Features (Reveal Deeper) */}
                      <motion.div
                        className="explore-features"
                        variants={featuresVariant}
                      >
                        <ul className="features-labels-list">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="feature-label">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-text">
              Let's discuss how SATYAH can help drive your organization forward.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/contact" className="cta-button-large">
                <span className="cta-button-text">Contact Us</span>
                <span className="cta-button-arrow">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
