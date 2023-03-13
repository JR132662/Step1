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
} from './PricingInfo.elements';

function PricingInfo() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingHeading>Welcome to STEP-1 </PricingHeading>
        <PricingContainer>
          
        </PricingContainer>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default PricingInfo;