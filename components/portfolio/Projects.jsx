import React, { useState } from 'react';
import Image from 'next/image';
import projectsData from '../../app/data/projectsData.json';

function Projects({ show }) {
  const { pageTitle, filters, selectBox, projects } = projectsData;
  const [currentCategory, setCurrentCategory] = useState(null);
  const [isdropDown, setIsDropDown] = useState(false);

  return (
    <article className={`portfolio ${show ? 'active' : ''}`}>
      <header>
        <h2 className="h2 article-title">{pageTitle}</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {filters.map((filter, index) => (
            <li className="filter-item" key={index}>
              <button
                className={filter.category === currentCategory ? 'active' : ''}
                onClick={() => setCurrentCategory(filter.category)}
              >
                {filter.label}
              </button>
            </li>
          ))}
        </ul>

        <div
          className="filter-select-box"
          onClick={() => setIsDropDown(!isdropDown)}
        >
          <button className={`filter-select ${isdropDown ? 'active' : ''}`}>
            <div className="select-value" data-select-value>
              {selectBox.label}
            </div>
            <div className="select-icon">
              <ion-icon name={selectBox.chevronIcon}></ion-icon>
            </div>
          </button>
          <ul className="select-list">
            {selectBox.options.map((option, index) => (
              <li className="select-item" key={index}>
                <button onClick={() => setCurrentCategory(option.category)}>
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {projects.map((project, index) => (
            <li
              key={index}
              className={`project-item ${
                project?.category === currentCategory ? 'active' : ''
              } ${!currentCategory ? 'active' : ''}`}
              data-filter-item
              data-category={project.category}
            >
              <a href={project?.websiteUrl}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name={project.iconName}></ion-icon>
                  </div>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    width={500}
                    height={500}
                  />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Projects;
