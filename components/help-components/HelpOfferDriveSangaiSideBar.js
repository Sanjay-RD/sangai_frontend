import React from "react";
import Link from 'next/link'
import { useState } from "react";

const HelpOfferDriveSangaiSidebar = () => {
    const [isPublishingRideShown, setPublishingRideShown] = useState(false);
    const [isManagingPublicationsShown, setIsManagingPublicationsShown] = useState(false);
    const [isBookStatusRideInfoShown, setIsBookStatusRideInfoShown] = useState(false);
    const [isContactingPassengerShown, setIsContactingPassengerShown] = useState(false);
    const [isCancellationShown, setIsCancellationShown] = useState(false);
    const [isGettingPaidShown, setIsGettingPaidShown] = useState(false);

    const handlePublishingRideClick = (e) => {
        setPublishingRideShown(current => !current);
    };
    const handleManagingPublicationsClick = (e) => {
        setIsManagingPublicationsShown(current => !current);
    };
    const handleIsBookStatusRideInfoClick = (e) => {
        setIsBookStatusRideInfoShown(current => !current);
    };
    const handleContactingPassengerClick = (e) => {
        setIsContactingPassengerShown(current => !current);
    };

    const handleCancellationClick = (e) => {
        setIsCancellationShown(current => !current);
    };
    const handleGettingPaidClick = (e) => {
        setIsGettingPaidShown(current => !current);
    };

    return (
        <div>
            <ul className="mb-2">
                <li className="mb-2 ml-3">
                    <a className="text-xl cursor-pointer" onClick={handlePublishingRideClick}>Publishing a ride</a>
                    {isPublishingRideShown && (
                        <ul>
                            <li className="mb-2 ml-3">
                                <Link
                                    href="/help-centre/offer-drive-sangai/publishing-ride/choosing-route"
                                >
                                    <h1 className="text-lg cursor-pointer">Choosing your route</h1>
                                </Link>
                            </li>
                            <li className="mb-2 ml-3">
                                <Link
                                    href="/help-centre/offer-drive-sangai/publishing-ride/how-many-passenger"
                                >
                                    <h1 className="text-lg cursor-pointer">How many passenger can i take?</h1>
                                </Link>
                            </li>
                            <li className="mb-2 ml-3">
                                <Link
                                    href="/help-centre/offer-drive-sangai/publishing-ride/how-passenger-book"
                                >
                                    <h1 className="text-lg cursor-pointer">Choosing how passenger can book</h1>
                                </Link>
                            </li>

                        </ul>
                    )}
                </li>

                <li className="mb-2 ml-3">
                    <a className="text-xl cursor-pointer" onClick={handleManagingPublicationsClick}>Managing your publications</a>
                    {isManagingPublicationsShown && (
                        <ul>
                            <li className="mb-2 ml-3 ">
                                <Link
                                    href="/help-centre/offer-drive-sangai/managing-publications/rides-price"
                                >
                                    <h1 className="text-lg cursor-pointer">Why your ride's price may look different?</h1>
                                </Link>
                            </li>
                            <li className="mb-2 ml-3 ">
                                <Link
                                    href="/help-centre/offer-drive-sangai/managing-publications/publication-online"
                                >
                                    <h1 className="text-lg cursor-pointer">Set your publication online</h1>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li className="mb-2 ml-3">
                    <a className="text-xl cursor-pointer" onClick={handleIsBookStatusRideInfoClick}>Booking status and Ride info</a>
                    {isBookStatusRideInfoShown && (
                        <ul>
                            <li className="mb-2 ml-3 ">
                                <Link
                                    href="/help-centre/offer-drive-sangai/booking-status-ride-info/bookings-passenger-details"
                                >
                                    <h1 className="text-lg cursor-pointer">Find your bookings and Passenger details</h1>
                                </Link>
                            </li>
                            <li className="mb-2 ml-3 ">
                                <Link
                                    href="/help-centre/offer-drive-sangai/booking-status-ride-info/check-booking-confirmed"
                                >
                                    <h1 className="text-lg cursor-pointer">How to check if a booking confirmed</h1>
                                </Link>
                            </li>
                            <li className="mb-2 ml-3 ">
                                <Link
                                    href="/help-centre/offer-drive-sangai/booking-status-ride-info/pickup-dropoff-point"
                                >
                                    <h1 className="text-lg cursor-pointer">How to find your pickup and dropoff points</h1>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li className="mb-2 ml-3">
                    <a className="text-xl cursor-pointer" onClick={handleContactingPassengerClick}>Contacting Passengers</a>
                    {isContactingPassengerShown && (
                        <ul>
                            <li className="mb-2 ml-3 ">
                                <Link
                                    href="/help-centre/offer-drive-sangai/contacting-passengers/respond-queries"
                                >
                                    <h1 className="text-lg cursor-pointer">If you cannot get online to respond to queries</h1>
                                </Link>
                            </li>

                            <li className="mb-2 ml-3 ">
                                <Link
                                    href="/help-centre/offer-drive-sangai/contacting-passengers/passenger-not-responding"
                                >
                                    <h1 className="text-lg cursor-pointer">If the passenger is not responding</h1>
                                </Link>
                            </li>
                            
                        </ul>
                    )}
                </li>

                <li className="mb-2 ml-3">
                    <a className="text-xl cursor-pointer" onClick={handleCancellationClick}>Cancellations</a>
                    {isCancellationShown && (
                        <ul>
                            <li className="mb-2 ml-3 ">
                                <Link
                                    href="/help-centre/offer-drive-sangai/cancellations/cancel-confirm-booking"
                                >
                                    <h1 className="text-lg cursor-pointer">How a driver cancel a confirmed booking</h1>
                                </Link>
                            </li>
                            <li className="mb-2 ml-3 ">
                                <Link
                                    href="/help-centre/offer-drive-sangai/cancellations/cancel-not-showup"
                                >
                                    <h1 className="text-lg cursor-pointer">If your passenger cancels or doesn't show up</h1>
                                </Link>
                            </li>


                            
                        </ul>
                    )}
                </li>

                <li className="mb-2 ml-3">
                    <a className="text-xl cursor-pointer" onClick={handleGettingPaidClick}>Getting paid</a>
                    {isGettingPaidShown && (
                        <ul>
                            <li className="mb-2 ml-3 ">
                                <Link
                                    href="/help-centre/offer-drive-sangai/getting-paid/transfer-methods"
                                >
                                    <h1 className="text-lg cursor-pointer">Types of transfer method</h1>
                                </Link>
                            </li>
                            <li className="mb-2 ml-3 ">
                                <Link
                                    href="/help-centre/offer-drive-sangai/getting-paid/get-money"
                                >
                                    <h1 className="text-lg cursor-pointer">When you'll get your money?</h1>
                                </Link>
                            </li>

                        </ul>
                    )}
                </li>

            </ul>
        </div>
    );
};

export default HelpOfferDriveSangaiSidebar;
