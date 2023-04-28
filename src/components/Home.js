import React from 'react';

function Home() {
    return (
        <div className="home-container">
            <img src="/wagon.png" alt="wagon" style={{ opacity:.9 }}/>
            <h1 className="title">Welcome to the Chili Pepper Cook Shack</h1>
            <h2 className="subtitle">A Mexican-American dining experience available to all who visit the <a href='https://butleramusements.com/' target=' _blank'>Butler Amusements</a> Fair.</h2>
            <h3 className="time">Breakfast served every day from 8:00am to 11:00am</h3>
            <h3 className="time">Lunch and Dinner Menu Items available from 11:00am to Fair closing, or while supplies last.</h3>

            <a href="https://www.facebook.com/ChiliPepperCookshack/" target="_blank" rel="noreferrer" className="facebook-link">
                <img src="/Facebook-logo.png" alt="Facebook logo" style={{ height: '50px' }} />
            </a>

        </div>
    );
}

export default Home;