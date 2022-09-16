import React from "react";
import Link from 'next/link'
import { useState } from "react";

const HelpBookTravelBusSidebar = () => {
    const [isBookingBusShown, setBookingBusShown] = useState(false);
    const [isBagsRequirementShown, setIsBagsRequirementShown] = useState(false);
    const [isBookingConfirmationShown, setIsBookingConfirmationShown] = useState(false);
    const [isFaresSchedulesShown, setIsFaresSchedulesShown] = useState(false);
    const [isRefundsShown, setIsRefundsShown] = useState(false);
    const handleBookingBusClick = (e) => {
        setBookingBusShown(current => !current);
    };
    const handleBagsRequirementClick = (e) => {
        setIsBagsRequirementShown(current => !current);
    };
    const handleBookingConfirmationClick = (e) => {
        setIsBookingConfirmationShown(current => !current);
    };
    const handleFaresSchedulesClick = (e) => {
        setIsFaresSchedulesShown(current => !current);
    };
    const handleRefundsClick = (e) => {
        setIsRefundsShown(current => !current);
    };

    return (
        <div>
            <ul className="mb-2">
                <li className="mb-2 ml-3">
                    <a className="text-xl cursor-pointer" onClick={handleBookingBusClick}>Booking a Bus</a>
                    {isBookingBusShown && (
                        <ul>
                            <li className="mb-2 ml-3">
                                <Link
                                    href="/help-centre/book-travel-bus/booking-bus/booking-bus-online"
                                >
                                    <h1 className="text-lg cursor-pointer">Booking a bus online</h1>
                                </Link>
                            </li>
                            <li className="mb-2 ml-3">
                                <Link
                                    href="/help-centre/book-travel-bus/booking-bus/book-in-person"
                                >
                                    <h1 className="text-lg cursor-pointer">Can I book a bus in person?</h1>
                                </Link>
                            </li>
                            <li className="mb-2 ml-3">
                                <Link
                                    href="/help-centre/book-travel-bus/booking-bus/choosing-bus-seat"
                                >
                                    <h1 className="text-lg cursor-pointer">Choosing your bus seat</h1>
                                </Link>
                            </li>
                            <li className="mb-2 ml-3">
                                <Link
                                    href="/help-centre/book-travel-bus/booking-bus/save-bus-seat-and-pay-later"
                                >
                                    <h1 className="text-lg cursor-pointer">Can I save my bus seat and pay later?</h1>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="mb-2 ml-3">
                    <a className="text-xl cursor-pointer" onClick={handleBagsRequirementClick}>Bags and requirements</a>
                    {isBagsRequirementShown && (
                        <ul>
                            <li className="mb-2 ml-3">
                                <Link
                                    href="/help-centre/book-travel-bus/bags-and-requirements/bus-luggage-allowance"
                                >
                                    <h1 className="text-lg cursor-pointer">Bus luggage allowance</h1>
                                </Link>
                            </li>
                            <li className="mb-2 ml-3">
                                <Link
                                    href="/help-centre/book-travel-bus/bags-and-requirements/travelling-with-children"
                                >
                                    <h1 className="text-lg cursor-pointer">Travelling with children</h1>
                                </Link>
                            </li>
                            <li className="mb-2 ml-3">
                                <Link
                                    href="/help-centre/book-travel-bus/bags-and-requirements/age-requirements"
                                >
                                    <h1 className="text-lg cursor-pointer">Age requirements</h1>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="mb-2 ml-3">
                    <a className="text-xl cursor-pointer" onClick={handleBookingConfirmationClick}>Booking confirmation</a>
                    {isBookingConfirmationShown && (
                        <ul>
                            <li className="mb-2 ml-3 ">
                                <Link
                                    href="/help-centre/book-travel-bus/booking-confirmation/booking-confirmation-email"
                                >
                                    <h1 className="text-lg cursor-pointer">If you didn't receive a booking confirmation email</h1>
                                </Link>
                            </li>
                            <li className="mb-2 ml-3">
                                <Link
                                    href="/help-centre/book-travel-bus/booking-confirmation/seat-assignment"
                                >
                                    <h1 className="text-lg cursor-pointer">Seat assignment</h1>
                                </Link>
                            </li>
                            <li className="mb-2 ml-3">
                                <Link
                                    href="/help-centre/book-travel-bus/booking-confirmation/find-bus-booking-info"
                                >
                                    <h1 className="text-lg cursor-pointer">Find your bus booking info</h1>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="mb-2 ml-3">
                    <a className="text-xl cursor-pointer" onClick={handleFaresSchedulesClick}>Fares & schedules</a>
                    {isFaresSchedulesShown && (
                        <ul>
                            <li className="mb-2 ml-3 ">
                                <Link
                                    href="/help-centre/book-travel-bus/fares-schedules/bus-departure-arrival"
                                >
                                    <h1 className="text-lg cursor-pointer">Bus departure and arrival destinations</h1>
                                </Link>
                            </li>
                            <li className="mb-2 ml-3">
                                <Link
                                    href="/help-centre/book-travel-bus/fares-schedules/payment-method-accepted"
                                >
                                    <h1 className="text-lg cursor-pointer">Payment method accepted</h1>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="mb-2 ml-3">
                    <a className="text-xl cursor-pointer" onClick={handleRefundsClick}>Refunds</a>
                    {isRefundsShown && (
                        <ul>
                            <li className="mb-2 ml-3 ">
                                <Link
                                    href="/help-centre/book-travel-bus/refunds/bus-carrier-cancel-ride"
                                >
                                    <h1 className="text-lg cursor-pointer">If the bus carrier cancels your ride?</h1>
                                </Link>
                            </li>
                            <li className="mb-2 ml-3">
                                <Link
                                    href="/help-centre/book-travel-bus/refunds/refund-bus-ride"
                                >
                                    <h1 className="text-lg cursor-pointer">Can I get a refund for my bus ride?</h1>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default HelpBookTravelBusSidebar;
