import React from 'react';
import '../App.css';
import { Button } from '../components/Button';
import './About.css';

function About() {
  return (
    <section id="About">
    <div className='about-container'>
        <div className='about'>
        <p> <br/><br/><br/><br/><br/>About Us</p>
      </div>
      <div className='made'>
        <p>Made for students, by students 🧑🏻‍💻</p>
      </div>
      <div className='about-text'>
        <p>It all started when Matthew couldn’t make gym day, and Eugene didn’t want to go alone. They realized the importance of having a buddy to work out with consistently. Since then, they have embarked on a mission to help every student on their fitness journey.</p>
      </div>

      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
        >
          Name *
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
          onClick={console.log('hey')}
        >
          Email *
        </Button>
      </div> */}
    </div>
    </section>
  );
}

export default About;