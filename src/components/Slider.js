import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Dots from './Dots';
import Arrow from './Arrow';
import ImageContainer from './ImageContainer';

import '../css/Slider.css';

export default function Slider(props) {
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

    const onArrowClick = (direction) => {
        changeSlide(direction);
    }

    return(
        <div className='slider'>
            <Arrow onArrowClick={onArrowClick} 
                direction='left'
                background='../icons/arrowSlider.svg' />
            <ImageContainer images={images}></ImageContainer>
            <Arrow onArrowClick={onArrowClick} 
                direction='right'
                background='../icons/arrowSlider.svg' />
            <Dots slidesNum={images.length} />
        </div>
    );
}