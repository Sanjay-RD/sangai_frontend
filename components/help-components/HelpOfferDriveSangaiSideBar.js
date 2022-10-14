import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const HelpOfferDriveSangaiSidebar = () => {
  const router = useRouter();
  console.log("first", router.pathname.split("/")[4]);
  const urlPath = router.pathname.split("/")[4];
  const urlRealPath = router.pathname;
  const [isPublishingRideShown, setPublishingRideShown] = useState(false);
  const [isManagingPublicationsShown, setIsManagingPublicationsShown] =
    useState(false);
  const [isBookStatusRideInfoShown, setIsBookStatusRideInfoShown] =
    useState(false);
  const [isContactingPassengerShown, setIsContactingPassengerShown] =
    useState(false);
  const [isCancellationShown, setIsCancellationShown] = useState(false);
  const [isGettingPaidShown, setIsGettingPaidShown] = useState(false);

  const handlePublishingRideClick = (e) => {
    setPublishingRideShown((current) => !current);
  };
  const handleManagingPublicationsClick = (e) => {
    setIsManagingPublicationsShown((current) => !current);
  };
  const handleIsBookStatusRideInfoClick = (e) => {
    setIsBookStatusRideInfoShown((current) => !current);
  };
  const handleContactingPassengerClick = (e) => {
    setIsContactingPassengerShown((current) => !current);
  };

  const handleCancellationClick = (e) => {
    setIsCancellationShown((current) => !current);
  };
  const handleGettingPaidClick = (e) => {
    setIsGettingPaidShown((current) => !current);
  };

  return (
    <div>
      <ul className="my-10">
        <li className="mb-2 ml-3">
          <a
            className="text-xl cursor-pointer text-primaryDark"
            onClick={handlePublishingRideClick}
          >
            Publishing a ride
          </a>
          {isPublishingRideShown && (
            <ul className="my-2">
              <li className="mb-2 ml-3">
                <Link href="/help-centre/offer-drive-sangai/publishing-ride/choosing-route">
                  <h1
                    className={
                      urlRealPath ===
                      "/help-centre/offer-drive-sangai/publishing-ride/choosing-route"
                        ? "text-md cursor-pointer underline"
                        : "text-md cursor-pointer"
                    }
                  >
                    Choosing your route
                  </h1>
                </Link>
              </li>
              <li className="mb-2 ml-3">
                <Link href="/help-centre/offer-drive-sangai/publishing-ride/how-many-passenger">
                  <h1
                    className={
                      urlRealPath ===
                      "/help-centre/offer-drive-sangai/publishing-ride/how-many-passenger"
                        ? "text-md cursor-pointer underline"
                        : "text-md cursor-pointer"
                    }
                  >
                    How many passenger can i take?
                  </h1>
                </Link>
              </li>
              <li className="mb-2 ml-3">
                <Link href="/help-centre/offer-drive-sangai/publishing-ride/how-passenger-book">
                  <h1
                    className={
                      urlRealPath ===
                      "/help-centre/offer-drive-sangai/publishing-ride/how-passenger-book"
                        ? "text-md cursor-pointer underline"
                        : "text-md cursor-pointer"
                    }
                  >
                    Choosing how passenger can book
                  </h1>
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="mb-2 ml-3">
          <a
            className="text-xl cursor-pointer text-primaryDark"
            onClick={handleManagingPublicationsClick}
          >
            Managing your publications
          </a>
          {isManagingPublicationsShown && (
            <ul className="my-2">
              <li className="mb-2 ml-3 ">
                <Link href="/help-centre/offer-drive-sangai/managing-publications/publication-online">
                  <h1
                    className={
                      urlRealPath ===
                      "/help-centre/offer-drive-sangai/managing-publications/publication-online"
                        ? "text-md cursor-pointer underline"
                        : "text-md cursor-pointer"
                    }
                  >
                    Set your publication online
                  </h1>
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="mb-2 ml-3">
          <a
            className="text-xl cursor-pointer text-primaryDark"
            onClick={handleIsBookStatusRideInfoClick}
          >
            Booking status and Ride info
          </a>
          {isBookStatusRideInfoShown && (
            <ul className="my-2">
              <li className="mb-2 ml-3 ">
                <Link href="/help-centre/offer-drive-sangai/booking-status-ride-info/bookings-passenger-details">
                  <h1
                    className={
                      urlRealPath ===
                      "/help-centre/offer-drive-sangai/booking-status-ride-info/bookings-passenger-details"
                        ? "text-md cursor-pointer underline"
                        : "text-md cursor-pointer"
                    }
                  >
                    Find your bookings and Passenger details
                  </h1>
                </Link>
              </li>
              <li className="mb-2 ml-3 ">
                <Link href="/help-centre/offer-drive-sangai/booking-status-ride-info/check-booking-confirmed">
                  <h1
                    className={
                      urlRealPath ===
                      "/help-centre/offer-drive-sangai/booking-status-ride-info/check-booking-confirmed"
                        ? "text-md cursor-pointer underline"
                        : "text-md cursor-pointer"
                    }
                  >
                    How to check if a booking confirmed
                  </h1>
                </Link>
              </li>
              <li className="mb-2 ml-3 ">
                <Link href="/help-centre/offer-drive-sangai/booking-status-ride-info/pickup-dropoff-point">
                  <h1
                    className={
                      urlRealPath ===
                      "/help-centre/offer-drive-sangai/booking-status-ride-info/pickup-dropoff-point"
                        ? "text-md cursor-pointer underline"
                        : "text-md cursor-pointer"
                    }
                  >
                    How to find your pickup and dropoff points
                  </h1>
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="mb-2 ml-3">
          <a
            className="text-xl cursor-pointer text-primaryDark"
            onClick={handleContactingPassengerClick}
          >
            Contacting Passengers
          </a>
          {isContactingPassengerShown && (
            <ul className="my-2">
              <li className="mb-2 ml-3 ">
                <Link href="/help-centre/offer-drive-sangai/contacting-passengers/respond-queries">
                  <h1
                    className={
                      urlRealPath ===
                      "/help-centre/offer-drive-sangai/contacting-passengers/respond-queries"
                        ? "text-md cursor-pointer underline"
                        : "text-md cursor-pointer"
                    }
                  >
                    If you cannot get online to respond to queries
                  </h1>
                </Link>
              </li>

              <li className="mb-2 ml-3 ">
                <Link href="/help-centre/offer-drive-sangai/contacting-passengers/passenger-not-responding">
                  <h1
                    className={
                      urlRealPath ===
                      "/help-centre/offer-drive-sangai/contacting-passengers/passenger-not-responding"
                        ? "text-md cursor-pointer underline"
                        : "text-md cursor-pointer"
                    }
                  >
                    If the passenger is not responding
                  </h1>
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="mb-2 ml-3">
          <a
            className="text-xl cursor-pointer text-primaryDark"
            onClick={handleCancellationClick}
          >
            Cancellations
          </a>
          {isCancellationShown && (
            <ul className="my-2">
              <li className="mb-2 ml-3 ">
                <Link href="/help-centre/offer-drive-sangai/cancellations/cancel-confirm-booking">
                  <h1
                    className={
                      urlRealPath ===
                      "/help-centre/offer-drive-sangai/cancellations/cancel-confirm-booking"
                        ? "text-md cursor-pointer underline"
                        : "text-md cursor-pointer"
                    }
                  >
                    How a driver cancel a confirmed booking
                  </h1>
                </Link>
              </li>
              <li className="mb-2 ml-3 ">
                <Link href="/help-centre/offer-drive-sangai/cancellations/cancel-not-showup">
                  <h1
                    className={
                      urlRealPath ===
                      "/help-centre/offer-drive-sangai/cancellations/cancel-not-showup"
                        ? "text-md cursor-pointer underline"
                        : "text-md cursor-pointer"
                    }
                  >
                    If your passenger cancels or doesn't show up
                  </h1>
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="mb-2 ml-3">
          <a
            className="text-xl cursor-pointer text-primaryDark"
            onClick={handleGettingPaidClick}
          >
            Getting paid
          </a>
          {isGettingPaidShown && (
            <ul className="my-2">
              <li className="mb-2 ml-3 ">
                <Link href="/help-centre/offer-drive-sangai/getting-paid/transfer-methods">
                  <h1
                    className={
                      urlRealPath ===
                      "/help-centre/offer-drive-sangai/getting-paid/transfer-methods"
                        ? "text-md cursor-pointer underline"
                        : "text-md cursor-pointer"
                    }
                  >
                    Types of transfer method
                  </h1>
                </Link>
              </li>
              <li className="mb-2 ml-3 ">
                <Link href="/help-centre/offer-drive-sangai/getting-paid/get-money">
                  <h1
                    className={
                      urlRealPath ===
                      "/help-centre/offer-drive-sangai/getting-paid/get-money"
                        ? "text-md cursor-pointer underline"
                        : "text-md cursor-pointer"
                    }
                  >
                    When you'll get your money?
                  </h1>
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
