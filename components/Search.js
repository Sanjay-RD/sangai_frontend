import React, { Fragment } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

const Search = () => {
  const router = useRouter();
  const [leaving, setLeaving] = useState("");
  const [heading, setHeading] = useState("");
  const [date, setDate] = useState("");
  const [seat, setSeat] = useState("");
  const [seats, setSeats] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  console.log("startDate", startDate);
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    router.push(
      `/search?heading=${heading}&&leaving=${leaving}&&date=${startDate}&&seat=${seats}&&vehicle=all`
    );
  };
  return (
    <div className="px-20 absolute left-0 right-0 bottom-[40px]">
      {/* <div className="border bg-white h-[150px] m-auto rounded-2xl">
        <div className="p-5">
          <h1 className="text-xl mb-2">Search Ride</h1>
          <form
            className="grid grid-cols-12 gap-8"
            onSubmit={handleSubmitSearch}
          >
            <div className="flex flex-col col-span-3">
              <label className="text-xl mb-1 text-[#686868] font-normal">
                Leaving From
              </label>
              <input
                type="text"
                placeholder="Leaving from ..."
                className="border px-2 py-1 border-[#d0d0d0] rounded-md"
                onChange={(e) => setLeaving(e.target.value)}
              />
            </div>
            <div className="flex flex-col col-span-3">
              <label className="text-xl mb-1 text-[#686868] font-normal">
                Going To
              </label>
              <input
                type="text"
                placeholder="Going to ..."
                className="border px-2 py-1 border-[#d0d0d0] rounded-md"
                onChange={(e) => setHeading(e.target.value)}
              />
            </div>
            <div className="flex flex-col col-span-3">
              <label className="text-xl mb-1 text-[#686868] font-normal">
                Date
              </label>
              <input
                type="date"
                placeholder="Leaving From"
                className="border px-2 py-1 border-[#d0d0d0] rounded-md text-[#686868]"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label className="text-xl mb-1 text-[#686868] font-normal">
                Passenger
              </label>
              <input
                type="number"
                placeholder="Leaving From"
                className="border px-2 py-1 border-[#d0d0d0] rounded-md"
                onChange={(e) => setSeat(e.target.value)}
              />
            </div>
            <div className="mt-8 col-span-1">
              <input
                type="submit"
                value="Search"
                className="rounded-md cursor-pointer py-1 w-full bg-primary text-white"
              />
            </div>
          </form>
        </div>
      </div> */}
      <form onSubmit={handleSubmitSearch}>
        <div className="bg-white rounded-xl grid grid-cols-12 h-[56px]">
          <div className="col-span-10">
            <div className="grid grid-cols-12 px-5">
              <div className="flex col-span-4 items-center">
                <div className="flex items-center space-x-2 h-[56px]">
                  <i class="fa-regular fa-circle text-gray-400 text-xl"></i>
                  <input
                    type="text"
                    placeholder="Leaving From..."
                    className="text-primary outline-none  w-full text-lg py-1"
                    onChange={(e) => setLeaving(e.target.value)}
                  />
                </div>
                <div className="border-r border-gray-300 ml-14 h-[40px]"></div>
              </div>
              <div className="flex col-span-4 items-center">
                <div className="flex items-center space-x-2 h-[56px]">
                  <i class="fa-regular fa-circle text-gray-400 text-xl"></i>
                  <input
                    type="text"
                    placeholder="Going to..."
                    className="text-primary outline-none  w-full text-lg py-1"
                    onChange={(e) => setHeading(e.target.value)}
                  />
                </div>
                <div className="border-r border-gray-300 ml-14 h-[40px]"></div>
              </div>
              <div className="flex col-span-3 items-center">
                <div className="flex items-center space-x-2 h-[56px]">
                  <i class="fa-regular fa-address-book text-gray-400 text-xl"></i>
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
              <div className="flex col-span-1 items-center relative">
                <div className="flex items-center space-x-2 h-[56px]">
                  <i class="fa-regular fa-user text-gray-400 text-xl"></i>

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
