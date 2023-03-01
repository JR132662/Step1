import React from 'react'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, TopLine, ImgWrapper, Img,BannerImg } from "./Video.elements"
import { Container, Button } from "../../globalStyles"
import { Link } from "react-router-dom"

const VideoPlayer = ({ primary, lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, description, headline, lightText, topLine, img, alt, start }) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                <InfoRow>
                <iframe width="1024" height="500" src="https://www.youtube.com/embed/5b68QthwAMQ" title="How to find your target audience- Step 1 Strategy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default VideoPlayer

