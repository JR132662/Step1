import styled from "styled-components"

export const InfoSec = styled.div`
color: #fff;
height: 500px;
padding: 90 0;
background : ${({ lightBg }) => (lightBg ? "#fff" : "black")};

@media screen and (max-width:900px){
}
`
export const BannerImg = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	position: absolute;
`;
export const InfoRow = styled.div`
display: flex;
align-items: center;
flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
@media screen and (max-width: 768px) {
gap: 20px;
}
`

export const InfoColumn = styled.div`
  flex-basis: 50%;
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    max-width: 100%;
    flex-basis: 100%;
  }
`

export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`

export const ImgWrapper = styled.div`
display: flex;
justify-content: ${({ start }) => (start ? "center" : "center")};
`
export const TopLine = styled.div`
color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4B59F7")};
font-size: 18px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
margin-bottom: 16px;
`

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  animation: rotation 2s linear;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({ lightTextDesc }) => (lightTextDesc ? "#f7f8fa" : "#1c2237")}
`