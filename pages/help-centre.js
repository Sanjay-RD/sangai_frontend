import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { API } from "../config";

const HelpCentre = ({ getFAQ }) => {
  const [openAnswer, setOpenAnswer] = useState();
  return (
    <div>
      <Navbar />
      <div className="w-full h-[300px] relative">
        <Image
          alt="Mountains"
          src="/sharing1.jpeg"
          priority
          objectFit="cover"
          layout="fill"
        />
      </div>
      <Container>
        <div className="my-6">
          <h1 className="font-normal text-3xl text-primaryDark">
            We are here to assist you with any sangai related question and
            queries.
          </h1>
          {/* FAQ */}
          <div className="mt-10">
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
          </div>
          {/* FAQ end */}
          {/* feedback form */}
          <div className="mt-10">
            <div>
              <h1 className="text-3xl font-[400] text-primaryDark">
                Feedback Form
              </h1>
              <p className="text-primaryDark opacity-80">
                We would love to hear your thought, suggestions, concerns or
                problems with anything so we can improve!
              </p>
            </div>
            <form className="mt-5 space-y-10">
              <div className="grid grid-cols-2 gap-10">
                <div className="flex flex-col space-y-1">
                  <label className="text-primaryDark opacity-95">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="border px-4 py-2 rounded-md w-full text-primaryDark"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-primaryDark opacity-95">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="border px-4 py-2 rounded-md w-full text-primaryDark"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-primaryDark opacity-95">Email</label>
                  <input
                    type="text"
                    placeholder="Enter Email Address"
                    className="border px-4 py-2 rounded-md w-full text-primaryDark"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-primaryDark opacity-95">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    className="border px-4 py-2 rounded-md w-full text-primaryDark"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-primaryDark opacity-95">
                  Describe Your Feedback
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder=""
                  className="border px-4 py-2 rounded-md w-full text-primaryDark"
                ></textarea>
              </div>
              <div>
                <input
                  type="submit"
                  value="Submit Feedback"
                  className="px-10 py-2 rounded-md bg-primary text-primaryDark cursor-pointer"
                />
              </div>
            </form>
          </div>
          {/* feedback form end */}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  // const { search, sort, category } = query;
  const getFAQ = await axios.get(`${API}/faq/isPublished`);
  return {
    props: {
      getFAQ: getFAQ.data,
    },
  };
}

export default HelpCentre;
