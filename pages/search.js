import React from "react";
import { useEffect } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import axios from "axios";
import { API } from "../config";
import moment from "moment";
import { useState } from "react";
import { useRouter } from "next/router";

const search = ({ rides, searchRide }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  console.log("searchRide", searchRide);
  const [leaving, setLeaving] = useState("");
  const [heading, setHeading] = useState("");
  const [date, setDate] = useState("");
  const [seat, setSeat] = useState("");
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    console.log("first");
    router.push(
      `/search?heading=${heading}&&leaving=${leaving}&&date=${date}&&seat=${seat}`
    );
  };
  return (
    <div>
      <Navbar />
      <div className="my-8">
        <h1 className="text-4xl text-center">Where do you want to go?</h1>
        <Container>
          <form
            className="grid grid-cols-12 gap-5 mt-7 mb-2"
            onSubmit={handleSubmitSearch}
          >
            <div className="flex flex-col col-span-3">
              <input
                type="text"
                placeholder="Leaving From"
                className="border px-2 py-2 border-[#d0d0d0] rounded-md"
                onChange={(e) => setLeaving(e.target.value)}
              />
            </div>
            <div className="flex flex-col col-span-3">
              <input
                type="text"
                placeholder="Leaving From"
                className="border px-2 py-2 border-[#d0d0d0] rounded-md"
                onChange={(e) => setHeading(e.target.value)}
              />
            </div>
            <div className="flex flex-col col-span-3">
              <input
                type="date"
                placeholder="Leaving From"
                className="border px-2 py-2 border-[#d0d0d0] rounded-md text-[#686868]"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="flex flex-col col-span-2">
              <input
                type="number"
                placeholder="Leaving From"
                className="border px-2 py-2 border-[#d0d0d0] rounded-md"
                onChange={(e) => setSeat(e.target.value)}
              />
            </div>
            <div className="col-span-1">
              <input
                type="submit"
                value="Search"
                className="rounded-md cursor-pointer py-2 w-full bg-primary text-white"
              />
            </div>
          </form>
        </Container>
        {/* line */}
        <div className="border-b"></div>
        {/* line */}
        {/* show ride available */}
        <Container>
          <div className="py-3">
            {searchRide.length > 0 ? (
              <div className="px-32">
                <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                  <ul class="grid grid-cols-4 -mb-px">
                    <li class="mr-2">
                      <a
                        href="#"
                        class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 w-full"
                      >
                        All
                      </a>
                    </li>
                    <li class="mr-2">
                      <a
                        href="#"
                        class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 w-full"
                      >
                        Bike
                      </a>
                    </li>
                    <li class="mr-2">
                      <a
                        href="#"
                        class="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active w-full"
                        aria-current="page"
                      >
                        Car
                      </a>
                    </li>
                    <li class="mr-2">
                      <a
                        href="#"
                        class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 w-full"
                      >
                        Bus
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="">
                  {searchRide.map((value) => (
                    <div
                      className="border rounded-xl  my-5"
                      style={{
                        boxShadow: "3px 3px 23px -8px rgba(117,165,105,0.59)",
                      }}
                    >
                      <div className="flex justify-between px-6 py-4">
                        <div>
                          <h1>
                            {value.leaving} to {value.heading}
                          </h1>
                          <p>{moment(value.date).format("MMMM Do YYYY")}</p>
                          <p>{value.seat} Seats</p>
                        </div>
                        <div>
                          <h1>Rs. {value.price}</h1>
                        </div>
                      </div>
                      <div className="border-t p-3 flex space-x-3">
                        <img
                          src={value.users.picture}
                          alt=""
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div>
                          <h1>{value.users.name}</h1>
                          <h1>{value.users.email}</h1>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <h1>Available Ride</h1>
                {rides.map((value) => (
                  <Link
                    href={`/search?heading=${value.heading}&&leaving=${value.leaving}&&date=&&seat=`}
                  >
                    <a className="">
                      <div className="flex justify-between items-center hover:bg-gray-100 px-6 py-2 my-3">
                        <div>
                          <h1 className="flex space-x-3">
                            <span>{value.leaving} </span>
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
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                              />
                            </svg>
                            <span>{value.heading}</span>
                          </h1>
                          <p>
                            {moment(value.date).format("MMMM Do YYYY")},{" "}
                            {value.seat} passenger
                          </p>
                        </div>
                        <div>
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
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </Link>
                ))}
              </>
            )}
          </div>
        </Container>
        {/* show ride available end */}
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const { leaving, heading, date, seat } = query;
  const rides = await axios.get(`${API}/ride`);
  const searchRide = await axios.get(
    `${API}/ride/search/ride?leaving=${leaving}&&heading=${heading}&&date=${date}&&seat=${seat}`
  );

  return {
    props: {
      rides: rides.data,
      searchRide: searchRide.data,
    },
  };
}

export default search;
