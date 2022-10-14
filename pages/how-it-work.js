import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { API } from "../config";

const howItWork = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <div className="my-6">
          <h1 className="font-normal text-3xl text-center">How Sangai Work</h1>
          {/* work flow */}
          <div className="md:w-[800px] m-auto mt-10 space-y-10">
            <div className="md:flex md:space-x-9">
              <img src="./laptop.png" alt="" />
              <div className="hidden md:block">
                <div className="w-[25px] h-[25px] rounded-full text-center bg-primary">
                  <span className="">1</span>
                </div>
                <div
                  className="border h-[80%] rounded-[100%] border-spacing-4 border-dashed"
                  style={{
                    borderColor: "transparent #000 transparent transparent",
                  }}
                ></div>
              </div>
              <div >
                <h1 className="text-xl">Driver</h1>
                <p>
                  Open the Sangai app or website to publish your ride by filling
                  out a form with the necessary details. Then, confirm your
                  ride.
                </p>
              </div>
            </div>
            <div className="md:flex md:space-x-9">
              <img src="./laptop.png" alt="" />
              <div className="hidden md:block">
                <div className="w-[25px] h-[25px] rounded-full text-center bg-primary">
                  <span className="">2</span>
                </div>
                <div
                  className="border h-[80%] rounded-[100%] border-spacing-4 border-dashed"
                  style={{
                    borderColor: "transparent transparent transparent #000",
                  }}
                ></div>
              </div>
              <div>
                <h1 className="text-xl">Passenger</h1>
                <p>
                  You can request a ride by filling out the form. If your
                  request is available, just Book the ride that matches your
                  destination at the lowest possible cost.
                </p>
              </div>
            </div>
            <div className="md:flex md:space-x-9">
              <img src="./laptop.png" alt="" />
              <div className="hidden md:block">
                <div className="w-[25px] h-[25px] rounded-full text-center bg-primary">
                  <span className="">3</span>
                </div>
                <div
                  className="border h-[80%] rounded-[100%] border-spacing-4 border-dashed"
                  style={{
                    borderColor: "transparent #000 transparent transparent",
                  }}
                ></div>
              </div>
              <div>
                <h1 className="text-xl">Get started to share ride</h1>
                <p>
                  When the published ride of the Driver matches the passenger’s
                  request and gets booked, Be ready to start your journey.
                </p>
              </div>
            </div>
            <div className="md:flex md:space-x-9">
              <img src="./laptop.png" alt="" />
              <div className="hidden md:block">
                <div className="w-[25px] h-[25px] rounded-full text-center bg-primary">
                  <span className="">4</span>
                </div>
                <div
                  className="border h-[80%] rounded-[100%] border-spacing-4 border-dashed"
                  style={{
                    borderColor: "transparent transparent transparent #000",
                  }}
                ></div>
              </div>
              <div>
                <h1 className="text-xl">Payment</h1>
                <p>
                  The payment method is also done during the booking process.
                </p>
              </div>
            </div>
            <div className="md:flex md:space-x-9">
              <img src="./laptop.png" alt="" />
              <div className="hidden md:block">
                <div className="w-[25px] h-[25px] rounded-full text-center bg-primary">
                  <span className="">5</span>
                </div>
                <div
                  className="border h-[80%] rounded-[100%] border-spacing-4 border-dashed"
                  style={{
                    borderColor: "transparent transparent transparent #000",
                  }}
                ></div>
              </div>
              <div>
                <h1 className="text-xl">Share Ride</h1>
                <p>
                  Share your ride and reach your destination on time. Enjoy the
                  ride-sharing.
                </p>
              </div>
            </div> 
          </div>
          {/* work flow end */}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default howItWork;
