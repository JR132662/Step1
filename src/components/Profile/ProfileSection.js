import React from 'react'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, TopLine, ImgWrapper, Img, } from "./Profile.elements.js"
import { Container, Button } from "../../globalStyles"
import { Link } from "react-router-dom"
import { PricingHeading } from '../Pricing/Pricing.elements.js'
import { Heading2, Img2 } from '../InfoSection/InfoSection.elements.js'

const ProfileSection = ({ primary, lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, description, headline, lightText, topLine, img, alt, start }) => {
    return (
        <>  
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <a href=' https://calendly.com/step1strategy/30min?month=2023-02
                                    '>
                                    <Button big fontbig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                    </a>
                            </TextWrapper>      
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default ProfileSection

