import React, {useState, useEffect} from 'react';
import '../css/ImageContainer.css';

export default function ImageContainer(props) {
    const [images, ] = useState(props.images);

    return(
        <div className='imageContainer' >
            {images.map(image => 
                <img className='sliderItem' src={image} key={images.indexOf(image)} />
            )}
        </div>
    );
}