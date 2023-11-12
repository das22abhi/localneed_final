import { motion } from 'framer-motion'

function AnimateWhileInView ({ children }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className='w-full h-fit'
    >
      {children}
    </motion.div>
  )
}

export default AnimateWhileInView
