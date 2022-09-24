import Image from 'next/image'
import React from 'react'
import Container from '../../../../components/Container'
import Footer from '../../../../components/Footer'
import Navbar from '../../../../components/Navbar'
import HelpBookTravelBusLayout from '../../../../components/help-components/HelpBookTravelBusLayout'
import { API } from '../../../../config'
import axios from 'axios'

const SeatAsssignment = ({ getHelp }) => {
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
            </Container>
            <Footer />
        </div>

    )
}
export async function getStaticProps() {
    const getHelp = await axios.get(`${API}/help/seat-assignment`);
    return {
      props: {
        getHelp: getHelp.data,
      },
    };
  }

export default SeatAsssignment