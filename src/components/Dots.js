import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import '../css/Dots.css';

export default function Dots(props) {
    const [dotsNum, ] = useState(props.slidesNum);
    return (
        <div className='dotsContainer'>
            {function()  {
                const dots = new Array(dotsNum);
                for (let i = 0; i < dotsNum; i++) {
                    dots.push(
                        i === 0 ? <div key={i} className='dot selected'></div> : <div key={i} className='dot'></div>
                    )
                }
                return dots;
            }() }
        </div>
    );
} 