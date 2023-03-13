import React from 'react'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, TopLine, ImgWrapper, Img, Heading2, Subtitle2, Img2, Heading3, } from "./InfoSection.elements.js"
import { Container, Button, Button2, Button3 } from "../../globalStyles"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './swiper.css'
import { withTheme } from 'styled-components';

const infoSection = ({ primary, lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, description, description2, description3, description4, description5, headline, headline2,headline3,headline4,headline5, lightText, topLine, img, img3, img4, img5, img6, alt, start }) => {
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
                                <a href='https://ntqfgiovpio.typeform.com/to/vLwRk52x'>
                                    <Button2 big fontbig primary={primary}>
                                        {buttonLabel}
                                    </Button2>
                                </a>
                                <a href='https://ntqfgiovpio.typeform.com/to/vLwRk52x'>
                                    <Button3 big fontbig primary={primary}>
                                        {buttonLabel}
                                    </Button3>
                                </a>
                            </TextWrapper>      
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
                <Swiper
                    className='swiper-container'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={75}
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
                                <Heading2 lightText={lightText}>{headline2}</Heading2>
                                <div className='sliderflex'>
                                <ImgWrapper start={start}>
                                <Img2 src={img3} alt={alt} />
                                </ImgWrapper>
                                <Subtitle2 lightTextDesc={lightTextDesc}
                                className='slidertext'
                                >{description2}</Subtitle2>
                                </div>
                                <div className='MobileBtn'>
                                <a href='https://ntqfgiovpio.typeform.com/to/vLwRk52x'>
                                <Button3>
                                {buttonLabel}
                                </Button3>
                                </a>
                                </div>
                                <div className='SliderButton'>
                                <a href='https://ntqfgiovpio.typeform.com/to/vLwRk52x'>
                                <Button2 big fontbig primary={primary}>
                                {buttonLabel}
                                </Button2>
                                </a>
                                </div>
                    </SwiperSlide>
                    <SwiperSlide
                    className='swiper-slide'
                    >           
                                <Heading2 lightText={lightText}>{headline3}</Heading2>
                                <div className='sliderflex'>
                                <ImgWrapper start={start}>
                                <Img2 src={img4} alt={alt} />
                                </ImgWrapper>
                                <Subtitle2 lightTextDesc={lightTextDesc}>{description3}</Subtitle2>
                                </div>
                                <div className='MobileBtn'>
                                <a href='https://ntqfgiovpio.typeform.com/to/vLwRk52x'>
                                <Button3>
                                {buttonLabel}
                                </Button3>
                                </a>
                                </div>
                                <div className='SliderButton'>
                                <a href='https://ntqfgiovpio.typeform.com/to/vLwRk52x'>
                                <Button2 big fontbig primary={primary}>
                                {buttonLabel}
                                </Button2>
                                </a>
                                </div>
                    </SwiperSlide>
                    <SwiperSlide
                    className='swiper-slide'
                    >           
                                <Heading3 lightText={lightText}>{headline4}</Heading3>
                                <div className='sliderflex'>
                                <ImgWrapper start={start}>
                                <Img2 src={img5} alt={alt} />
                                </ImgWrapper>
                                <Subtitle2 lightTextDesc={lightTextDesc}>{description4}</Subtitle2>
                                </div>
                                <div className='MobileBtn'>
                                <a href='https://ntqfgiovpio.typeform.com/to/vLwRk52x'>
                                <Button3>
                                {buttonLabel}
                                </Button3>
                                </a>
                                </div>
                                <div className='SliderButton'>
                                <a href='https://ntqfgiovpio.typeform.com/to/vLwRk52x'>
                                <Button2 big fontbig primary={primary}>
                                {buttonLabel}
                                </Button2>
                                </a>
                                </div>
                    </SwiperSlide>
                    <SwiperSlide
                    className='swiper-slide'
                    >           
                                <Heading3 lightText={lightText}>{headline5}</Heading3>
                                <div className='sliderflex'>
                                <ImgWrapper start={start}>
                                <Img2 src={img6} alt={alt} />
                                </ImgWrapper>
                                <Subtitle2 lightTextDesc={lightTextDesc}>{description5}</Subtitle2>
                                </div>
                                <div className='MobileBtn'>
                                <a href='https://ntqfgiovpio.typeform.com/to/vLwRk52x'>
                                <Button3>
                                {buttonLabel}
                                </Button3>
                                </a>
                                </div>
                                <div className='SliderButton'>
                                <a href='https://ntqfgiovpio.typeform.com/to/vLwRk52x'>
                                <Button2 big fontbig primary={primary}>
                                {buttonLabel}
                                </Button2>
                                </a>
                                </div>
                    </SwiperSlide>
                    
                    ...
                </Swiper>
        </>
    )
}

export default infoSection

