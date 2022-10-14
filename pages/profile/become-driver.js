import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import { isAuth } from "../../redux/utils";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  createInformation,
  updateInformation,
} from "../../redux/actions/informationAction";
import { API, baseUrl } from "../../config";
import axios from "axios";
import {
  createLicense,
  updateLicense,
} from "../../redux/actions/licenseAction";
import {
  createIdInformation,
  updateIdInformation,
} from "../../redux/actions/idInformationAction";
import {
  createVehicle,
  updateVehicle,
} from "../../redux/actions/vehicleAction";
import { getUser } from "../../redux/actions/userAction";

const BecomeDriver = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [stage, setStage] = useState(1);
  const userLoginState = useSelector((state) => state.userLogin);
  const { userInfo } = userLoginState;
  const userDetailState = useSelector((state) => state.userDetail);
  const { user } = userDetailState;
  const createInformationState = useSelector(
    (state) => state.createInformation
  );
  const { success: createInformationSuccess } = createInformationState;
  const updateInformationState = useSelector(
    (state) => state.updateInformation
  );
  const { success: updateInformationSuccess } = updateInformationState;
  const createLicenseState = useSelector((state) => state.createLicense);
  const { success: createLicenseSuccess } = createLicenseState;
  const updateLicenseState = useSelector((state) => state.updateLicense);
  const { success: updateLicenseSuccess } = updateLicenseState;
  const createIdInformationState = useSelector(
    (state) => state.createIdInformation
  );
  const { success: createIdInformationSuccess } = createIdInformationState;
  const updateIdInformationState = useSelector(
    (state) => state.updateIdInformation
  );
  const { success: updateIdInformationSuccess } = updateIdInformationState;
  const createVehicleState = useSelector((state) => state.createVehicle);
  const { success: createVehicleSuccess } = createVehicleState;
  const updateVehicleState = useSelector((state) => state.updateVehicle);
  const { success: updateVehicleSuccess } = updateVehicleState;
  const informationData = user && user.informations[0];
  const vehicleData = user && user.vehicles[0];
  const licenseData = user && user.license[0];
  const IdInformationData = user && user.idinformations[0];
  // console.log("object", user && user.informations[0]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [licenseFrontImage, setLicenseFrontImage] = useState("");
  const [previewLicenseFrontImageSource, setPreviewLicenseFrontImageSource] =
    useState();
  const [licenseBackImage, setLicenseBackImage] = useState("");
  const [previewLicenseBackImageSource, setPreviewLicenseBackImageSource] =
    useState();
  const [idInformation, setIdInformation] = useState("");
  const [previewIdInformationSource, setPreviewIdInformationSource] =
    useState();
  const [selectTransport, setSelectTransport] = useState();
  const [vehicleImage, setVehicleImage] = useState();
  const [previewVehicleImageSource, setPreviewVehicleImageSource] = useState();
  const [billbookImage, setBillbookImage] = useState();
  const [previewBillbookImageSource, setPreviewBillbookImageSource] =
    useState();
  const [numberPlate, setNumberPlate] = useState();
  const [mileage, setMileage] = useState();

  const [uploading, setUploading] = useState(false);

  const handleSubmitInformation = (e) => {
    e.preventDefault();
    dispatch(
      createInformation(
        firstName,
        lastName,
        dateOfBirth,
        email,
        userInfo && userInfo.user.id
      )
    );
  };

  const handleSubmitInformationUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateInformation(
        firstName,
        lastName,
        dateOfBirth,
        email,
        informationData && informationData.uuid
      )
    );
  };

  const handleSubmitLicense = (e) => {
    e.preventDefault();
    dispatch(
      createLicense(
        licenseNumber,
        licenseFrontImage,
        licenseBackImage,
        userInfo && userInfo.user.id
      )
    );
  };

  const handleSubmitLicenseUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateLicense(
        licenseNumber,
        licenseFrontImage,
        licenseBackImage,
        licenseData && licenseData.uuid
      )
    );
  };

  const handleSubmitIdInformation = (e) => {
    e.preventDefault();
    dispatch(createIdInformation(idInformation, userInfo && userInfo.user.id));
  };
  const handleSubmitIdInformationUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateIdInformation(
        idInformation,
        IdInformationData && IdInformationData.uuid
      )
    );
  };

  const handleSubmitVehicleInformation = (e) => {
    e.preventDefault();
    dispatch(
      createVehicle(
        selectTransport,
        vehicleImage,
        billbookImage,
        numberPlate,
        mileage,
        userInfo && userInfo.user.id
      )
    );
  };
  const handleSubmitVehicleInformationUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateVehicle(
        selectTransport,
        vehicleImage,
        billbookImage,
        numberPlate,
        mileage,
        vehicleData && vehicleData.uuid
      )
    );
  };

  useEffect(() => {
    if (!isAuth()) {
      router.push("/login");
    }
    dispatch(getUser(userInfo && userInfo.user.uuid));
    if (updateIdInformationSuccess || createIdInformationSuccess) {
      setPreviewIdInformationSource("");
    }
  }, [
    userInfo,
    createInformationSuccess,
    updateLicenseSuccess,
    createLicenseSuccess,
    updateInformationSuccess,
    createIdInformationSuccess,
    updateIdInformationSuccess,
    createVehicleSuccess,
    updateVehicleSuccess,
  ]);

  // image Upload and Preview
  const previewLicenseFrontImageFile = (file) => {
    console.log(file);
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onloadend = () => {
      setPreviewLicenseFrontImageSource(reader.result);
    };
  };

  const uploadFileHandlerFrontImage = async (e) => {
    const file = e.target.files[0];
    previewLicenseFrontImageFile(file);
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(`${API}/upload`, formData, config);

      setLicenseFrontImage(data[0].path);
      setUploading(false);
    } catch (err) {
      console.error(err);
      setUploading(false);
    }
  };
  const previewLicenseBackImageFile = (file) => {
    console.log(file);
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onloadend = () => {
      setPreviewLicenseBackImageSource(reader.result);
    };
  };
  const uploadFileHandlerBackImage = async (e) => {
    const file = e.target.files[0];
    previewLicenseBackImageFile(file);
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(`${API}/upload`, formData, config);

      setLicenseBackImage(data[0].path);
      setUploading(false);
    } catch (err) {
      console.error(err);
      setUploading(false);
    }
  };
  const previewIdInformationFile = (file) => {
    console.log(file);
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onloadend = () => {
      setPreviewIdInformationSource(reader.result);
    };
  };
  const uploadIdInformationHandler = async (e) => {
    const file = e.target.files[0];
    previewIdInformationFile(file);
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(`${API}/upload`, formData, config);

      setIdInformation(data[0].path);
      setUploading(false);
    } catch (err) {
      console.error(err);
      setUploading(false);
    }
  };
  const previewVehicleImageFile = (file) => {
    console.log(file);
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onloadend = () => {
      setPreviewVehicleImageSource(reader.result);
    };
  };
  const uploadVehicleImageHandler = async (e) => {
    const file = e.target.files[0];
    previewVehicleImageFile(file);
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(`${API}/upload`, formData, config);

      setVehicleImage(data[0].path);
      setUploading(false);
    } catch (err) {
      console.error(err);
      setUploading(false);
    }
  };
  const previewBillbookImageFile = (file) => {
    console.log(file);
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onloadend = () => {
      setPreviewBillbookImageSource(reader.result);
    };
  };
  const uploadBillbookImageHandler = async (e) => {
    const file = e.target.files[0];
    previewBillbookImageFile(file);
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(`${API}/upload`, formData, config);

      setBillbookImage(data[0].path);
      setUploading(false);
    } catch (err) {
      console.error(err);
      setUploading(false);
    }
  };
  // image upload and preview end

  return (
    <div>
      <Navbar />
      <Container>
        <div>
          <div className="md:grid grid-cols-12 gap-16">
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
                    <form
                      className="space-y-4"
                      onSubmit={
                        informationData
                          ? handleSubmitInformationUpdate
                          : handleSubmitInformation
                      }
                    >
                      <div className="flex flex-col space-y-2">
                        <label className="text-md text-primaryDark">
                          First Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your First Name"
                          className="text-sm bg-white appearance-none rounded-md border border-primary w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary text-primaryDark"
                          required
                          onChange={(e) => setFirstName(e.target.value)}
                          defaultValue={
                            informationData && informationData.first_name
                          }
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
                          required
                          onChange={(e) => setLastName(e.target.value)}
                          defaultValue={
                            informationData && informationData.last_name
                          }
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
                          required
                          onChange={(e) => setDateOfBirth(e.target.value)}
                          defaultValue={
                            informationData && informationData.date_of_birth
                          }
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
                          required
                          onChange={(e) => setEmail(e.target.value)}
                          defaultValue={
                            informationData && informationData.email
                          }
                        />
                      </div>
                      {uploading ? (
                        <div
                          type="button"
                          class="bg-indigo-500 px-3 py-2 rounded-md text-white w-max"
                          disabled
                        >
                          Loading...
                        </div>
                      ) : (
                        <input
                          type="submit"
                          value={informationData ? "Save" : "Add"}
                          className="bg-primary px-3 py-2 rounded-md text-white cursor-pointer"
                        />
                      )}
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
                    <form
                      className="space-y-4"
                      onSubmit={
                        licenseData
                          ? handleSubmitLicenseUpdate
                          : handleSubmitLicense
                      }
                    >
                      <div className="flex flex-col space-y-2">
                        <label className="text-md text-primaryDark">
                          Driving License Number
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your First Name"
                          className="text-sm bg-white appearance-none rounded-md border border-primary w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary text-primaryDark"
                          required
                          onChange={(e) => setLicenseNumber(e.target.value)}
                          defaultValue={
                            licenseData && licenseData.license_number
                          }
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
                          required={licenseData ? false : true}
                          onChange={uploadFileHandlerFrontImage}
                        />
                        {previewLicenseFrontImageSource && (
                          <div className="previewImage">
                            <img
                              src={previewLicenseFrontImageSource}
                              alt="profile"
                            />
                          </div>
                        )}
                        {licenseData && (
                          <div className="previewImage">
                            <img
                              src={`${baseUrl}/${licenseData.license_front_image}`}
                              alt="profile"
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="text-md text-primaryDark">
                          The Back of driver License
                        </label>
                        <input
                          type="file"
                          placeholder="Enter your First Name"
                          className="text-md bg-white appearance-none rounded-md border border-primary w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary text-primaryDark"
                          required={licenseData ? false : true}
                          onChange={uploadFileHandlerBackImage}
                        />
                        {previewLicenseBackImageSource && (
                          <div className="previewImage">
                            <img
                              src={previewLicenseBackImageSource}
                              alt="profile"
                            />
                          </div>
                        )}
                        {licenseData && (
                          <div className="previewImage">
                            <img
                              src={`${baseUrl}/${licenseData.license_back_image}`}
                              alt="profile"
                            />
                          </div>
                        )}
                      </div>
                      {uploading ? (
                        <div
                          type="button"
                          class="bg-indigo-500 px-3 py-2 rounded-md text-white w-max"
                          disabled
                        >
                          Loading...
                        </div>
                      ) : (
                        <input
                          type="submit"
                          value={licenseData ? "Save" : "Add"}
                          className="bg-primary px-3 py-2 rounded-md text-white cursor-pointer"
                        />
                      )}
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
                    <form
                      className="space-y-4"
                      onSubmit={
                        IdInformationData
                          ? handleSubmitIdInformationUpdate
                          : handleSubmitIdInformation
                      }
                    >
                      <div className="flex flex-col space-y-2">
                        <label className="text-lg text-primaryDark">
                          Add Image
                        </label>
                        <input
                          type="file"
                          placeholder="Enter your First Name"
                          className="text-md bg-white appearance-none rounded-md border border-primary w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary text-primaryDark"
                          required
                          onChange={uploadIdInformationHandler}
                        />
                        {previewIdInformationSource && (
                          <div className="previewImage">
                            <img
                              src={previewIdInformationSource}
                              alt="profile"
                            />
                          </div>
                        )}
                        {IdInformationData && (
                          <div className="previewImage">
                            <img
                              src={`${baseUrl}/${IdInformationData.id_information}`}
                              alt="profile"
                            />
                          </div>
                        )}
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
                      {uploading ? (
                        <div
                          type="button"
                          class="bg-indigo-500 px-3 py-2 rounded-md text-white w-max"
                          disabled
                        >
                          Loading...
                        </div>
                      ) : (
                        <input
                          type="submit"
                          value={IdInformationData ? "Save" : "Add"}
                          className="bg-primary px-3 py-2 rounded-md text-white cursor-pointer"
                        />
                      )}
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
                    <form
                      className="space-y-4"
                      onSubmit={
                        vehicleData
                          ? handleSubmitVehicleInformationUpdate
                          : handleSubmitVehicleInformation
                      }
                    >
                      <div className="flex flex-col space-y-2">
                        <label className="text-md text-primaryDark">
                          Select Transport
                        </label>
                        <select
                          className="text-sm bg-white appearance-none rounded-md border border-primary w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary text-primaryDark"
                          required
                          onChange={(e) => setSelectTransport(e.target.value)}
                        >
                          <option value="" className="text-gray-700">
                            Choose Vehicle
                          </option>
                          <option
                            value="bike"
                            selected={
                              vehicleData &&
                              vehicleData.select_vehicle === "bike"
                                ? true
                                : false
                            }
                          >
                            Bike
                          </option>
                          <option
                            value="car"
                            selected={
                              vehicleData &&
                              vehicleData.select_vehicle === "car"
                                ? true
                                : false
                            }
                          >
                            Car
                          </option>
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
                          required
                          onChange={uploadVehicleImageHandler}
                        />
                        {previewVehicleImageSource && (
                          <div className="previewImage">
                            <img
                              src={previewVehicleImageSource}
                              alt="profile"
                            />
                          </div>
                        )}
                        {vehicleData && (
                          <div className="previewImage">
                            <img
                              src={`${baseUrl}/${vehicleData.vehicle_image}`}
                              alt="profile"
                            />
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label className="text-md text-primaryDark">
                          Photo of BillBook
                        </label>
                        <input
                          type="file"
                          placeholder="Enter your First Name"
                          className="text-md bg-white appearance-none rounded-md border border-primary w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary text-primaryDark"
                          required
                          onChange={uploadBillbookImageHandler}
                        />
                        {previewBillbookImageSource && (
                          <div className="previewImage">
                            <img
                              src={previewBillbookImageSource}
                              alt="profile"
                            />
                          </div>
                        )}
                        {vehicleData && (
                          <div className="previewImage">
                            <img
                              src={`${baseUrl}/${vehicleData.billbook_image}`}
                              alt="profile"
                            />
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label className="text-md text-primaryDark">
                          Number Plate
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your Number Plate"
                          className="text-sm bg-white appearance-none rounded-md border border-primary w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary text-primaryDark"
                          required
                          onChange={(e) => setNumberPlate(e.target.value)}
                          defaultValue={vehicleData && vehicleData.number_plate}
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="text-md text-primaryDark">
                          Vehicle Mileage
                        </label>
                        <input
                          type="number"
                          placeholder="Enter your Number Plate"
                          className="text-sm bg-white appearance-none rounded-md border border-primary w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary text-primaryDark"
                          required
                          onChange={(e) => setMileage(e.target.value)}
                          defaultValue={
                            vehicleData && vehicleData.vehicle_mileage
                          }
                        />
                      </div>
                      {uploading ? (
                        <div
                          type="button"
                          class="bg-indigo-500 px-3 py-2 rounded-md text-white w-max"
                          disabled
                        >
                          Loading...
                        </div>
                      ) : (
                        <input
                          type="submit"
                          value={vehicleData ? "Save" : "Add"}
                          className="bg-primary px-3 py-2 rounded-md text-white cursor-pointer"
                        />
                      )}
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
