import React from 'react'

const TextBubble = ({textInput,backColor}) => {
    return (
        <>
            <p className="textBubble" style={{backgroundColor:`${backColor}`}}>
                {textInput}
            </p>
        </>
    )
}

export default TextBubble
