import React, { useState } from 'react'
import './Destination.css';


const items = document.querySelectorAll('.slider-item');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
const navItem = document.querySelector('a.toggle-nav');
let count = 0;

const Slider = () => {
    console.log(items);
    function showNextItem() {
        items[count].classList.remove('active');
        if (count < itemCount - 1) {
            count++;
        } else {
            count = 0;
        }

        items[count].classList.add('active');
        console.log(count);
    }

    function showPreviousItem() {
        items[count].classList.remove('active');

        if (count > 0) {
            count--;
        } else {
            count = itemCount - 1;
        }

        items[count].classList.add('active');
        // Check if working...
        console.log(count);
    }



    function keyPress(e) {
        e = e || window.event;

        if (e.keyCode == '37') {
            showPreviousItem();
        } else if (e.keyCode == '39') {
            showNextItem();
        }
    }

    const [act, setact] = useState('');
    const next = () => {
        showNextItem();
        console.log("right");
    }
    const previous = () => {
        showNextItem();
        console.log("left");
    }
    return (
        <div>
            <nav class="flex-nav">
                <div class="container">
                    <div class="grid">
                        <div class="column-xs-9 column-md-8">
                            <p id="logo">Viet Nam<span id="highlight">.</span></p>
                        </div>
                        <div class="column-xs-2 column-md-12">
                            <a href="#" class="toggle-nav">Menu <i class="ion-navicon-round"></i></a>
                            <ul>
                                <li><a href="#">About Viet Nam</a></li>
                                <li><a href="#">Discover </a></li>
                                <li><a href="#">Plan Your Trip</a></li>
                                <li><a href="#">Wearther</a></li>
                                <li><a href="#">Geogreophy</a></li>
                                <li><a href="#">Social</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <main class="intro-section">
                <div class="container">
                    <div class="grid">
                        <div class="column-xs-12">
                            <ul class="slider">
                                <li class="slider-item active">
                                    <div class="grid vertical">
                                        <div class="column-xs-12 column-md-2 hide-mobile">
                                            <div class="intro">
                                                <a href="#">
                                                    <h1 class="title"><span class="underline">Explore North</span></h1>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="column-xs-12 column-md-10">
                                            <div class="image-holder">
                                                <img src="https://source.unsplash.com/cddaZDt6uRw"></img>
                                            </div>
                                            <div class="grid">
                                                <div class="column-xs-12 column-md-9">
                                                    <div class="intro show-mobile">
                                                        <a href="#">
                                                            <h1 class="title"><span class="underline">Explore North</span></h1>
                                                        </a>
                                                    </div>
                                                    <p class="description">The culture of the North, Central and South regions contributes to the richness and diversity of Vietnamese culinary culture. Northerners have a taste for frugal, light, slightly sour dishes. That has created the characteristics of Northern cuisine that is both delicate, rich, and simple. Typical dishes of the North are Hanoi noodle soup, bun cha, vermicelli, fried vermicelli with crab, shrimp cakes in West Lake, and frozen meat.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="slider-item">
                                    <div class="grid vertical">
                                        <div class="column-xs-12 column-md-2 hide-mobile">
                                            <div class="intro">
                                                <a href="#">
                                                    <h1 class="title"><span class="underline">Explore Central</span></h1>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="column-xs-12 column-md-10">
                                            <div class="image-holder">
                                                <img src="https://source.unsplash.com/Pz3EHf-KJfc"></img>
                                            </div>
                                            <div class="grid">
                                                <div class="column-xs-12 column-md-9">
                                                    <div class="intro show-mobile">
                                                        <a href="#">
                                                            <h1 class="title"><span class="underline">Explore Central</span></h1>
                                                        </a>
                                                    </div>
                                                    <p class="description">The culture of the 3 regions of the North, Central and South has a distinct difference through cuisine. Central dishes are often spicy, salty and the color of the dish is rich and vibrant, favoring red and dark brown.  The typical dishes of the Central region include Hue beef noodle soup, banh xeo, banh dam, cha ram, fish vermicelli, and boiled meat rice paper.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="slider-item">
                                    <div class="grid vertical">
                                        <div class="column-xs-12 column-md-2 hide-mobile">
                                            <div class="intro">
                                                <a href="#">
                                                    <h1 class="title"><span class="underline">Explore South</span></h1>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="column-xs-12 column-md-10">
                                            <div class="image-holder">
                                                <img src="https://source.unsplash.com/peYW3VwICpE"></img>
                                            </div>
                                            <div class="grid">
                                                <div class="column-xs-12 column-md-9">
                                                    <div class="intro show-mobile">
                                                        <a href="#">
                                                            <h1 class="title"><span class="underline">Explore South</span></h1>
                                                        </a>
                                                    </div>
                                                    <p class="description">The culture of the 3 regions of the North, Central and South has a diversity and richness in cuisine. Southern dishes are often seasoned with sweetness and fat, using a lot of sugar and coconut milk. Typical dishes of the South are grilled snakehead fish, spring rolls, vermicelli, Nam Vang noodle soup, beef cake.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="slider-item">
                                    <div class="grid vertical">
                                        <div class="column-xs-12 column-md-2 hide-mobile">
                                            <div class="intro">
                                                <a href="#">
                                                    <h1 class="title"><span class="underline">Explore Island</span></h1>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="column-xs-12 column-md-10">
                                            <div class="image-holder">
                                                <img src="https://source.unsplash.com/VmeOZQjTVGE"></img>
                                            </div>
                                            <div class="grid">
                                                <div class="column-xs-12 column-md-9">
                                                    <div class="intro show-mobile">
                                                        <a href="#">
                                                            <h1 class="title"><span class="underline">Explore Island</span></h1>
                                                        </a>
                                                    </div>
                                                    <p class="description">Possessing a coastline of thousands of kilometers and countless islands, large and small, Vietnam's sea and island specialties are not only fresh and attractive, but each region also has special dishes, making visitors eat once and remember forever.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="grid">
                                <div class="column-xs-12">
                                    <div class="controls">
                                        <button class="previous" onClick={() => previous()}>
                                            <span class="visually-hidden">Previous</span>
                                            <span class="icon arrow-left" aria-hidden="true" ></span>
                                        </button>
                                        <button class="next" onClick={() => next()}>
                                            <span class="visually-hidden">Next</span>
                                            <span class="icon arrow-right" aria-hidden="true"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}


export default Slider