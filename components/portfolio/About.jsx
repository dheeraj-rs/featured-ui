import React from 'react';
import Image from 'next/image';
import aboutData from '../../app/data/aboutData.json';
import { TextGenerateEffect } from '../../utils/TextGenerateEffect';

function About({ show }) {
  const { about, service, testimonials, clients } = aboutData;

  return (
    <article className={`about ${show ? 'active' : ''}`}>
      <header>
        <h2 className="h2 article-title">{about.title}</h2>
      </header>

      <section className="about-text">
        {about.text.map((paragraph, index) => (
          // <p key={index}>{paragraph}</p>
          <TextGenerateEffect key={index} words={paragraph} />
        ))}
      </section>

      <section className="service">
        <h3 className="h3 service-title">{service.title}</h3>

        <ul className="service-list">
          {service.items.map((item, idx) => (
            <li key={idx} className="service-item">
              <div className="service-icon-box">
                <Image src={item.icon} alt={item.alt} width={40} height={40} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{item.title}</h4>
                <p className="service-item-text">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">{testimonials.title}</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.items.map((testimonial, idx) => (
            <li key={idx} className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.alt}
                    width={60}
                    height={60}
                    data-testimonials-avatar
                  />
                </figure>
                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  {testimonial.alt}
                </h4>
                <div className="testimonials-text" data-testimonials-text>
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* <section className="clients">
        <h3 className="h3 clients-title">{clients.title}</h3>
        <ul className="clients-list has-scrollbar">
          {clients.logos.map((logo, idx) => (
            <li key={idx} className="clients-item">
              <a href="#">
                <Image src={logo} alt="client logo" width={40} height={40} />
              </a>
            </li>
          ))}
        </ul>
      </section> */}
    </article>
  );
}

export default About;
