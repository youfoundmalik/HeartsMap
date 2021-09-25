import React from 'react'

const LetterBubble = ({letter,Children,id}) => {
    return (
        <div className="letterBubble" id={id}>
            <div className="letter">{letter}</div>
            <>{Children}</>
        </div>
    )
}

export default LetterBubble
