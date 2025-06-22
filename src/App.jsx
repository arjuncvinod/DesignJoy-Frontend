import React from 'react'
import Hero from './components/Hero'
import LatestProjects from './components/LatestProjects'
import InfiniteMarquee from './components/InfiniteMarquee'
import FeatureBanner from './components/FeatureBanner'
const App = () => {
  return (
    <div>
      <Hero />
      <LatestProjects />
      <InfiniteMarquee />
      <FeatureBanner />
    </div>
  )
}

export default App