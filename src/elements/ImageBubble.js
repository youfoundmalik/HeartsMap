import React from 'react'

const ImageBubble = ({image,pinktext,desc}) => {
    return (
        <div className="bubble">
            <img src={image}/>
            <div className="text">
                <p className="boldText" style={{color:'#FF6776'}}>{pinktext}</p>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default ImageBubble
