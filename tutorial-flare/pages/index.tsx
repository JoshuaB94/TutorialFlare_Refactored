import type { NextPage } from 'next'
import HomeHero from '../components/HeroSection/MainHero'
import CreatorGrid from '../components/CreatorGrid/CreatorGrid'


const Home: NextPage = () => {
  return (
    < >
      <HomeHero />
      <div className="container mx-auto max-w-full px-8 py-20 bg-orange-600">
        <div className="mx-auto max-w-7xl">
          <CreatorGrid />
        </div>
      </div>
    </>
  )
}

export default Home
