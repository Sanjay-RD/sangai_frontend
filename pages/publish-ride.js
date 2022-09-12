import Navbar from "../components/Navbar";
import React, { useState } from "react";
import Container from "../components/Container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from "react";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from "moment";
import Footer from "../components/Footer";
import axios from "axios";
import styled from 'styled-components'
const PublishRide = () => {
  const currentTime = moment();
  const [startDate, setStartDate] = useState(new Date());
  const [passenger, setPassenger] = useState(1);
  const [price, setPrice] = useState(25);
  const [location, setLocation] = useState([]);
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [startSuggestions, setStartSuggestions] = useState([]);
  const [endSuggestions, setEndSuggestions] = useState([]);
  const [time, setTime] = useState(currentTime);

  const StyledTimePicker = styled(TimePicker)`
  & .rc-time-picker-panel-select-option-selected {
    background-color: #edeffe;
    font-weight: bold;
  }

  & .rc-time-picker-clear,
  & .rc-time-picker-clear-icon:after {
    font-size: 20px;
  }

  & .rc-time-picker-panel-select,
  & .rc-time-picker-input,
  & .rc-time-picker-panel-input {
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
    color:black

    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
`;

  useEffect(() => {
    const loadLocations = async () => {
      const res = await axios.get('https://fakestoreapi.com/products');
      setLocation(res.data)
    }
    loadLocations();
  }, []);

  const handleStartLocation = (startLocation) => {
    let matches = []
    if (startLocation.length > 0) {
      matches = location.filter((location) => {
        const regex = new RegExp(`${startLocation}`, "gi");
        return location.title.match(regex)
      })
    }
    setStartSuggestions(matches)
    setStartLocation(startLocation);
  }
  const handleStartSuggestion = (startLocation) => {
    setStartLocation(startLocation)
    setStartSuggestions([]);
  }

  const handleEndLocation = (endLocation) => {
    let matches = []
    if (endLocation.length > 0) {
      matches = location.filter((location) => {
        const regex = new RegExp(`${endLocation}`, "gi");
        return location.title.match(regex)
      })
    }
    setEndSuggestions(matches)
    setEndLocation(endLocation);
  }
  const handleEndSuggestion = (startLocation) => {
    setEndLocation(startLocation)
    setEndSuggestions([]);
  }

  const handleTime = (value) => {
    setTime(value);
  };

  const handleDecPassenger = () => {
    if (passenger != 1) {
      setPassenger(passenger - 1);
    }
  };
  const handleIncPassenger = () => {
    setPassenger(passenger + 1);
  };
  const handleIncPrice = () => {
    setPrice(price + 5);
  };
  const handleDecPrice = () => {
    if (price != 25) {
      setPrice(price - 5);
    }
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Navbar />
      <Container>
        <h1 className="text-center font-sans font-bold text-4xl">
          Publish a ride
        </h1>
        <form
          className="bg-white rounded my-6 mb-4"
          onSubmit={handleSubmitForm}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-xl font-bold mb-2 mx-2"
                  for="username"
                >
                  Where are you leaving from
                </label>
                <input
                  className="text-xl bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  onChange={(e) => handleStartLocation(e.target.value)}
                  value={startLocation}
                /* onBlur={()=>{
                  setTimeout(()=>{
                    setStartSuggestions([])
                  },100);
                }} */
                />
                {startSuggestions && startSuggestions.map((startSuggestion, i) =>
                  <div key={i}
                    className="cursor-pointer mt-2 w-full text-xl font-medium text-gray-900  border border-gray-200  "
                    onClick={() => handleStartSuggestion(startSuggestion.title)}>
                    {startSuggestion.title}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-xl font-bold mb-2 mx-2"
                  for="username"
                >
                  When are you going
                </label>
                <div className="text-center">
                  <DatePicker
                    startDate={startDate}
                    monthsShown={2}
                    inline                              
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-xl font-bold mb-3 mx-2"
                  for="username"
                >
                  So, How many Sangai passenger can you take
                </label>
                <div class="flex flex-row h-14 w-full">
                  <button
                    class="bg-gray-50  hover:bg-white h-full w-20 rounded-full cursor-pointer border border-black mx-2"
                    onClick={handleDecPassenger}
                  >
                    <span class="m-auto text-2xl font-thin">−</span>
                  </button>
                  <input
                    type="number"
                    class="focus:outline-none text-center w-full bg-gray-50 font-semibold text-xl hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none mx-2"
                    value={passenger}
                    name="passenger"
                  ></input>
                  <button
                    class="bg-gray-50 hover:bg-white h-full w-20 rounded-full cursor-pointer border border-black mx-2"
                    onClick={handleIncPassenger}
                  >
                    <span class="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-xl font-bold mb-2 mx-2"
                  for="username"
                >
                  Where are you heading
                </label>
                <input
                  className="text-xl bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  onChange={(e) => handleEndLocation(e.target.value)}
                  value={endLocation}
                /* onBlur={()=>{
                  setTimeout(()=>{
                    setEndSuggestions([])
                  },100);
                }} */
                />
                {endSuggestions && endSuggestions.map((endSuggestion, i) =>
                  <div key={i}
                    className="cursor-pointer mt-2 w-full text-xl font-medium text-gray-900  border border-gray-200"
                    onClick={() => handleEndSuggestion(endSuggestion.title)}>
                    {endSuggestion.title}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-xl font-bold mb-2 mx-2"
                  for="username"
                >
                  Set your price per seat
                </label>
                <div class="flex flex-row h-14 w-full">
                  <button
                    class="bg-white hover:bg-gray-100 h-full w-20 rounded-full cursor-pointer border border-black mx-2"
                    onClick={handleDecPrice}
                  >
                    <span class="m-auto text-2xl font-thin">−</span>
                  </button>
                  <input
                    type="number"
                    class="focus:outline-none text-center w-full bg-gray-50 font-semibold text-xl hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none mx-2"
                    value={price}
                    name="passenger"
                  ></input>
                  <button
                    class="bg-white hover:bg-gray-100 h-full w-20 rounded-full cursor-pointer border border-black mx-2"
                    onClick={handleIncPrice}
                  >
                    <span class="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-xl font-bold mb-2 mx-2"
                  for="username"
                >
                  At what time will you pick passenger up
                </label>
                <div className="text-center">
                  <StyledTimePicker
                    showSecond={false}
                    minuteStep={5}
                    use12Hours
                    allowEmpty
                    value={time}
                    onChange={handleTime}
                    className="w-full text-gray-900"
                  />
                </div>

              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-xl font-bold mb-2 mx-2"
                  for="username"
                >
                  Can Passenger book instantly
                </label>
                <ul class="w-full text-xl font-medium text-gray-900 bg-gray-50  rounded-lg border border-gray-200  dark:border-gray-100 dark:text-white">
                  <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                    <div class="flex items-center pl-3">
                      <input
                        id="list-radio-license"
                        type="radio"
                        value=""
                        name="list-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-200 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        for="list-radio-license"
                        class="py-3 ml-2 w-full text-xl text-gray-700 font-bold"
                      >
                        Yes Sure
                      </label>
                    </div>
                  </li>
                  <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                    <div class="flex items-center pl-3">
                      <input
                        id="list-radio-id"
                        type="radio"
                        value=""
                        name="list-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        for="list-radio-id"
                        class="py-3 ml-2 w-full text-xl text-gray-700 font-bold"
                      >
                        No, I will reply each request
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"
              type="button"
            >
              Publish
            </button>
          </div>
        </form>
      </Container>
      <Footer />
    </div>
  );
};

export default PublishRide;
