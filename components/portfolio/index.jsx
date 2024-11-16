'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './css/styles.css';
import About from './About';
import Navbar from './Navbar';
import Resume from './Resume';
import Blog from './Blog';
import Contact from './Contact';
import Projects from './Projects';
import Sidebar from './Sidebar';
import { slideInFromRight } from '../../utils/motion';

function Portfolio() {
  const [show, setShow] = useState({ isVisible: true, type: 'about-page' });

  return (
    <div className="w-full h-full flex justify-center items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        className="main w-full  p-3"
      >
        <Sidebar />
        <motion.div
          variants={slideInFromRight(0.8)}
          className="main-content rounded-lg w-full h-[calc(100vh-25vh)] no-scrollbar overflow-y-scroll"
        >
          <Navbar currentPage={show} onSelectPage={setShow} />
          <About show={show?.type === 'about-page'} />
          <Projects show={show?.type === 'projects-page'} />
          <Resume show={show?.type === 'resume-page'} />
          <Blog show={show?.type === 'blog-page'} />
          <Contact show={show?.type === 'contact-page'} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Portfolio;
