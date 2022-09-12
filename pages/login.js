import Link from "next/link";
import React from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

const login = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <div className="mt-10">
          <h1 className="text-4xl text-center font-bold mb-8">
            Login With Sangai
          </h1>
          <div className="m-auto w-[400px] space-y-5">
            <div className="border rounded-md border-[#dedede]">
              <h1 className="px-3 py-2 text-center">Login with Google</h1>
            </div>
            <div className="border rounded-md border-[#dedede]">
              <h1 className="px-3 py-2 text-center">
                Login with Mobile Number
              </h1>
            </div>
            <div className="flex space-x-2">
              <h1>New Member?</h1>
              <Link href="/signup">
                <a>Create Account</a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default login;
