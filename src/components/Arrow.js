import React, {useState} from 'react';
import '../css/Arrow.css';

export default function Arrow(props) {
    let [direction, ] = useState(props.direction);
    let [background, ] = useState(props.background);

    // не ставит бэкгроунд почему то
    const arrowStyle = {
        width: '30px',
        height: '30px',
        cursor: 'pointer',
        opacity: '0.7',
        backgroundImage: `url(${background})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className={`arrowFolder ${direction}`}>
            <a className={`arrow ${direction}`} 
                onClick={() => props.onArrowClick(direction)}
                style={arrowStyle}>
            </a>
        </div>
    );
}