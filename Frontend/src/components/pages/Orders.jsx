import React from 'react'

const Orders = () => {
  return (
    <div className="pl-6 space-y-6">

      {/* ===== TITLE ===== */}
      <h1 className="text-2xl font-semibold">My Orders</h1>

      {/* ===== MAIN GRID ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT — ORDERS LIST */}
        <div className="lg:col-span-2 space-y-5">

          {[1, 2, 3].map((order) => (
            <div
              key={order}
              className="bg-white rounded-xl shadow p-5 flex gap-5"
            >
              {/* LEFT SIDE IMAGE */}
              <div className="w-28 h-28 bg-gray-200 rounded-lg flex-shrink-0" />

              {/* RIGHT SIDE INFO */}
              <div className="flex flex-col justify-between flex-1">

                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">
                    Wireless Headphones × 1
                  </h3>

                  <p className="text-sm text-gray-500">
                    Noise cancelling bluetooth headphones with long battery life.
                  </p>

                  <span className="text-sm font-medium text-blue-600">
                    Status: Packed
                  </span>
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3 mt-3">
                  <button className="px-4 py-2 border rounded-lg hover:bg-red-50 text-red-600">
                    Cancel Order
                  </button>

                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Delivery Info
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* RIGHT SIDE PANEL (fills empty space) */}
        <div className="space-y-6">

          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-semibold mb-3">Order Summary</h3>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Total Orders</span>
                <span>12</span>
              </div>

              <div className="flex justify-between">
                <span>Delivered</span>
                <span className="text-green-600">8</span>
              </div>

              <div className="flex justify-between">
                <span>Processing</span>
                <span className="text-blue-600">3</span>
              </div>

              <div className="flex justify-between">
                <span>Cancelled</span>
                <span className="text-red-600">1</span>
              </div>
            </div>
          </div>

          {/* Help Card */}
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-semibold mb-2">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-3">
              Having issues with delivery or product quality?
            </p>

            <button className="w-full bg-slate-900 text-white py-2 rounded-lg">
              Contact Support
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Orders
