import React, { useState } from 'react';
import './DashBoard.css';


const DashBoard = () => {

    const [act, setact] = useState('');
    const onclick = () => {
        { act == '' ? setact('active') : setact('') }
    }
    return (
        <div>

            <section className={`showcase ${act}`}>
                <header>
                    <h2 className="logo">Travel</h2>
                    <div className={`toggle ${act}`} onClick={() => onclick()}></div>
                </header>
                <div className="overlay"></div>
                <div className={`text ${act}`}>
                    <h2>Never Stop To </h2>
                    <h3>Exploring The World</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                    <a href="#">Explore</a>
                </div>

            </section>
            <div className="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="/Collection">News</a></li>
                    <li><a href="/Destination">Destination</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default DashBoard