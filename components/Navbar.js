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
            <h1 className="text-primary text-3xl font-medium">संगै</h1>
          </div>
          {/* logo end */}
          <ul className="flex space-x-4 md:space-x-8">
            <li>
              <Link href="/">
                <a className="text-primary text-lg font-medium flex items-center space-x-2">
                  <Image
                    src={steeringWheel}
                    alt="Logo - SVG"
                    width="19"
                    height="19"
                    className="filter-green"
                  />{" "}
                  <span>Pilot</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-primary text-lg font-medium flex items-center space-x-2">
                  <Image
                    src={passengerSeat}
                    alt="passenger seat"
                    width="24"
                    height="24"
                    className="filter-green"
                  />{" "}
                  <span>Mate(Sathi)</span>
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
