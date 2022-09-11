import React, { useState } from 'react'
import Container from '../components/Container'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from 'react';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'react-moment';
const login = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [passenger, setPassenger] = useState(1);
    const [price, setPrice] = useState(25);
    useEffect(() => {

    }, [passenger]);
    const handleDecPassenger = () => {
        if (passenger != 1) {
            setPassenger(passenger - 1)
        }
    }
    const handleIncPassenger = () => {
        setPassenger(passenger + 1)
    }
    const handleIncPrice = () => {
        setPrice(price + 5)
    }
    const handleDecPrice = () => {
        if (price != 25) {
            setPrice(price - 5)
        }
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
    }
    console.log("first", passenger)
    return (
        <Container>
            <h1 className='text-center font-sans font-bold text-4xl'>Publish a ride</h1>
            <form className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmitForm}>
                <div className="grid grid-cols-2 gap-4 divide-x">
                    <div className='p-4'>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-xl font-bold mb-2 mx-2" for="username">
                                Where are you leaving from
                            </label>
                            <input className="shadow-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-xl font-bold mb-2 mx-2" for="username">
                                Where are you going
                            </label>
                            <div className="w-full">
                                <DatePicker
                                    focusSelectedMonth={false}
                                    startDate={startDate}
                                    shouldCloseOnSelect={false}
                                    monthsShown={2}
                                    inline

                                    disabledKeyboardNavigation // <-- active-day bug is still open
                                //onChange={(e) => { setDateRange(e) }}
                                />
                            </div>

                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-xl font-bold mb-2 mx-2" for="username">
                                So, How many Sangai passenger can you take
                            </label>
                            <div class="flex flex-row h-14 w-full">
                                <button class=" bg-white text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-full cursor-pointer outline-double mx-2"
                                    onClick={handleDecPassenger}>
                                    <span class="m-auto text-2xl font-thin">−</span>
                                </button>
                                <input type="number" class="focus:outline-none text-center w-full bg-white font-semibold text-xl hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none mx-2"
                                    value={passenger}
                                    name="passenger"></input>
                                <button class="bg-white text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-full cursor-pointer outline-double"
                                    onClick={handleIncPassenger}>
                                    <span class="m-auto text-2xl font-thin">+</span>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className='p-4'>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-xl font-bold mb-2 mx-2" for="username">
                                Where are you heading
                            </label>
                            <input className="shadow-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-xl font-bold mb-2 mx-2" for="username">
                                Set your price per seat
                            </label>
                            <div class="flex flex-row h-14 w-full">
                                <button class=" bg-white text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-full cursor-pointer outline-double mx-2"
                                    onClick={handleDecPrice}>
                                    <span class="m-auto text-2xl font-thin">−</span>
                                </button>
                                <input type="number" class="focus:outline-none text-center w-full bg-white font-semibold text-xl hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none mx-2"
                                    value={price}
                                    name="passenger"></input>
                                <button class="bg-white text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-full cursor-pointer outline-double"
                                    onClick={handleIncPrice}>
                                    <span class="m-auto text-2xl font-thin">+</span>
                                </button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-xl font-bold mb-2 mx-2" for="username">
                                At what time will you pick passenger up
                            </label>
                            <TimePicker
                                showSecond={false}
                                minuteStep={5}
                                use12Hours
                                className="w-full h-14 font-bold text-xl text-gray-700"
                                defualtValue="10:00 am"
                                
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-xl font-bold mb-2 mx-2" for="username">
                                Can Passenger book instantly
                            </label>
                            <ul class="w-full text-xl font-medium text-gray-900 bg-gray-200 rounded-lg border border-gray-200  dark:border-gray-100 dark:text-white">
                                <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                                    <div class="flex items-center pl-3">
                                        <input id="list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-200 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label for="list-radio-license" class="py-3 ml-2 w-full text-xl text-gray-700 font-bold">Yes Sure</label>
                                    </div>
                                </li>
                                <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                                    <div class="flex items-center pl-3">
                                        <input id="list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label for="list-radio-id" class="py-3 ml-2 w-full text-xl text-gray-700 font-bold">No, I will reply each request</label>
                                    </div>
                                </li>

                            </ul>


                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full" type="button">
                        Publish
                    </button>
                </div>
            </form>
        </Container>
    )
}

export default login