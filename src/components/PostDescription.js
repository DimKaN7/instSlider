import React from 'react';

import '../css/PostDescription.css';

export default function PostDescription(props) {
    let {user, description} = props;

    const avatarStyle = {
        backgroundImage: `url('${user.avatar}')`,
        marginRight: '18px',
    };

    return(
        <div className='postDescContainer'>
            <div className='postDescContent'>
                <a className='avatar'
                    style={avatarStyle}>
                </a>
                <div className='description'
                    //onWheel={onScroll}
                    >
                    {description}
                </div>
            </div>
        </div>
    );
}