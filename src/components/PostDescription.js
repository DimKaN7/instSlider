import React from 'react';
import DateTools from '../classes/DateTools';

import '../css/PostDescription.css';

export default function PostDescription(props) {
    let {user, description, postDate} = props;
    let dateTools = new DateTools(postDate);

    function getWidth(text) {
        let el = document.createElement('span');
        el.style.fontSize = '14px';
        el.style.fontWeight = 'bold';
        el.style.fontFamily = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`;
        el.innerHTML = text;
        document.body.appendChild(el);
        let result = el.offsetWidth;
        document.body.removeChild(el);
        return result;
    }

    const avatarStyle = {
        backgroundImage: `url('${user.avatar}')`,
        marginRight: '18px',
    };

    const descriptionStyle = {
        textIndent: `${getWidth(user.userName) + 4}px`,
    };

    return(
        <div className='postDescContainer'>
            <div className='postDescContent'>
                <a className='avatar'
                    style={avatarStyle}>
                </a>
                <div className='description'>
                    <a>{user.userName}</a>
                    <div style={descriptionStyle}>
                        {description}
                    </div>
                    <div className='postDate'>{`${dateTools.getDate(true)}`}</div>
                </div>
            </div>
        </div>
    );
}