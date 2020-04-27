import React, {useState, useEffect} from 'react';
import Slider from './Slider';
import Arrow from './Arrow';
import PostInfo from './PostInfo';

import '../css/Post.css';

export default function Post(props) {
    let [images, ] = useState(props.images);
    let [postFeature, setPostFeature] = useState(props.postFeature);
    let [likes, setLikes] = useState(postFeature.likes);
    let {user} = props;

    function onLikeClick(liked) {
        if (liked) {
            likes++;
            setLikes(likes);
            postFeature.likes = likes;
            setPostFeature(postFeature);
        }
        else {
            likes--;
            setLikes(likes);
            postFeature.likes = likes;
            setPostFeature(postFeature);
        }
        console.log(postFeature);
    }

    return (
        <div className='post'>
            <Slider images={images}></Slider>
            <PostInfo user={user} postFeature={postFeature} likes={likes} onLikeClick={onLikeClick}></PostInfo>
            {/* <Arrow></Arrow> */}
        </div>
    );
}