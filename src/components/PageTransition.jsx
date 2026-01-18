import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const PageTransition = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="page-wrapper"
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
