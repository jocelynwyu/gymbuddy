import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          {<Routes>
          {/* <Route path='/Features' exact element={ <Features />}>
          </Route> */}
          {/* <Route path='/AboutUs' exact element={ <AboutUs />}>
          </Route> */}
        </Routes>
        /* <Footer/> */}
        <MainPage/>
      </Router>
    </>
  );
}

export default App;
