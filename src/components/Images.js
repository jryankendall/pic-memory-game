import React from 'react';
import Image from "./Image";
var gameImages = require.context("../../public/img/", true);
console.log(gameImages.keys());
const imageArray = [];


function importImages(input, output) {
    let keysArray = input.keys();
    for (let i = 0; i < keysArray.length; i++) {
        let trimmedPath = keysArray[i].replace("./", "");
        output.push(trimmedPath);
    }
    console.log(output);
    
}


importImages(gameImages, imageArray);

function Images(props) {
    
    return (
        <>
            {imageArray.map((value, index) => {
                return (<div className="image-div" key={index}><Image path={value} className={props.className} /></div>);
            })}
        </>
    )
}

export default Images;