import React, {useState} from 'react'

import '../css/PostComment.css';

export default function PostComment(props) {
    let [disabled, setDisabled] = useState('disabled');
    let [comment, setComment] = useState('');

    function onChange(e) {
        setComment(e.target.value);
        if (e.target.value.trim().length === 0) setDisabled('disabled');
        else setDisabled('active');
    }

    return(
        <div className='postCommentContainer'>
            <input 
                placeholder='Добавьте комментарий...'
                onChange={onChange}
                value={comment}>
            </input>
            <button className={disabled}>Опубликовать</button>
        </div>
    );
}