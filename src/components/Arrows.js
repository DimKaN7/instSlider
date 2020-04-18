import React from 'react';
import '../css/Arrows.css';

function Arrows(props) {
    return (
        <div className='arrowFolder'>
            <div className='arrowBlock'>
                <a className='arrowLeft' onClick={() => props.onArrowClick('left')}></a>
            </div>
            <div className='arrowBlock'>
                <a className='arrowRight' onClick={() => props.onArrowClick('right')}></a>
            </div>
        </div>
    );
}

export default Arrows;