import React, {useState} from "react";
import { toast } from "react-toastify";

const Admin = () => {

  //for adding prouct
  const [productData, setProductData] = useState({
    productName : "",
    productDescription: "",
    productQuantity: "",
    productPrice: "",
    productCategory: "",
    productImage: null
  })

  const [preview, setPreview] = useState(null)

    const handleChange = (event) => {
    const {name, value: inputValue} = event.target;

    setProductData((prev)=>({
      ...prev,
      [name]: inputValue
    }))
  }

  const handleImage = (event) => {

    const file = event.target.files[0];

    if(file){

      setProductData({
        ...productData,
        productImage: event.target.files[0]
      })

      setPreview(URL.createObjectURL(file));
    }
  }

  const addProduct = async() => {
    const formData = new FormData();
    formData.append("productName", productData.productName);
    formData.append("productDescription", productData.productDescription);
    formData.append("productQuantity", productData.productQuantity);
    formData.append("productPrice", productData.productPrice);
    formData.append("productCategory", productData.productCategory);
    
    if(productData.productImage){
      formData.append("productImage", productData.productImage);
    }
    const response = await fetch("/api/v1/products/add-product",{
      method: "POST",
      body: formData,
      credentials: "include"
    })

    const data = await response.json();

    if(data.statusCode === 200){
      toast.success(data.message);
    }

    setProductData({
    productName : "",
    productDescription: "",
    productQuantity: "",
    productPrice: "",
    productCategory: "",
    productImage: null
  })

    console.log(data);
  }


  //for deleting product
  const [productId, setProductId] = useState("")

  const handleProductId = (e) => {
    setProductId(e.target.value);
  }

  const deleteProduct = async() => {
    const response = await fetch("/api/v1/products/delete-product", {
      method: "POST",
      headers: {
    'Content-Type': 'application/json',
  },
      body: JSON.stringify({productId}),
      credentials: "include"
    })

    const data = await response.json();

    if(data.statusCode === 200){
      toast.success(data.message);
    }

    setProductId("")
  }

  
  return (
    <div className="flex-1 p-8 bg-gray-50 overflow-y-auto">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Admin Panel</h1>

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
              <input type="file" className="hidden" name="productImage" /*value={productData.productImage}*/ onChange={handleImage}/>
              {preview ? (<img src={preview} alt="preview" className="h-full w-full object-cover rounded-lg"></img>) : (<span className="text-gray-400">
                Drop Image or Click to Upload
              </span>)}
              
            </label>

            {/* Inputs */}

            <select
              name="productCategory"
              value={productData.productCategory}
              onChange={handleChange}
              className="
      px-4
      py-2
      border border-gray-200
      rounded-lg
      bg-white
      text-gray-700
      shadow-sm
      cursor-pointer
      outline-none
      hover:border-gray-300
      focus:ring-2
      focus:ring-blue-500
      transition
    "
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="electronics">Electronics</option>
              <option value="groceries">Groceries</option>
              <option value="clothings">Clothings</option>
            </select>
            <input
            name="productName"
            value={productData.productName}
            onChange={handleChange}
              type="text"
              placeholder="Product Name"
              className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
            name="productDescription"
            value={productData.productDescription}
            onChange={handleChange}
              placeholder="Product Description"
              className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
            name="productQuantity"
            value={productData.productQuantity}
            onChange={handleChange}
              type="number"
              placeholder="Quantity"
              className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
            name="productPrice"
            value={productData.productPrice}
            onChange={handleChange}
              type="number"
              placeholder="Price"
              className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition" onClick={addProduct}>
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
              value={productId}
              onChange={handleProductId}
            />

            <button 
            className="bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
            onClick={deleteProduct}>
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
  );
};

export default Admin;
