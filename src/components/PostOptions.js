import React, {useState} from 'react';
import DateTools from '../classes/DateTools';

import { pulse } from 'react-animations';
import styled, { keyframes } from 'styled-components';

import '../css/PostOptions.css';

export default function PostOptions(props) {
    let {likes, postDate} = props;
    let [liked, setLiked] = useState(true); // так, потому что при замене setLiked на инвертированное значение он как бы не успевает что ли его поменять и liked возвращает предыдущее значение

    const contextLike = require.context('../icons/', false, /like\.(svg)$/);
    const contextLikeActive = require.context('../icons/', false, /like_active\.(svg)$/);
    const iconLike = contextLike.keys().map(contextLike);
    const iconLikeActive = contextLikeActive.keys().map(contextLikeActive);
    
    const Pulse = styled.span`animation: 0.5s ${keyframes`${pulse}`} 1s`;

    function onClick() {
        if (liked) setLiked(false);
        else setLiked(true);
        return props.onLikeClick(liked);
    }

    const likeStyle = {
        backgroundImage: `${liked ? `url('${iconLike}')` : `url('${iconLikeActive}')`}`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    let dateTools = new DateTools(postDate);
    return(
        <div className='postOptContainer'>
            <div className='postIcons'>
                {/* <Pulse><a onClick={onClick} className='iconLike'></a></Pulse> */}
                <span>
                    <a onClick={onClick} 
                       className='iconLike'
                       style={likeStyle}>
                    </a>
                </span>
                <span><a className='iconComment'></a></span>
                <span><a className='iconShare'></a></span>
                <span><a className='iconBookmark'></a></span>
            </div>
            <div className='postLikes'>{likes} отметок "Нравится"</div>
            <div className='postDate'>{dateTools.getDate()}</div>
        </div>
    );
}