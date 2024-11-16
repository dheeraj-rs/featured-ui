'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import SidebarData from '../../app/data/sidebarData.json';
import { slideInFromLeft } from '../../utils/motion';

function Sidebar() {
  const [isdropDown, setIsDropDown] = useState(false);

  return (
    <motion.aside
      variants={slideInFromLeft(0.5)}
      className={`sidebar ${isdropDown ? 'active' : ''}`}
    >
      {/* <aside className={`sidebar ${isdropDown ? 'active' : ''}`}> */}
      <div className="sidebar-container">
        <div className="sidebar-info">
          <figure className="avatar-box">
            <Image
              src={SidebarData.avatar.src}
              alt={SidebarData.avatar.alt}
              width={SidebarData.avatar.width}
              height={SidebarData.avatar.height}
            />
          </figure>

          <div className="info-content">
            <h1 className="name" title={SidebarData.name}>
              {SidebarData.name}
            </h1>

            <p className="title">{SidebarData.title}</p>
          </div>

          <button
            className="info_more-btn"
            onClick={() => setIsDropDown(!isdropDown)}
          >
            <span>Show Contacts</span>
            <ion-icon name="chevron-down"></ion-icon>
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            {SidebarData.contacts.map((contact, index) => (
              <li className="contact-item" key={index}>
                <div className="icon-box">
                  <ion-icon name={contact.icon}></ion-icon>
                </div>
                <div className="contact-info">
                  <p className="contact-title">{contact.type}</p>
                  {contact.href ? (
                    <a href={contact.href} className="contact-link">
                      {contact.displayText}
                    </a>
                  ) : contact.datetime ? (
                    <time dateTime={contact.datetime}>
                      {contact.displayText}
                    </time>
                  ) : (
                    <address>{contact.displayText}</address>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            {SidebarData.socials.map((social, index) => (
              <li className="social-item" key={index}>
                <a href={social.href} className="social-link">
                  <ion-icon name={social.icon}></ion-icon>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* </aside> */}
    </motion.aside>
  );
}

export default Sidebar;
