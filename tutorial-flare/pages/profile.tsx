import type { NextPage } from 'next'
import ProfileHeader from '../components/Profile/ProfileHeader'
import Navbar from '../components/Navigation/Navbar'
import MainFooter from '../components/Footer/MainFooter'
import ProfileHeading from '../components/Profile/ProfileHeading'


const Profile: NextPage = () => {
    return (
        <>
            <Navbar />
            
            <ProfileHeader />

            <div className="max-w-7xl h-96 mx-auto sm:px-6 lg:px-8 py-14">
                <ProfileHeading />
            </div>

            <MainFooter />
        </>
    )
}

export default Profile