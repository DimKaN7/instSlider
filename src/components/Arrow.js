import React, {useState} from 'react';
import '../css/Arrow.css';

export default function Arrow(props) {

    let {direction, slideIndex, slidesNum, background, width, height} = props;

    // решить проблему с несколькими классами
    const arrowStyleSlider = {
        width: `${width}px`,
        height: `${height}px`,
        cursor: `${direction === 'left' ? (slideIndex === 1 ? 'default' : 'pointer') : (slideIndex === slidesNum ? 'default' : 'pointer')}`,
        opacity: `${direction === 'left' ? (slideIndex === 1 ? 0 : 0.7) : (slideIndex === slidesNum ? 0 : 0.7)}`,
        backgroundImage: `url('${background}')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'opacity 0s linear',
        transitionDelay: '0.35s',
    };

    return (
        <div className={`arrowFolder ${direction}`}>
            <a className='arrow' 
                onClick={() => props.onArrowClick(direction)}
                style={arrowStyleSlider}>
            </a>
        </div>
    );
}