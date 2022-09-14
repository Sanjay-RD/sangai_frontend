import React from "react";
import { useEffect } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import axios from "axios";
import { API } from "../config";
import moment from "moment";

const search = ({ rides, searchRide }) => {
  const dispatch = useDispatch();
  console.log("searchRide", searchRide);
  return (
    <div>
      <Navbar />
      <Container>
        <div className="my-8">
          <h1 className="text-4xl text-center">Where do you want to go?</h1>
          <form className="grid grid-cols-12 gap-5 my-7">
            <div className="flex flex-col col-span-3">
              <input
                type="text"
                placeholder="Leaving From"
                className="border px-2 py-2 border-[#d0d0d0] rounded-md"
              />
            </div>
            <div className="flex flex-col col-span-3">
              <input
                type="text"
                placeholder="Leaving From"
                className="border px-2 py-2 border-[#d0d0d0] rounded-md"
              />
            </div>
            <div className="flex flex-col col-span-3">
              <input
                type="date"
                placeholder="Leaving From"
                className="border px-2 py-2 border-[#d0d0d0] rounded-md text-[#686868]"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <input
                type="number"
                placeholder="Leaving From"
                className="border px-2 py-2 border-[#d0d0d0] rounded-md"
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
          {/* line */}
          <div className="border-b"></div>
          {/* line */}
          {/* show ride available */}
          <div className="py-3">
            {searchRide.length > 0 ? (
              <h1>hello</h1>
            ) : (
              rides.map((value) => (
                <Link
                  href={`/search?heading=${value.heading}&&leaving=${value.leaving}`}
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
              ))
            )}
          </div>
          {/* show ride available end */}
        </div>
      </Container>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const { leaving, heading } = query;
  const rides = await axios.get(`${API}/ride`);
  const searchRide = await axios.get(
    `${API}/ride/search/ride?leaving=${leaving}&&heading=${heading}`
  );

  return {
    props: {
      rides: rides.data,
      searchRide: searchRide.data,
    },
  };
}

export default search;
