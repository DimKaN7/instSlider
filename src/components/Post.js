import React, {useState, useEffect} from 'react';
import Slider from './Slider';
import Arrow from './Arrow';
import PostInfo from './PostInfo';
import User from '../classes/User';
import PostFeature from '../classes/PostFeature';
import getImages from '../classes/ImageGetter';

import '../css/Post.css';

export default function Post(props) {
    let context = require.context('../sliderImages/', false, /\.(jpg)$/);
    let [images, setImages] = useState(getImages(context));

    context = require.context('../images/', false, /\.(jpg)$/);
    let user = new User(getImages(context), 'dimka_n7');
    let postFeature = new PostFeature('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 25, '23-04-2020');

    return (
        <div className='post'>
            <Slider images={images}></Slider>
            <PostInfo user={user} postFeature={postFeature}></PostInfo>
            {/* <Arrow></Arrow> */}
        </div>
    );
}