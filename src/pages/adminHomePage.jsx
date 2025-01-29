import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs"; // Dashboard Icon
import { AiOutlineShoppingCart } from "react-icons/ai"; // Product Icon
import { FaClipboardList } from "react-icons/fa"; // Order Icon
import { FiUsers } from "react-icons/fi"; // Customer Icon
import AddProductForm from "./admin/addProductForm";
import EditProductForm from "./admin/editProductForm";
import AdminOrdersPage from "./admin/adminOrderPage";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import AdminProductPage from "./admin/adminProductPage";

export default function AdminHomePage() {
  const [user,setUser] = useState(null)
  const navigate = useNavigate();
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (!token) {      
      navigate("/login")
      return;
    }
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res)=>{
        console.log(res.data)
        if(res.data.type!="admin"){
          toast.error("Unauthorized access")
          navigate("/login")
        }else{
          setUser(res.data)
        }

      }).catch((err)=>{
        console.error(err)
        toast.error("Failed to fetch user data")
        navigate("/login")
      })
    
  },[])
  return (
    <div className="flex w-full h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-[20%] h-screen fixed top-0 left-0 bg-blue-600 text-white flex flex-col items-center py-8">
        <h1 className="text-2xl font-bold mb-10">Admin Panel</h1>
        <nav className="space-y-6 w-full">
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 px-6 py-3 hover:bg-blue-500 w-full rounded-md"
          >
            <BsGraphUp className="text-lg" />
            <span className="text-lg">Dashboard</span>
          </Link>
          <Link
            to="/admin/products"
            className="flex items-center gap-3 px-6 py-3 hover:bg-blue-500 w-full rounded-md"
          >
            <AiOutlineShoppingCart className="text-lg" />
            <span className="text-lg">Products</span>
          </Link>
          <Link
            to="/admin/orders"
            className="flex items-center gap-3 px-6 py-3 hover:bg-blue-500 w-full rounded-md"
          >
            <FaClipboardList className="text-lg" />
            <span className="text-lg">Orders</span>
          </Link>
          <Link
            to="/admin/customers"
            className="flex items-center gap-3 px-6 py-3 hover:bg-blue-500 w-full rounded-md"
          >
            <FiUsers className="text-lg" />
            <span className="text-lg">Customers</span>
          </Link>
        </nav>
      </div>

    {/* Main Content Area */}
    <div className="w-[80%] ml-[20%] h-screen overflow-y-auto">
      {user!=null && <Routes path="/">
        <Route path="/" element={<h1>Dashboard</h1>} />
          <Route path="/products" element={<AdminProductPage/>} />
          <Route path="/products/addProduct" element={<AddProductForm/>} />
          <Route path="/products/editProduct" element={<EditProductForm/>} />
          <Route path="/orders" element={<AdminOrdersPage/>} />
          <Route path="/customers" element={<h1>Customers</h1>} />
          <Route path="/*" element={<h1>404 not found the admin page</h1>}/>

      </Routes>}
      {
          user==null&&<div className="w-full h-full flex justify-center items-center">
            {/* animating loading page */}
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-accent"></div>

          </div>
        }

    </div>
  </div>
  );
}