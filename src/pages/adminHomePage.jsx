import { Link } from "react-router-dom";

export default function AdminHomePAge(){
    return(
        <div className="bg-blue-200 w-full 
        h-screen flex">
            <div className="w-[20%] h-screen
             bg-blue-500 flex flex-col text-center">
                <Link to="/admin/dashboard">Dashboard</Link>
                <Link to="/admin/product">Product</Link>
                <Link to="/admin/order">Order</Link>
                <Link to="/admin/customer">Customer</Link>
            </div>

            <div className="w-[80%] h-screen bg-red-600">

            </div>
        </div>
    )
}