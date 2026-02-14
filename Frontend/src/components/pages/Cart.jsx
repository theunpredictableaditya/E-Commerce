import React from 'react'

const Cart = () => {
  return (
     <div className="flex-1 p-8 bg-gray-50 overflow-y-auto">

      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Cart
      </h1>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* ================= CART ITEMS ================= */}
        <div className="xl:col-span-2 flex flex-col gap-6">

          {/* Item Card */}
          <div className="bg-white border rounded-xl shadow-sm p-5 flex gap-5">

            {/* Image */}
            <div className="w-28 h-28 bg-gray-200 rounded-lg"></div>

            {/* Info */}
            <div className="flex flex-col flex-1 gap-2">

              <h2 className="font-semibold text-gray-800">
                Product Name
              </h2>

              <p className="text-sm text-gray-500">
                Short description of the product goes here.
              </p>

              {/* Quantity */}
              <div className="flex items-center gap-3 mt-2">
                <span className="text-sm text-gray-600">Qty:</span>
                <input
                  type="number"
                  min="1"
                  defaultValue={1}
                  className="w-20 border rounded-md px-2 py-1 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-3">
                <button className="px-4 py-1.5 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition">
                  Remove
                </button>

                <button className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  Select
                </button>
              </div>
            </div>
          </div>

          {/* Duplicate items example */}
          <div className="bg-white border rounded-xl shadow-sm p-5 flex gap-5">
            <div className="w-28 h-28 bg-gray-200 rounded-lg"></div>

            <div className="flex flex-col flex-1 gap-2">
              <h2 className="font-semibold text-gray-800">
                Another Product
              </h2>
              <p className="text-sm text-gray-500">
                Product details preview description.
              </p>

              <input
                type="number"
                defaultValue={2}
                className="w-20 border rounded-md px-2 py-1 mt-2"
              />

              <div className="flex gap-3 mt-3">
                <button className="px-4 py-1.5 text-sm bg-red-500 text-white rounded-md">
                  Remove
                </button>
                <button className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded-md">
                  Select
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* ================= ORDER SUMMARY ================= */}
        <div className="bg-white border rounded-xl shadow-sm p-6 h-fit">

          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Order Summary
          </h2>

          <div className="flex justify-between text-sm mb-2">
            <span>Selected Items</span>
            <span>3</span>
          </div>

          <div className="flex justify-between text-sm mb-4">
            <span>Total Price</span>
            <span className="font-semibold">$120</span>
          </div>

          <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
            Order All Selected
          </button>

        </div>
      </div>
    </div>
  )
}

export default Cart
