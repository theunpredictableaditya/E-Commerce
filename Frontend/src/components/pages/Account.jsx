import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Account = () => {
  //to update the user credentials

  const [whatToChange, setWhatToChange] = useState(null);
  const [modalVisibility, setModalVisibility] = useState("hidden");
  const [changedValue, setchangedValue] = useState({
    password: "",
    whatToChange: "",
    confirmChange: ""
  })

  useEffect(() => {
    console.log(whatToChange);
    if (whatToChange) {
      setModalVisibility("flex");
    } else {
      setModalVisibility("hidden");
    }
  }, [whatToChange]);

  const setWhat = (event) => {
    setWhatToChange(event.target.id);
    console.log(event.target.id);
  };

  const handleChange = (event) => {
    const {name, value} = event.target;

    setchangedValue((prev)=>({
      ...prev,
      [name]: value 
    }))
    console.log(value);
  };

  const handleConfirmClick = async() => {
    if(changedValue.whatToChange === changedValue.confirmChange){

      const response = await fetch("/api/v1/users/updateCredentials", {
        method: "PATCH",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          what: whatToChange,
          data: changedValue.confirmChange,
          currentPassword: changedValue.password
        })
      })

      const data = await response.json();

      if(data.statusCode === 200){
        toast.success("Credentials Changed Successfully");

        setchangedValue({
          password: "",
          whatToChange: "",
          confirmChange: ""
        })
      }
    }else{
      toast.error("Recheck Your New Credentials");
    }
  }

  return (
    <div className="flex justify-between">
      <div className="p-6 flex flex-col gap-8">
        {/* Account Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-gray-900">Account</h1>

          <div className="border rounded-lg p-5 bg-white flex flex-col gap-4">
            {/* User Row */}
            <div className="flex justify-between items-center border-b pb-3">
              <span className="text-sm text-gray-500">Full Name</span>
              <span className="text-sm font-medium text-gray-900">
                Aditya Gupta
              </span>
            </div>

            <div className="flex justify-between items-center border-b pb-3">
              <span className="text-sm text-gray-500">Username</span>
              <span className="text-sm font-medium text-gray-900">
                aditya123
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Email</span>
              <span className="text-sm font-medium text-gray-900">
                aditya@email.com
              </span>
            </div>
          </div>
        </div>

        {/* Privacy Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            Privacy & Security
          </h1>

          <div className="border rounded-lg p-5 bg-white flex flex-col gap-3">
            <button
              id="username"
              className="w-full text-left px-4 py-3 rounded-md border hover:bg-gray-100 transition text-sm font-medium"
              onClick={setWhat}
            >
              Change Username
            </button>

            <button
              id="email"
              className="w-full text-left px-4 py-3 rounded-md border hover:bg-gray-100 transition text-sm font-medium"
              onClick={setWhat}
            >
              Update Email Address
            </button>

            <button
              id="password"
              className="w-full text-left px-4 py-3 rounded-md border hover:bg-gray-100 transition text-sm font-medium"
              onClick={setWhat}
            >
              Change Password
            </button>

            {/* Extra filler (realistic feature) */}
            <button className="w-full text-left px-4 py-3 rounded-md border border-red-300 bg-red-500 text-white hover:bg-red-50 transition text-sm font-medium"
            onClick={handleConfirmClick}>
              Confirm Changes
            </button>
          </div>
        </div>
      </div>
      {whatToChange && (
        <div className={`changable p-6 ${setModalVisibility}`}>
          <h1 className="text-2xl font-semibold text-gray-900">
            Change {whatToChange}
          </h1>
          <div className="changeBox flex flex-col gap-3 pt-5">
            <input
              name="password"
              onChange={handleChange}
              value={changedValue.password}
              type="text"
              placeholder="Your Password"
              className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="whatToChange"
              onChange={handleChange}
              value={changedValue.whatToChange}
              type="text"
              placeholder={`New ${whatToChange}`}
              className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="confirmChange"
              onChange={handleChange}
              value={changedValue.confirmChange}
              type="text"
              placeholder={`Confirm ${whatToChange}`}
              className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
