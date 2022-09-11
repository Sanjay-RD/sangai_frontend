import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Notification from "../components/Notification";
import Search from "../components/Search";
import Showcase from "../components/Showcase";
import { API } from "../config";

function HomePage({ getFAQ }) {
  console.log("getFAQ", getFAQ);
  const [openAnswer, setOpenAnswer] = useState();

  const handleClickOpenFAQ = (i) => {
    setOpenAnswer(true);
  };
  return (
    <>
      <Navbar />
      {/* <Notification /> */}
      <div className="relative">
        <Showcase />
        <Search />
      </div>
      <div className="mt-32 mb-10">
        <Container>
          <div>
            <h1 className="text-4xl font-[400] text-primaryDark">
              Get best Services at Sangai
            </h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 my-9">
              <div className="flex space-x-5">
                <div>
                  <i class="fa-solid fa-piggy-bank text-8xl text-primaryDark"></i>
                </div>
                <div>
                  <h1 className="text-2xl font-medium my-1 text-primaryDark">
                    Save on travel costs
                  </h1>
                  <p className="text-primaryDark">
                    You have to travel frequently and the problem is the
                    traveling cost, May be due to an increase in the price of
                    petrol? So, let’s solve the problem by sharing your ride.
                    ‘Sangai’ is the best platform where you can save your
                    traveling money by sharing your ride with passengers.
                  </p>
                </div>
              </div>
              <div className="flex space-x-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-[96px] h-[96px] text-primaryDark"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl font-medium my-1 text-primaryDark">
                    Join a trustworthy community
                  </h1>
                  <p className="text-primaryDark">
                    Our support is available at any time. If you find any danger
                    or problem during the traveling, you can contact our team
                    members of ‘Sangai’. All drivers are background-checked
                    before their first trip.
                  </p>
                </div>
              </div>
              <div className="flex space-x-5">
                <div>
                  <i class="fa-solid fa-rocket text-8xl text-primaryDark"></i>
                </div>
                <div>
                  <h1 className="text-2xl font-medium my-1 text-primaryDark">
                    Sangai made simple
                  </h1>
                  <p className="text-primaryDark">
                    Our system is very easy to use both for riders and
                    passengers. Riders can publish their ride details and
                    passengers can choose and book their appropriate riders.
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
                    Create a Sangai account
                  </h1>
                  <p className="text-primaryDark opacity-70">
                    Login into sangai and fill up other form to become rider or
                    send the detail in whatsapp.
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
              Offerings and Safe travel
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
                    Our team is always available to serve your request. You can
                    contact us via chat, email, or other social media platforms.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <i class="fa-solid fa-car text-3xl text-primaryDark"></i>
                </div>
                <div>
                  <h1 className="text-xl font-medium my-1 text-primaryDark">
                    Sangai at your side
                  </h1>
                  <p className="text-primaryDark">
                    Save money on your regular travel expenses. Your work also
                    gets completed, and you can save money too.
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
                    Ensure Security
                  </h1>
                  <p className="text-primaryDark">
                    Our team is committed to ensuring the security of your data,
                    which is always kept completely confidential. Personal
                    information about both the driver and the passenger is kept
                    private.
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
            {getFAQ.map((value, i) => (
              <div className="border-b py-3">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-xl text-primaryDark">
                      {value.question}
                    </h1>
                    {openAnswer === i && (
                      <p className="text-primaryDark opacity-90 px-2 mt-2 Faq_description">
                        {/* {value.answer} */}
                        <div
                          dangerouslySetInnerHTML={{
                            __html: value.answer,
                          }}
                        />
                      </p>
                    )}
                  </div>
                  <div>
                    {openAnswer !== i ? (
                      <div
                        className="cursor-pointer text-primaryDark"
                        onClick={() => setOpenAnswer(i)}
                      >
                        <i class="fa-solid fa-plus text-sm"></i>
                      </div>
                    ) : (
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
            ))}
          </div>
        </Container>
      </div>
      {/* FAQ End */}
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  // const { search, sort, category } = query;
  const getFAQ = await axios.get(`${API}/faq/isPublished`);
  return {
    props: {
      getFAQ: getFAQ.data,
    },
  };
}

export default HomePage;
