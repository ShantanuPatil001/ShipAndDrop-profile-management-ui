import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderAuth = () => {
  let navigate = useNavigate();
  return (
      <div className="fixed bg-gray-700 bg-opacity-30 w-full flex flex-row justify-between tablet:h-20 h-16">
        <a
          className="text-3xl p-3 tablet:text-4xl tablet:p-4 text-black dark:text-white"
          href="/"
        >
          Ship&Drop
        </a>
      <div className="flex justify-end space-x-2 py-4 px-2 tablet:space-x-5 tablet:px-4">
        <button
          className="text-xs font-bold text-white border-2 rounded-full px-4 tablet:px-8 py-1 hover:border-green-500 tablet:text-xl"
          onClick={() => navigate("/auth/dashboard")}
        >
          Account
        </button>
        <button
          className="text-xs font-bold text-white border-2 rounded-full px-4 tablet:px-8 py-1 hover:border-red-500 tablet:text-lg"
          onClick={() => navigate("/login")}
        >
          Logut
        </button>
      </div>
    </div>
  );
};

export default HeaderAuth;
