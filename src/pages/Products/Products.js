import React from 'react'
import { InfoSection, Pricing } from "../../components"
import InfoSection2 from '../../components/InfoSection2/InfoSection2'
import InfoSection3 from '../../components/InfoSection3/InfoSection3'
import Pricing2 from '../../components/Pricing2/Pricing2'
import { homeObjTwo, homeObjThree, homeObjFour, homeObjFive, homeObjSix, homeObjSeven } from "./Data"

const Home = () => {

    return (
        <>
            <InfoSection2 {...homeObjTwo} />
            <InfoSection3 {...homeObjFive} />
            <InfoSection3 {...homeObjFour} />
            <InfoSection2 {...homeObjSeven} />
            <Pricing2 />
        </>
    )
}

export default Home
