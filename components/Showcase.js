import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import { useDispatch, useSelector } from "react-redux";
import Typed from "typed.js";
import { useTypewriter } from "react-simple-typewriter";
const Showcase = () => {
  const dispatch = useDispatch();

  const [chooseOption, setChooseOption] = useState("pilot");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [leaving, setLeaving] = useState("");
  const [going, setGoing] = useState("");
  const [date, setDate] = useState("");
  const [seats, setSeats] = useState("");
  const [vehicle_type, setVehicleType] = useState("");
  const [vehicle_color, setVehicleColor] = useState("");
  const [vehicle_number, setVehicleNumber] = useState("");

  const handleSubmitPilot = (e) => {
    e.preventDefault();
    dispatch(
      createPilot(
        name,
        email,
        address,
        phone,
        leaving,
        going,
        date,
        seats,
        vehicle_type,
        vehicle_color,
        vehicle_number
      )
    );
  };
  const handleSubmitMate = (e) => {
    e.preventDefault();
    dispatch(
      createMate(name, email, address, phone, leaving, going, date, seats)
    );
  };
  const [text] = useTypewriter({
    words: ["Ride", "Travelling Cost"],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <div>
      <div className=" w-full h-[30vh] sm:h-[70vh] overflow-hidden bg-gray-200 relative">
        <Image
          alt="Sangai banner"
          src="/banner.jpeg"
          priority
          objectFit="cover"
          layout="fill"
          // className="object-no-repeat object-cover object-center object-fixed"
        />
        <div className="absolute top-[10%] md:top-[25%] w-full text-center">
          <h1 className="text-2xl md:text-6xl text-gray-800 capitalize font-extrabold mb-24">
            Share your <span className="text-red-900">{text}</span>
          </h1>
          <div className="flex justify-center items-center mt-16 sm:mt-14 space-x-10">
            <Link href="/publish-ride">
              <a className="border px-2 py-0 md:px-4  md:py-2 rounded-lg bg-white text-sm sm:text-lg flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>Publish a ride</p>
              </a>
            </Link>
            <Link href="/search">
              <a className="border px-2 py-0 md:px-4  md:py-2 rounded-lg bg-white text-sm sm:text-lg items-center flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>Find a ride</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
