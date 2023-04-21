/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Navbar(props) {
    return (
        <nav className="links">
            <h1 style={{ color: "blue", fontSize: 30, marginBottom: 10, textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>
                Directory:
            </h1>
            <ul>
                <li className="links">
                    <a href="#" onClick={props.toggleHome} style={{ borderBottom: "1px solid #f2f2f2" }}>Home</a>
                </li>

                <li className="links">
                    <a href="#" onClick={props.toggleMenu} style={{ borderBottom: "1px solid #f2f2f2" }}>Menu</a>
                </li>

                <li className="links">
                    <a href="#" onClick={props.toggleSchedule} style={{ borderBottom: "1px solid #f2f2f2" }}>Schedule</a>
                </li>
                
                <li className="links">
                    <a href="#" onClick={props.toggleReviews} style={{ borderBottom: "1px solid #f2f2f2" }}>Reviews</a>
                </li>
                
                <li className="links">
                    <a href="#" onClick={props.toggleContactUs} style={{ borderBottom: "1px solid #f2f2f2" }}>Contact Us</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;