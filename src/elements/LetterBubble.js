import React from 'react'

const LetterBubble = ({letter,Children}) => {
    return (
        <div className="letterBubble">
            <div className="letter">{letter}</div>
            <>{Children}</>
        </div>
    )
}

export default LetterBubble
