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
      <div className=" w-full h-[1000px] md:h-[82vh] overflow-hidden bg-gray-200 relative">
        <Image
          alt="Mountains"
          src="/sharing3.png"
          priority
          objectFit="cover"
          layout="fill"
        />
        <div className="absolute top-[5%] md:top-[10%] w-full text-center">
          <h1 className="text-xl md:text-7xl text-white capitalize">
            our pick of rides at low prices
          </h1>
          <div className="my-[30px]">
            <select
              className="outline-none w-[150px] px-2 py-2 rounded-md text-gray-500"
              onChange={(e) => setChooseOption(e.target.value)}
            >
              <option value="">Choose</option>
              <option value="pilot">Pilot</option>
              <option value="mate">Mate(Sathi)</option>
            </select>
          </div>
          {chooseOption === "pilot" ? (
            <form className="" onSubmit={handleSubmitPilot}>
              <Container>
                <div className="flex flex-col space-y-5">
                  {/* basic info form */}
                  <div className="bg-white rounded-xl grid grid-cols-2 md:grid-cols-4 gap-2 py-2 px-5 h-max md:h-[56px]">
                    <div className="flex">
                      <div className="flex items-center space-x-2">
                        <i class="fa-regular fa-user text-gray-400 text-xl"></i>
                        <input
                          type="text"
                          placeholder="Name"
                          className="text-primary outline-none  w-full text-xl py-1"
                          onChange={(e) => setName(e.target.value)}
                          defaultValue={name}
                          required
                        />
                      </div>
                      <div className="border-r border-gray-300 mx-3"></div>
                    </div>
                    <div className="flex">
                      <div className="flex items-center space-x-2">
                        <i class="fa-regular fa-envelope text-gray-400 text-xl"></i>
                        <input
                          type="email"
                          placeholder="Email"
                          className="text-primary outline-none  w-full text-xl py-1"
                          onChange={(e) => setEmail(e.target.value)}
                          defaultValue={email}
                          required
                        />
                      </div>
                      <div className="hidden md:block border-r border-gray-300 mx-3"></div>
                    </div>
                    <div className="flex">
                      <div className="flex items-center space-x-2">
                        <i class="fa-regular fa-address-book text-gray-400 text-xl"></i>
                        <input
                          type="text"
                          placeholder="Address"
                          className="text-primary outline-none  w-full text-xl py-1"
                          onChange={(e) => setAddress(e.target.value)}
                          defaultValue={address}
                          required
                        />
                      </div>
                      <div className="border-r border-gray-300 mx-3"></div>
                    </div>
                    <div className="flex">
                      <div className="flex items-center space-x-2">
                        <i class="fa-solid fa-phone text-gray-400 text-xl"></i>
                        <input
                          type="tel"
                          placeholder="Phone"
                          className="text-primary outline-none  w-full text-xl py-1"
                          onChange={(e) => setPhone(e.target.value)}
                          defaultValue={phone}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  {/* basic info form end */}
                  {/* vehicle info form */}
                  <div className="bg-white rounded-xl grid grid-cols-1 md:grid-cols-3 gap-2 py-2 px-5 h-max md:h-[56px]">
                    <div className="flex">
                      <div className="flex items-center space-x-2 w-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-9 h-9 text-gray-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                          />
                        </svg>
                        <input
                          type="text"
                          placeholder="Vehicle Type"
                          className="text-primary outline-none  w-full text-xl py-1"
                          onChange={(e) => setVehicleType(e.target.value)}
                          defaultValue={vehicle_type}
                          required
                        />
                      </div>
                      <div className="hidden md:block border-r border-gray-300 mx-3"></div>
                    </div>
                    <div className="flex">
                      <div className="flex items-center space-x-2 w-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-9 h-9 text-gray-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                          />
                        </svg>
                        <input
                          type="text"
                          placeholder="Vehicle Color"
                          className="text-primary outline-none  w-full text-xl py-1"
                          onChange={(e) => setVehicleColor(e.target.value)}
                          defaultValue={vehicle_color}
                          required
                        />
                      </div>
                      <div className="hidden md:block border-r border-gray-300 mx-3"></div>
                    </div>
                    <div className="flex">
                      <div className="flex items-center space-x-2 w-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-9 h-9 text-gray-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                          />
                        </svg>
                        <input
                          type="text"
                          placeholder="Vehicle Number"
                          className="text-primary outline-none  w-full text-xl py-1"
                          onChange={(e) => setVehicleNumber(e.target.value)}
                          defaultValue={vehicle_number}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  {/* vehicle info form end */}
                  {/* ride info */}
                  <div className="bg-white rounded-xl md:grid md:grid-cols-12 h-max md:h-[56px]">
                    <div className="col-span-10">
                      <div className="md:grid md:grid-cols-12">
                        <div className="md:flex md:col-span-4 items-center ml-3 px-5 md:px-0">
                          <div className="flex items-center space-x-2 h-[56px]">
                            <i class="fa-regular fa-circle text-gray-400 text-xl"></i>
                            <input
                              type="text"
                              placeholder="Leaving From..."
                              className="text-primary outline-none w-full text-xl py-1"
                              onChange={(e) => setLeaving(e.target.value)}
                              defaultValue={leaving}
                              required
                            />
                          </div>
                          <div className="hidden md:block border-r border-gray-300 mx-3 h-[40px]"></div>
                        </div>
                        <div className="md:flex md:col-span-4 items-center ml-3 px-5 md:px-0">
                          <div className="flex items-center space-x-2 h-[56px]">
                            <i class="fa-regular fa-circle text-gray-400 text-xl"></i>
                            <input
                              type="text"
                              placeholder="Going to..."
                              className="text-primary outline-none  w-full text-xl py-1"
                              onChange={(e) => setGoing(e.target.value)}
                              defaultValue={going}
                              required
                            />
                          </div>
                          <div className="hidden md:block border-r border-gray-300 mx-3 h-[40px]"></div>
                        </div>
                        <div className="md:flex md:col-span-3 items-center ml-3 px-5 md:px-0">
                          <div className="flex items-center space-x-2 h-[56px]">
                            <i class="fa-regular fa-calendar text-gray-400 text-xl"></i>
                            <input
                              type="date"
                              placeholder="Today"
                              className="text-gray-400 outline-none  w-full text-xl py-1"
                              onChange={(e) => setDate(e.target.value)}
                              defaultValue={date}
                              required
                            />
                          </div>
                          <div className="hidden md:block border-r border-gray-300 mx-3 h-[40px]"></div>
                        </div>
                        <div className="flex col-span-1 items-center ml-3 px-5 md:px-0">
                          <div className="flex items-center space-x-2 h-[56px]">
                            <i class="fa-regular fa-user text-gray-400 text-xl"></i>
                            <input
                              type="number"
                              placeholder="1"
                              className="text-primary outline-none  w-full text-xl py-1"
                              onChange={(e) => setSeats(e.target.value)}
                              defaultValue={seats}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <button className="w-full h-[56px] rounded-xl md:rounded-none md:rounded-tr-xl md:rounded-br-xl bg-primary text-2xl text-white">
                        Submit
                      </button>
                    </div>
                  </div>
                  {/* ride info end */}
                </div>
              </Container>
            </form>
          ) : (
            <form className="mt-[90px]" onSubmit={handleSubmitMate}>
              <Container>
                <div className="flex flex-col space-y-5">
                  {/* basic info form */}
                  <div className="bg-white rounded-xl grid grid-cols-2 md:grid-cols-4 gap-2 py-2 px-5">
                    <div className="flex">
                      <div className="flex items-center space-x-2">
                        <i class="fa-regular fa-user text-gray-400 text-xl"></i>
                        <input
                          type="text"
                          placeholder="Name"
                          className="text-primary outline-none  w-full text-xl py-1"
                          onChange={(e) => setName(e.target.value)}
                          defaultValue={name}
                          required
                        />
                      </div>
                      <div className="border-r border-gray-300 mx-3"></div>
                    </div>
                    <div className="flex">
                      <div className="flex items-center space-x-2">
                        <i class="fa-regular fa-envelope text-gray-400 text-xl"></i>
                        <input
                          type="email"
                          placeholder="Email"
                          className="text-primary outline-none  w-full text-xl py-1"
                          onChange={(e) => setEmail(e.target.value)}
                          defaultValue={email}
                          required
                        />
                      </div>
                      <div className="hidden md:bock border-r border-gray-300 mx-3"></div>
                    </div>
                    <div className="flex">
                      <div className="flex items-center space-x-2">
                        <i class="fa-regular fa-address-book text-gray-400 text-xl"></i>
                        <input
                          type="text"
                          placeholder="Address"
                          className="text-primary outline-none  w-full text-xl py-1"
                          onChange={(e) => setAddress(e.target.value)}
                          defaultValue={address}
                          required
                        />
                      </div>
                      <div className="border-r border-gray-300 mx-3"></div>
                    </div>
                    <div className="flex">
                      <div className="flex items-center space-x-2">
                        <i class="fa-solid fa-phone text-gray-400 text-xl"></i>
                        <input
                          type="tel"
                          placeholder="Phone"
                          className="text-primary outline-none  w-full text-xl py-1"
                          onChange={(e) => setPhone(e.target.value)}
                          defaultValue={phone}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  {/* basic info form end */}
                  {/* ride info */}
                  <div className="bg-white rounded-xl md:grid md:grid-cols-12 h-max md:h-[56px]">
                    <div className="col-span-10">
                      <div className="md:grid md:grid-cols-12">
                        <div className="flex col-span-4 items-center ml-3 px-5 md:px-0">
                          <div className="flex items-center space-x-2 h-[56px] w-full">
                            <i class="fa-regular fa-circle text-gray-400 text-xl"></i>
                            <input
                              type="text"
                              placeholder="Leaving From..."
                              className="text-primary outline-none  w-full text-xl py-1"
                              onChange={(e) => setLeaving(e.target.value)}
                              defaultValue={leaving}
                              required
                            />
                          </div>
                          <div className="hidden md:block border-r border-gray-300 mx-3 h-[40px]"></div>
                        </div>
                        <div className="flex col-span-4 items-center ml-3 px-5 md:px-0">
                          <div className="flex items-center space-x-2 h-[56px] w-full">
                            <i class="fa-regular fa-circle text-gray-400 text-xl"></i>
                            <input
                              type="text"
                              placeholder="Going to..."
                              className="text-primary outline-none  w-full text-xl py-1"
                              onChange={(e) => setGoing(e.target.value)}
                              defaultValue={going}
                              required
                            />
                          </div>
                          <div className="hidden md:block border-r border-gray-300 mx-3 h-[40px]"></div>
                        </div>
                        <div className="flex col-span-3 items-center ml-3 px-5 md:px-0">
                          <div className="flex items-center space-x-2 h-[56px] w-full">
                            <i class="fa-regular fa-calendar text-gray-400 text-xl"></i>
                            <input
                              type="date"
                              placeholder="Today"
                              className="text-gray-400 outline-none  w-full text-xl py-1"
                              onChange={(e) => setDate(e.target.value)}
                              defaultValue={date}
                              required
                            />
                          </div>
                          <div className="hidden md:block border-r border-gray-300 mx-3 h-[40px]"></div>
                        </div>
                        <div className="flex col-span-1 items-center ml-3 px-5 md:px-0">
                          <div className="flex items-center space-x-2 h-[56px] w-full">
                            <i class="fa-regular fa-user text-gray-400 text-xl"></i>
                            <input
                              type="number"
                              placeholder="1"
                              className="text-primary outline-none  w-full text-xl py-1"
                              onChange={(e) => setSeats(e.target.value)}
                              defaultValue={seats}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <button className="w-full h-[56px] rounded-lg md:rounded-none md:rounded-tr-xl md:rounded-br-xl bg-primary text-2xl text-white">
                        Submit
                      </button>
                    </div>
                  </div>
                  {/* ride info end */}
                </div>
              </Container>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
