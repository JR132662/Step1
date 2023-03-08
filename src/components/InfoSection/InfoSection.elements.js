import styled from "styled-components"

export const InfoSec = styled.div`
color: #fff;
padding: 90px 0;
background-image: linear-gradient(89.7deg,rgb(0,32,95) 2.8%,rgb(132,53,142) 97.8%);
}
@media screen and (max-width:900px){
}
`


export const InfoRow = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
@media screen and (max-width: 768px) {
gap: 20px;
}
`

export const InfoColumn = styled.div`
  flex: 1;
  max-width: 50%;
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
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`

export const ImgWrapper = styled.div`
display: flex;
max-width: 555px;
justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`
export const TopLine = styled.div`
color: ${({ lightTopLine }) => (lightTopLine ? "white" : "white")};
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
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`
export const Img2 = styled.img`
  padding-right: 18px;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  @media screen and (max-width: 768px) {
   display: none;
  }
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 65px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#ffe8bb' : '#ffe8bb')};
`
export const Heading2 = styled.h1`
  margin-bottom: 24px;
  font-size: 65px;
  line-height: 1.1;
  text-align: center;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#ffe8bb' : '#ffe8bb')};
  
`
export const Heading3 = styled.h1`
  margin-bottom: 24px;
  font-size: 60px;
  line-height: 1.0;
  text-align: center;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#ffe8bb' : '#ffe8bb')};
  `
export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 30px;
text-align: left;
font-size: 35px;
color: ${({ lightTextDesc }) => (lightTextDesc ? "#f7f8fa" : "#1c2237")}
`
export const Subtitle2 = styled.p`
max-width: 440px;
margin-bottom: 30px;
padding-top: 25px;
padding-left: 30px;
text-align: left;
font-size: 25px;
color: ${({ lightTextDesc }) => (lightTextDesc ? "#ffe8bb" : "#ffe8bb")}
`