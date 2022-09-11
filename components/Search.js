import React from "react";

const Search = () => {
  return (
    <div className="px-20 absolute left-0 right-0 bottom-[-70px]">
      <div className="border bg-white h-[150px] m-auto rounded-lg">
        <div className="p-5">
          <h1 className="text-xl mb-2">Search Ride</h1>
          <form className="grid grid-cols-12 gap-8">
            <div className="flex flex-col col-span-3">
              <label className="text-xl mb-1 text-[#686868] font-normal">
                Leaving From
              </label>
              <input
                type="text"
                placeholder="Leaving From"
                className="border px-2 py-1 border-[#d0d0d0] rounded-md"
              />
            </div>
            <div className="flex flex-col col-span-3">
              <label className="text-xl mb-1 text-[#686868] font-normal">
                Leaving From
              </label>
              <input
                type="text"
                placeholder="Leaving From"
                className="border px-2 py-1 border-[#d0d0d0] rounded-md"
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
