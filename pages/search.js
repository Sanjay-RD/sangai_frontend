import React from "react";
import { useEffect } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import axios from "axios";
import { API, baseUrl } from "../config";
import moment from "moment";
import { useState } from "react";
import { useRouter } from "next/router";
import { getRide } from "../redux/actions/rideAction";

const search = ({ rides, searchRide }) => {
  console.log("rides", rides);
  const dispatch = useDispatch();
  const router = useRouter();

  // console.log("path", router);
  const urlLength = router.asPath.split("&&");
  console.log("searchRide", searchRide);
  const [stage, setStage] = useState(1);
  const [leaving, setLeaving] = useState("");
  const [heading, setHeading] = useState("");
  const [date, setDate] = useState("");
  const [seat, setSeat] = useState("");
  const [activeTag, setActiveTag] = useState("all");
  const [isUrlActive, setIsUrlActive] = useState(false);
  const [isDetailShow, setIsDetailShow] = useState(false);
  const [seats, setSeats] = useState(1);
  const listRide = useSelector((state) => state.listRide);
  const { ride } = listRide;
  const rideDetail = ride && ride[0];
  console.log("rideDetail", rideDetail && rideDetail);
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    console.log("first");
    router.push(
      `/search?heading=${heading}&&leaving=${leaving}&&date=${date}&&seat=${seat}&&vehicle=${activeTag}`
    );
  };
  useEffect(() => {
    // console.log("location", navigator.geolocation);
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    setHeading(router.query.heading);
    setLeaving(router.query.leaving);
    setDate(router.query.date);
    setSeat(router.query.seat);
    if (urlLength.length > 1) {
      setIsUrlActive(true);
    } else {
      setIsUrlActive(false);
    }
  }, [router]);

  const handleNavClick = (value) => {
    router.push(`/search?vehicle=${value}`);
    setActiveTag(value);
  };
  const handleNavClickSearch = (value) => {
    router.push(
      `/search?heading=${heading}&&leaving=${leaving}&&date=${date}&&seat=${seat}&&vehicle=${value}`
    );
    setActiveTag(value);
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
                defaultValue={leaving}
              />
            </div>
            <div className="flex flex-col col-span-3">
              <input
                type="text"
                placeholder="Leaving From"
                className="border px-2 py-2 border-[#d0d0d0] rounded-md"
                onChange={(e) => setHeading(e.target.value)}
                defaultValue={heading}
              />
            </div>
            <div className="flex flex-col col-span-3">
              <input
                type="date"
                placeholder="Leaving From"
                className="border px-2 py-2 border-[#d0d0d0] rounded-md text-[#686868]"
                onChange={(e) => setDate(e.target.value)}
                defaultValue={date}
              />
            </div>
            <div className="flex flex-col col-span-2">
              <input
                type="number"
                placeholder="seats"
                className="border px-2 py-2 border-[#d0d0d0] rounded-md"
                onChange={(e) => setSeat(e.target.value)}
                defaultValue={seat}
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
          {/* <div className="py-3">
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
          </div> */}
          {/*  */}
          <div className="py-3 px-32">
            {isDetailShow ? (
              <>
                <button onClick={() => setIsDetailShow(false)}>Back</button>
                <div
                  className="border rounded-xl  my-5"
                  style={{
                    boxShadow: "3px 3px 23px -8px rgba(117,165,105,0.59)",
                  }}
                >
                  <div className="border-b p-3 flex space-x-3 items-center">
                    <img
                      src={rideDetail && rideDetail.rides.users.picture}
                      alt=""
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h1 className="text-xl">
                        {rideDetail && rideDetail.rides.users.name}
                      </h1>
                    </div>
                  </div>
                  <div className="border-b flex justify-between px-6 py-4">
                    <div>
                      <div className="flex items-center">
                        <h2 className="text-lg font-medium">Location : </h2>
                        <div className="flex space-x-2 items-center">
                          <h2 className="text-lg">
                            {rideDetail && rideDetail.rides.leaving}
                          </h2>
                          <span>to</span>{" "}
                          <h2 className="text-lg">
                            {rideDetail && rideDetail.rides.heading}
                          </h2>
                        </div>
                      </div>
                      <h1 className="text-lg">
                        Date :{" "}
                        {moment(rideDetail && rideDetail.rides.date).format(
                          "MMMM Do YYYY"
                        )}
                      </h1>
                      <p className="text-lg">
                        Availalble Seats : {rideDetail && rideDetail.rides.seat}{" "}
                        Seats
                      </p>
                    </div>
                    <div>
                      <h1 className="text-2xl">
                        Rs. {rideDetail && rideDetail.rides.price}
                      </h1>
                    </div>
                  </div>
                  <div className="px-6 py-4 border-b">
                    <div className="grid grid-cols-12 gap-7">
                      <div className="col-span-4">
                        <button
                          className={
                            stage === 1
                              ? "border px-3 py-2 bg-primary text-white w-full flex justify-between items-center rounded"
                              : "border px-3 py-2 bg-white w-full flex justify-between items-center rounded border-primary"
                          }
                          onClick={() => setStage(1)}
                        >
                          <h1>Basic Information</h1>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </button>
                        <button
                          className={
                            stage === 2
                              ? "border px-3 py-2 bg-primary text-white w-full flex justify-between items-center rounded my-3"
                              : "border px-3 py-2 bg-white w-full flex justify-between items-center rounded my-3 border-primary"
                          }
                          onClick={() => setStage(2)}
                        >
                          <h1>Driver License</h1>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </button>
                        <button
                          className={
                            stage === 3
                              ? "border px-3 py-2 bg-primary text-white w-full flex justify-between items-center rounded my-3"
                              : "border px-3 py-2 bg-white w-full flex justify-between items-center rounded my-3 border-primary"
                          }
                          onClick={() => setStage(3)}
                        >
                          <h1>ID Information</h1>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </button>
                        <button
                          className={
                            stage === 4
                              ? "border px-3 py-2 bg-primary text-white w-full flex justify-between items-center rounded my-3"
                              : "border px-3 py-2 bg-white w-full flex justify-between items-center rounded my-3 border-primary"
                          }
                          onClick={() => setStage(4)}
                        >
                          <h1>Veicle Information</h1>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="col-span-8">
                        {stage === 1 && (
                          <div className="border rounded-md">
                            <div className="border-b px-5 py-3 bg-primary text-white rounded-t-md">
                              <h1 className="text-xl">Basic Information</h1>
                            </div>
                            <div className="px-6 py-5">
                              <h1>
                                First Name :{" "}
                                {rideDetail && rideDetail.driverInfo.first_name}
                              </h1>
                              <h1>
                                Last Name :{" "}
                                {rideDetail && rideDetail.driverInfo.last_name}
                              </h1>
                              <h1>
                                Date of Birth :{" "}
                                {rideDetail &&
                                  rideDetail.driverInfo.date_of_birth}
                              </h1>
                              <h1>
                                Email :{" "}
                                {rideDetail && rideDetail.driverInfo.email}
                              </h1>
                            </div>
                          </div>
                        )}
                        {stage === 2 && (
                          <div className="border rounded-md">
                            <div className="border-b px-5 py-3 bg-primary text-white rounded-t-md">
                              <h1 className="text-xl">Driver License</h1>
                            </div>
                            <div className="px-6 py-5">
                              <h1>
                                Driving License Number :{" "}
                                {rideDetail &&
                                  rideDetail.licenseInfo.license_number}
                              </h1>
                              <div className="flex space-x-3">
                                <h1>License Front Image : </h1>
                                <span>
                                  {rideDetail &&
                                  rideDetail.licenseInfo.isVerified ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="w-6 h-6 text-primary"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="w-6 h-6 text-red-600"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                  )}
                                </span>
                              </div>
                              <div className="flex space-x-3">
                                <h1>License Back Image : </h1>
                                <span>
                                  {rideDetail &&
                                  rideDetail.licenseInfo.isVerified ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="w-6 h-6 text-primary"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="w-6 h-6 text-red-600"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                        {stage === 3 && (
                          <div className="border rounded-md">
                            <div className="border-b px-5 py-3 bg-primary text-white rounded-t-md">
                              <h1 className="text-xl">ID Information</h1>
                            </div>
                            <div className="px-6 py-5">
                              <div className="flex space-x-3">
                                <h1>Id Information</h1>
                                <span>
                                  {rideDetail &&
                                  rideDetail.IdInfo.isVerified ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="w-6 h-6 text-primary"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="w-6 h-6 text-red-600"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                        {stage === 4 && (
                          <div className="border rounded-md">
                            <div className="border-b px-5 py-3 bg-primary text-white rounded-t-md">
                              <h1 className="text-xl">Vehicle Information</h1>
                            </div>
                            <div className="px-6 py-5">
                              <h1>
                                Vehicle Type :{" "}
                                {rideDetail &&
                                  rideDetail.vehicleInfo.select_vehicle}
                              </h1>
                              <h1>
                                Vehicle Number Plate :{" "}
                                {rideDetail &&
                                  rideDetail.vehicleInfo.number_plate}
                              </h1>
                              <div>
                                <h1>Vehicle Photo</h1>
                                <img
                                  src={`${baseUrl}/${
                                    rideDetail &&
                                    rideDetail.vehicleInfo.vehicle_image
                                  }`}
                                  alt=""
                                />
                              </div>
                              <div className="flex space-x-3">
                                <h1>Billbook Photo</h1>
                                <span>
                                  {rideDetail &&
                                  rideDetail.vehicleInfo.isVerified ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="w-6 h-6 text-primary"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="w-6 h-6 text-red-600"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4 flex justify-center items-center space-x-5">
                    <div className="flex justify-between items-center space-x-5">
                      <div
                        className="border-2 rounded-[100%] h-8 w-8 flex justify-center border-primary cursor-pointer items-center"
                        onClick={() => seats > 1 && setSeats(seats - 1)}
                      >
                        <span className="text-3xl font-light text-primary items-center">
                          -
                        </span>
                      </div>
                      <span className="text-2xl text-primaryDark">{seats}</span>
                      <div
                        className="border-2 rounded-[100%] h-8 w-8 flex justify-center border-primary cursor-pointer items-center"
                        onClick={() => setSeats(seats + 1)}
                      >
                        <span className="text-2xl font-light text-primary items-center">
                          +
                        </span>
                      </div>
                    </div>
                    <button className="bg-primary px-5 py-2 rounded-xl text-white">
                      Request
                    </button>
                  </div>
                </div>
              </>
            ) : isUrlActive ? (
              <div className="">
                <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                  <ul class="grid grid-cols-4 -mb-px">
                    <li class="mr-2">
                      <a
                        // href="#"
                        class={
                          activeTag === "all"
                            ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active w-full cursor-pointer"
                            : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 w-full cursor-pointer"
                        }
                        onClick={() => handleNavClickSearch("all")}
                      >
                        All
                      </a>
                    </li>
                    <li class="mr-2">
                      <a
                        class={
                          activeTag === "bike"
                            ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active w-full cursor-pointer"
                            : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 w-full cursor-pointer"
                        }
                        onClick={() => handleNavClickSearch("bike")}
                      >
                        Bike
                      </a>
                    </li>
                    <li class="mr-2">
                      <a
                        class={
                          activeTag === "car"
                            ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active w-full cursor-pointer"
                            : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 w-full cursor-pointer"
                        }
                        aria-current="page"
                        onClick={() => handleNavClickSearch("car")}
                      >
                        Car
                      </a>
                    </li>
                    <li class="mr-2">
                      <a
                        class={
                          activeTag === "bus"
                            ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active w-full cursor-pointer"
                            : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 w-full cursor-pointer"
                        }
                        onClick={() => handleNavClickSearch("bus")}
                      >
                        Bus
                      </a>
                    </li>
                  </ul>
                </div>
                {searchRide.map((value) => (
                  <>
                    <div
                      className="border rounded-xl  my-5"
                      style={{
                        boxShadow: "3px 3px 23px -8px rgba(117,165,105,0.59)",
                      }}
                    >
                      <div className="flex justify-between px-6 py-4">
                        <div>
                          <h1>
                            {value.rides.leaving} to {value.rides.heading}
                          </h1>
                          <p>{moment(value.date).format("MMMM Do YYYY")}</p>
                          <p>{value.rides.seat} Seats</p>
                        </div>
                        <div>
                          <h1>Rs. {value.rides.price}</h1>
                        </div>
                      </div>
                      <div className="border-t p-3 flex space-x-3">
                        <img
                          src={value.rides.users.picture}
                          alt=""
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div>
                          <h1>{value.rides.users.name}</h1>
                          <h1>{value.rides.users.email}</h1>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            ) : (
              <div className="">
                <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                  <ul class="grid grid-cols-4 -mb-px">
                    <li class="mr-2">
                      <a
                        // href="#"
                        class={
                          activeTag === "all"
                            ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active w-full cursor-pointer"
                            : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 w-full cursor-pointer"
                        }
                        onClick={() => handleNavClick("all")}
                      >
                        All
                      </a>
                    </li>
                    <li class="mr-2">
                      <a
                        class={
                          activeTag === "bike"
                            ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active w-full cursor-pointer"
                            : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 w-full cursor-pointer"
                        }
                        onClick={() => handleNavClick("bike")}
                      >
                        Bike
                      </a>
                    </li>
                    <li class="mr-2">
                      <a
                        class={
                          activeTag === "car"
                            ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active w-full cursor-pointer"
                            : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 w-full cursor-pointer"
                        }
                        aria-current="page"
                        onClick={() => handleNavClick("car")}
                      >
                        Car
                      </a>
                    </li>
                    <li class="mr-2">
                      <a
                        class={
                          activeTag === "bus"
                            ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active w-full cursor-pointer"
                            : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 w-full cursor-pointer"
                        }
                        onClick={() => handleNavClick("bus")}
                      >
                        Bus
                      </a>
                    </li>
                  </ul>
                </div>
                {rides.map((value) => (
                  <>
                    <div
                      onClick={() => (
                        setIsDetailShow(true),
                        dispatch(getRide(value.rides.uuid))
                      )}
                    >
                      <div
                        className="border rounded-xl  my-5 cursor-pointer"
                        style={{
                          boxShadow: "3px 3px 23px -8px rgba(117,165,105,0.59)",
                        }}
                      >
                        <div className="flex justify-between px-6 py-4">
                          <div>
                            <h1>
                              {value.rides.leaving} to {value.rides.heading}
                            </h1>
                            <p>
                              {moment(value.rides.date).format("MMMM Do YYYY")}
                            </p>
                            <p>{value.rides.seat} Seats</p>
                          </div>
                          <div>
                            <h1>Rs. {value.rides.price}</h1>
                          </div>
                        </div>
                        <div className="border-t p-3 flex space-x-3">
                          <img
                            src={value.rides.users.picture}
                            alt=""
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                          <div>
                            <h1>{value.rides.users.name}</h1>
                            <h1>{value.rides.users.email}</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            )}
          </div>
          {/*  */}
        </Container>
        {/* show ride available end */}
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const { leaving, heading, date, seat, vehicle } = query;
  if (vehicle) {
    const rides = await axios.get(`${API}/ride?vehicle=${vehicle}`);
    const searchRide = await axios.get(
      `${API}/ride/search/ride?leaving=${leaving}&&heading=${heading}&&date=${date}&&seat=${seat}&&vehicle=${vehicle}`
    );

    return {
      props: {
        rides: rides.data,
        searchRide: searchRide.data,
      },
    };
  } else {
    const rides = await axios.get(`${API}/ride`);
    const searchRide = await axios.get(
      `${API}/ride/search/ride?leaving=${leaving}&&heading=${heading}&&date=${date}&&seat=${seat}&&vehicle=${vehicle}`
    );

    return {
      props: {
        rides: rides.data,
        searchRide: searchRide.data,
      },
    };
  }
}

export default search;
