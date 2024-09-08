// Navbar.js
import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css'

const Navbar = () => {
  // Variants for Framer Motion animations
  const variants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        yoyo: Infinity // loop the animation
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5 }}
      className="fixed top-0 w-full bg-transparent z-30 p-4" // Ensure navbar is transparent and has a higher z-index
    >
      <div className="flex items-center justify-center max-w-6xl mx-auto ">
        {/* Logo or Brand Name */}
   

        {/* Navigation Links */}
        <div className="flex items-center text-white  space-x-4 navs">
        <motion.a  href='/'>Home</motion.a>
          {['About', 'Portfolio', 'Contact'].map((link) => (
          
            <motion.a
              key={link}
              href={`${link.toLowerCase()}`}
              whileHover={variants.hover}
              className="text-base hover:text-gray-300"
            >
              {link}
            </motion.a>
          ))}

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
