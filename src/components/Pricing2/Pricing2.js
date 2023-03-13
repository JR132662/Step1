import React from 'react';
import "./pricing.css"
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
  VideoSection,
  PricingHeading2,
  VideoSection2
} from './Pricing2.elements';

function Pricing2() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading2>FINDING YOUR TARGET AUDIENCE</PricingHeading2>
          <VideoSection><iframe width="1000" height="498" src="https://www.youtube.com/embed/5b68QthwAMQ" title="How to find your target audience- Step 1 Strategy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></VideoSection>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing2;