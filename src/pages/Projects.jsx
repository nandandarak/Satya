import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Partners from '../components/Partners'
import './Projects.css'

const Projects = () => {
  return (
    <div className="projects-page">
      <section className="projects-hero section">
        <div className="container">
          <motion.div
            className="projects-hero-content"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="page-title">Our Projects</h1>
            <p className="page-subtitle">
              Explore our portfolio of impactful research and consulting
              engagements
            </p>
          </motion.div>
        </div>
      </section>

      <Partners />
    </div>
  )
}

export default Projects
