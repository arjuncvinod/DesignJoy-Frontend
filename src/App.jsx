import React from 'react'
import Hero from './components/Hero'
import LatestProjects from './components/LatestProjects'
import InfiniteMarquee from './components/InfiniteMarquee'
import FeatureBanner from './components/FeatureBanner'
import TestimonialBanner from './components/TestimonialBanner'
import HowWeWork from './components/HowWeWork'
import MembershipBenefits from './components/MembershipBenefits'
const App = () => {
  return (
    <div>
      <Hero />
      <LatestProjects />
      <InfiniteMarquee />
      <FeatureBanner />
      <TestimonialBanner />
      <HowWeWork />
    <MembershipBenefits />
    </div>
  )
}

export default App