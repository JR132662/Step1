import React from 'react'
import { InfoSection, Pricing } from "../../components"
import Banner from '../../components/Banner/Banner'
import VideoPlayer from '../../components/VideoPlayer/Video'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive, homeObjsix } from "./Data"

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            {/* <VideoPlayer/> */}
            {/* <InfoSection {...homeObjTwo} /> */}
            <Pricing/>
            <Banner {...homeObjsix} />
            {/* <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFive} /> */}
            {/* <InfoSection {...homeObjFour} /> */}
        </>
    )
}

export default Home
