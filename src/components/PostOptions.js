import React from 'react';
import DateTools from '../classes/DateTools';

import '../css/PostOptions.css';

export default function PostOptions(props) {
    let {likes, postDate} = props;

    let dateTools = new DateTools(postDate);
    return(
        <div className='postOptContainer'>
            <div className='postIcons'>
                <span><a className='iconLike'></a></span>
                <span><a className='iconComment'></a></span>
                <span><a className='iconShare'></a></span>
                <span><a className='iconBookmark'></a></span>
            </div>
            <div className='postLikes'>{likes} отметок "Нравится"</div>
            <div className='postDate'>{dateTools.getDate()}</div>
        </div>
    );
}