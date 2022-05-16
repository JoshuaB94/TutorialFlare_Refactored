import type { NextPage } from 'next'
import SimpleNavbar from '../components/Navigation/SimpleNavbar'
import AboutHeader from '../components/Sections/AboutHeader'
import AboutContent from '../components/ContentSections/AboutContent'
import MainFooter from '../components/Footer/MainFooter'

const About: NextPage = () => {
    return (
        <>
        <SimpleNavbar />
        <AboutHeader />
        <AboutContent />
        <MainFooter />
        </>
    )
}

export default About