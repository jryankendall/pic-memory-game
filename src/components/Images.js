/*eslint-disable no-func-assign*/
import React, {Component} from 'react';
import Image from "./Image";

var gameImages = require.context("../../public/img/", true);
var imageArray = [];


function importImages(input, output) {
    let keysArray = input.keys();
    for (let i = 0; i < keysArray.length; i++) {
        let trimmedPath = keysArray[i].replace("./", "");
        output.push(trimmedPath);
    }
    console.log(output);
    
}


importImages(gameImages, imageArray);

class Images extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clicked: []
        }
    }


    handleImageClick = event => {
        const character = event.target.attributes.value.value;
        
        switch (this.state.clicked.includes(character)) {
            case true:
                this.setState(state => {
                    const clicked = [];
                    console.log("Clicked same one twice.");
                    this.shuffleArray(imageArray);
                    
                    return {
                        clicked
                    }
                })
                break;
            case false:
                this.setState(state => {
                    const clicked = state.clicked.concat(character);
                    console.log("Clicked new one.");
                    this.shuffleArray(imageArray);
                    return {
                        clicked
                    }
                })
                break;
            default:
                return console.log("Something went wrong");
                
        }
    }

    shuffleArray = arr => {
        let currentIndex = arr.length;
        let tempValue, randIndex;

        while ( 0 !== currentIndex) {
            randIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            tempValue = arr[currentIndex];
            arr[currentIndex] = arr[randIndex];
            arr[randIndex] = tempValue;
        }

        return arr;
    }

    render() {
        let props = this.props;
        console.log(props);
        
        return (
            <>
                {imageArray.map((value, index) => {
                    var imageName;
                    (value.includes(".jpg")) ? imageName = value.replace(".jpg", "") : imageName = value.replace(".png", "");
                    return (<div className="image-div" key={index} value={imageName}><Image path={value} className={props.className} value={imageName} onClick={this.handleImageClick}/></div>);
                })}
            </>
        )
    }
}

export default Images;