import Image from 'next/image'
import React from 'react'
import Container from '../../../../components/Container'
import Footer from '../../../../components/Footer'
import HelpOfferDriveSangaiLayout from '../../../../components/help-components/HelpOfferDriveSangaiLayout'
import Navbar from '../../../../components/Navbar'

const PickupDropoffPoint = () => {
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
                    <h1 className="text-blue-900 text-2xl font-bold">How to find your pickup and dropoff points</h1>                   
                </HelpOfferDriveSangaiLayout>
            </Container>
            <Footer />
        </div>

    )
}

export default PickupDropoffPoint