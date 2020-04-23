import React, {useState, useEffect} from 'react';
import PostHeader from './PostHeader';

import '../css/PostInfo.css';
import PostDescription from './PostDescription';
import PostOptions from './PostOptions';
import PostComment from './PostComment';

export default function PostInfo(props) {
    let {user, postFeature} = props;

    return(
        <div className='postInfoCont'>
            <PostHeader user={user}></PostHeader>
            <PostDescription 
                user={user}
                description={postFeature.description}>
            </PostDescription>
            <PostOptions 
                likes={postFeature.likes} 
                postDate={postFeature.postDate}>
            </PostOptions>
            <PostComment></PostComment>
            {/* <Description></Description>
            <Options></Options>
            <Comment></Comment> */}
        </div>
    );
}