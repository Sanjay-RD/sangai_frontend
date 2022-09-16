import axios from "axios";
import Link from "next/link";
import React from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import { API } from "../config";

const driver = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <div className="my-10">
          <div className="border w-[600px] m-auto px-5 py-5 shadow-lg rounded-md">
            <h1 className="text-primaryDark text-xl">
              Sorry You are not a drive, to be a driver please submit your
              document in whatsapp number : 09898788098098
            </h1>
            <div className="mt-3 text-center">
              <Link href="/">
                <a className="bg-primary text-white px-3 py-1 rounded-md ">
                  Ok
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
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

export default driver;
