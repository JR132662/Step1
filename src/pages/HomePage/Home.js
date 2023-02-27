import React from 'react'
import { InfoSection, Pricing } from "../../components"
import Banner from '../../components/Banner/Banner'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive, homeObjsix } from "./Data"

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            {/* <InfoSection {...homeObjTwo} /> */}
            <Pricing/>
            <Banner {...homeObjsix} />
            {/* <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFive} /> */}
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Home
