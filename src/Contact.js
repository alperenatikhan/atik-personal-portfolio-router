import React from 'react';

export default function Contact() {
  return (
    <section className="main" id="contact-page">
      <div className="main-wrapper" id="contact-wrapper"style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:"whitesmoke"}}>
        <img src="https://i.imgur.com/uCRljQC.png" alt="" style={{width:"40vh", marginBottom: "1rem"}}/>


        <div className="contact-text-space" style={{marginBottom:"0.7rem"}}>
          <table>
            <tr>
              {' '}
              <td>
                {' '}
                <i class="fab fa-github" />
                <strong>Github</strong>{' '}
              </td>{' '}
              <td>
                <a href="http://github.com/alperenatikhan/" target="_blank">
                  alperenatikhan
                </a>
              </td>{' '}
            </tr>
            <tr>
              {' '}
              <td>
                {' '}
                <i class="fab fa-facebook" />
                <strong>Facebook</strong>{' '}
              </td>{' '}
              <td>
                {' '}
                <a
                  href="https://pl-pl.facebook.com/alperen.atik"
                  target="_blank"
                >
                  Alperen Atik
                </a>{' '}
              </td>{' '}
            </tr>
            <tr>
              {' '}
              <td>
                <i class="fab fa-whatsapp" />
                <strong>WhatsApp</strong>{' '}
              </td>{' '}
              <td>
                {' '}
                <a href="https://wa.me/48731166245" target="_blank">
                  {' '}
                  0048 731 166 245
                </a>
              </td>{' '}
            </tr>
            <tr>
              {' '}
              <td>
                <i class="fas fa-at" />
                <strong>E-mail</strong>{' '}
              </td>{' '}
              <td>
                <a href="mailto:alperenmyung@gmail.com" target="_blank">
                  {' '}
                  alperenmyung@gmail.com
                </a>
              </td>{' '}
            </tr>
            <tr>
              {' '}
              <td>
                <i class="fa fa-skype" />
                <strong>Skype</strong>{' '}
              </td>{' '}
              <td>
                {' '}
                <a href="http://join.skype.com/BPFTsBYJjDMs" target="_blank">
                  alperen.myung{' '}
                </a>
              </td>{' '}
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
}
