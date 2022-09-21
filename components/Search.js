import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const [leaving, setLeaving] = useState("");
  const [heading, setHeading] = useState("");
  const [date, setDate] = useState("");
  const [seat, setSeat] = useState("");
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    router.push(
      `/search?heading=${heading}&&leaving=${leaving}&&date=${date}&&seat=${seat}&&vehicle=all`
    );
  };
  return (
    <div className="px-20 absolute left-0 right-0 bottom-[-70px]">
      <div className="border bg-white h-[150px] m-auto rounded-2xl">
        <div className="p-5">
          <h1 className="text-xl mb-2">Search Ride</h1>
          <form
            className="grid grid-cols-12 gap-8"
            onSubmit={handleSubmitSearch}
          >
            <div className="flex flex-col col-span-3">
              <label className="text-xl mb-1 text-[#686868] font-normal">
                Leaving From
              </label>
              <input
                type="text"
                placeholder="Leaving from ..."
                className="border px-2 py-1 border-[#d0d0d0] rounded-md"
                onChange={(e) => setLeaving(e.target.value)}
              />
            </div>
            <div className="flex flex-col col-span-3">
              <label className="text-xl mb-1 text-[#686868] font-normal">
                Going To
              </label>
              <input
                type="text"
                placeholder="Going to ..."
                className="border px-2 py-1 border-[#d0d0d0] rounded-md"
                onChange={(e) => setHeading(e.target.value)}
              />
            </div>
            <div className="flex flex-col col-span-3">
              <label className="text-xl mb-1 text-[#686868] font-normal">
                Date
              </label>
              <input
                type="date"
                placeholder="Leaving From"
                className="border px-2 py-1 border-[#d0d0d0] rounded-md text-[#686868]"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label className="text-xl mb-1 text-[#686868] font-normal">
                Passenger
              </label>
              <input
                type="number"
                placeholder="Leaving From"
                className="border px-2 py-1 border-[#d0d0d0] rounded-md"
                onChange={(e) => setSeat(e.target.value)}
              />
            </div>
            <div className="mt-8 col-span-1">
              <input
                type="submit"
                value="Search"
                className="rounded-md cursor-pointer py-1 w-full bg-primary text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
