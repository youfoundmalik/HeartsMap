import React from 'react'

const ImageBubble = ({image,pinktext,desc}) => {
    return (
        <div className="wrapper">
            <div className="bubble">
                <div className="imgArea"><img src={image} style={{width:'auto', height:'150px'}} alt='image'/></div>
                <div className="text">
                    <p className="boldText" style={{color:'#FF6776'}}>{pinktext}</p>
                    <p>{desc}</p>
                </div>
            </div>
            <hr align="center"/>
        </div>
    )
}

export default ImageBubble
