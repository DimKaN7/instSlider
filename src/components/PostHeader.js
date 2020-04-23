import React from 'react';

import '../css/PostHeader.css';

export default function Header(props) {
    let {user} = props;

    const avatarStyle = {
        backgroundImage: `url('${user.avatar}')`
    }

    return(
        <div className='headerContainer'>
            <a className='avatar'
                style={avatarStyle}>
            </a>
            <div className='headerContent'>
                <div className='contacts'>
                    <div className='userName'>
                        <a>{user.userName}</a>
                    </div>
                    <div className='follow'>
                        <span>•</span>
                        <a>Подписаться</a>
                    </div>
                </div>
                <div className='options'>
                    <span>•</span>
                    <span>•</span>
                    <span>•</span>
                </div>
            </div>
        </div>
    );
}