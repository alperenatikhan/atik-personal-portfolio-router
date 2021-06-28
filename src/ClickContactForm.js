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
            <td className="label-cell">
              <label for="exampleInputEmail1">Name: </label>{' '}
            </td>{' '}
            <td>
              <input type="text" placeholder="Type Your Name" required />{' '}
            </td>
          </tr>
          <tr className="contact-row">
            <td className="label-cell">
              <label for="exampleInputEmail1">E-mail: </label>
            </td>
            <td>
              <input placeholder="Type Your E-mail" required />{' '}
            </td>
          </tr>
          <tr className="contact-row">
            <td className="label-cell">
              <label for="exampleInputEmail1">Message: </label>{' '}
            </td>{' '}
            <td>
              <textarea placeholder="Type Your Message" required />{' '}
            </td>
           
            </tr>

            <tr>
              <td colspan="2" ><button style={{margin:"1rem 30%"}}>Send Message</button></td>
            </tr>
    
        
        </table>
      </form>{' '}
    </div>
  );
}
