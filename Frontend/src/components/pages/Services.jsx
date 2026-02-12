import React, {useState} from 'react'

const Services = () => {

  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, query });
    setEmail("");
    setQuery("");
  };

  return (
    <div className="p-6 flex flex-col gap-8">
      {/* Services Section */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">
          Services
        </h1>

        <div className="border rounded-lg p-5 bg-white text-sm text-gray-600 leading-relaxed">
          We provide a seamless ecommerce experience including fast
          delivery, secure payments, real-time order tracking, and
          responsive customer support to ensure customer satisfaction.
        </div>
      </div>

      {/* Feedback Section */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">
          Feedback
        </h1>

        <div className="border rounded-lg p-5 bg-white">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
            />

            <textarea
              name="query"
              placeholder="Write your feedback..."
              rows="4"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
              className="w-full border rounded-md px-3 py-2 text-sm outline-none resize-none focus:ring-2 focus:ring-black"
            />

            <button
              type="submit"
              className="self-start px-5 py-2 text-sm rounded-md bg-black text-white hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Services
