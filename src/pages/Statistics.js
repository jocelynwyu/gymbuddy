import React from 'react';
import '../App.css';
import { Button } from '../components/Button';
import './Statistics.css';
import School from './School';
import CardItem from './CardItem';
import AnimatedNumbers from 'react-animated-numbers';

function Statistics() {
  const initialNumber = 1382;

  return (
    <section id="Statistics">
      <div className='statistics-container'>
        <div className='statistics'>
          <div className="number-container">
            <AnimatedNumbers
              className="statistics-number"
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.3,
              })}
              animateToNumber={initialNumber}
              fontStyle={{
                fontSize: 40,
                color: "black",
              }}
            />
            <span className="plus-sign">+</span>
          </div>
        </div>
        <div className='text'>
          <p> <br/>matches made at</p>
        </div>
      </div>
      <div className='school-rows'>
        <School
          src1={require('../images/Davis.png')}
          src2={require('../images/berkeley.png')}
          src3={require('../images/stanford.png')}
        />
      </div>
    </section>
  );
}

export default Statistics;
