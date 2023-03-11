import React from 'react'
import { InfoSection, Pricing } from "../../components"
import InfoSection2 from '../../components/InfoSection2/InfoSection2'
import { homeObjTwo, homeObjThree, homeObjFour } from "./Data"

const Home = () => {

    return (
        <>
            <InfoSection2 {...homeObjTwo} />
            <Pricing />
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Home
