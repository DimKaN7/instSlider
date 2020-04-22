import React, {useState, useEffect} from 'react';
import Slider from './Slider';
import Arrow from './Arrow';
import PostInfo from './PostInfo';

import '../css/Post.css';

export default function Post(props) {
    const context = require.context('../images/', false, /\.(jpg)$/);
    let [images, setImages] = useState(context.keys().map(context));

    return (
        <div className='post'>
            <Slider images={images}></Slider>
            <PostInfo></PostInfo>
            {/* <Arrow></Arrow> */}
        </div>
    );
}