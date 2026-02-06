import React from 'react'

const RegisterLogin = () => {
  return <>
  <div className="flex min-h-screen">
  {/* SIGN UP */}
  <div className="w-1/2 bg-blue-600 text-white flex items-center justify-center">
    <form className="w-[70%] max-w-md bg-blue-500 p-8 rounded-xl flex flex-col gap-6 shadow-lg">
      <p className="text-3xl font-semibold text-center">
        Create Account
      </p>

      <div className="flex flex-col gap-1">
        <label className="text-sm">Full Name</label>
        <input
          type="text"
          className="px-4 py-2 rounded-md text-black outline-none"
          placeholder="John Doe"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm">Username</label>
        <input
          type="text"
          className="px-4 py-2 rounded-md text-black outline-none"
          placeholder="johndoe"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm">Email</label>
        <input
          type="email"
          className="px-4 py-2 rounded-md text-black outline-none"
          placeholder="john@email.com"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm">Password</label>
        <input
          type="password"
          className="px-4 py-2 rounded-md text-black outline-none"
          placeholder="••••••••"
        />
      </div>

      <button className="mt-4 bg-white text-blue-600 font-medium py-2 rounded-md hover:bg-gray-100 transition">
        Sign Up
      </button>
    </form>
  </div>

  {/* LOGIN */}
<div className="w-1/2 bg-white flex items-center justify-center">
  <form className="w-[70%] max-w-md bg-gray-50 p-8 rounded-xl flex flex-col gap-6 shadow-lg">
    <p className="text-3xl font-semibold text-center text-gray-800">
      Welcome Back
    </p>

    {/* Email */}
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-600">Email</label>
      <input
        type="email"
        className="px-4 py-2 rounded-md border outline-none"
        placeholder="john@email.com"
      />
    </div>

    {/* OR divider */}
    <div className="flex items-center gap-3 text-gray-400 text-sm">
      <div className="flex-1 h-px bg-gray-300" />
      <span>OR</span>
      <div className="flex-1 h-px bg-gray-300" />
    </div>

    {/* Username */}
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-600">Username</label>
      <input
        type="text"
        className="px-4 py-2 rounded-md border outline-none"
        placeholder="johndoe"
      />
    </div>

    {/* Password */}
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-600">Password</label>
      <input
        type="password"
        className="px-4 py-2 rounded-md border outline-none"
        placeholder="••••••••"
      />
    </div>

    <button className="mt-4 bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition">
      Log In
    </button>
  </form>
</div>
</div>

  </>
}

export default RegisterLogin