import React, { useState } from "react";
import { registerCustomer } from "../api/httpapi";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
  });

  const [error, setError] = useState("1");
  const [flag, setFlag] = useState(false);
  let navigate = useNavigate();

  const formValidation = (e) => {
    let { name, value } = e.target;
    switch (name) {
      case "firstName":
        setForm({ ...form, [name]: value });
        break;
      case "lastName":
        setForm({ ...form, [name]: value });
        break;
      case "email":
        setForm({ ...form, [name]: value });
        break;
      case "phoneNumber":
        setForm({ ...form, [name]: value });
        if (value.length < 10 || value.length > 10) {
          setError("Phone Number must be least 10 Digits");
        } else setError("1");
        break;
      case "password":
        setForm({ ...form, [name]: value });
        break;
      default: {
        alert("Error");
      }
    }
  };

  const handleRegistration = async () => {
    setFlag(true);
    if (
      form.email &&
      form.password &&
      form.firstName &&
      form.lastName &&
      form.phoneNumber
    ) {
      let data = {
        email: form.email,
        password: form.password,
        phoneNumber: "+91-" + form.phoneNumber,
        displayName: form.firstName + " " + form.lastName,
        photoUrl: "https://unsplash.com/photos/rDEOVtE7vOs",
      };
      await registerCustomer(JSON.stringify(data))
        .then((res) => {
          if (res.code === "000") navigate("/login");
          else {
            setError("Opps! Internal Error. Please try again in some time");
          }
          setFlag(false);
        })
        .catch((error) => {
          let message = error.description;
          if (message) setError(message);
          else setError("Internal Error");
          setFlag(false);
        });
    } else {
      setError("Invalid Details! Please check details again");
      setFlag(false);
    }
  };

  return (
    <div className="text-white flex flex-row w-full h-full">
      <div className="w-full tablet:w-1/2 tablet:pt-20 pt-16">
        <div
          className={`${
            error.trim() !== "1" ? "bg-red-500" : "bg-black text-black"
          } p-4`}
        >
          <h1>{error}</h1>
        </div>
        <form className="flex flex-col space-y-6 w-1/2 mx-auto my-20">
          <h1 className="font-bold text-4xl py-4">Sign Up</h1>
          <fieldset className="border-2 border-white p-2 rounded-md">
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              className="bg-black w-full"
              value={form.firstName}
              onChange={formValidation}
            />
          </fieldset>
          <fieldset className="border-2 border-white p-2 rounded-md">
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="bg-black w-full "
              value={form.lastName}
              onChange={formValidation}
            />
          </fieldset>
          <fieldset className="border-2 border-white p-2 rounded-md">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="bg-black w-full"
              value={form.email}
              onChange={formValidation}
            />
          </fieldset>
          <fieldset className="p-2 border-2 border-white rounded-md flex flex-row space-x-2">
            <h1>+91</h1>
            <input
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              className="bg-black w-full"
              value={form.phoneNumber}
              onChange={formValidation}
            />
          </fieldset>
          <fieldset className="border-2 border-white p-2 rounded-md">
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="bg-black w-full"
              value={form.password}
              onChange={formValidation}
            />
          </fieldset>
          <button
            type="button"
            disabled={flag}
            onClick={handleRegistration}
            className="flex flex-row items-center justify-center text-xs font-bold text-white border-2 rounded-full px-4 border-green-500 hover:bg-green-700 tablet:px-8 py-1 tablet:text-lg"
          >
            {flag ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Register"
            )}
          </button>
        </form>
      </div>
      <div className="w-0 tablet:w-1/2">
        <img
          alt="register for drop ship"
          src={require("../assets/images/RegisterPage.jpg")}
          className="h-0 w-0 tablet:h-screen tablet:w-full"
        />
      </div>
    </div>
  );
}
