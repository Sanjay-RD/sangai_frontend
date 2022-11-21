import React, { useState } from "react";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API } from "../../config";
import moment from "moment";
import Link from "next/link";
import Footer from "../../components/Footer";
import {
  deleteRequest,
  getAllRequestByRideId,
  updateRequest,
  updateRequestToAccept,
  updateRequestToPay,
} from "../../redux/actions/requestAction";
import { useEffect } from "react";
import KhaltiCheckout from "khalti-checkout-web";
import Router from "next/router";
import { isAuth } from "../../redux/utils";
import ModalWrapper from "../../components/ModalWrapper";
import myKey from "../../components/khalti/KhaltiKey";
import { getUser } from "../../redux/actions/userAction";

const ProfileDetail = ({ userData, requestedRide }) => {
  const dispatch = useDispatch();
  console.log("userData", userData);
  console.log("requestedRide", requestedRide);
  const userLoginState = useSelector((state) => state.userLogin);
  const { userInfo } = userLoginState;
  const userDetailState = useSelector((state) => state.userDetail);
  const { user: userDetail } = userDetailState;
  console.log("userDetail", userDetail);
  const listRequestByRideIdState = useSelector(
    (state) => state.listRequestByRideId
  );
  const { request: requestRideData } = listRequestByRideIdState;
  const updateRequestToAcceptState = useSelector(
    (state) => state.updateRequestToAccept
  );
  const { success: acceptSuccess } = updateRequestToAcceptState;
  const updateRequestSuccess = useSelector((state) => state.updateRequest);
  const { success: requestSuccess } = updateRequestSuccess;
  const deleteRequestSuccess = useSelector((state) => state.deleteRequest);
  const { success: deleteSuccess } = deleteRequestSuccess;
  const updateRequestToPayState = useSelector(
    (state) => state.updateRequestToPay
  );
  const { success: paySuccess } = updateRequestToPayState;
  const [isDetailShow, setIsDetailShow] = useState(0);
  const [tabValue, setTabValue] = useState(1);
  const [checkout, setCheckout] = useState();
  const [seats, setSeats] = useState(1);
  const [index, setIndex] = useState(0);
  let [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState(1);

  function openModal(uuid) {
    setIsOpen(true);
    dispatch(getUser(uuid));
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    setIsDetailShow(-1);
    if (requestSuccess || deleteSuccess || paySuccess) {
      Router.reload();
    }
  }, [acceptSuccess, requestSuccess, deleteSuccess, paySuccess]);

  const handlePay = (uuid) => {
    // minimum transaction amount must be 10, i.e 1000 in paisa.
    let config = {
      // replace this key with yours
      publicKey: myKey.publicTestKey,
      productIdentity: "1",
      productName: "Sangai",
      productUrl: "http://localhost:3000",
      eventHandler: {
        onSuccess(payload) {
          // hit merchant api for initiating verfication
          console.log(payload);
          dispatch(updateRequestToPay(uuid));
        },
        // onError handler is optional
        onError(error) {
          // handle errors
          console.log(error);
        },
        onClose() {
          console.log("widget is closing");
        },
      },
      paymentPreference: [
        "KHALTI",
        "EBANKING",
        "MOBILE_BANKING",
        "CONNECT_IPS",
        "SCT",
      ],
    };
    let checkout = new KhaltiCheckout(config);
    setCheckout(checkout);
    checkout.show({ amount: 1000 });
  };

  const handleUpdateRequest = (uuid) => {
    dispatch(updateRequest(seats, uuid));
  };
  return (
    <div>
      <Navbar />
      <Container>
        <div className="my-10">
          <div className="md:grid grid-cols-12 gap-10">
            <div className="col-span-3 mb-3">
              <div className="border rounded-md ">
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
            <Link href="/profile/become-driver">
              <a className="border md:hidden bg-primary rounded-md px-3 py-2 text-white">
                Become A Rider
              </a>
            </Link>

            <div className="col-span-9 mt-3">
              <div className="flex justify-between items-center overflow-x-scroll md:overflow-hidden w-full">
                <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                  <ul class="flex md:flex-wrap -mb-px w-max">
                    <li class="md:mr-2">
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
                    <li class="md:mr-2">
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
                    <li class="md:mr-2">
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
                  <a className="border hidden md:block bg-primary rounded-md px-3 py-2 text-white">
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
                          {value.isAccept && (
                            <div>
                              <h1 className="text-primary">
                                {value.seat} seat is booked{" "}
                                {value.rides.seat - value.seat} seat Available
                              </h1>
                            </div>
                          )}
                        </div>
                        <div>
                          <h1>Rs. {value.rides.price}</h1>
                        </div>
                      </div>
                      <div className="border-t p-3 md:flex justify-between items-center">
                        <div className="flex space-x-3">
                          <img
                            src={value.rider.picture}
                            alt=""
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                          <div>
                            <h1>{value.rider.name}</h1>
                            <h1>{value.rider.email}</h1>
                          </div>
                        </div>
                        {value.isAccept ? (
                          <div className="flex space-x-4">
                            <button
                              className="px-3 py-1 border rounded-lg bg-purple-700 text-white"
                              onClick={() => {
                                handlePay(value.uuid);
                              }}
                            >
                              Pay via Khalti
                            </button>
                            <div className="px-3 py-1 bg-primary text-white rounded-lg">
                              Your Request has been accept
                            </div>
                          </div>
                        ) : (
                          <div className="px-3 py-1 bg-blue-700 text-white rounded-lg w-max mt-5 md:mt-0 ">
                            No Response
                          </div>
                        )}
                      </div>
                      <div className="border-t p-3 md:flex justify-between items-center">
                        {!value.isAccept && (
                          <div className="md:flex items-center space-x-3">
                            <div className="flex justify-between items-center space-x-5">
                              <div
                                className="border-2 rounded-[100%] h-8 w-8 flex justify-center border-primary cursor-pointer items-center"
                                onClick={() =>
                                  seats > 1 &&
                                  (setSeats(seats - 1), setIndex(i + 1))
                                }
                              >
                                <span className="text-3xl font-light text-primary items-center">
                                  -
                                </span>
                              </div>
                              <span className="text-2xl text-primaryDark">
                                {index === i + 1 ? seats : value.seat}
                              </span>
                              <div
                                className="border-2 rounded-[100%] h-8 w-8 flex justify-center border-primary cursor-pointer items-center"
                                onClick={() => {
                                  value.rides.seat > seats &&
                                    (setSeats(seats + 1), setIndex(i + 1));
                                }}
                              >
                                <span className="text-2xl font-light text-primary items-center">
                                  +
                                </span>
                              </div>
                            </div>
                            <button
                              className="bg-blue-500 px-3 py-1 rounded-lg text-white mt-5 md:mt-0 w-max"
                              onClick={() => handleUpdateRequest(value.uuid)}
                            >
                              Update Request
                            </button>
                          </div>
                        )}
                        {value.isPaid && (
                          <button
                            className="bg-primary px-3 py-1 rounded-lg text-white"
                            onClick={() => openModal(value.rider.uuid)}
                          >
                            View Rider Detail
                          </button>
                        )}
                        <ModalWrapper
                          title="Rider Details"
                          closeModal={closeModal}
                          isOpen={isOpen}
                        >
                          <div
                            className="border rounded-xl  my-5"
                            style={{
                              boxShadow:
                                "3px 3px 23px -8px rgba(117,165,105,0.59)",
                            }}
                          >
                            <div className="border-b p-3 flex space-x-3 items-center">
                              <img
                                src={value.rider && value.rider.picture}
                                alt=""
                                width={50}
                                height={50}
                                className="rounded-full"
                              />
                              <div>
                                <h1 className="text-xl">
                                  {value.rider && value.rider.name}
                                </h1>
                              </div>
                            </div>
                            <div className="px-6 py-4 border-b">
                              <div className="grid grid-cols-12 gap-7">
                                <div className="col-span-4">
                                  <button
                                    className={
                                      stage === 1
                                        ? "border px-3 py-2  bg-lime-600 text-white w-full flex justify-between items-center rounded"
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
                                        ? "border px-3 py-2  bg-lime-600 text-white w-full flex justify-between items-center rounded my-3"
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
                                        ? "border px-3 py-2  bg-lime-600 text-white w-full flex justify-between items-center rounded my-3"
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
                                        ? "border px-3 py-2  bg-lime-600 text-white w-full flex justify-between items-center rounded my-3"
                                        : "border px-3 py-2 bg-white w-full flex justify-between items-center rounded my-3 border-primary"
                                    }
                                    onClick={() => setStage(4)}
                                  >
                                    <h1>Vehicle Information</h1>
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
                                <div className="col-span-8">
                                  {stage === 1 && (
                                    <div className="border rounded-md">
                                      <div className="border-b px-5 py-3 bg-lime-600 text-white rounded-t-md">
                                        <h1 className="text-xl">
                                          Basic Information
                                        </h1>
                                      </div>
                                      <div className="px-6 py-5">
                                        <h1>
                                          First Name :{" "}
                                          {value.rider && value.rider.name}
                                        </h1>
                                        <h1>Last Name : </h1>
                                        <h1>
                                          Date of Birth :{" "}
                                          {/* {ride &&
                                            ride.driverInfo.date_of_birth} */}
                                        </h1>
                                        <h1>
                                          Email :{" "}
                                          {value.rider && value.rider.email}
                                        </h1>
                                      </div>
                                    </div>
                                  )}
                                  {stage === 2 && (
                                    <div className="border rounded-md">
                                      <div className="border-b px-5 py-3  bg-lime-600 text-white rounded-t-md">
                                        <h1 className="text-xl">
                                          Driver License
                                        </h1>
                                      </div>
                                      <div className="px-6 py-5">
                                        <h1>
                                          Driving License Number :{" "}
                                          {/* {ride &&
                                            ride.licenseInfo.license_number} */}
                                        </h1>
                                        <div>
                                          <h1>License Front Image : </h1>
                                          {/* <a
                                            href={`${url}/${
                                              ride &&
                                              ride.licenseInfo
                                                .license_front_image
                                            }`}
                                            target="_blank"
                                          >
                                            <img
                                              src={`${url}/${
                                                ride &&
                                                ride.licenseInfo
                                                  .license_front_image
                                              }`}
                                              alt=""
                                              style={{
                                                height: "250px",
                                                objectFit: "cover",
                                              }}
                                            />
                                          </a> */}
                                        </div>
                                        <div>
                                          <h1>License Back Image : </h1>

                                          {/* <a
                                            href={`${url}/${
                                              ride &&
                                              ride.licenseInfo
                                                .license_back_image
                                            }`}
                                            target="_blank"
                                          >
                                            <img
                                              src={`${url}/${
                                                ride &&
                                                ride.licenseInfo
                                                  .license_back_image
                                              }`}
                                              alt=""
                                              style={{
                                                height: "250px",
                                                objectFit: "cover",
                                              }}
                                            />
                                          </a> */}
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  {stage === 3 && (
                                    <div className="border rounded-md">
                                      <div className="border-b px-5 py-3  bg-lime-600 text-white rounded-t-md">
                                        <h1 className="text-xl">
                                          ID Information
                                        </h1>
                                      </div>
                                      <div className="px-6 py-5">
                                        <div>
                                          <h1>Id Image</h1>
                                          {/* <a
                                            href={`${url}/${
                                              ride && ride.IdInfo.id_information
                                            }`}
                                            target="_blank"
                                          >
                                            <img
                                              src={`${url}/${
                                                ride &&
                                                ride.IdInfo.id_information
                                              }`}
                                              alt=""
                                              style={{
                                                height: "250px",
                                                objectFit: "cover",
                                              }}
                                            />
                                          </a> */}
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  {stage === 4 && (
                                    <div className="border rounded-md">
                                      <div className="border-b px-5 py-3  bg-lime-600 text-white rounded-t-md">
                                        <h1 className="text-xl">
                                          Vehicle Information
                                        </h1>
                                      </div>
                                      <div className="px-6 py-5">
                                        <h1>
                                          Vehicle Type :{" "}
                                          {/* {ride &&
                                            ride.vehicleInfo.select_vehicle} */}
                                        </h1>
                                        <h1>
                                          Vehicle Number Plate :{" "}
                                          {/* {ride &&
                                            ride.vehicleInfo.number_plate} */}
                                        </h1>
                                        <div>
                                          <h1>Vehicle Image</h1>

                                          {/* <a
                                            href={`${url}/${
                                              ride &&
                                              ride.vehicleInfo.vehicle_image
                                            }`}
                                            target="_blank"
                                          >
                                            <img
                                              src={`${url}/${
                                                ride &&
                                                ride.vehicleInfo.vehicle_image
                                              }`}
                                              alt=""
                                              style={{
                                                height: "250px",
                                                objectFit: "cover",
                                              }}
                                            />
                                          </a> */}
                                        </div>
                                        <div>
                                          <h1>Billbook Image</h1>

                                          {/* <a
                                            href={`${url}/${
                                              ride &&
                                              ride.vehicleInfo.billbook_image
                                            }`}
                                            target="_blank"
                                          >
                                            <img
                                              src={`${url}/${
                                                ride &&
                                                ride.vehicleInfo.billbook_image
                                              }`}
                                              alt=""
                                              style={{
                                                height: "250px",
                                                objectFit: "cover",
                                              }}
                                            />
                                          </a> */}
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </ModalWrapper>
                        <button
                          className="bg-red-500 px-3 py-1 rounded-lg text-white mt-5 md:mt-0 w-max ml-3"
                          onClick={() =>
                            dispatch(
                              deleteRequest(value.uuid, isAuth().user.id)
                            )
                          }
                        >
                          Cancel Request
                        </button>
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
                                <div>
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
                                  <div className="mt-3">
                                    Booked Seat : {value.seat}
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
