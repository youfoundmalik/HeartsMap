import React from 'react'

const HeadingAndImage = ({heading,image,children,imgwidth}) => {
    return (
        <div className="content">
            <h1>{heading}</h1>
            <img src={image} style={{width: `${imgwidth}`}}/>
            {children}
        </div>
    )
}

export default HeadingAndImage
