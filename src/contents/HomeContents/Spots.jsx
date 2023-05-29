import React from "react";

const Spots = () => {
  return (
    <div className="bg-[#FFF8F6] flex flex-col items-center justify-center py-24">
      <h1 className=" text-5xl font-Josefin leading-[57px] text-secondary pb-1.5">
        All spots are already filled
      </h1>
      <p className="text-base font-Lato font-normal text-primary">
        We will notify you first once we have new spots available in near future
      </p>
      {/* <form className="max-w-[600px] bg-black">
        <div class="relative">
          <input
            type="search"
            id="search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            notify me
          </button>
        </div>
      </form> */}
    </div>
  );
};

export default Spots;
