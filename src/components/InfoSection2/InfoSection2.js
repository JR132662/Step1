import React from 'react'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, TopLine, ImgWrapper, Img, Heading2, Subtitle2, Img2, Heading3, } from "./InfoSection2.elements.js"
import { Container, Button, Button2, Button3 } from "../../globalStyles"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { withTheme } from 'styled-components';

const InfoSection2 = ({ primary, lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, description, description2, description3, description4, description5, headline, headline2,headline3,headline4,headline5, lightText, topLine, img, img3, img4, img5, img6, alt, start }) => {
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
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to="/sign-up">
                                    <Button2 big fontbig primary={primary}>
                                        {buttonLabel}
                                    </Button2>
                                </Link>
                                <Link to="/sign-up">
                                    <Button3 big fontbig primary={primary}>
                                        {buttonLabel}
                                    </Button3>
                                </Link>
                            </TextWrapper>      
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec> 
        </>
    )
}

export default InfoSection2

