import Image from 'next/image'
import React from 'react'
import Container from '../../../components/Container'
import Footer from '../../../components/Footer'
import HelpBookTravelSangaiLayout from '../../../components/help-components/HelpBookTravelSangaiLayout'
import Navbar from '../../../components/Navbar'


const BookTravelSangai = () => {
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

                    <h1 className='text-2xl text-blue-700 font-bold'>You can get the info of book and travel by sangai </h1>
                </HelpBookTravelSangaiLayout>
            </Container>
            <Footer />
        </div>

    )
}

export default BookTravelSangai