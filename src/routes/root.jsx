import React from "react";
export default function Root() {
  
  return (
    <div className="dark:bg-black h-screen w-full flex flex-row">
      <div className=" h-full pt-28 tablet:px-10 tablet:w-1/2">
        <h1 className="text-white text-left text-6xl font-medium py-10 px-10 tablet:text-7xl">
          Request.
          <br />
          Ship.
          <br />
          Drop.
          <br />
          <br />➬ 🚚 📦
        </h1>
      </div>
      <div className="w-0 tablet:w-1/2">
        <img
          alt="register for drop ship"
          src={require("../assets/images/RegisterPage.jpg")}
          className="h-0 w-0 tablet:h-full tablet:w-full"
        />
      </div>
    </div>
  );
}
