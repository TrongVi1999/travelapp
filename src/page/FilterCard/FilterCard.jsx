import React from 'react'
import './FilterCard.css';

const FilterCard = () => {
    return (
        <div>
            <div id="background">
                <div id="circle">
                    <div id="circle-glow"></div>
                    <div id="circle-inner"></div>
                </div>
            </div>

            <div id="app">
                <div id="nav">
                    <div id="nav-items">
                        <div class="nav-item">
                            <i class="fa-solid fa-house"></i>
                        </div>
                        <div class="nav-item">
                            <i class="fa-solid fa-comment"></i>
                        </div>
                        <div class="nav-item">
                            <i class="fa-solid fa-bolt"></i>
                        </div>
                        <div class="nav-item">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div class="nav-item">
                            <i class="fa-solid fa-image"></i>
                        </div>
                        <div class="nav-item">
                            <i class="fa-solid fa-chart-simple"></i>
                        </div>
                        <div class="nav-item">
                            <i class="fa-solid fa-dice"></i>
                        </div>
                    </div>
                </div>

                <div id="profiles">
                    <div class="profile">
                        <div class="profile-content">
                            <div class="profile-pic">
                                <img class="profile-pic-image" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500" />
                            </div>
                            <h3 class="profile-name">ANDY</h3>
                        </div>
                    </div>
                    <div class="profile">
                        <div class="profile-content">
                            <div class="profile-pic">
                                <img class="profile-pic-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500" />
                            </div>
                            <h3 class="profile-name">OLIVIA</h3>
                        </div>
                    </div>
                    <div class="profile">
                        <div class="profile-content">
                            <div class="profile-pic">
                                <img class="profile-pic-image" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500" />
                            </div>
                            <h3 class="profile-name">NOAH</h3>
                        </div>
                    </div>
                    <div class="profile">
                        <div class="profile-content">
                            <div class="profile-pic">
                                <img class="profile-pic-image" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500" />
                            </div>
                            <h3 class="profile-name">EMMA</h3>
                        </div>
                    </div>
                    <div class="profile">
                        <div class="profile-content">
                            <div class="profile-pic">
                                <img class="profile-pic-image" src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500" />
                            </div>
                            <h3 class="profile-name">ELIJAH</h3>
                        </div>
                    </div>
                    <div class="profile">
                        <div class="profile-content">
                            <div class="profile-pic">
                                <img class="profile-pic-image" src="https://images.unsplash.com/photo-1534083220759-4c3c00112ea0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaW5lc2UlMjB3b21lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500" />
                            </div>
                            <h3 class="profile-name">AVA</h3>
                        </div>
                    </div>
                    <div class="profile">
                        <div class="profile-content">
                            <div class="profile-pic">
                                <img class="profile-pic-image" src="https://images.unsplash.com/photo-1512663150964-d8f43c899f76?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ3fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500" />
                            </div>
                            <h3 class="profile-name">HENRY</h3>
                        </div>
                    </div>
                </div>
            </div>

            <a id="youtube-link" class="link" href="" target="_blank">
                <i class="fa-brands fa-youtube"></i>
                <span>Social</span>
            </a>
        </div>
    )
}

export default FilterCard