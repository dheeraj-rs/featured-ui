import React from 'react';
import { motion } from 'framer-motion';
import navbarData from '../../app/data/navbarData.json';
import { slideInFromRight } from '../../utils/motion';

function Navbar({ currentPage, onSelectPage }) {
  return (
    <motion.nav variants={slideInFromRight(2)} className="navbar">
      <ul className="navbar-list">
        {navbarData?.navItems.map((item) => (
          <li key={item.page} className="navbar-item">
            <button
              className={`navbar-link ${
                currentPage.type === item.page ? 'active' : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                onSelectPage({
                  isVisible: true,
                  type: item.page,
                });
              }}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;
