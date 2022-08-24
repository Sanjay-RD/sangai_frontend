import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";

const Showcase = () => {
  return (
    <div>
      <div className=" w-full h-48 md:h-[71vh] overflow-hidden bg-gray-200 relative">
        <Image
          alt="Mountains"
          src="/sharing3.png"
          priority
          objectFit="cover"
          layout="fill"
        />
        <div className="absolute top-[20%] w-full text-center">
          <h1 className="text-7xl text-white capitalize">
            our pick of rides at low prices
          </h1>
          <form className="mt-[100px]">
            <Container>
              <div className="flex flex-col space-y-5">
                {/* basic info form */}
                <div className="bg-white rounded-xl grid grid-cols-4 py-2 px-5">
                  <div className="flex">
                    <div className="flex items-center space-x-2">
                      <i class="fa-regular fa-user text-gray-400 text-xl"></i>
                      <input
                        type="text"
                        placeholder="Name"
                        className="text-primary outline-none  w-full text-xl py-1"
                      />
                    </div>
                    <div className="border-r border-gray-300 mx-3"></div>
                  </div>
                  <div className="flex">
                    <div className="flex items-center space-x-2">
                      <i class="fa-regular fa-envelope text-gray-400 text-xl"></i>
                      <input
                        type="email"
                        placeholder="Email"
                        className="text-primary outline-none  w-full text-xl py-1"
                      />
                    </div>
                    <div className="border-r border-gray-300 mx-3"></div>
                  </div>
                  <div className="flex">
                    <div className="flex items-center space-x-2">
                      <i class="fa-regular fa-address-book text-gray-400 text-xl"></i>
                      <input
                        type="text"
                        placeholder="Address"
                        className="text-primary outline-none  w-full text-xl py-1"
                      />
                    </div>
                    <div className="border-r border-gray-300 mx-3"></div>
                  </div>
                  <div className="flex">
                    <div className="flex items-center space-x-2">
                      <i class="fa-solid fa-phone text-gray-400 text-xl"></i>
                      <input
                        type="tel"
                        placeholder="Phone"
                        className="text-primary outline-none  w-full text-xl py-1"
                      />
                    </div>
                  </div>
                </div>
                {/* basic info form end */}
                {/* ride info */}
                <div className="bg-white rounded-xl grid grid-cols-12 h-[56px]">
                  <div className="col-span-10">
                    <div className="grid grid-cols-12">
                      <div className="flex col-span-3 items-center ml-3">
                        <div className="flex items-center space-x-2 h-[56px]">
                          <i class="fa-regular fa-user text-gray-400 text-xl"></i>
                          <input
                            type="text"
                            placeholder="Leaving From..."
                            className="text-primary outline-none  w-full text-xl py-1"
                          />
                        </div>
                        <div className="border-r border-gray-300 mx-3 h-[40px]"></div>
                      </div>
                      <div className="flex col-span-3 items-center">
                        <div className="flex items-center space-x-2 h-[56px]">
                          <i class="fa-regular fa-envelope text-gray-400 text-xl"></i>
                          <input
                            type="text"
                            placeholder="Going to..."
                            className="text-primary outline-none  w-full text-xl py-1"
                          />
                        </div>
                        <div className="border-r border-gray-300 mx-3 h-[40px]"></div>
                      </div>
                      <div className="flex col-span-2 items-center">
                        <div className="flex items-center space-x-2 h-[56px]">
                          <i class="fa-regular fa-address-book text-gray-400 text-xl"></i>
                          <input
                            type="text"
                            placeholder="Today"
                            className="text-primary outline-none  w-full text-xl py-1"
                          />
                        </div>
                        <div className="border-r border-gray-300 mx-3 h-[40px]"></div>
                      </div>
                      <div className="flex col-span-3 items-center">
                        <div className="flex items-center space-x-2 h-[56px]">
                          <i class="fa-solid fa-phone text-gray-400 text-xl"></i>
                          <input
                            type="tel"
                            placeholder="Vehicle type"
                            className="text-primary outline-none  w-full text-xl py-1"
                          />
                        </div>
                        <div className="border-r border-gray-300 mx-3 h-[40px]"></div>
                      </div>
                      <div className="flex col-span-1 items-center">
                        <div className="flex items-center space-x-2 h-[56px]">
                          <i class="fa-solid fa-phone text-gray-400 text-xl"></i>
                          <input
                            type="tel"
                            placeholder="1"
                            className="text-primary outline-none  w-full text-xl py-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <button className="w-full h-[56px] rounded-tr-xl rounded-br-xl bg-primary text-2xl text-white">
                      Submit
                    </button>
                  </div>
                </div>
                {/* ride info end */}
              </div>
            </Container>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
