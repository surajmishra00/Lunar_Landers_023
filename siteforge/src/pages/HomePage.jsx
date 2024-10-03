/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import { Globe, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Homepage() {
  const Button = ({ children, className, ...props }) => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-2 py-1 rounded-md font-medium ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div className="w-full font-sans">
      <Navbar />

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
            Build and scale with confidence. From a powerful website builder to
            advanced business solutions—we've got you covered.
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
          className="py-20 px-4 bg-gradient-to-br from-purple-100 to-purple-300"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            <motion.div
              variants={fadeIn}
              className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Customize it your way
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Intuitive drag and drop website editor",
                  "1000's of advanced web design capabilities",
                  "Powerful AI features for smart customization",
                  "Full-stack web dev tools for custom functionality",
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
            <motion.div variants={fadeIn} className="md:w-1/2 relative">
              <div className="inset-0 flex items-center justify-center h-96">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-lg"
                >
                  <source
                    src="https://video.wixstatic.com/video/a261d7_46e3c75913564d87a4379c0d8d20f335/360p/mp4/file.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* ------------------------------------ */}

      <div
        className="w-full bg-fixed bg-cover bg-center py-64 relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7759167/pexels-photo-7759167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="w-2/3">
            <h2 className="text-5xl font-extrabold text-white leading-tight animate-fadeInUp">
              Discover the Magic of
              <br />
              Parallax Effects!
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-32">
        <div className="flex space-x-12">
          <div className="w-1/3 text-center transform hover:scale-105 transition duration-300">
            <img
              src="https://images.pexels.com/photos/192273/pexels-photo-192273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Smartphone"
              className="w-full rounded-lg shadow-lg mb-6"
            />
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Pexels Image Integration
            </h3>
            <p className="text-gray-600">
              Find the perfect royalty-free image in seconds with our integrated
              image search feature!
            </p>
          </div>
          <div className="w-1/3 bg-gradient-to-br from-pink-500 to-yellow-300 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300">
            <h3 className="text-3xl font-bold text-white mb-6">
              Create Beautiful Gradients!
            </h3>
            <p className="text-gray-800 text-lg">
              Craft stunning gradients with just a few clicks and slider
              adjustments!
            </p>
          </div>
          <div className="w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Emojis Galore! 😎
            </h3>
            <p className="text-gray-600 mb-6">
              Sprinkle emojis throughout your content for that extra flair!
            </p>
            <ul className="text-left space-y-4 text-gray-700">
              <li className="flex items-center">
                <span className="text-2xl mr-4">🦉</span>Wise Emoji List Item
              </li>
              <li className="flex items-center ml-8">
                <span className="text-2xl mr-4">✅</span>Checkmark for Emphasis
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-4">🦉</span>Another Wise Point
              </li>
              <li className="flex items-center ml-8">
                <span className="text-2xl mr-4">🐹</span>Cute Subpoint (Mind
                Blown!)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-32 bg-gray-100 rounded-lg shadow-inner my-0">
        <div className="flex items-center">
          <div className="w-2/3 pr-12">
            <h2 className="text-5xl font-bold mb-8 text-gray-800 animate-fadeInLeft">
              Why Wait?
            </h2>
            <h3 className="text-3xl text-gray-600 animate-fadeInLeft animation-delay-300">
              Let's Start Creating Something Extraordinary!
            </h3>
          </div>
          <div
            className="w-1/3 h-64 bg-cover bg-center rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 transition duration-500"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/7129700/pexels-photo-7129700.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
