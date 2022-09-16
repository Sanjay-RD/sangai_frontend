import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import { isAuth } from "../../redux/utils";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const BecomeDriver = () => {
  const router = useRouter();
  const [stage, setStage] = useState(1);
  const userLoginState = useSelector((state) => state.userLogin);
  const { userInfo } = userLoginState;
  useEffect(() => {
    if (!isAuth()) {
      router.push("/login");
    }
  }, [userInfo]);
  return (
    <div>
      <Navbar />
      <Container>
        <div>
          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-3">
              <button
                className={
                  stage === 1
                    ? "border px-3 py-2 bg-primary text-white w-full flex justify-between items-center rounded"
                    : "border px-3 py-2 bg-white w-full flex justify-between items-center rounded border-primary"
                }
                onClick={() => setStage(1)}
              >
                <h1>Basic Information</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
              <button
                className={
                  stage === 2
                    ? "border px-3 py-2 bg-primary text-white w-full flex justify-between items-center rounded my-3"
                    : "border px-3 py-2 bg-white w-full flex justify-between items-center rounded my-3 border-primary"
                }
                onClick={() => setStage(2)}
              >
                <h1>Driver License</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
              <button
                className={
                  stage === 3
                    ? "border px-3 py-2 bg-primary text-white w-full flex justify-between items-center rounded my-3"
                    : "border px-3 py-2 bg-white w-full flex justify-between items-center rounded my-3 border-primary"
                }
                onClick={() => setStage(3)}
              >
                <h1>ID Information</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
              <button
                className={
                  stage === 4
                    ? "border px-3 py-2 bg-primary text-white w-full flex justify-between items-center rounded my-3"
                    : "border px-3 py-2 bg-white w-full flex justify-between items-center rounded my-3 border-primary"
                }
                onClick={() => setStage(4)}
              >
                <h1>Veicle Information</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
            <div className="col-span-9">
              {stage === 1 && (
                <div className="border rounded-md">
                  <div className="border-b px-5 py-3 bg-primary text-white rounded-t-md">
                    <h1 className="text-xl">Basic Information</h1>
                  </div>
                  <div className="px-6 py-5">
                    <form className="space-y-4">
                      <div className="flex flex-col space-y-2">
                        <label className="text-md text-primaryDark">
                          First Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your First Name"
                          className="text-sm bg-white appearance-none rounded-md border border-primary w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary text-primaryDark"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="text-md text-primaryDark">
                          Last Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your Last Name"
                          className="text-sm bg-white appearance-none rounded-md border border-primary w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary text-primaryDark"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="text-md text-primaryDark">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          placeholder="Enter your Last Name"
                          className="text-sm bg-white appearance-none rounded-md border border-primary w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary text-primaryDark"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="text-md text-primaryDark">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your Email Address"
                          className="text-sm bg-white appearance-none rounded-md border border-primary w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary text-primaryDark"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="text-md text-primaryDark">
                          You Have
                        </label>
                        <select className="text-sm bg-white appearance-none rounded-md border border-primary w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary text-primaryDark">
                          <option value="" className="text-gray-700">
                            Choose Vehicle
                          </option>
                          <option value="bike">Bike</option>
                          <option value="car">Car</option>
                        </select>
                        {/* <input
                        type="email"
                        placeholder="Enter your Email Address"
                        className="text-lg bg-[#EDEDED] appearance-none rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-[#EDEDED] focus:border-primary text-primaryDark"
                      /> */}
                      </div>
                      <input
                        type="submit"
                        value="Save"
                        className="bg-primary px-3 py-2 rounded-md text-white cursor-pointer"
                      />
                    </form>
                  </div>
                </div>
              )}
              {stage === 2 && (
                <div className="border rounded-md">
                  <div className="border-b px-5 py-3 bg-primary text-white rounded-t-md">
                    <h1 className="text-xl">Driver License</h1>
                  </div>
                  <div className="px-6 py-5">
                    <form className="space-y-4">
                      <div className="flex flex-col space-y-2">
                        <label className="text-md text-primaryDark">
                          Driving License Number
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your First Name"
                          className="text-sm bg-white appearance-none rounded-md border border-primary w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary text-primaryDark"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="text-md text-primaryDark">
                          The Front of driver License
                        </label>
                        <input
                          type="file"
                          placeholder="Enter your First Name"
                          className="text-md bg-white appearance-none rounded-md border border-primary w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary text-primaryDark"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="text-md text-primaryDark">
                          The Back of driver License
                        </label>
                        <input
                          type="file"
                          placeholder="Enter your First Name"
                          className="text-md bg-white appearance-none rounded-md border border-primary w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary text-primaryDark"
                        />
                      </div>

                      <input
                        type="submit"
                        value="Save"
                        className="bg-primary px-3 py-2 rounded-md text-white cursor-pointer"
                      />
                    </form>
                  </div>
                </div>
              )}
              {stage === 3 && (
                <div className="border rounded-md">
                  <div className="border-b px-5 py-3 bg-primary text-white rounded-t-md">
                    <h1 className="text-xl">ID Information</h1>
                  </div>
                  <div className="px-6 py-5">
                    <form className="space-y-4">
                      <div className="flex flex-col space-y-2">
                        <label className="text-lg text-primaryDark">
                          Add Image
                        </label>
                        <input
                          type="file"
                          placeholder="Enter your First Name"
                          className="text-md bg-white appearance-none rounded-md border border-primary w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary text-primaryDark"
                        />
                      </div>
                      <p>
                        Bring the driver's license in front of you and take a
                        photo as example.{" "}
                      </p>
                      <p>
                        The photo should be clearly show the face and your
                        driving license
                      </p>
                      <p>
                        The photo must be taken in good light and good quality
                      </p>
                      <input
                        type="submit"
                        value="Save"
                        className="bg-primary px-3 py-2 rounded-md text-white cursor-pointer"
                      />
                    </form>
                  </div>
                </div>
              )}
              {stage === 4 && (
                <div className="border rounded-md">
                  <div className="border-b px-5 py-3 bg-primary rounded-t-md text-white">
                    <h1 className="text-xl">Vehicle Information</h1>
                  </div>
                  <div className="px-6 py-5">
                    <form className="space-y-4">
                      <div className="flex flex-col space-y-2">
                        <label className="text-md text-primaryDark">
                          Select Transport
                        </label>
                        <select className="text-sm bg-white appearance-none rounded-md border border-primary w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary text-primaryDark">
                          <option value="" className="text-gray-700">
                            Choose Vehicle
                          </option>
                          <option value="bike">Bike</option>
                          <option value="car">Car</option>
                        </select>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="text-md text-primaryDark">
                          Photo of Your Vehicle
                        </label>
                        <input
                          type="file"
                          placeholder="Enter your First Name"
                          className="text-md bg-white appearance-none rounded-md border border-primary w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary text-primaryDark"
                        />
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label className="text-md text-primaryDark">
                          Photo of BillBook
                        </label>
                        <input
                          type="file"
                          placeholder="Enter your First Name"
                          className="text-md bg-white appearance-none rounded-md border border-primary w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary text-primaryDark"
                        />
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label className="text-md text-primaryDark">
                          Number Plate
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your Number Plate"
                          className="text-sm bg-white appearance-none rounded-md border border-primary w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary text-primaryDark"
                        />
                      </div>

                      <input
                        type="submit"
                        value="Save"
                        className="bg-primary px-3 py-2 rounded-md text-white cursor-pointer"
                      />
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BecomeDriver;
