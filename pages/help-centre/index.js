import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Footer from "../../components/Footer";


import { API } from "../../config";
import Link from "next/link";

const HelpCentre = ({ getFAQ }) => {
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
      <h1 className="text-center text-blue-700 font-bold text-4xl">"We are here to help to help you with any <br /> <span className="text-green-700">Sangai</span> related questions or queries."</h1>
      <Container>
        <h1 className="font-bold text-2xl mb-3">Popular articles</h1>
        <div class="grid grid-cols-3 gap-10 mb-3">
          <div>
            <div class="p-6 max-w-sm bg-white rounded-lg  flex">
              <div>
                <svg aria-hidden="true" class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <div className="ml-2">
                <h5 class="mb-2 text-xl font-bold text-gray-900">Article 1</h5>
                <p class="mb-3 font-normal text-lg text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <Link
                  href="/help-centre/booking-bus/fares-schedules/bus-departure-arrival"
                >
                  <a class="inline-flex items-center py-1 text-lg font-medium text-center text-black">
                  Read more
                  <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                </Link>
              </div>

            </div>
          </div>

          <div>
            <div class="p-6 max-w-sm bg-white rounded-lg  flex">
              <div>
                <svg aria-hidden="true" class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <div className="ml-2">
                <h5 class="mb-2 text-xl font-bold text-gray-900">Article 1</h5>
                <p class="mb-3 font-normal text-lg text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <Link
                  href="/help-centre/booking-bus/fares-schedules/bus-departure-arrival"
                >
                  <a class="inline-flex items-center py-1 text-lg font-medium text-center text-black">
                  Read more
                  <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                </Link>
              </div>

            </div>
          </div>

          <div>
            <div class="p-6 max-w-sm bg-white rounded-lg  flex">
              <div>
                <svg aria-hidden="true" class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <div className="ml-2">
                <h5 class="mb-2 text-xl font-bold text-gray-900">Article 1</h5>
                <p class="mb-3 font-normal text-lg text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <Link
                  href="/help-centre/booking-bus/fares-schedules/bus-departure-arrival"
                >
                  <a class="inline-flex items-center py-1 text-lg font-medium text-center text-black">
                  Read more
                  <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                </Link>
              </div>

            </div>
          </div>

          <div>
            <div class="p-6 max-w-sm bg-white rounded-lg  flex">
              <div>
                <svg aria-hidden="true" class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <div className="ml-2">
                <h5 class="mb-2 text-xl font-bold text-gray-900">Article 1</h5>
                <p class="mb-3 font-normal text-lg text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <Link
                  href="/help-centre/booking-bus/fares-schedules/bus-departure-arrival"
                >
                  <a class="inline-flex items-center py-1 text-lg font-medium text-center text-black">
                  Read more
                  <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                </Link>
              </div>

            </div>
          </div>

          <div>
            <div class="p-6 max-w-sm bg-white rounded-lg  flex">
              <div>
                <svg aria-hidden="true" class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <div className="ml-2">
                <h5 class="mb-2 text-xl font-bold text-gray-900">Article 1</h5>
                <p class="mb-3 font-normal text-lg text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <Link
                  href="/help-centre/booking-bus/fares-schedules/bus-departure-arrival"
                >
                  <a class="inline-flex items-center py-1 text-lg font-medium text-center text-black">
                  Read more
                  <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                </Link>
              </div>

            </div>
          </div>

          <div>
            <div class="p-6 max-w-sm bg-white rounded-lg  flex">
              <div>
                <svg aria-hidden="true" class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <div className="ml-2">
                <h5 class="mb-2 text-xl font-bold text-gray-900">Article 1</h5>
                <p class="mb-3 font-normal text-lg text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <Link
                  href="/help-centre/booking-bus/fares-schedules/bus-departure-arrival"
                >
                  <a class="inline-flex items-center py-1 text-lg font-medium text-center text-black">
                  Read more
                  <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                </Link>
              </div>

            </div>
          </div>
        </div>
        

        <h1 className="text-center font-bold text-2xl mb-3">Different help sections</h1>
        <div class="grid grid-cols-3 gap-10 mb-3">
          <div>
            <div class="max-w-sm rounded overflow-hidden border border-gray-300">
              <img class="w-full h-40" src="/sharing1.jpeg" />
              <Link
                href="/help-centre/offer-drive-sangai"
              >
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 cursor-pointer">Offer and Drive at Sangai</div>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <div class="max-w-sm rounded overflow-hidden border border-gray-300">
              <img class="w-full h-40" src="/sharing.jpeg" />
              <Link
                href="/help-centre/book-travel-sangai"
              >
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 cursor-pointer">Book and Travel by Sangai</div>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <div class="max-w-sm rounded overflow-hidden border border-gray-300">
              <img class="w-full h-40" src="/laptop.png" />
              <Link
                href="/help-centre/book-travel-bus/"
              >
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 cursor-pointer">Book and Travel by Bus</div>
                </div>
              </Link>
            </div>
          </div>
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
