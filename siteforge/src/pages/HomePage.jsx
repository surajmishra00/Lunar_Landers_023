import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { Globe, Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {Link} from 'react-router-dom'

const Button = ({ children, className, ...props }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-4 py-3 rounded-md font-medium ${className}`}
    {...props}
  >
    {children}
  </motion.button>
)

const NavItem = ({ item }) => (
  <motion.a
    href="#"
    className="text-sm font-medium"
    whileHover={{ scale: 1.1 }}
  >
    {item}
  </motion.a>
)

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return createPortal(
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="fixed inset-0 z-50 bg-white"
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-2xl">&times;</button>
      </div>
      <nav className="flex flex-col items-center space-y-4">
        {['About', 'Contact', 'Pricing', 'Enterprise'].map((item) => (
          <motion.a
            key={item}
            href="#"
            className="text-lg font-medium"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.a>
        ))}
      </nav>
    </motion.div>,
    document.body
  )
}

const Homepage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="flex items-center justify-between px-4 py-4 bg-white"
      >
        <div className="flex items-center space-x-6">
          <motion.a
            href="/"
            className="text-2xl font-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            SiteForge
          </motion.a>
          <nav className="hidden md:flex space-x-4">
            <NavItem item={<Link to="/about">About</Link>} />
            <NavItem item={<Link to="/solutions">Solutions</Link>} />
            <NavItem item={<Link to="/contact">Contact</Link>} />
            <NavItem item={<Link to="/pricing">Pricing</Link>} />
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <motion.a href="#" className="hidden md:inline-flex items-center text-sm font-medium" whileHover={{ scale: 1.1 }}>
            Enterprise
          </motion.a>
          <Button className="hidden md:inline-flex items-center text-sm">
            <Globe className="w-4 h-4 mr-2" />
            EN
          </Button>
          <Button className="text-sm">
            Log In
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 text-sm">
            Get Started
          </Button>
          <Button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </motion.header>
      <AnimatePresence>
        {isMobileMenuOpen && <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />}
      </AnimatePresence>
      <main className="flex-grow">
        <motion.section
          initial="initial"
          animate="animate"
          variants={stagger}
          className="bg-[#4517ff] text-white py-20 px-4 text-center"
        >
          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight"
          >
            Create a website without limits
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Build and scale with confidence. From a powerful website builder to advanced business solutions—we've got you covered.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button className="bg-white text-[#4517ff] hover:bg-gray-100 text-lg px-8 py-6">
              Get Started
            </Button>
          </motion.div>
          <motion.p variants={fadeIn} className="mt-4 text-sm">
            Start for free. No credit card required.
          </motion.p>
        </motion.section>
        <motion.section
          initial="initial"
          animate="animate"
          variants={stagger}
          className="py-20 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-16 text-center leading-tight"
            >
              One platform,<br />infinite possibilities
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {['Build a website', 'Manage your business', 'Grow online'].map((title, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <h3 className="text-xl font-semibold mb-4">{title}</h3>
                  <p className="text-gray-600 mb-4">
                    {index === 0 && 'Design with a full suite of intuitive tools and powerful AI to create the site you want.'}
                    {index === 1 && 'Streamline your day-to-day with built-in business solutions, tailored to your needs.'}
                    {index === 2 && 'Expand your reach and monetize your website with integrated tools built for your success.'}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeIn} className="text-center mt-12">
              <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6">
                Get Started
              </Button>
            </motion.div>
          </div>
        </motion.section>
        <motion.section
          initial="initial"
          animate="animate"
          variants={stagger}
          className="py-20 px-4 bg-gradient-to-br from-purple-100 to-purple-300"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            <motion.div variants={fadeIn} className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Customize it your way
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  'Intuitive drag and drop website editor',
                  '1000\'s of advanced web design capabilities',
                  'Powerful AI features for smart customization',
                  'Full-stack web dev tools for custom functionality'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6">
                Get Started
              </Button>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="md:w-1/2 relative"
            >
              <div className="inset-0 flex items-center justify-center h-96">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-lg"
                >
                  <source src="https://video.wixstatic.com/video/a261d7_46e3c75913564d87a4379c0d8d20f335/360p/mp4/file.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
    
export default Homepage;