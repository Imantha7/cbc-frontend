import { Link, Route, Routes } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs"; // Dashboard Icon
import { AiOutlineShoppingCart } from "react-icons/ai"; // Product Icon
import { FaClipboardList } from "react-icons/fa"; // Order Icon
import { FiUsers } from "react-icons/fi"; // Customer Icon
import AdminProductPage from "./admin/adminProductPage";
import AddProductForm from "./admin/addProductForm";

export default function AdminHomePage() {
  return (
    <div className="flex w-full h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-[20%] h-screen bg-blue-600 text-white flex flex-col items-center py-8">
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
      <div className="w-[80%] h-screen">
        <Routes path="/">

          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/products" element={<AdminProductPage/>} />
          <Route path="/products/addProduct" element={<AddProductForm/>} />
          <Route path="/orders" element={<h1>Orders</h1>} />
          <Route path="/customers" element={<h1>Customers</h1>} />
          <Route path="/*" element={<h1>404 not found the admin page</h1>}/>
          
        </Routes>
      </div>
    </div>
  );
}


