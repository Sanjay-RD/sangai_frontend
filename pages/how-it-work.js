import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { API } from "../config";

const howItWork = ({ getFAQ }) => {
  const [openAnswer, setOpenAnswer] = useState();
  return (
    <div>
      <Navbar />
      <Container>
        <div className="my-6">
          <h1 className="font-normal text-3xl">
            We are here to assist you with any sangai related question and
            queries.
          </h1>
          {/* FAQ */}
          <div className="mt-7">
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

export default howItWork;
