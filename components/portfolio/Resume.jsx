import React from 'react';
import resumeData from '../../app/data/resumeData.json';

function Resume({ show }) {
  const { pageTitle, sections, skillsSections } = resumeData;

  return (
    <article className={`resume ${show ? 'active' : ''}`}>
      <header>
        <h2 className="h2 article-title">{pageTitle}</h2>
      </header>

      {sections.map((section, index) => (
        <section key={index} className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name={section.iconName}></ion-icon>
            </div>
            <h3 className="h3">{section.title}</h3>
          </div>

          {section.items && (
            <ol className="timeline-list">
              {section.items.map((item, idx) => (
                <li key={idx} className="timeline-item">
                  <h4 className="h4 timeline-item-title">{item.title}</h4>
                  <span>{item.duration}</span>
                  <p className="timeline-text">{item.description}</p>
                </li>
              ))}
            </ol>
          )}
        </section>
      ))}

      {skillsSections && (
        <section className="skill">
          <h3 className="h3 skills-title">{skillsSections?.title}</h3>
          <ul className="skills-list content-card">
            {skillsSections?.skills?.map((skill, idx) => (
              <li key={idx} className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">{skill.name}</h5>
                  <data value={skill.percentage}>{skill.percentage}%</data>
                </div>
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}

export default Resume;
