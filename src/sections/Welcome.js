import React from 'react'
import HeadingAndImage from '../components/HeadingAndImage'
import ImageBubble from '../elements/ImageBubble'
import LetterBubble from '../elements/LetterBubble'
import Section from '../elements/Section'
import TextBubble from '../elements/TextBubble'
import asset from '../images/AssetOne.png'
import welcomeImage from '../images/Youth_Illustrations-01.svg'
import whyImage1 from '../images/Youth_Illustrations-04.svg'
import whyImage2 from '../images/Youth_Illustrations-05.svg'
import whoImage from '../images/Youth_Illustrations-16.svg'
import result from '../images/Youth_Illustrations-17.svg'
import H from '../images/Youth_Illustrations-06.svg'

const Welcome = () => {
    return (
        <>
            <Section passID="welcome">
                <div className="one">
                    <h1>Welcome to MyHEARTSMAP</h1>
                    <img src={asset}/>
                    <p>Need to exit this page quickly? Use the quick exit button.
                    </p>
                </div>
                <HeadingAndImage
                    heading='What is MyHEARTSMAP?'
                    image={welcomeImage}
                    imgwidth='55%'
                />
            </Section>
            <Section passID="why">
                <HeadingAndImage
                heading='Why was MyHEARTSMAP created?'
                image={whyImage1}
                imgwidth='90%'
                >
                    <TextBubble
                        textInput='When you experience dicult mental health symptoms, going 
                        to the emergency department might feel overwhelming.'
                        backColor='#fff'
                    />
                </HeadingAndImage>
                <HeadingAndImage
                // heading='Why was MyHEARTSMAP created?'
                image={whyImage2}
                imgwidth='60%'
                >
                    <TextBubble
                        textInput='MyHEARTSMAP was created to assess your mental health resource needs, and 
                        connect you with the appropriate supports. Without the hassle of first going to the 
                        emergency department.'
                        backColor='#fff'
                    />
                </HeadingAndImage>
            </Section>
            <Section passID="what">
                <HeadingAndImage heading='What does MyHEARTSMAP assess?'>
                    <p style={{marginTop:'-20px',marginBottom:'20px'}}>MyHEARTSMAP assesses the following domains: </p>
                </HeadingAndImage>
                <LetterBubble letter='H'
                Children={<ImageBubble
                        image={H}
                        pinktext='Home:'
                        desc='Assesses your home life and home resources'
                    />}   
                    />
                    
            </Section>
            <Section passID="who">
                <HeadingAndImage
                heading='Who can fill this out?'
                image={whoImage}
                imgwidth='90%'
                >
                    <TextBubble
                        textInput='MyHEARTSMAP is highly reliable when filled out by youth aged 10-17 
                        on their own or by parents on behalf of their child aged 6-17.'
                        backColor='transparent'
                    />
                </HeadingAndImage>
            </Section>
            <Section passID="results">
                <HeadingAndImage
                heading='What should I do with the results?'
                image={result}
                imgwidth='100%'
                >
                    <TextBubble
                        textInput='You can share the results with your parents or healthcare provider, or keep them to 
                        yourself. The process is anonymous and confidential.'
                        backColor='#F2F2F2'
                    />
                </HeadingAndImage>
            </Section>
        </>
    )
}

export default Welcome
