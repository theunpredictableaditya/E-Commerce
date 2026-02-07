import React, {useState} from 'react'

const RegisterLogin = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    loginEmail: "",
    loginUsername: "",
    loginPassword: ""
  })

  const handleChange = (event) => {
    const {name, value: inputValue} = event.target;

    setFormData((prev)=>({
      ...prev,
      [name]: inputValue
    }))
  }

  const signUpData = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/v1/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        fullName: formData.fullName,
        username: formData.username,
        email: formData.email,
        password: formData.password
      })
    })

    const data = await response.json()
    console.log(data)
  }

  const loginData = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        email: formData.loginEmail,
        username: formData.loginUsername,
        password: formData.loginPassword
      })
    })

    const data = await response.json()
    console.log(data)
  }

  return <>
  <div className="flex min-h-screen">
  {/* SIGN UP */}
  <div className="w-1/2 bg-blue-600 text-white flex items-center justify-center">
    <form 
    className="w-[70%] max-w-md bg-blue-500 p-8 rounded-xl flex flex-col gap-6 shadow-lg"
    onSubmit={signUpData}
    >
      <p className="text-3xl font-semibold text-center">
        Create Account
      </p>

      <div className="flex flex-col gap-1">
        <label className="text-sm">Full Name</label>
        <input
          name='fullName'
          type="text"
          className="px-4 py-2 rounded-md text-black outline-none"
          placeholder="John Doe"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm">Username</label>
        <input
          name='username'
          type="text"
          className="px-4 py-2 rounded-md text-black outline-none"
          placeholder="johndoe"
          value={formData.username}
          onChange={(e)=>handleChange(e)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm">Email</label>
        <input
          name='email'
          type="email"
          className="px-4 py-2 rounded-md text-black outline-none"
          placeholder="john@email.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm">Password</label>
        <input
          name='password'
          type="password"
          className="px-4 py-2 rounded-md text-black outline-none"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button 
      className="mt-4 bg-white text-blue-600 font-medium py-2 rounded-md hover:bg-gray-100 transition"
      type='submit'
      >
        Sign Up
      </button>
    </form>
  </div>

  {/* LOGIN */}
<div className="w-1/2 bg-white flex items-center justify-center">
  <form className="w-[70%] max-w-md bg-gray-50 p-8 rounded-xl flex flex-col gap-6 shadow-lg" onSubmit={loginData}>
    <p className="text-3xl font-semibold text-center text-gray-800">
      Welcome Back
    </p>

    {/* Email */}
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-600">Email</label>
      <input
        name='loginEmail'
        type="email"
        className="px-4 py-2 rounded-md border outline-none"
        placeholder="john@email.com"
        value={formData.loginEmail}
        onChange={handleChange}
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
        name='loginUsername'
        type="text"
        className="px-4 py-2 rounded-md border outline-none"
        placeholder="johndoe"
        value={formData.loginUsername}
        onChange={handleChange}
      />
    </div>

    {/* Password */}
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-600">Password</label>
      <input
        name='loginPassword'
        type="password"
        className="px-4 py-2 rounded-md border outline-none"
        placeholder="••••••••"
        value={formData.loginPassword}
        onChange={handleChange}
      />
    </div>

    <button type="submit" className="mt-4 bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition">
      Log In
    </button>
  </form>
</div>
</div>

  </>
}

export default RegisterLogin