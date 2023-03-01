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
                            {/* <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper> */}
                        </InfoColumn>
                    </InfoRow>
                </Container>
                <iframe width="885" height="498" src="https://www.youtube.com/embed/5b68QthwAMQ" title="How to find your target audience- Step 1 Strategy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </InfoSec>
        </>
    )
}

export default Banner

