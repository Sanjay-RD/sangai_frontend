import Image from 'next/image'
import React from 'react'
import Container from '../../../../components/Container'
import Footer from '../../../../components/Footer'
import HelpBookTravelSangaiLayout from '../../../../components/help-components/HelpBookTravelSangaiLayout'
import Navbar from '../../../../components/Navbar'

const CancellingBookingRequest = () => {
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
                <HelpBookTravelSangaiLayout>
                    <h1 className="text-blue-900 text-2xl font-bold">Driver response time</h1>                   
                </HelpBookTravelSangaiLayout>
            </Container>
            <Footer />
        </div>

    )
}

export default CancellingBookingRequest