import Image from "next/image";
import { useState } from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Notification from "../components/Notification";
import Showcase from "../components/Showcase";

function HomePage() {
  const [openAnswer, setOpenAnswer] = useState(false);
  return (
    <>
      <Navbar />
      <Notification />
      <Showcase />
      <div className="my-9">
        <Container>
          <div>
            <h1 className="text-3xl font-[400] text-primaryDark">
              The best of carpooling with BlaBlaCar
            </h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 my-7">
              <div>
                <div>
                  <i class="fa-solid fa-piggy-bank text-4xl text-primaryDark"></i>
                </div>
                <div>
                  <h1 className="text-xl font-medium my-1 text-primaryDark">
                    Save on travel costs
                  </h1>
                  <p className="text-primaryDark">
                    Share your travel costs and save every time you travel by
                    car. Plus, for your 1st ride on BlaBlaCar with at least one
                    passenger, you’ll get a 25€ fuel voucher or 40€ car wash
                    voucher.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-9 h-9 text-primaryDark"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-medium my-1 text-primaryDark">
                    Join a trustworthy community
                  </h1>
                  <p className="text-primaryDark">
                    We know each of our members: both drivers and passengers. We
                    verify ratings, profiles and IDs, so you know exactly who
                    you’re travelling with.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <i class="fa-solid fa-rocket text-3xl text-primaryDark"></i>
                </div>
                <div>
                  <h1 className="text-xl font-medium my-1 text-primaryDark">
                    Carpooling made simple
                  </h1>
                  <p className="text-primaryDark">
                    Our technology makes the entire experience with BlaBlaCar
                    simple, so you can easily find, chat with and meet
                    passengers right on your way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* Publish your ride in just minutes */}
      <div className="my-9">
        <Container>
          <h1 className="text-3xl font-[400] text-primaryDark">
            Publish your ride in just minutes
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-7">
            <div>
              <video width={"100%"} className="rounded-lg" controls>
                <source src="/mov_bbb.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="space-y-7">
              <div className="flex items-center space-x-3">
                <i class="fa-solid fa-user text-2xl text-primaryDark"></i>
                <div>
                  <h1 className="text-lg text-primaryDark">
                    Create a BlaBlaCar account
                  </h1>
                  <p className="text-primaryDark opacity-70">
                    Add your profile picture, a few words about you and your
                    phone number to increase trust between members.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i class="fa-solid fa-car text-2xl text-primaryDark"></i>
                <div>
                  <h1 className="text-lg text-primaryDark">
                    Publish your ride
                  </h1>
                  <p className=" text-primaryDark opacity-70">
                    Indicate departure and arrival points, the date of the ride
                    and check our recommended price to increase your chances of
                    getting your first passengers and ratings.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i class="fa-solid fa-bolt-lightning text-2xl text-primaryDark"></i>
                <div>
                  <h1 className="text-lg text-primaryDark">
                    Accept booking requests
                  </h1>
                  <p className="text-primaryDark opacity-70">
                    Add your profile picture, a few words about you and your
                    phone number to increase trust between members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* Publish your ride in just minutes end  */}
      {/* We’re here every step of the way */}
      <div className="my-9 bg-gray-100">
        <Container>
          <div className="py-5">
            <h1 className="text-3xl font-[400] text-primaryDark">
              We’re here every step of the way
            </h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 my-7">
              <div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-9 h-9 text-primaryDark"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-medium my-1 text-primaryDark">
                    At your service 24/7
                  </h1>
                  <p className="text-primaryDark">
                    Our team is at your disposal to answer any questions by
                    email or social media. You can also have a live chat
                    directly with experienced members.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <i class="fa-solid fa-car text-3xl text-primaryDark"></i>
                </div>
                <div>
                  <h1 className="text-xl font-medium my-1 text-primaryDark">
                    BlaBlaCar at your side
                  </h1>
                  <p className="text-primaryDark">
                    For just 2 €, benefit from the reimbursement of up to 1,500€
                    of your excess when you publish a ride as a driver on
                    BlaBlaCar.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-9 h-9 text-primaryDark"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-medium my-1 text-primaryDark">
                    100% secure information
                  </h1>
                  <p className="text-primaryDark">
                    Our team is dedicated to the protection of your data, which
                    is always 100% confidential thanks to monitoring tools,
                    secure navigation and encrypted data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* We’re here every step of the way */}
      {/* FAQ */}
      <div className="my-9">
        <Container>
          <h1 className="text-3xl font-[400] text-primaryDark">
            Frequently asked questions
          </h1>
          <span className="text-primaryDark opacity-80">
            What to expect along the way
          </span>
          <div className="px-3 py-3">
            <div className="border-b py-3">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-xl text-primaryDark">
                    How to become a driver?
                  </h1>
                  {openAnswer && (
                    <p className="text-primaryDark opacity-90 px-2 mt-2">
                      You can pass online registration by yourself by uploading
                      photos of your documents in inDriver app
                    </p>
                  )}
                </div>
                <div>
                  {!openAnswer && (
                    <div
                      className="cursor-pointer text-primaryDark"
                      onClick={() => setOpenAnswer(true)}
                    >
                      <i class="fa-solid fa-plus text-sm"></i>
                    </div>
                  )}
                  {openAnswer && (
                    <div
                      className="cursor-pointer text-primaryDark"
                      onClick={() => setOpenAnswer(false)}
                    >
                      <i class="fa-solid fa-minus text-sm"></i>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="border-b py-3">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-xl text-primaryDark">
                    How long will I need to wait to be matched with other
                    riders?
                  </h1>
                  {openAnswer && (
                    <p className="text-primaryDark opacity-90 px-2 mt-2">
                      You can pass online registration by yourself by uploading
                      photos of your documents in inDriver app
                    </p>
                  )}
                </div>
                <div>
                  {!openAnswer && (
                    <div
                      className="cursor-pointer text-primaryDark"
                      onClick={() => setOpenAnswer(true)}
                    >
                      <i class="fa-solid fa-plus text-sm"></i>
                    </div>
                  )}
                  {openAnswer && (
                    <div
                      className="cursor-pointer text-primaryDark"
                      onClick={() => setOpenAnswer(false)}
                    >
                      <i class="fa-solid fa-minus text-sm"></i>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* FAQ End */}
      <Footer />
    </>
  );
}

export default HomePage;
