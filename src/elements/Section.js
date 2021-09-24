import React from 'react'

const Section = ({passID,children}) => {
    return (
        <section id={passID}>
            {children}
        </section>
    )
}

export default Section
