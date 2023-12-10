import React from 'react';
import '../App.css';
import { Button } from '../components/Button';
import './Features.css';

function Features() {
  return (
    <section id="Features">
    <div className='feature-container'>
      {/* <image src='images/ocean-image.jpg'/> */}
      <div className='intro'>
        <p> <br/><br/><br/><br/><br/><br/><br/>features</p>
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

export default Features;