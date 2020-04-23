import React from 'react'

import '../css/PostComment.css';

export default function PostComment(props) {
    return(
        <div className='postCommentContainer'>
            <input placeholder='Добавьте комментарий...'></input>
            <button disabled>Опубликовать</button>
        </div>
    );
}