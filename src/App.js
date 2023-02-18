import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  return (
    <div>
      <div className="absolute bg-gray-700 bg-opacity-30 w-full flex flex-row justify-between tablet:h-20 h-16">
        <a className="text-white text-3xl p-3 tablet:text-4xl tablet:p-4 " href="/">Drop&Ship</a>
        <div className="flex justify-end space-x-2 py-4 px-2 tablet:space-x-5 tablet:px-4">
          <button
            className="text-xs font-bold text-white border-2 rounded-full px-4 tablet:px-8 py-1 hover:border-blue-500 tablet:text-lg"
            onClick={() => navigate("login")}
          >
            Login
          </button>
          <button
            className="text-xs font-bold text-white border-2 rounded-full px-4 tablet:px-8 py-1 hover:border-green-500 tablet:text-lg"
            onClick={() => navigate("register")}
          >
            Register
          </button>
        </div>
      </div>
      <Outlet />

    </div>
  );
}

export default App;
