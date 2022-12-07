import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import DatePicker from "react-datepicker";
import moment from "moment";
import "rc-time-picker/assets/index.css";
import { useDispatch, useSelector } from "react-redux";
import { createRide, getRides } from "../redux/actions/rideAction";
import { API } from "../config";
import { isAuth } from "../redux/utils";
import { useRouter } from "next/router";
import { getLocations } from "../redux/actions/locationAction";

const PublishRode = () => {
  const dispatch = useDispatch();
  const userLoginState = useSelector((state) => state.userLogin);
  const { userInfo } = userLoginState;
  const router = useRouter();
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [startSuggestions, setStartSuggestions] = useState([]);
  const [endSuggestions, setEndSuggestions] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [route, setRoute] = useState();
  const [time, setTime] = useState();
  const [seats, setSeats] = useState(1);
  const [price, setPrice] = useState(100);
  const listLocationState = useSelector((state) => state.getLocations);
  const { locations } = listLocationState;
  const rideAddState = useSelector((state) => state.createRide);
  const { success } = rideAddState;
  useEffect(() => {
    dispatch(getLocations());
    // dispatch(getRides());
    if (!isAuth()) {
      router.push("/login");
    }
    if (success) {
      router.push(`/profile/${isAuth() && isAuth().user.uuid}`);
    }
  }, [userInfo, success]);

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

  const handleSubmitPublishRide = async (e) => {
    e.preventDefault();
    console.log("first");
    console.log(isAuth());
    if (isAuth().user.isDriver) {
      dispatch(
        createRide(
          "21dfadf",
          startLocation,
          endLocation,
          startDate,
          price,
          seats,
          time,
          1,
          isAuth().user.id
        )
      );
    } else {
      router.push("/driver");
    }
  };
  return (
    <div>
      <Navbar />
      <Container>
        {/* <h1 className="text-center font-sans font-bold text-4xl">
          Publish a ride
        </h1> */}
        <form
          onSubmit={handleSubmitPublishRide}
          className="w-full md:w-[600px] m-auto md:space-y-8 space-y-5 my-10 "
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-2xl md:text-3xl text-primaryDark">
              Where are you leaving from?
            </label>
            <input
              type="text"
              placeholder="eg.Kathmandu"
              className="text-lg bg-[#EDEDED] appearance-none rounded-md w-full py-3 px-4 leading-tight focus:outline-none focus:bg-[#EDEDED] focus:border-primary text-primaryDark"
              onChange={(e) => handleStartLocation(e.target.value)}
              value={startLocation}
            />
            {startSuggestions &&
              startSuggestions.map((startSuggestion, i) => (
                <div
                  key={i}
                  className="cursor-pointer mt-2 w-full text-lg font-normal py-2 text-gray-900  border-b border-gray-200"
                  onClick={() => handleStartSuggestion(startSuggestion.name)}
                >
                  {startSuggestion.name}
                </div>
              ))}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-2xl md:text-3xl text-primaryDark">
              Where are you heading?
            </label>
            <input
              type="text"
              placeholder="eg.Kathmandu"
              className="text-lg bg-[#EDEDED] appearance-none rounded-md w-full py-3 px-4 leading-tight focus:outline-none focus:bg-[#EDEDED] focus:border-primary text-primaryDark"
              onChange={(e) => handleEndLocation(e.target.value)}
              value={endLocation}
            />
            {endSuggestions &&
              endSuggestions.map((endSuggestion, i) => (
                <div
                  key={i}
                  className="cursor-pointer mt-2 w-full text-lg font-normal py-2 text-gray-900  border-b border-gray-200"
                  onClick={() => handleEndSuggestion(endSuggestion.name)}
                >
                  {endSuggestion.name}
                </div>
              ))}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-2xl md:text-3xl text-primaryDark">
              Through which route?
            </label>
            <select
              className="text-lg bg-[#EDEDED] appearance-none rounded-md w-full py-3 px-4 leading-tight focus:outline-none focus:bg-[#EDEDED] focus:border-primary text-primaryDark"
              onChange={(e) => setRoute(e.target.value)}
              // required
            >
              <option value="">Select Location</option>
              {/* {locations &&
                locations.map((value) => (
                  <option value={value.name}>{value.name}</option>
                ))} */}
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-2xl md:text-3xl text-primaryDark">
              When are you going?
            </label>
            <DatePicker
              startDate={startDate}
              monthsShown={2}
              inline
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-2xl md:text-3xl text-primaryDark">
              At what time will you pick passengers up?
            </label>
            <input
              type="time"
              className="text-lg bg-[#EDEDED] appearance-none rounded-md w-full py-3 px-4 leading-tight focus:outline-none focus:bg-[#EDEDED] focus:border-primary text-primaryDark"
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-2xl md:text-3xl text-primaryDark">
              So how many passengers can you take?
            </label>
            <div className="flex justify-between items-center w-[300px] m-auto">
              <div
                className="border-2 rounded-[100%] h-10 w-10 flex justify-center border-primary cursor-pointer"
                onClick={() => seats > 1 && setSeats(seats - 1)}
              >
                <span className="text-2xl font-light text-primary">-</span>
              </div>
              <span className="text-2xl md:text-3xl text-primaryDark">
                {seats}
              </span>
              <div
                className="border-2 rounded-[100%] h-10 w-10 flex justify-center border-primary cursor-pointer"
                onClick={() => setSeats(seats + 1)}
              >
                <span className="text-2xl font-light text-primary">+</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-2xl md:text-3xl text-primaryDark">
              Set your price per seat
            </label>
            <span className="mt-4 bg-red-100 text-red-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded">
              ~The recommended fare is NPR 100
            </span>
            <div className="flex justify-between items-center w-[300px] m-auto">
              <div
                className="border-2 rounded-[100%] h-10 w-10 flex justify-center border-primary cursor-pointer"
                onClick={() => seats > 1 && setPrice(price - 1)}
              >
                <span className="text-2xl font-light text-primary">-</span>
              </div>
              <span className="text-2xl md:text-3xl text-primaryDark">
                Rs.{price}
              </span>
              <div
                className="border-2 rounded-[100%] h-10 w-10 flex justify-center border-primary cursor-pointer"
                onClick={() => setPrice(price + 1)}
              >
                <span className="text-2xl font-light text-primary">+</span>
              </div>
            </div>
          </div>
          <div className="w-max m-auto mt-28">
            <input
              type="submit"
              value="Publish"
              className="px-10 py-2 rounded-md text-xl bg-primary cursor-pointer"
            />
          </div>
        </form>
      </Container>
    </div>
  );
};

export default PublishRode;
