import Image from 'next/image'
import React from 'react'
import Container from '../../../../components/Container'
import FeedbackForm from '../../../../components/FeedbackForm'
import Footer from '../../../../components/Footer'
import HelpBookTravelBusLayout from '../../../../components/help-components/HelpBookTravelBusLayout'
import Navbar from '../../../../components/Navbar'
import { API } from '../../../../config'
import axios from 'axios'
const BookingBus = ({ getHelp }) => {
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
                    <div
                        dangerouslySetInnerHTML={{
                            __html: getHelp.description,
                        }}
                        className="description"
                    ></div>
                </HelpBookTravelBusLayout>
                <FeedbackForm />
            </Container>
            <Footer />
        </div>

    )
}
export async function getStaticProps() {
    const getHelp = await axios.get(`${API}/help/booking-bus-online`);
    return {
      props: {
        getHelp: getHelp.data,
      },
    };
  }

export default BookingBus