import React, {useState, useEffect} from 'react';
import Slider from './Slider';

import '../css/Post.css';
import Arrow from './Arrow';

export default function Post(props) {
    function importAll(r) {
        return r.keys().map(r);
    }
    
    const images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));

    return (
        <div className='post'>
            <Slider images={images}></Slider>
            <div className='postDesc'>
                Описание поста
            </div>
            {/* <Arrow></Arrow> */}
        </div>
    );
}