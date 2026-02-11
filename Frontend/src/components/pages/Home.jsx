import React, { useState } from "react";

const categories = ["All", "Electronics", "Groceries", "Clothings"];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Electronics");

  return (
    // Whole home container padding
    <div className="p-6 flex flex-col gap-8">
      {/* Category Bar */}
      <div className="w-full flex justify-around items-center border rounded-lg py-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-md text-sm font-medium transition
              ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Item Card */}
        <div className="border rounded-lg p-4 flex gap-4 bg-white">
          {/* Image */}
          <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center">
            <span className="text-xs text-gray-400">Image</span>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between flex-1">
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-gray-900">
                Product Name
              </h3>
              <p className="text-xs text-gray-500">
                Short product description goes here.
              </p>
              <p className="text-sm font-medium text-gray-900">
                $199.00
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-4">
              <button className="flex-1 text-sm px-3 py-2 rounded-md border hover:bg-gray-100 transition">
                Add to Cart
              </button>
              <button className="flex-1 text-sm px-3 py-2 rounded-md bg-black text-white hover:opacity-90 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-4 flex gap-4 bg-white">
          {/* Image */}
          <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center">
            <span className="text-xs text-gray-400">Image</span>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between flex-1">
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-gray-900">
                Product Name
              </h3>
              <p className="text-xs text-gray-500">
                Short product description goes here.
              </p>
              <p className="text-sm font-medium text-gray-900">
                $199.00
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-4">
              <button className="flex-1 text-sm px-3 py-2 rounded-md border hover:bg-gray-100 transition">
                Add to Cart
              </button>
              <button className="flex-1 text-sm px-3 py-2 rounded-md bg-black text-white hover:opacity-90 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-4 flex gap-4 bg-white">
          {/* Image */}
          <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center">
            <span className="text-xs text-gray-400">Image</span>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between flex-1">
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-gray-900">
                Product Name
              </h3>
              <p className="text-xs text-gray-500">
                Short product description goes here.
              </p>
              <p className="text-sm font-medium text-gray-900">
                $199.00
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-4">
              <button className="flex-1 text-sm px-3 py-2 rounded-md border hover:bg-gray-100 transition">
                Add to Cart
              </button>
              <button className="flex-1 text-sm px-3 py-2 rounded-md bg-black text-white hover:opacity-90 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-4 flex gap-4 bg-white">
          {/* Image */}
          <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center">
            <span className="text-xs text-gray-400">Image</span>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between flex-1">
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-gray-900">
                Product Name
              </h3>
              <p className="text-xs text-gray-500">
                Short product description goes here.
              </p>
              <p className="text-sm font-medium text-gray-900">
                $199.00
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-4">
              <button className="flex-1 text-sm px-3 py-2 rounded-md border hover:bg-gray-100 transition">
                Add to Cart
              </button>
              <button className="flex-1 text-sm px-3 py-2 rounded-md bg-black text-white hover:opacity-90 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-4 flex gap-4 bg-white">
          {/* Image */}
          <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center">
            <span className="text-xs text-gray-400">Image</span>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between flex-1">
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-gray-900">
                Product Name
              </h3>
              <p className="text-xs text-gray-500">
                Short product description goes here.
              </p>
              <p className="text-sm font-medium text-gray-900">
                $199.00
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-4">
              <button className="flex-1 text-sm px-3 py-2 rounded-md border hover:bg-gray-100 transition">
                Add to Cart
              </button>
              <button className="flex-1 text-sm px-3 py-2 rounded-md bg-black text-white hover:opacity-90 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
