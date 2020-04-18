import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Dots from './Dots';
import Arrows from './Arrows';

import '../css/Slider.css';

function Slider(props) {
    let slideIndex = 1;
    let [images, ] = useState(props.images);

    function changeSlide(direction) {
        const imageContainer = document.querySelector('.imageContainer');
        const dots = document.querySelectorAll('.dot');
        if (direction === 'right') {
            if (slideIndex < images.length) {
                imageContainer.style.transform = `translate(-${600*slideIndex}px)`;
                slideIndex++;
                dots[slideIndex - 2].classList.remove('selected');
                dots[slideIndex - 1].classList.add('selected');
            }
        }
        else {
            if (slideIndex > 1) {
                slideIndex--;
                imageContainer.style.transform = `translate(-${600*(slideIndex - 1)}px)`;
                dots[slideIndex].classList.remove('selected');
                dots[slideIndex - 1].classList.add('selected');
            }
        }

    }

    const onArrowClick = (arrow) => {
        changeSlide(arrow);
    }

    return(
        <div className='slider'>
            <div className='imageContainer'>
                {images.map(image => 
                    <img className='sliderItem' src={image} key={images.indexOf(image)}/>
                )}
            </div>
            <Arrows onArrowClick={onArrowClick}/>
            <Dots slidesNum={images.length}/>
        </div>


        // <div class="slider" id="photo">
        // <div class="slider-title">Фото с наших поездок
        // </div>
        // <div class="wrap">

        //     <div class="slider-item fade">
        //         <img src="img/slider_1.jpg" alt="slider">
        //     </div>
        //     <div class="slider-item fade">
        //         <img src="img/slider_2.jpg" alt="slider">
        //     </div>
        //     <div class="slider-item fade">
        //         <img src="img/slider_3.jpg" alt="slider">
        //     </div>
        //     <div class="slider-item fade">
        //         <img src="img/slider_4.jpg" alt="slider">
        //     </div>

        //     <div class="prev"><div class="arrow-left"></div></div>
        //     <div class="next"><div class="arrow-right"></div></div>
        // </div>
        // <div class="slider-dots">
        //     <div class="dot dot-active"></div>
        //     <div class="dot"></div>
        //     <div class="dot"></div>
        //     <div class="dot"></div>
        // </div>
        // </div>
    );
}

export default Slider;