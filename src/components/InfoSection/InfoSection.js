import React from 'react'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, TopLine, ImgWrapper, Img, Heading2, } from "./InfoSection.elements.js"
import { Container, Button, Button2 } from "../../globalStyles"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './swiper.css'

const infoSection = ({ primary, lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, description, headline, lightText, topLine, img, alt, start }) => {
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
                            </TextWrapper>      
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
                <Swiper
                    className='swiper-container'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={40}
                    slidesPerView={1}
                    color="primary"
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                    <SwiperSlide
                    className='swiper-slide'
                    >
                                <Heading2 lightText={lightText}>{headline}</Heading2>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                
                    </SwiperSlide>
                    <SwiperSlide>
                    <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            </TextWrapper>      
                        </InfoColumn>
                    </SwiperSlide>
                    <SwiperSlide>
                    <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            </TextWrapper>      
                        </InfoColumn>
                    </SwiperSlide>
                    <SwiperSlide>
                    <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            </TextWrapper>      
                        </InfoColumn>
                    </SwiperSlide>
                    ...
                </Swiper>
        </>
    )
}

export default infoSection

