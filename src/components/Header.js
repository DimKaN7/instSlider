import React, {useState, useEffect} from 'react';

import '../css/Header.css';

export default function Header(props) {
    return(
        <div className='headerContainer'>
            <a className='avatar'></a>
            <div className='headerContent'>
                <div className='contacts'>
                    <div className='userName'>
                        <a>dimka_n7</a>
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