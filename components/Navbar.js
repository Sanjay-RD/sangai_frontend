import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import Container from "./Container";
import { isAuth } from "../redux/utils";
import { useEffect } from "react";
import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { logout } from "../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const userLoginState = useSelector((state) => state.userLogin);
  const { userInfo } = userLoginState;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  console.log("isLoggedIn", isLoggedIn);
  useEffect(() => {
    if (isAuth()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [userInfo]);
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 shadow-lg">
      <Container>
        <div className="flex space-x-4 lg:space-x-8 justify-between items-center">
          <div>
            <Link href="/">
              <a className="text-primary text-2xl md:text-3xl lg:text-4xl font-medium mx-2 md:mx-0">
                संगै
              </a>
            </Link>
          </div>
          {/* logo end */}
          <ul className="flex space-x-4 md:space-x-8 lg:space-x-12 items-center">
            <li>
              <Link href="/publish-ride">
                <a className="text-primary hidden text-lg md:text-xl lg:text-2xl  font-medium sm:flex items-center space-x-2">
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
            {isLoggedIn ? (
              <li>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md text-black bg-opacity-20 px-4 py-2 text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      <div className="flex items-center flex-row space-x-2">
                        <img
                          src={isAuth() && isAuth().user.picture}
                          width={30}
                          height={30}
                          className="rounded-full"
                        />
                        <div className="flex">
                          <h1 className="text-lg md:text-xl lg:text-2xl  font-medium text-primary">
                            {isAuth() && isAuth().user.name}
                          </h1>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2 -mr-1 h-5 w-5 text-gray-400 hover:text-gray-600 mt-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                      <ul className="px-1 py-1">
                        <li>
                          <Link
                            href={`/profile/${isAuth() && isAuth().user.uuid}`}
                          >
                            <a
                              // onClick={() => setToggleMenu(false)}
                              class="cursor-pointer block py-2 px-4 hover:bg-gray-100 rounded-md"
                            >
                              Profile
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/publish-ride">
                            <a
                              // onClick={() => setToggleMenu(false)}
                              class="cursor-pointer sm:hidden block py-2 px-4 hover:bg-gray-100 rounded-md"
                            >
                              Publish a ride
                            </a>
                          </Link>
                        </li>
                        <li>
                          <a
                            onClick={() => dispatch(logout())}
                            class="block py-2 px-4 text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md"
                          >
                            Sign out
                          </a>
                        </li>
                      </ul>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>
            ) : (
              <li>
                <Link href="/login">
                  <a className="text-primary text-lg md:text-xl lg:text-2xl font-medium flex items-center space-x-2">
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
            )}
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
