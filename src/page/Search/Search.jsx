import React from 'react';
import './Search.css';
const Search = () => {
    return (
        <div>
            <nav id="navbar">
                <div class="navbar-left">
                    <button id="navbar-btn" class="navbar-button">
                        <div id="nav-icon3">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
                <div class="navbar-right">
                </div>
            </nav>
            <div class="menu">
                <ul class="menu-items">
                    <li class="menu-item-wrapper"><i class="fas fa-asterisk"></i><a class="menu-item">Item 1</a></li>
                    <li class="menu-item-wrapper"><i class="fas fa-asterisk"></i><a class="menu-item">Item 2</a></li>
                    <li class="menu-item-wrapper"><i class="fas fa-asterisk"></i><a class="menu-item">Item 3</a></li>
                </ul>
                <div class="menu-bc"></div>
            </div>
            <header>
                <div class="header-left">
                    <div class="header-row">
                        <div class="header-row-center">
                            <h3 class="header-row-title">This is sideways</h3>
                        </div>
                        <div class="header-row-bottom">
                            <button class="button-down">
                                <i class="fas fa-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="header-right">
                    <div class="header-img-wrapper">
                        <div class="header-title-wrapper">
                            <h1>Title</h1>
                        </div>
                        <div class="header-img-overlay"></div>
                        <div class="player-button-wrapper">
                            <a href='#' class='play-but'>

                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <div class="video-modal-wrapper">
                <iframe class="video-modal" src="https://www.youtube.com/embed/_JbVCOZsN_8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <main class="scroll1">

            </main>
        </div>

    )
}

export default Search