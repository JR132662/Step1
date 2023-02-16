import React from 'react'
import { InfoSection, Pricing } from "../../components"
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from "./Data"

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFive} />
            <Pricing/>
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Home
