import React from 'react';
import ButtonFooter from './ButtonFooter.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary_footer', 'btn--outline_footer', 'btn--test_footer'];

const SIZES = ['btn--medium_footer', 'btn--large_footer'];

export const Button2 = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/MainPage' className='btn-mobile_footer'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};