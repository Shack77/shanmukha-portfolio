import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="container"
    >
      <h2>Contact</h2>
      <p>Email: shanmukhag0407@gmail.com</p>
    </motion.section>
  )
}

export default Contact
