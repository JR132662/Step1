import React from 'react'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, TopLine, ImgWrapper, Img2 } from "./InfoSection.elements.js"
import { Container, Button } from "../../globalStyles"
import { Link } from "react-router-dom"

const infoSection = ({ primary, lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, description, headline, lightText, topLine, img, alt, start }) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                            <ImgWrapper start={start}>
                                <Img2 src={img} alt={alt} />
                            </ImgWrapper>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default infoSection

