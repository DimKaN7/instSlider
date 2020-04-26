import React, {useState, useEffect} from 'react';
import Slider from './Slider';
import Arrow from './Arrow';
import PostInfo from './PostInfo';
import getImages from '../classes/ImageGetter';

import '../css/Post.css';

export default function Post(props) {
    let context = require.context('../sliderImages/', false, /\.(jpg)$/);
    let [images, ] = useState(getImages(context));
    let {user, postFeature} = props;

    return (
        <div className='post'>
            <Slider images={images}></Slider>
            <PostInfo user={user} postFeature={postFeature}></PostInfo>
            {/* <Arrow></Arrow> */}
        </div>
    );
}