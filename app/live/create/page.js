import React from "react";

const page = () => {
  return (
    <div className="px-4 py-16 ">
      <div className="my-5">
        <label className="mb-1 block text-sm font-medium text-gray-500">
          name
        </label>
        <div className="rounded-md flex items-center relative shadow-sm">
          <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
            <span className="text-gray-500 text-sm">₩</span>
          </div>
          <input
            className="appearance-none pl-7  w-full py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 "
            type="text"
            placeholder="0.00"
          />
          <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
            <span className=" text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div className="my-5">
        <label className="mb-1 block text-sm font-medium text-gray-500">
          Price
        </label>
        <div className="rounded-md flex items-center relative shadow-sm">
          <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
            <span className="text-gray-500 text-sm">₩</span>
          </div>
          <input
            className="appearance-none pl-7  w-full py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 "
            type="text"
            placeholder="0.00"
          />
          <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
            <span className=" text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-500">
          Description
        </label>
        <div>
          <textarea
            className="resize-none mt-1 shadow-sm w-full focus:ring-2 focus:ring-teal-500 rounded-md border-gray-400 focus:border-teal-500"
            rows={4}
          />
        </div>
      </div>
      <button className="mt-4 w-full bg-teal-500 py-4 hover:bg-teal-600 hover:text-white rounded-md">
        go live
      </button>
    </div>
  );
};

export default page;
