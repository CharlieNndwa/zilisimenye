import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-2xl text-hoverBg font-semibold">
        Thank you for your contribution!
      </h1>
      <button
        className="text-lg text-gray-500 hover:underline underline-offset-4 decoration-[1px] hover:text-blue-600 duration-300"
        href="#home"
      >
        <p>Return to Home</p>
      </button>
    </div>
  );
};

export default SuccessPage;
