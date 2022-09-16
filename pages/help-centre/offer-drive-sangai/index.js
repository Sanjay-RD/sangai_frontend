import Image from 'next/image'
import React from 'react'
import Container from '../../../components/Container'
import Footer from '../../../components/Footer'
import HelpOfferDriveSangaiLayout from '../../../components/help-components/HelpOfferDriveSangaiLayout'
import Navbar from '../../../components/Navbar'


const OfferDriveSangai = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full h-[300px] relative">
                <Image
                    alt="Mountains"
                    src="/sharing1.jpeg"
                    priority
                    objectFit="cover"
                    layout="fill"
                />
            </div>
            <Container>
                <HelpOfferDriveSangaiLayout>
                                      
                </HelpOfferDriveSangaiLayout>
            </Container>
            <Footer />
        </div>

    )
}

export default OfferDriveSangai