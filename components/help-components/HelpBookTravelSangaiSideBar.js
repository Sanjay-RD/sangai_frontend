import React from "react";
import Link from 'next/link'
import { useState } from "react";
import { useRouter } from "next/router";

const HelpBookTravelSangaiSidebar = () => {
    const router = useRouter();
  console.log("first", router.pathname.split("/")[4]);
  const urlPath = router.pathname.split("/")[4];
  const urlRealPath = router.pathname;
    const [isBookingSangaiShown, setBookingSangaiShown] = useState(false);
    const [isPaymentPricingRefundShown, setIsPaymentPricingRefundShown] = useState(false);
    const [isSearchingBookingShown, setIsSearchingBookingShown] = useState(false);
    const handleBookingSangaiClick = (e) => {
        setBookingSangaiShown(current => !current);
    };
    const handlePaymentPricingRefundClick = (e) => {
        setIsPaymentPricingRefundShown(current => !current);
    };
    const handleSearchingBookingClick = (e) => {
        setIsSearchingBookingShown(current => !current);
    };

    return (
        <div>
            <ul className="mb-2">
                <li className="mb-2 ml-3">
                    <a className="text-xl cursor-pointer" onClick={handleSearchingBookingClick}>Searching and booking</a>
                    {isSearchingBookingShown && (
                        <ul>
                            <li className="mb-2 ml-3">
                                <Link
                                    href="/help-centre/book-travel-sangai/searching-and-booking/how-to-search"
                                >
                                    <h1 
                                    className={
                                        urlRealPath ===
                                        "/help-centre/book-travel-sangai/searching-and-booking/how-to-search"
                                          ? "text-md cursor-pointer underline"
                                          : "text-md cursor-pointer"
                                      }>How to search</h1>
                                </Link>
                            </li>
                            <li className="mb-2 ml-3">
                                <Link
                                    href="/help-centre/book-travel-sangai/searching-and-booking/understanding-publications"
                                >
                                    <h1 className={
                                        urlRealPath ===
                                        "/help-centre/book-travel-sangai/searching-and-booking/understanding-publications"
                                          ? "text-md cursor-pointer underline"
                                          : "text-md cursor-pointer"
                                      }>Understanding publications</h1>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="mb-2 ml-3">
                    <a className="text-xl cursor-pointer" onClick={handleBookingSangaiClick}>Booking Sangai</a>
                    {isBookingSangaiShown && (
                        <ul>
                            <li className="mb-2 ml-3">
                                <Link
                                    href="/help-centre/book-travel-sangai/booking-sangai/driver-response-time"
                                >
                                    <h1 
                                    className={
                                        urlRealPath ===
                                        "/help-centre/book-travel-sangai/booking-sangai/driver-response-time"
                                          ? "text-md cursor-pointer underline"
                                          : "text-md cursor-pointer"
                                      }>Driver response time</h1>
                                </Link>
                            </li>
                            <li className="mb-2 ml-3">
                                <Link
                                    href="/help-centre/book-travel-sangai/booking-sangai/booking-request-approve"
                                >
                                    <h1 className={
                                        urlRealPath ===
                                        "/help-centre/book-travel-sangai/booking-sangai/booking-request-approve"
                                          ? "text-md cursor-pointer underline"
                                          : "text-md cursor-pointer"
                                      }>How to know if your booking request is approves?</h1>
                                </Link>
                            </li>
                            <li className="mb-2 ml-3">
                                <Link
                                    href="/help-centre/book-travel-sangai/booking-sangai/cancelling-booking-request"
                                >
                                    <h1 
                                    className={
                                        urlRealPath ===
                                        "/help-centre/book-travel-sangai/booking-sangai/cancelling-booking-request"
                                          ? "text-md cursor-pointer underline"
                                          : "text-md cursor-pointer"
                                      }>Cancelling a booking request</h1>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="mb-2 ml-3">
                    <a className="text-xl cursor-pointer" onClick={handlePaymentPricingRefundClick}>Payment, Pricing, Refunds</a>
                    {isPaymentPricingRefundShown && (
                        <ul>
                            <li className="mb-2 ml-3 ">
                                <Link
                                    href="/help-centre/book-travel-sangai/payment-pricing-refunds/paying-sangai-ride"
                                >
                                    <h1 className={
                                        urlRealPath ===
                                        "/help-centre/book-travel-sangai/payment-pricing-refunds/paying-sangai-ride"
                                          ? "text-md cursor-pointer underline"
                                          : "text-md cursor-pointer"
                                      }>Paying for Sangai ride</h1>
                                </Link>
                            </li>
                            <li className="mb-2 ml-3 ">
                                <Link
                                    href="/help-centre/book-travel-sangai/payment-pricing-refunds/pricing-fees"
                                >
                                    <h1 
                                    className={
                                        urlRealPath ===
                                        "/help-centre/book-travel-sangai/payment-pricing-refunds/pricing-fees"
                                          ? "text-md cursor-pointer underline"
                                          : "text-md cursor-pointer"
                                      }>Pricing and fees</h1>
                                </Link>
                            </li>
                            <li className="mb-2 ml-3 ">
                                <Link
                                    href="/help-centre/book-travel-sangai/payment-pricing-refunds/refunds"
                                >
                                    <h1 className={
                                        urlRealPath ===
                                        "/help-centre/book-travel-sangai/payment-pricing-refunds/refunds"
                                          ? "text-md cursor-pointer underline"
                                          : "text-md cursor-pointer"
                                      }>Refunds</h1>
                                </Link>
                            </li>
                            <li className="mb-2 ml-3 ">
                                <Link
                                    href="/help-centre/book-travel-sangai/payment-pricing-refunds/invoices-receipts"
                                >
                                    <h1 
                                    className={
                                        urlRealPath ===
                                        "/help-centre/book-travel-sangai/payment-pricing-refunds/invoices-receipts"
                                          ? "text-md cursor-pointer underline"
                                          : "text-md cursor-pointer"
                                      }>Invoices and Receipts</h1>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default HelpBookTravelSangaiSidebar;
