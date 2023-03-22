import { NextPage } from "next";
import MainFooter from "../components/Footer/MainFooter";
import Navbar from "../components/Navigation/Navbar";
import ContactSection from "../components/Sections/ContactSection";

const Contact: NextPage = () => {
    return (
        <>
            <Navbar />

            <ContactSection />

            <MainFooter />
        </>
    )
}

export default Contact