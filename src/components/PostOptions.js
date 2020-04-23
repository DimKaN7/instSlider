import React from 'react';

import '../css/PostOptions.css';

export default function PostOptions(props) {
    let {likes, postDate} = props;

    return(
        <div className='postOptContainer'>
            <div className='postIcons'>
                <span><a className='iconLike'></a></span>
                <span><a className='iconComment'></a></span>
                <span><a className='iconShare'></a></span>
                <span><a className='iconBookmark'></a></span>
            </div>
            <div className='postLikes'>{likes} отметок "Нравится"</div>
            <div className='postDate'>{postDate}</div>
        </div>
    );
}