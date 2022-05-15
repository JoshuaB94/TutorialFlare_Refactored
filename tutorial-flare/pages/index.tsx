import type { NextPage } from 'next'
import MainHero from '../components/Sections/MainHero'
import CreatorGrid from '../components/Grids/CreatorGrid'
import HowItWorks from '../components/Sections/HowItWorks'
import { Heading, Center, Text, Flex } from '@chakra-ui/react'




const Home: NextPage = () => {
  return (
    < >
      <MainHero />

      <div className="container mx-auto max-w-full px-8 py-40 bg-orange-600 justify-center">
          <Center >
            <Heading as='h2' size='xl' color='white' mb='20'>YOU CAN HIRE FROM ANYWHERE.</Heading>
            {/* <Text color='white' noOfLines={[1, 2, 3]}>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</Text> */}
          </Center>

        <div className="mx-auto max-w-7xl">
          <CreatorGrid />
        </div>
      </div>

        <HowItWorks />
    </>
  )
}

export default Home
