import React, { useState } from 'react';
import ClickContactForm from './ClickContactForm';
import FadeIn from 'react-fade-in';

export default function Contact() {
  let [isContactFormClicked, setIsContactFormClicked] = useState(false);

  return (
    <section className="main" id="contact-page">
      <div
        className="main-wrapper"
        id="contact-wrapper"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'whitesmoke'
        }}
      >
        <FadeIn transitionDuration="1500">
          <img
            className="thisAlperenAtik"
            src="https://i.imgur.com/uCRljQC.png"
            alt=""
            onClick={() => setIsContactFormClicked(!isContactFormClicked)}
            style={{
              width: '15rem',
              margin: '0.5rem 0 0.5rem 0',
              borderRadius: '1rem'
            }}
          />{' '}
        </FadeIn>
        <FadeIn transitionDuration="2000">
          <button
            onClick={() => setIsContactFormClicked(!isContactFormClicked)}
            style={{ margin: '1rem' }}
          >
            {' '}
            <i class="fas fa-mail-bulk" />{' '}
            {isContactFormClicked ? 'Close' : 'Open'} Contact Form{' '}
          </button>
        </FadeIn>

        {isContactFormClicked && (
          <FadeIn>
            <ClickContactForm />{' '}
          </FadeIn>
        )}

        <div className="contact-text-space" style={{ marginBottom: '0.7rem' }}>
          <FadeIn transitionDuration="3000">
            <table>
              <tbody>
                <tr>
                  <td>
                    <i class="fab fa-github" />
                    <span className="social-platform"> Github</span>
                  </td>
                  <td>
                    <a href="http://github.com/alperenatikhan/" target="_blank">
                      <strong>alperenatikhan</strong>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i class="fab fa-facebook" />
                    <span className="social-platform"> Facebook</span>
                  </td>
                  <td>
                    <a
                      href="https://pl-pl.facebook.com/alperen.atik"
                      target="_blank"
                    >
                      <strong>Alperen Atik</strong>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fab fa-whatsapp" />
                    <span className="social-platform"> WhatsApp</span>
                  </td>
                  <td>
                    <a href="https://wa.me/48731166245" target="_blank">
                      <strong>0048 731 166 245</strong>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i class="fas fa-at" />
                    <span className="social-platform"> E-mail</span>
                  </td>
                  <td>
                    <a href="mailto:alperenmyung@gmail.com" target="_blank">
                      <strong>alperenmyung@gmail.com</strong>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i class="fa fa-skype" />
                    <span className="social-platform"> Skype</span>
                  </td>
                  <td>
                    <a
                      href="http://join.skype.com/BPFTsBYJjDMs"
                      target="_blank"
                    >
                      <strong>alperen.myung</strong>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
