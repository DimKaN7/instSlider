import React, {useState, useEffect} from 'react';
import Header from './Header';

import '../css/PostInfo.css';

export default function PostInfo(props) {
    let {user, description} = props;

    return(
        <div className='postInfoCont'>
            <Header></Header>
            {/* <Description></Description>
            <Options></Options>
            <Comment></Comment> */}
        </div>
    );
}