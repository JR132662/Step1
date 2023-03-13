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
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading2>FINDING YOUR TARGET AUDIENCE</PricingHeading2>
          <VideoSection><iframe width="1000" height="498" src="https://www.youtube.com/embed/5b68QthwAMQ" title="How to find your target audience- Step 1 Strategy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></VideoSection>
          <PricingHeading>STEP1 Branding Services</PricingHeading>
          <PricingContainer>
            <PricingCard to='/products'>
              <PricingCardInfo>
                <PricingCardPlan>Baby Steps</PricingCardPlan>
                <PricingCardLength>Tier 1</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Phase 1 Brand Sprint</PricingCardFeature>
                  <PricingCardFeature>Your brand discovery process simplified</PricingCardFeature>
                  <PricingCardFeature>Targeted Brand Consulting V1 </PricingCardFeature>
                </PricingCardFeatures>
                <Button>Learn More</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/products'>
              <PricingCardInfo>
                <PricingCardPlan>Step One</PricingCardPlan>
                <PricingCardLength>Tier 2</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Phase 2 Brand Sprint</PricingCardFeature>
                  <PricingCardFeature>Your enhanced brand discovery process</PricingCardFeature>
                  <PricingCardFeature>Targeted Brand Consulting V2 </PricingCardFeature>
                </PricingCardFeatures>
                <Button>Learn More</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/products'>
              <PricingCardInfo>
                <PricingCardPlan>The Leap</PricingCardPlan>
                <PricingCardLength>Tier 3</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Phase 3 Brand Sprint</PricingCardFeature>
                  <PricingCardFeature>Product testing and launch de-risking</PricingCardFeature>
                  <PricingCardFeature>Targeted Brand Consulting V3</PricingCardFeature>
                </PricingCardFeatures>
                <Button>Learn More</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;