import React from "react";

const page = () => {
  return (
    <div className="py-10 px-4 divide-y-[1px]">
      {[1, 2, 3, 4, 5].map((v) => (
        <div className="flex  cursor-pointer py-3   items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gray-300" />
          <div>
            <p className="  text-gray-700">Steve Jebs</p>
            <p className="text-xs   text-gray-500">
              See you tomorrow in the corner at 2pm! &rarr;
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
