import React from "react";
import HeadingAndImage from "../components/HeadingAndImage";
import ImageBubble from "../elements/ImageBubble";
import LetterBubble from "../elements/LetterBubble";
import Section from "../elements/Section";
import TextBubble from "../elements/TextBubble";
import asset from "../images/AssetOne.png";
import welcomeImage from "../images/Youth_Illustrations-01.svg";
import whyImage1 from "../images/Youth_Illustrations-04.svg";
import whyImage2 from "../images/Youth_Illustrations-05.svg";
import whoImage from "../images/Youth_Illustrations-16.svg";
import result from "../images/Youth_Illustrations-17.svg";
import H from "../images/Youth_Illustrations-06.svg";
import E from "../images/Youth_Illustrations-07.svg";
import A1 from "../images/Youth_Illustrations-08.svg";
import R from "../images/Youth_Illustrations-09.svg";
import T from "../images/Youth_Illustrations-13.svg";
import S1 from "../images/Youth_Illustrations-12.svg";
import S2 from "../images/Youth_Illustrations-11.svg";
import M from "../images/Youth_Illustrations-10.svg";
import A2 from "../images/Youth_Illustrations-14.svg";
import P from "../images/Youth_Illustrations-15.svg";
import CIHR from "../images/Youth_Illustrations-CIHR Logo.svg";
import UBC from "../images/Youth_Illustrations-ubc.png";
import BC from "../images/Youth_Illustrations-BC.png";
import anti from "../images/Youth_Illustrations-AG Design.png";
import echo from "../images/Youth_Illustrations-Echo.png";
import arche from "../images/Youth_Illustrations-Arche.png";

const Welcome = () => {
  const data = [
    {
      id: "H",
      letter: "H",
      image: `${H}`,
      text1: "Home:",
      text2: "Assesses your home life and home resources",
    },
    {
      id: "E",
      letter: "E",
      image: `${E}`,
      text1: "Education & Activities:",
      text2: "Assesses your school, work, and hobbies",
    },
    {
      id: "A1",
      letter: "A",
      image: `${A1}`,
      text1: "Alcohol & Drugs:",
      text2: "Assesses your alcohol and drug use",
    },
    {
      id: "R",
      letter: "R",
      image: `${R}`,
      text1: "Relationships & Bullying:",
      text2: "Assesses your friendships and support",
    },
    {
      id: "T",
      letter: "T",
      image: `${T}`,
      text1: "Thoughts and Anxiety:",
      text2: "Assesses your feelings of stress",
    },
    {
      id: "S1",
      letter: "S",
      image: `${S1}`,
      text1: "Safety:",
      text2: "Assesses your physical safety and the safety of those around you",
    },
    {
      id: "S2",
      letter: "S",
      image: `${S2}`,
      text1: "Sexual Health:",
      text2: "Assesses your sexual health practices and knowledge",
    },
    {
      id: "M",
      letter: "M",
      image: `${M}`,
      text1: "Mood:",
      text2: "Assesses your mood and behaviours",
    },
    {
      id: "A2",
      letter: "A",
      image: `${A2}`,
      text1: "Abuse:",
      text2: "Assesses present and past experiences of abuse you may have had",
    },
    {
      id: "P",
      letter: "P",
      image: `${P}`,
      text1: "Professionals and Resources:",
      text2:
        "Assesses the resources you currently use and ones you may be interested in",
    },
  ];

  const dataInput = data?.map(({ letter, image, text1, text2, id }) => {
    return (
      <LetterBubble
        id={id}
        letter={letter}
        Children={<ImageBubble image={image} pinktext={text1} desc={text2} />}
      />
    );
  });
  return (
    <>
      <Section passID="welcome">
        <div className="one">
          <h1>Welcome to MyHEARTSMAP</h1>
          <img alt="logo" src={asset} />
          <p>Need to exit this page quickly? Use the quick exit button.</p>
        </div>
        <HeadingAndImage
          heading="What is MyHEARTSMAP?"
          image={welcomeImage}
          imgwidth="55%"
        />
      </Section>
      <Section passID="why">
        <HeadingAndImage
          heading="Why was MyHEARTSMAP created?"
          image={whyImage1}
          imgwidth="90%"
        >
          <TextBubble
            textInput="When you experience difficult mental health symptoms, going 
                        to the emergency department might feel overwhelming."
            backColor="#fff"
          />
        </HeadingAndImage>
        <HeadingAndImage
          // heading='Why was MyHEARTSMAP created?'
          image={whyImage2}
          imgwidth="60%"
        >
          <TextBubble
            textInput="MyHEARTSMAP was created to assess your mental health resource needs, and 
                        connect you with the appropriate supports. Without the hassle of first going to the 
                        emergency department."
            backColor="#fff"
          />
        </HeadingAndImage>
      </Section>
      <Section passID="what">
        <HeadingAndImage heading="What does MyHEARTSMAP assess?">
          <p style={{ marginTop: "-20px", marginBottom: "20px" }}>
            MyHEARTSMAP assesses the following domains:{" "}
          </p>
        </HeadingAndImage>
        {dataInput}
      </Section>
      <Section passID="who">
        <HeadingAndImage
          heading="Who can fill this out?"
          image={whoImage}
          imgwidth="90%"
        >
          <TextBubble
            textInput="MyHEARTSMAP is highly reliable when filled out by youth aged 10-17 
                        on their own or by parents on behalf of their child aged 6-17."
            backColor="transparent"
          />
        </HeadingAndImage>
      </Section>
      <Section passID="results">
        <HeadingAndImage
          heading="What should I do with the results?"
          image={result}
          imgwidth="100%"
        >
          <TextBubble
            textInput="You can share the results with your parents or healthcare provider, or keep them to 
                        yourself. The process is anonymous and confidential."
            backColor="#F2F2F2"
          />
        </HeadingAndImage>
      </Section>
      <Section passID="credits">
        <HeadingAndImage>
          <a
            href="https://apex.med.ubc.ca/ords/pxmyheartsmap/r/myheartsmap/home"
            target="_blank"
            rel="noreferrer"
          >
            Find out if MyHEARTSMAP is right for your child.
          </a>
        </HeadingAndImage>
        <div className="footer">
          <p className="footerbanner">
            © 2015 BY DR. QUYNH DOAN AND DR. TYLER R. BLACK
          </p>
          <div className="footer2">
            <div className="footerSection">
              <p className="footerText">
                THE MYHEARTSMAP TOOL WAS SUPPORTED BY THE CANADIAN INSTITUTES OF
                HEALTH RESEARCH (CIHR) PROJECT GRANT PROGRAM.
              </p>
              <div className="footerImgArea" id="CIHR">
                <a
                  href="https://cihr-irsc.gc.ca/e/193.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="CIHR" src={CIHR} />
                </a>
              </div>
            </div>
            <div className="footerSection">
              <p className="footerText" style={{ padding: "5px 60px" }}>
                DR. DOAN IS SUPPORTED BY THE UNIVERSITY OF BRITISH COLUMBIA AND
                THE BC CHILDREN'S HOSPITAL RESEARCH INSTITUTE.
              </p>
              <div className="footerImgArea" id="UBC">
                <div className="image3">
                  <a href="https://www.ubc.ca" target="_blank" rel="noreferrer">
                    <img alt="UBC" src={UBC} />
                  </a>
                  <a
                    href="https://openheartsmap.bcchr.ca/ords/f?p=211:LOGIN_DESKTOP"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img alt="OpenHeartsMap" src={asset} />
                  </a>
                  <a
                    href="http://www.bcchildrens.ca"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img alt="BC" src={BC} />
                  </a>
                </div>
              </div>
            </div>
            <div className="footerSection">
              <p className="footerText">WITH SUPPORT FROM</p>
              <div className="footerImgArea" id="AEA">
                <div className="image2">
                  <div className="image2in1">
                    <a
                      href="https://www.ualberta.ca/pediatrics/pediatric-research/affiliated-research-units/alberta-research-centre-for-health-evidence-arche/index.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="Arche" src={arche} />
                    </a>
                    <a
                      href="http://www.echokt.ca"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="ECHO" src={echo} />
                    </a>
                  </div>
                  <a
                    href="https://www.antigravitydesignco.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img alt="AntiGravityDesign" src={anti} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Welcome;
