import React, { useState } from 'react';

export default function ClickContactForm() {
  return (
    <div
      className="form-wrapper"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {' '}
      <form action="https://formsubmit.co/alperenmyung@gmail.com" method="POST">
        {' '}
        <table className="contact-table">
          <tr className="contact-row">
            <td className="label-cell">
              <label for="contact-name">Name: </label>{' '}
            </td>{' '}
            <td>
              <input
                type="text"
                name="contact-name"
                placeholder="Type Your Name"
                required
              />{' '}
            </td>
          </tr>
          <tr className="contact-row">
            <td className="label-cell">
              <label for="contact-email">E-mail: </label>
            </td>
            <td>
              <input
                type="email"
                name="contact-email"
                placeholder="Type Your E-mail"
                required
              />{' '}
            </td>
          </tr>
          <tr className="contact-row">
            <td className="label-cell">
              <label for="contact-message">Message: </label>{' '}
            </td>{' '}
            <td>
              <textarea
                name="contact-message"
                placeholder="Type Your Message"
                required
              />{' '}
            </td>
          </tr>

          <tr>
            <td colspan="2">
              <button style={{ margin: '1rem 2.5rem' }}>
                <i class="fas fa-paper-plane" />Submit Your Message
              </button>
            </td>
          </tr>
        </table>
      </form>{' '}
    </div>
  );
}
