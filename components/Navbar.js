import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";
import steeringWheel from "../public/steering-wheel.svg";
import passengerSeat from "../public/passenger-seat.svg";

const Navbar = () => {
  return (
    <nav className="">
      <Container>
        <div className="flex justify-between items-center">
          {/* logo */}
          <div>
            <Link href="/">
              <a className="text-primary text-3xl font-medium">संगै</a>
            </Link>
          </div>
          {/* logo end */}
          <ul className="flex space-x-4 md:space-x-8">
            <li>
              <Link href="/">
                <a className="text-primary text-lg font-medium flex items-center space-x-2">
                  {/* <Image
                    src={steeringWheel}
                    alt="Logo - SVG"
                    width="19"
                    height="19"
                    className="filter-green"
                  />{" "} */}
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
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span>Publish a ride</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a className="text-primary text-lg font-medium flex items-center space-x-2">
                  {/* <Image
                    src={passengerSeat}
                    alt="passenger seat"
                    width="24"
                    height="24"
                    className="filter-green"
                  />{" "} */}
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
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span>Login</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
