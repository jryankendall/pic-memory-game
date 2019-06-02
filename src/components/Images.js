import React from 'react';
import Image from "./Image";

const imageArray = [];

for (let i = 0; i < 16; i++) {
    imageArray.push(Image);
}

function Images(props) {
    
    return (
        <>
            {imageArray.map((value, index) => {
                return (<div className="image-div" key={index}><Image className={props.className} /></div>);
            })}
        </>
    )
}

export default Images;