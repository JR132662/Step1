import React from 'react'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, TopLine, ImgWrapper, Img,BannerImg } from "./Banner.elements.js"
import { Container, Button } from "../../globalStyles"
import { Link } from "react-router-dom"

const Banner = ({ primary, lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, description, headline, lightText, topLine, img, alt, start }) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
            <BannerImg src={img} start={start}/>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default Banner

