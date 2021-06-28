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
      <form>
        {' '}
        <table className="contact-table">
          <tr className="contact-row">
            <td>
              <label for="exampleInputEmail1">Name: </label>{' '}
            </td>{' '}
            <td>
              <input />{' '}
            </td>
          </tr>
          <tr className="contact-row">
            <td>
              <label for="exampleInputEmail1">E-mail: </label>
            </td>
            <td>
              <input />{' '}
            </td>
          </tr>
          <tr className="contact-row">
            <td style={{ display: 'flex' }}>
              <label for="exampleInputEmail1">Message: </label>{' '}
            </td>{' '}
            <td>
              <textarea />{' '}
            </td>
          </tr>
          <button />{' '}
        </table>
      </form>{' '}
    </div>
  );
}
