import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PricingSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 100px 0 160px;
    background-image: linear-gradient(85.7deg, rgb(0, 32, 95) 2.8%, rgb(132, 53, 142) 97.8%);;
`
export const VideoSection = styled.div`
display: inline-block;
@media screen and (max-width: 960px) {
    display: none;
}
`

export const PricingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 30px;
    }
`

export const PricingHeading = styled.h1`
    color: #ffe8bb;
    text-align: center;
    font-size: 70px;
    margin-bottom: 24px;
    margin-top: 24px;
    @media screen and (max-width: 960px) {
        text-align: center;
    }
`
export const PricingHeading2 = styled.h1`
    color: #ffe8bb;
    font-size: 70px;
    margin-bottom: 24px;
    @media screen and (max-width: 960px) {
        display: none;
    }
`

export const PricingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`

export const PricingCard = styled(Link)`
    background-image:linear-gradient(135deg, hsla(240, 9%, 96%, 1) 0%, hsla(251, 58%, 33%, 1) 54%);
    width: 320px;
    height: 500px;
    text-decoration: none;
    border-radius: 0% 0% 50% 50% / 0% 0% 5% 5% ;
    box-shadow: 10px 10px rgba(0,0,0,.40);

    &:nth-child(2) {
        margin: 24px;
    }

    &:hover {
        transform: scale(1.06);
        transition: all 0.3s ease-out;
        color: #1c2237;
        border-radius: 0% 0% 50% 50% / 0% 0% 5% 5% ;
        box-shadow: 10px 10px rgba(0,0,0,.25);
    }

    @media screen and (max-width: 960px) {
        width: 90%;
            &:hover {
                transform: none;
            }
    }
`

export const PricingCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 600px;
    padding: 24px;
    align-items: center;
    color: white;
`

export const PricingCardIcon = styled.div`
    margin: 24px 0;

`

export const PricingCardPlan = styled.h3`
    margin-bottom: 5px;
    margin-top: 25px;
    font-size: 44px;
    color: white;
`

export const PricingCardCost = styled.h4`
    font-size: 40px;
`

export const PricingCardLength = styled.p`
    font-size: 24px;
    margin-bottom: 14px;
    color: white;
`

export const PricingCardFeatures = styled.ul`
    margin: 10px 0 32px;
    list-style: none;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: black;;
`

export const PricingCardFeature = styled.li`
    margin-bottom: 10px;
    color: white;;
`