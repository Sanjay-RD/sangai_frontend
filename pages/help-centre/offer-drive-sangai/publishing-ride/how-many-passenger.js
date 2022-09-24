import axios from "axios";
import Image from "next/image";
import React from "react";
import Container from "../../../../components/Container";
import Footer from "../../../../components/Footer";
import HelpOfferDriveSangaiLayout from "../../../../components/help-components/HelpOfferDriveSangaiLayout";
import Navbar from "../../../../components/Navbar";
import { API } from "../../../../config";

const HowManyPassemger = ({ getHelp }) => {
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
          <div
            dangerouslySetInnerHTML={{
              __html: getHelp.description,
            }}
            className="description"
          ></div>
        </HelpOfferDriveSangaiLayout>
      </Container>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const getHelp = await axios.get(`${API}/help/how-many-passenger`);
  return {
    props: {
      getHelp: getHelp.data,
    },
  };
}

export default HowManyPassemger;
