import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import { useDispatch, useSelector } from "react-redux";
import { createMate } from "../redux/actions/mateAction";
import { createPilot } from "../redux/actions/pilotActon";

const Showcase = () => {
  const dispatch = useDispatch();

  const createMateSate = useSelector((state) => state.createMate);
  const { success } = createMateSate;

  const [chooseOption, setChooseOption] = useState("pilot");
  // console.log("chooseOption", chooseOption);

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
    console.log("pilot");
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
    console.log("mate");
    dispatch(
      createMate(name, email, address, phone, leaving, going, date, seats)
    );
  };

  useEffect(() => {
    if (success) {
      setName("");
    }
  }, [success]);
  return (
    <div>
      <div className=" w-full h-[1000px] md:h-[70vh] overflow-hidden bg-gray-200 relative">
        <Image
          alt="Mountains"
          src="/sharing1.jpeg"
          priority
          objectFit="cover"
          layout="fill"
        />
        <div className="absolute top-[5%] md:top-[20%] w-full text-center">
          <h1 className="text-xl md:text-5xl text-white capitalize">
            Share your ride, Share your traveling cost.
          </h1>
          <div className="flex justify-center items-center mt-14 space-x-10">
            <Link href="/">
              <a className="border px-4 py-1 rounded-lg bg-white text-lg flex items-center space-x-2">
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
            <Link href="/">
              <a className="border px-4 py-1 rounded-lg bg-white text-lg items-center flex space-x-2">
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
