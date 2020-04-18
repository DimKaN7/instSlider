import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import '../css/Dots.css';

function Dots(props) {
    const [dotsNum, ] = useState(props.slidesNum);
    return (
        <div className='dotsContainer'>
            {function()  {
                const dots = new Array(dotsNum);
                for (let i = 0; i < dotsNum; i++) {
                    dots.push(
                    i == 0 ? <div className='dot selected'></div> : <div className='dot'></div>
                    )
                }
                return dots;
            }() }
        </div>
    );
} 

export default Dots;