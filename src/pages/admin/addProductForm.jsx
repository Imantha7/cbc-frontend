import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import uploadMediaToSupabase from "../../utils/mediaUpload";

export default function AddProductForm() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [alternativeNames, setAlternativeNames] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [price, setPrice] = useState("");
  const [lastPrice, setLastPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate()

  async function handleSubmit(){
    const altNames = alternativeNames.split(",")

    const promisesArray = []

    for(let i=0; i<imageFiles.length; i++){
      promisesArray[i] = uploadMediaToSupabase(imageFiles[i])
    }

    const imgUrls = await Promise.all(promisesArray)

    const product = {
      productId : productId,
      productName : productName,
      altNames : altNames,
      images : imgUrls,
      price : price,
      lastPrice : lastPrice,
      stock : stock,
      description : description
    }

    const token = localStorage.getItem("token")
    try{
      await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/products",product,{
        headers : {
          Authorization : "Bearer "+token
        }
      })
      navigate("/admin/products")
      toast.success("Product added successfully")
    }catch(err){
      toast.error("Failed to add product")
    }

    
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add Product Form
        </h1>
       
          {/* Product ID */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Product ID</label>
            <input
              type="text"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product ID"
            />
          </div>
          {/* Product Name */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product name"
            />
          </div>
          {/* Alternative Names */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Alternative Names</label>
            <input
              type="text"
              value={alternativeNames}
              onChange={(e) => setAlternativeNames(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter alternative names"
            />
          </div>
          {/* Image URLs */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Image URLs</label>
            <input
              type="file"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image URLs"
              onChange={(e) => {
                setImageFiles(e.target.files)
              }}
              multiple
            />
          </div>
          {/* Price */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Price ($)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter price"
            />
          </div>
          {/* Last Price */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Last Price ($)</label>
            <input
              type="number"
              value={lastPrice}
              onChange={(e) => setLastPrice(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter last price"
            />
          </div>
          {/* Stock */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Stock</label>
            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter stock quantity"
            />
          </div>
          {/* Description */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product description"
              rows="4"
            ></textarea>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition-colors"
            onClick={handleSubmit }
          >
            Add Product
          </button>
        
      </div>
    </div>
  );
}
