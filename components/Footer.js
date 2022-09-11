import Link from "next/link";
import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <Container>
        <div className="py-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          <div>
            <ul className="text-primaryDark">
              <li className="">
                <Link href="/">
                  <a>How it works</a>
                </Link>
              </li>
              <li className="my-3">
                <Link href="/">
                  <a>Travel by bus, car and bike with Sangai</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>All rides</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-primaryDark">
              <li className="">
                <Link href="/">
                  <a>About Us</a>
                </Link>
              </li>
              <li className="my-3">
                <Link href="/">
                  <a>Help Centre</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Terms and Conditions</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-primaryDark">
              <li className="">
                <Link href="/">
                  <a>Press</a>
                </Link>
              </li>
              <li className="my-3">
                <Link href="/">
                  <a>We're Hiring!</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Cookie settings</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex space-x-6 text-primaryDark">
              <li>
                <a href="/">
                  <i class="fa-brands fa-facebook text-3xl"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fa-brands fa-instagram text-3xl"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fa-brands fa-twitter text-3xl"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;