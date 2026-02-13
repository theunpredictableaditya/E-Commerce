import React from 'react'

const Account = () => {
  return (
    <div className="p-6 flex flex-col gap-8">
      {/* Account Section */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">
          Account
        </h1>

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
          <button className="w-full text-left px-4 py-3 rounded-md border hover:bg-gray-100 transition text-sm font-medium">
            Change Username
          </button>

          <button className="w-full text-left px-4 py-3 rounded-md border hover:bg-gray-100 transition text-sm font-medium">
            Update Email Address
          </button>

          <button className="w-full text-left px-4 py-3 rounded-md border hover:bg-gray-100 transition text-sm font-medium">
            Change Password
          </button>

          {/* Extra filler (realistic feature) */}
          <button className="w-full text-left px-4 py-3 rounded-md border border-red-300 text-red-600 hover:bg-red-50 transition text-sm font-medium">
            Logout From All Devices
          </button>
        </div>
      </div>
    </div>
  )
}

export default Account
