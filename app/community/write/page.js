import React from "react";

const page = () => {
  return (
    <form className="px-4 py-10">
      <textarea
        placeholder="질문의 답변을 입력해주세요"
        className="resize-none mt-1 shadow-sm w-full focus:ring-2 focus:ring-teal-500 rounded-md border-gray-400 focus:border-teal-500"
        rows={4}
      />
      <button className="mt-4 w-full bg-teal-500 py-4 hover:bg-teal-600 hover:text-white rounded-md">
        전송
      </button>
    </form>
  );
};

export default page;
