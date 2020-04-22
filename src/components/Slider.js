import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Dots from './Dots';
import Arrow from './Arrow';
import ImageContainer from './ImageContainer';

import '../css/Slider.css';

export default function Slider(props) {
    let [slideIndex, setSlideIndex] = useState(1);
    let [images, ] = useState(props.images);

    function changeSlide(direction) {
        const imageContainer = document.querySelector('.imageContainer');
        const dots = document.querySelectorAll('.dot');
        // console.log(`prev: ${slideIndex}`);
        if (direction === 'right') {
            if (slideIndex < images.length) {
                imageContainer.style.transform = `translate(-${600*slideIndex}px)`;
                slideIndex++;
                setSlideIndex(slideIndex);
                dots[slideIndex - 2].classList.remove('selected');
                dots[slideIndex - 1].classList.add('selected');
            }
        }
        else {
            if (slideIndex > 1) {
                slideIndex--;
                setSlideIndex(slideIndex);
                imageContainer.style.transform = `translate(-${600*(slideIndex - 1)}px)`;
                dots[slideIndex].classList.remove('selected');
                dots[slideIndex - 1].classList.add('selected');       
            }
        }
        // console.log(`now: ${slideIndex}`);
    }

    const onArrowClick = (direction) => {
        changeSlide(direction);
    }

    const context = require.context('../icons/', false, /\.(svg)$/);
    const icon = context.keys().map(context);

    return(
        <div className='slider'>
            <Arrow onArrowClick={onArrowClick}
                direction='left'
                slideIndex={slideIndex}
                slidesNum={images.length}
                // parent='slider'
                background={icon} 
                width={30}
                height={30}/>
            <ImageContainer images={images}></ImageContainer>
            <Arrow onArrowClick={onArrowClick} 
                direction='right'
                slideIndex={slideIndex}
                slidesNum={images.length}
                // parent='slider'
                background={icon} 
                width={30}
                height={30}/>
            <Dots slidesNum={images.length} />
        </div>
    );
}