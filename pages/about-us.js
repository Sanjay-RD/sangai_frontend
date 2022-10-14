import React from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-primary h-[200px]">
        <div className="flex justify-center items-center h-full">
          <h1 className="text-6xl text-white">About Us</h1>
        </div>
      </div>
      <Container>
        <div className="grid md:grid-cols-12 gap-10 my-5">
          <div className="col-span-4">
            <img src="/sharing.jpeg" alt="" />
          </div>
          <div className="col-span-8">
            <h1 className="text-3xl text-primaryDark underline mb-2">
              What is Sangai?
            </h1>
            <p className="text-xl text-primaryDark">
              Sangai is a ride-sharing platform that provides you with app-based
              services to solve any type of travel problem. If you have any
              means of a vehicle? Just share your ride and get paid.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-12 gap-10 my-10">
        <div className="col-span-4 md:hidden">
            <img src="/sharing1.jpeg" alt="" />
          </div>
          <div className="col-span-8">
            <h1 className="text-3xl text-primaryDark underline mb-2">
              Our Story and Mission
            </h1>
            <p className="text-xl text-primaryDark">
              In, 2022, a team of an organization discussed how to provide a
              ride-sharing app that serves the users differently. They founded a
              ‘Sangai’ which not only shares the ride but also provides a
              user-friendly environment to users solving the problem of the
              long-routed travel journey with cost-saving techniques. The
              mission of this App is not to make people work as a driver but to
              help them save his/her everyday travel expense by sharing empty
              seats in a vehicle with passengers of a matched location.
              Facilitating both the owner of a vehicle serving as a Driver and
              the passenger so that the Driver could save money. Additionally,
              the passengers could get appropriate rider sharing the ride at a
              low cost.
            </p>
          </div>
          <div className="col-span-4 hidden md:block">
            <img src="/sharing1.jpeg" alt="" />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default AboutUs;
