import Image from "next/image";
import React from "react";
import Container from "../../../components/Container";
import Footer from "../../../components/Footer";
import HelpOfferDriveSangaiLayout from "../../../components/help-components/HelpOfferDriveSangaiLayout";
import Navbar from "../../../components/Navbar";

const OfferDriveSangai = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[500px] md:h-[300px] relative">
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
          <h1 className="text-2xl text-blue-700 font-bold">
            You can get the info of offer and drive at sangai{" "}
          </h1>
        </HelpOfferDriveSangaiLayout>
      </Container>
      <Footer />
    </div>
  );
};

export default OfferDriveSangai;
