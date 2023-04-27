import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './components/Home.js';
import Menu from './components/Menu';
import Schedule from './components/Schedule';
import Reviews from './components/Reviews';
import ContactUs from './components/ContactUs';
import './App.css';
import './background.css';

function App() {
  const [homeVisible, setHomeVisible] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);
  const [scheduleVisible, setScheduleVisible] = useState(false);
  const [reviewsVisible, setReviewsVisible] = useState(false);
  const [contactUsVisible, setContactUsVisible] = useState(false);

  function toggleHome() {
    setHomeVisible(true);
    setMenuVisible(false);
    setScheduleVisible(false);
    setReviewsVisible(false);
    setContactUsVisible(false);
  }

  function toggleMenu() {
    setHomeVisible(false);
    setMenuVisible(true);
    setScheduleVisible(false);
    setReviewsVisible(false);
    setContactUsVisible(false);
  }

  function toggleSchedule() {
    setHomeVisible(false);
    setMenuVisible(false);
    setScheduleVisible(true);
    setReviewsVisible(false);
    setContactUsVisible(false);
  }

  function toggleReviews() {
    setHomeVisible(false);
    setMenuVisible(false);
    setScheduleVisible(false);
    setReviewsVisible(true);
    setContactUsVisible(false);
  }

  function toggleContactUs() {
    setHomeVisible(false);
    setMenuVisible(false);
    setScheduleVisible(false);
    setReviewsVisible(false);
    setContactUsVisible(true);
  }

  return (
    <div className="background">
      <div className="vegetable-container">
        <img id="vegetable" className="vegetable" src="./vegetable.png" alt="Vegetable" />
        <img id="vegetable2" className="vegetable2" src="./vegetable2.png" alt="Vegetable" />
        <img id="vegetable3" className="vegetable3" src="./vegetable3.png" alt="Vegetable" />
        <img id="vegetable4" className="vegetable4" src="./vegetable4.png" alt="Vegetable" />
        <img id="vegetable5" className="vegetable5" src="./vegetable5.png" alt="Vegetable" />
      </div>
      <div className="directory">
        <Navbar toggleHome={toggleHome} toggleMenu={toggleMenu} toggleSchedule={toggleSchedule} toggleReviews={toggleReviews} toggleContactUs={toggleContactUs} />
        <div className={`home ${homeVisible ? "" : "hidden"}`}>
          <Home />
        </div>
        <div className={`menu ${menuVisible ? "" : "hidden"}`}>
          <Menu />
        </div>
        <div className={`schedule ${scheduleVisible ? "" : "hidden"}`}>
          <Schedule />
        </div>
        <div className={`reviews ${reviewsVisible ? "" : "hidden"}`}>
          <Reviews />
        </div>
        <div className={`contactUs ${contactUsVisible ? "" : "hidden"}`}>
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default App;