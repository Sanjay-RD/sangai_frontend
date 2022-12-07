import React, { Fragment } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../redux/actions/locationAction";

const Search = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const [seat, setSeat] = useState("");
  const [seats, setSeats] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [startSuggestions, setStartSuggestions] = useState([]);
  const [endSuggestions, setEndSuggestions] = useState([]);
  const listLocationState = useSelector((state) => state.getLocations);
  const { locations } = listLocationState;
  console.log("startDate", startDate);
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    router.push(
      `/search?heading=${endLocation}&&leaving=${startLocation}&&date=${startDate}&&seat=${seats}&&vehicle=all`
    );
  };
  useEffect(() => {
    dispatch(getLocations());
  }, []);
  // console.log("first", location);
  const handleStartLocation = (startLocation) => {
    let matches = [];
    if (startLocation.length > 0) {
      matches = locations.filter((location) => {
        const regex = new RegExp(`${startLocation}`, "gi");
        return location.name.match(regex);
      });
    }
    setStartSuggestions(matches);
    setStartLocation(startLocation);
  };
  const handleStartSuggestion = (startLocation) => {
    setStartLocation(startLocation);
    setStartSuggestions([]);
  };
  const handleEndLocation = (endLocation) => {
    let matches = [];
    if (endLocation.length > 0) {
      matches = locations.filter((location) => {
        const regex = new RegExp(`${endLocation}`, "gi");
        return location.name.match(regex);
      });
    }
    setEndSuggestions(matches);
    setEndLocation(endLocation);
  };
  const handleEndSuggestion = (endLocation) => {
    setEndLocation(endLocation);
    setEndSuggestions([]);
  };

  return (
    <div className="px-20 absolute left-0 right-0 bottom-[40px] hidden sm:block">
      <form onSubmit={handleSubmitSearch}>
        <div className="bg-white rounded-xl grid grid-cols-12 h-[56px]">
          <div className="col-span-10">
            <div className="grid grid-cols-4 gap-2 px-2">
              <div>
                <div>
                  <div className="flex items-center space-x-2 h-[56px]">
                    {/* <i class="fa-regular fa-circle "></i> */}
                    <i class="fa-solid fa-location-dot text-green-400 text-xl"></i>
                    <input
                      type="text"
                      placeholder="Leaving From..."
                      className="text-primary outline-none  w-full text-lg py-1"
                      onChange={(e) => handleStartLocation(e.target.value)}
                      value={startLocation}
                    />
                  </div>
                  <div className="bg-white rounded shadow-2xl">
                    {startSuggestions &&
                      startSuggestions.map((startSuggestion, i) => (
                        <div
                          key={i}
                          className="cursor-pointer mt-2 w-full text-lg font-normal py-2 text-gray-900  border-b border-gray-200"
                          onClick={() =>
                            handleStartSuggestion(startSuggestion.name)
                          }
                        >
                          {startSuggestion.name}
                        </div>
                      ))}
                  </div>
                </div>

                <div className="border-r border-gray-300 ml-14 h-[40px]"></div>
              </div>
              <div>
                <div>
                  <div className="flex items-center space-x-2 h-[56px]">
                    {/* <i class="fa-regular fa-circle text-gray-400 text-xl"></i> */}
                    <i class="fa-solid fa-location-dot text-green-400 text-xl"></i>

                    <input
                      type="text"
                      placeholder="Going to..."
                      className="text-primary outline-none  w-full text-lg py-1"
                      onChange={(e) => handleEndLocation(e.target.value)}
                      value={endLocation}
                    />
                  </div>
                  <div className="bg-white rounded shadow-2xl">
                    {endSuggestions &&
                      endSuggestions.map((endSuggestion, i) => (
                        <div
                          key={i}
                          className="cursor-pointer mt-2 w-full text-lg font-normal py-2 text-gray-900  border-b border-gray-200"
                          onClick={() =>
                            handleEndSuggestion(endSuggestion.name)
                          }
                        >
                          {endSuggestion.name}
                        </div>
                      ))}
                  </div>
                </div>
                <div className="border-r border-gray-300 ml-14 h-[40px]"></div>
              </div>
              <div>
                <div className="flex items-center space-x-2 h-[56px]">
                  {/* <i class="fa-regular fa-address-book text-gray-400 text-xl"></i> */}
                  <i class="fa-solid fa-calendar-days text-red-600 text-xl"></i>
                  {/* <input
                    type="text"
                    placeholder="Today"
                    className="text-primary outline-none  w-full text-lg py-1"
                  /> */}
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="outline-none text-gray-600"
                    placeholderText="Going Date"
                  />
                </div>
                <div className="border-r border-gray-300 mx-3 h-[40px]"></div>
              </div>
              <div>
                <div className="flex items-center space-x-2 h-[56px]">
                  <i class="fa-regular fa-user  text-xl"></i>

                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex w-[50px] justify-center rounded-md text-black bg-opacity-20 px-1 py-2 text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <span className="text-gray-600 outline-none w-full text-lg py-1">
                          {seats}
                        </span>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                        {/* select number */}
                        <div className="border px-5 py-3 w-[280px] absolute bottom-[-70px] left-[-70px] bg-white rounded-xl flex justify-between items-center">
                          <div>
                            <h1 className="text-lg">Passenger</h1>
                          </div>
                          <div className="flex justify-between items-center space-x-3">
                            <div
                              className="border-2 rounded-[100%] h-8 w-8 flex justify-center border-primary cursor-pointer items-center"
                              onClick={() => seats > 1 && setSeats(seats - 1)}
                            >
                              <span className="text-3xl font-light text-primary items-center">
                                -
                              </span>
                            </div>
                            <span className="text-2xl text-primaryDark">
                              {seats}
                            </span>
                            <div
                              className="border-2 rounded-[100%] h-8 w-8 flex justify-center border-primary cursor-pointer items-center"
                              onClick={() => setSeats(seats + 1)}
                            >
                              <span className="text-2xl font-light text-primary items-center">
                                +
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* select number */}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <button className="w-full h-[56px] rounded-tr-xl rounded-br-xl bg-primary text-lg text-white">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
