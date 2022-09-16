import Image from 'next/image'
import React from 'react'
import Container from '../../../../components/Container'
import Footer from '../../../../components/Footer'
import HelpBookTravelBusLayout from '../../../../components/help-components/HelpBookTravelBusLayout'
import Navbar from '../../../../components/Navbar'



const BookingConfiramtionEmail = () => {
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
                <HelpBookTravelBusLayout>
                    <h1 className="text-blue-900 text-2xl font-bold">If you didn't receive a booking confirmation email</h1>                   
                </HelpBookTravelBusLayout>
            </Container>
            <Footer />
        </div>

    )
}

export default BookingConfiramtionEmail