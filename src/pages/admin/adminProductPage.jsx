import axios from "axios";
import { useEffect, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaPlus, FaRegEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AdminProductPage() {
    const [products, setProducts] = useState([]);
    const [productsLoaded, setProductsLoaded] = useState(false)

    useEffect(() => {
        if(!productsLoaded){
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products").then((res) => { 
                setProducts(res.data);
                console.log(res.data)
                setProductsLoaded(true)
        })
        
    }
    }, [productsLoaded]);

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 p-6 relative">
            <Link to={"/admin/products/addProduct"} className="absolute right-3 bottom-[25px] text-[25px]
            bg-[#3b82f6] text-white p-5 rounded-xl
            hover:bg-blue-300"><FaPlus/></Link>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Admin Products Page
                </h1>
                {
                    productsLoaded?<div className="overflow-x-auto">
                    <table className="w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-gray-200 text-gray-700 text-left">
                                    <th className="px-4 py-3 text-sm font-medium">Product ID</th>
                                    <th className="px-4 py-3 text-sm font-medium">Product Name</th>
                                    <th className="px-4 py-3 text-sm font-medium">Price ($)</th>
                                    <th className="px-4 py-3 text-sm font-medium">Last Price ($)</th>
                                    <th className="px-4 py-3 text-sm font-medium">Stock</th>
                                    <th className="px-4 py-3 text-sm font-medium">Description</th>
                                    <th className="px-4 py-3 text-sm font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b ${
                                            index % 2 === 0
                                                ? "bg-gray-50"
                                                : "bg-white"
                                        }`}
                                    >
                                        <td className="px-4 py-3 text-sm text-gray-700">
                                            {product.productId}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-700">
                                            {product.productName}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-700">
                                            {product.price.toFixed(2)}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-700">
                                            {product.lastPrice.toFixed(2)}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-700">
                                            {product.stock}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-700">
                                            {product.description}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-700">
                                            <div className="flex space-x-4">
                                                <button className="text-red-500 hover:text-red-700" onClick={()=>{
                                                    const token = localStorage.getItem("token")
                                                    
                                                    axios.delete(import.meta.env.VITE_BACKEND_URL+`/api/products/${product.productId}`, {
                                                        headers: {
                                                          Authorization: `Bearer ${token}`,
                                                        },
                                                      }).then((res) => {
                                                        console.log(res.data);
                                                        confirm("Are you sure?")
                                                        toast.success("Product deleted successfully");
                                                        setProductsLoaded(false)
                                                        });
                                                      }}
                                                >
                                                    <RiDeleteBin6Fill size={20} />
                                                </button>
                                                <button className="text-blue-500 hover:text-blue-700"
                                                onClick={()=>{
                                                    navigate("/admin/products/editProduct", {state : {product : product}})
                                                }}>
                                                    <FaRegEdit size={20} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>:
                        <div className="w-full h-full flex items-center justify-center">
                        <div className="w-[60px] h-[60px] border-[4px] border-gray-200 border-b-[#3b82f6] animate-spin
                        rounded-full"></div>
                    </div>
                }
                
                
            </div>
        </div>
    );
}
