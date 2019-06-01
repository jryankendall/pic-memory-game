import React from 'react';

function Container(props) {
    return(
        <div className="container whole-page-container">{props.children}</div>
    )
}

export default Container;