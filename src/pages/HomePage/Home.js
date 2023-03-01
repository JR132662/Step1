import React from 'react'
import { InfoSection, Pricing } from "../../components"
import Banner from '../../components/Banner/Banner'
import ProfileSection from '../../components/Profile/ProfileSection'
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
            <ProfileSection {...homeObjThree} />
            <ProfileSection {...homeObjFive} />
            {/* <InfoSection {...homeObjFour} /> */}
        </>
    )
}

export default Home
