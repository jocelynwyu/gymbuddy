import React from 'react';
import './Contact.css';
import { Button2 } from './ButtonFooter';
import { Link } from 'react-router-dom';


function Contact() {
  return (
    <section id="Contact">
    <div className='contact-container'>
      <div className='title'>
        <p> <br/><br/><br/><br/>The Grind Doesn't Stop</p>
      </div>
      {/* <div className='button-container'> */}
      <div className='become'>
          <p>Become a GymBuddy today!</p>
          <div className="button-container">
            <Button2 buttonStyle='btn--outline'>Download 🔥</Button2>
          </div>
          {/* </div> */}
        </div>
      <div className='email'>
        <p>gymbuddy@support.com</p>
      </div>
      <li className="">
              <div className="social-media">
                <div className="social-icons">
                  {/* Replace these with your actual social links */}
                  <Link
                    className="social-icon-link"
                    to="/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <i className="fab  fa-instagram" />
                  </Link>
                  <Link
                    className="social-icon-link"
                    to="/"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <i className="fab  fa-facebook" />
                  </Link>
                  <Link
                    className="social-icon-link"
                    to="/"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin" />
                  </Link>
                </div>
              </div>
            </li>
    </div>

    </section>
  );
}

export default Contact;
