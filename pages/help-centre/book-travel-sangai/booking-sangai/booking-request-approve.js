import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import Container from '../../../../components/Container'
import Footer from '../../../../components/Footer'
import HelpBookTravelSangaiLayout from '../../../../components/help-components/HelpBookTravelSangaiLayout'
import Navbar from '../../../../components/Navbar'
import { API } from '../../../../config'

const CancellingBookingRequest = ({ getHelp }) => {
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
                    <div
                        dangerouslySetInnerHTML={{
                            __html: getHelp.description,
                        }}
                        className="description"
                    ></div>
                </HelpBookTravelSangaiLayout>
            </Container>
            <Footer />
        </div>

    )
}
export async function getStaticProps() {
    const getHelp = await axios.get(`${API}/help/booking-request-approve`);
    return {
      props: {
        getHelp: getHelp.data,
      },
    };
  }

export default CancellingBookingRequest