import React from "react";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API } from "../../config";
import moment from "moment";
import Link from "next/link";
import Footer from "../../components/Footer";

const ProfileDetail = ({ userData }) => {
  console.log("userData", userData);
  const userLoginState = useSelector((state) => state.userLogin);
  const { userInfo } = userLoginState;
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
                <h1 className="text-xl">Your Ride</h1>
                <Link href="/profile/become-driver">
                  <a className="border bg-primary rounded-md px-3 py-2 text-white">
                    Become A Rider
                  </a>
                </Link>
              </div>
              <div>
                {userData.rides.map((value) => (
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
                    <div className="border-t p-3 flex space-x-3">
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
                    </div>
                  </div>
                ))}
              </div>
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
  return {
    props: {
      userData: userData.data,
    },
  };
}

export default ProfileDetail;
