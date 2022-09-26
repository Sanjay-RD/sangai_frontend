import React, { useState } from "react";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API } from "../../config";
import moment from "moment";
import Link from "next/link";
import Footer from "../../components/Footer";
import { getRide } from "../../redux/actions/rideAction";
import {
  getAllRequestByRideId,
  updateRequestToAccept,
} from "../../redux/actions/requestAction";
import { useEffect } from "react";

const ProfileDetail = ({ userData, requestedRide }) => {
  const dispatch = useDispatch();
  console.log("userData", userData);
  console.log("requestedRide", requestedRide);
  const userLoginState = useSelector((state) => state.userLogin);
  const { userInfo } = userLoginState;
  const listRequestByRideIdState = useSelector(
    (state) => state.listRequestByRideId
  );
  const { request: requestRideData } = listRequestByRideIdState;
  const updateRequestToAcceptState = useSelector(
    (state) => state.updateRequestToAccept
  );
  const { success: acceptSuccess } = updateRequestToAcceptState;
  const [isDetailShow, setIsDetailShow] = useState(0);
  const [tabValue, setTabValue] = useState(1);

  useEffect(() => {
    setIsDetailShow(-1);
  }, [acceptSuccess]);
  return (
    <div>
      <Navbar />
      <Container>
        <div className="my-10">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-3">
              <div className="border rounded-md">
                <img
                  src={userData.picture}
                  alt=""
                  width="100%"
                  height={300}
                  className="rounded-t-md"
                />
                <div className="p-4">
                  <h1>{userData.name}</h1>
                  <h1 className="text-sm">{userData.email}</h1>
                </div>
              </div>
            </div>
            <div className="col-span-9">
              <div className="flex justify-between items-center">
                <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                  <ul class="flex flex-wrap -mb-px">
                    <li class="mr-2">
                      <a
                        class={
                          tabValue === 1
                            ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active cursor-pointer"
                            : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 cursor-pointer"
                        }
                        onClick={() => setTabValue(1)}
                      >
                        Requested Ride
                      </a>
                    </li>
                    <li class="mr-2">
                      <a
                        href="#"
                        class={
                          tabValue === 2
                            ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active cursor-pointer"
                            : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 cursor-pointer"
                        }
                        onClick={() => setTabValue(2)}
                      >
                        Your Ride
                      </a>
                    </li>
                    <li class="mr-2">
                      <a
                        class={
                          tabValue === 3
                            ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active cursor-pointer"
                            : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 cursor-pointer"
                        }
                        onClick={() => setTabValue(3)}
                      >
                        Accepted Ride
                      </a>
                    </li>
                  </ul>
                </div>
                <Link href="/profile/become-driver">
                  <a className="border bg-primary rounded-md px-3 py-2 text-white">
                    Become A Rider
                  </a>
                </Link>
              </div>

              {tabValue === 1 && (
                <div>
                  {requestedRide.map((value, i) => (
                    <div
                      className="border rounded-xl  my-5"
                      style={{
                        boxShadow: "3px 3px 23px -8px rgba(117,165,105,0.59)",
                      }}
                    >
                      <div className="flex justify-between px-6 py-4">
                        <div>
                          <h1>
                            {value.rides.leaving} to {value.rides.heading}
                          </h1>
                          <p>
                            {moment(value.rides.date).format("MMMM Do YYYY")}
                          </p>
                          <p>{value.rides.seat} Seats</p>
                        </div>
                        <div>
                          <h1>Rs. {value.rides.price}</h1>
                        </div>
                      </div>
                      <div className="border-t p-3 flex justify-between items-center">
                        <div className="flex space-x-3">
                          <img
                            src={value.users.picture}
                            alt=""
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                          <div>
                            <h1>{value.users.name}</h1>
                            <h1>{value.users.email}</h1>
                          </div>
                        </div>
                        {value.isAccept ? (
                          <div className="px-3 py-1 bg-primary text-white rounded-lg">
                            Your Request has been accept
                          </div>
                        ) : (
                          <div className="px-3 py-1 bg-blue-700 text-white rounded-lg">
                            No Response
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {tabValue === 2 && (
                <div>
                  {userData.rides.map((value, i) => (
                    <div
                      className="border rounded-xl  my-5"
                      style={{
                        boxShadow: "3px 3px 23px -8px rgba(117,165,105,0.59)",
                      }}
                    >
                      <div className="flex justify-between px-6 py-4">
                        <div>
                          <h1>
                            {value.leaving} to {value.heading}
                          </h1>
                          <p>{moment(value.date).format("MMMM Do YYYY")}</p>
                          <p>{value.seat} Seats</p>
                        </div>
                        <div>
                          <h1>Rs. {value.price}</h1>
                        </div>
                      </div>
                      {/* <div className="border-t p-3 flex space-x-3">
                      <img
                        src={userData.picture}
                        alt=""
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <h1>{userData.name}</h1>
                        <h1>{userData.email}</h1>
                      </div>
                    </div> */}
                      <div className="border-t p-3">
                        <button
                          className="mb-2 bg-primary px-3 py-1 rounded-lg text-white"
                          onClick={() => (
                            setIsDetailShow(i),
                            dispatch(getAllRequestByRideId(value.id))
                          )}
                        >
                          View Requested Ride
                        </button>
                        {isDetailShow === i &&
                          (requestRideData && requestRideData.length === 0 ? (
                            <h1 className="text-lg px-5 text-gray-600">
                              No One Have Requested For This Ride
                            </h1>
                          ) : (
                            requestRideData &&
                            requestRideData.map((value) => (
                              <div className="flex justify-between items-center px-5 py-2">
                                <div className=" flex space-x-3">
                                  <img
                                    src={value.users.picture}
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="rounded-full"
                                  />
                                  <div>
                                    <h1>{value.users.name}</h1>
                                    <h1>{value.users.email}</h1>
                                  </div>
                                </div>
                                <div>
                                  {value.isAccept ? (
                                    <div className="bg-gray-600 px-3 py-1 rounded-lg text-white">
                                      Accepted
                                    </div>
                                  ) : (
                                    <button
                                      className="bg-primary px-3 py-1 rounded-lg text-white"
                                      onClick={() =>
                                        dispatch(
                                          updateRequestToAccept(
                                            true,
                                            value.uuid
                                          )
                                        )
                                      }
                                    >
                                      Accept
                                    </button>
                                  )}
                                </div>
                              </div>
                            ))
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  // const { search, sort, category } = query;
  console.log("context.query.uuid", context.query.uuid);
  const userData = await axios.get(`${API}/user/${context.query.uuid}`);
  const requestedRide = await axios.get(
    `${API}/request/user/${context.query.uuid}`
  );
  return {
    props: {
      userData: userData.data,
      requestedRide: requestedRide.data,
    },
  };
}

export default ProfileDetail;
