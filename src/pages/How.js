import React from 'react';
import './How.css';
import CardItem from './CardItem';
import CardItem2 from './CardItem2';
import CardItem3 from './CardItem3';

function How() {
  return (
    <div className='cards'>
      <div className='title'>
        <p> <br/><br/><br/><br/>How It Works</p>
      </div>
      <div className='find'>
        <p>Find people who motivate you 🏋️</p>
      </div>

      {/* <div className='index-container'> <div/> */}
            <ul className='cards__items'>
            <div className='rows'>
            <CardItem
                src1={require('../images/gymbuddy1.png')}
                step= "1. Set your gym style"
                indextext="matches are made based on your schedule, goals, and interests"
                src2={require('../images/Vector 11.png')}
            />
          </div>
          <div className='rows'>
            <CardItem2
              src={require('../images/gymbuddy2.png')}
              step= "2. Get matched"
            //   au= "FEM!PERCY AU!"
            indextext="through friend requests or our Quick Pair auto-matching system"
            src2={require('../images/Vector 10.png')}
            />
          </div>
          <div className='rows'>
            <CardItem3
              src1={require('../images/gymbuddy1.png')}
              step= "3. Gym together!"
            //   au= "FEM!PERCY AU!"
            indextext="chat, send invites, and meet up for a pumped session"
            />
            <br/>
          </div>
          </ul>
    </div>

    
    
  );
}

export default How;