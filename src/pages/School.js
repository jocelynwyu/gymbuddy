import React from 'react';
import { Link } from 'react-router-dom';

function School(props) {
  return (
    <>
        <div className='school-rows'>
                <img className='each'
                src={props.src1}
                />
                <img className='each'
                src={props.src2}
                />
                <img className='each'
                src={props.src3}
                />
        </div>
    </>
  );
}

export default School;