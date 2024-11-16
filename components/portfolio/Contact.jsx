import React from 'react';
import contactData from '../../app/data/contactData.json';

const Contact = ({ show }) => {
  const { header, mapbox, contactForm } = contactData.contactPage;

  return (
    <article className={`contact ${show ? 'active' : ''}`}>
      <header>
        <h2 className="h2 article-title">{header.title}</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src={mapbox.iframeSrc}
            width={mapbox.width}
            height={mapbox.height}
            loading="lazy"
          />
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">{contactForm.title}</h3>

        <form action="#" className="form" data-form>
          <div className="input-wrapper">
            {contactForm.fields.map((field, index) => (
              <React.Fragment key={index}>
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    className={field.class}
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    className={field.class}
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
          <textarea
            name={contactForm.textarea.name}
            className={contactForm.textarea.class}
            placeholder={contactForm.textarea.placeholder}
            required={contactForm.textarea.required}
          />

          <button
            className={contactForm.button.class}
            type={contactForm.button.type}
            disabled={contactForm.button.disabled}
          >
            <ion-icon name={contactForm.button.iconName}></ion-icon>
            <span>{contactForm.button.buttonText}</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
