import Image from 'next/image'
import React from 'react'
import Container from '../../../../components/Container'
import Footer from '../../../../components/Footer'
import Navbar from '../../../../components/Navbar'
import HelpBookTravelBusLayout from '../../../../components/help-components/HelpBookTravelBusLayout'



const PaymentMethodAccepted = () => {
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
                    <h1 className="text-blue-900 text-2xl font-bold">Payment method accepted</h1>                   
                </HelpBookTravelBusLayout>
            </Container>
            <Footer />
        </div>

    )
}

export default PaymentMethodAccepted