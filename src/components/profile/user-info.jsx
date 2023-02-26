import React from "react";

const UserInfo = (props) => {
  return (
    <div className="tablet:border-8 tablet:border-blue-500 rounded-3xl flex flex-col tablet:flex-row tablet:mx-36">
      <div className="flex flex-col items-center space-y-5 px-8 py-8 tablet:w-1/4">
        <img
          src={require("./pro-pic.jpeg")}
          alt="user-avatar"
          className="aspect-square h-48 rounded-full"
        />
        <h1 className="text-black dark:text-white">Display Name</h1>
      </div>
      <div className="flex flex-col items-left space-y-5 px-8 tablet:w-3/4 py-10">
        <fieldset className="border-2 border-black dark:border-white p-3 rounded-md">
          <legend className="text-black dark:text-white">
            &nbsp;&nbsp;Email&nbsp;&nbsp;
          </legend>
          <input
            type="text"
            value="shantanu706@gmail.com "
            className="dark:bg-black w-full text-gray-500 dark:text-gray-100"
            disabled
          />
        </fieldset>
        <fieldset className="border-2 border-black dark:border-white p-3 rounded-md flex flex-row">
          <legend className="text-black dark:text-white">
            &nbsp;&nbsp;Phone Number&nbsp;&nbsp;
          </legend>
          <input
            type="text"
            value="+91&nbsp;7776018272"
            className="dark:bg-black w-full text-gray-500 dark:text-gray-100"
            disabled
          />
        </fieldset>
      </div>
    </div>
  );
};

export default UserInfo;
