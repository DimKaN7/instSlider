import React, {useState, useEffect} from 'react';
import Slider from './Slider';

import '../css/Post.css';
import Arrow from './Arrow';

export default function Post(props) {
    const context = require.context('../images/', false, /\.(jpg)$/);
    const images = context.keys().map(context);

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