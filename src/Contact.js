import React from 'react';

export default function Contact() {
  return (
    <section className="main">
      <div className="main-wrapper" id="contact-wrapper">
        <div className="contact-text-space">
          <table>
            <tr>
              {' '}
              <td>
                {' '}
                <i class="fab fa-github" />
                <strong>Github</strong>{' '}
              </td>{' '}
              <td>alperenatikhan</td>{' '}
            </tr>
            <tr>
              {' '}
              <td>
                {' '}
                <i class="fab fa-facebook" />
                <strong>Facebook</strong>{' '}
              </td>{' '}
              <td>Alperen Atik </td>{' '}
            </tr>
            <tr>
              {' '}
              <td>
                <i class="fab fa-whatsapp" />
                <strong>WhatsApp</strong>{' '}
              </td>{' '}
              <td> 0048 731 166 245</td>{' '}
            </tr>
            <tr>
              {' '}
              <td>
                <i class="fas fa-at" />
                <strong>E-mail</strong>{' '}
              </td>{' '}
              <td> alperenmyung@gmail.com</td>{' '}
            </tr>
              <tr>
              {' '}
              <td>
                <i class="fa fa-skype"/>
                <strong>Skype</strong>{' '}
              </td>{' '}
              <td> alperen.myung</td>{' '}
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
}
