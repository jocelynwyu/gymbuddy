// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
// import { Button } from './Button';
// import './Navbar.css';


// function Navbar() {
//     const [click, setClick] = useState(false);
//     const [button, setButton] = useState(true);
//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false);

//     const showButton = () => {
//         if(window.innerWidth <= 960) {
//             setButton(false);
//         } else{
//             setButton(true);
//         }
//     };

//     useEffect(() => {
//         showButton()
//     }, [])

//     window.addEventListener('resize', showButton);

//     return (
//     <>
//       <nav className = 'navbar'>
//         <div className='navbar-container'>
//             <Link to='Features' className='navbar-logo' onClick = {closeMobileMenu}>
//                 gymbuddy        
//             </Link>
//             <div className ='menu-icon' onClick = {handleClick}>
//                 <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//             </div>
//             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//             <li className="nav-item">
//             <ScrollLink to="Features" smooth={true} duration={500} onClick={closeMobileMenu}>
//                 <Link to='/Features' className='nav-links' onClick={closeMobileMenu}>
//                 Features
//                     </Link>
//                 </ScrollLink>
//           </li>
//             <li className='nav-item'>
//                 <ScrollLink to="About" smooth={true} duration={500} onClick={closeMobileMenu}>
//                 <Link to='/AboutUS' className='nav-links' onClick={closeMobileMenu}>
//                 About Us
//                     </Link>
//                 </ScrollLink>
//             </li>
//             <li className='nav-item'>
//                 <ScrollLink to="Contact" smooth={true} duration={500} onClick={closeMobileMenu}>
//                 <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
//                 Contact
//                     </Link>                </ScrollLink>
//             </li>
//             </ul>
//             {/* <li className='nav-item'>
//             {button && <Button buttonStyle = 'btn--outline'>
//                 Download ✨
//                 </Button>}
//                 </li> */}
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Navbar


import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <ScrollLink to="Features" smooth={true} duration={500} onClick={closeMobileMenu}>
        <Link to='/Features' className='navbar-logo' onClick={closeMobileMenu}>
            gymbuddy
          </Link>
          </ScrollLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
            <ScrollLink to="Features" smooth={true} duration={500} onClick={closeMobileMenu}>
                <Link to='/Features' className='nav-links' onClick={closeMobileMenu}>
                Features
                    </Link>
                </ScrollLink>
          </li>
            <li className='nav-item'>
                <ScrollLink to="About" smooth={true} duration={500} onClick={closeMobileMenu}>
                <Link to='/AboutUS' className='nav-links' onClick={closeMobileMenu}>
                About Us
                    </Link>
                </ScrollLink>
            </li>
            <li className='nav-item'>
                <ScrollLink to="Contact" smooth={true} duration={500} onClick={closeMobileMenu}>
                <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                Contact
                    </Link>                </ScrollLink>
            </li>
            </ul>

            <li>
            </li>
          </ul>
          <Link
                to='/'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Download ✨
              </Link>
          {button && <Button buttonStyle='btn--outline'>Download ✨</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;