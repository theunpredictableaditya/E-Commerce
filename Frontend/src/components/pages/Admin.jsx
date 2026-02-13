import React from 'react'

const Admin = () => {
  return (
    <div className="flex-1 p-8 bg-gray-50 overflow-y-auto">

      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Admin Panel
      </h1>

      {/* ROW CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* ================= ADD PRODUCT ================= */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Add Product
          </h2>

          <div className="flex flex-col gap-4">

            {/* Image Upload */}
            <label className="border-2 border-dashed rounded-lg h-40 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition">
              <input type="file" className="hidden" />
              <span className="text-gray-400">
                Drop Image or Click to Upload
              </span>
            </label>

            {/* Inputs */}
            <input
              type="text"
              placeholder="Product Name"
              className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              placeholder="Product Description"
              className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="number"
              placeholder="Quantity"
              className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="number"
              placeholder="Price"
              className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Add Product
            </button>
          </div>
        </div>

        {/* ================= DELETE PRODUCT ================= */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Delete Product
          </h2>

          <div className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Enter Product ID or Name"
              className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-red-400"
            />

            <button className="bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition">
              Delete Product
            </button>

            {/* filler info panel */}
            <div className="mt-4 p-4 rounded-lg bg-gray-50 border text-sm text-gray-500">
              Deleted products will be permanently removed from inventory.
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Admin
