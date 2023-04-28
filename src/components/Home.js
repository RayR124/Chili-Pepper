import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <img src="/wagon.png" alt="wagon" style={{ opacity: .9, marginTop:50 }} />
            <h1 className="title">Welcome to the Chili Pepper Cook Shack</h1>
            <h2 className="subtitle">A Mexican-American dining experience available to all who visit the <a href='https://butleramusements.com/' target=' _blank'>Butler Amusements</a> Fair.</h2>
            <h3 className="time">Come visit us at your local fairgrounds.</h3>
            <h3 className="time">Check out our schedule to see when we're near you!</h3>

            <a href="https://www.facebook.com/ChiliPepperCookshack/" target="_blank" rel="noreferrer" className="facebook-link">
                <img src="/Facebook-logo.png" alt="Facebook logo" style={{ height: '50px' }} />
            </a>

            <div className="terms-of-service">
                <a href="https://www.termsfeed.com/live/f4fe5b82-a8be-4c37-a9c8-41055b4d120b" target=" _blank">Terms of Service</a> | <a href="https://www.freeprivacypolicy.com/live/d377a83b-0eeb-402a-9f46-6cc237ea45ee" target=" _blank">Privacy Policy</a>
            </div>
        </div>
    );
}

export default Home;