import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

export default function NavSlider(props){
    const closeSlider = props.closeSlider;
    return(
        <div className="fixed w-full h-screen bg-[#00000080] z-[10]">
            
            <div className="bg-white w-[300px] h-screen flex flex-col">
            <div className="bg-white w-full h-[80px] relative flex justify-center items-center">
            
            <img src="/logo.png" className="cursor-pointer h-[100px] 
            rounded-full absolute left-[10px]"/>
            <IoCloseSharp className="text-accent text-3xl cursor-pointer absolute right-[20px] lg:hidden"
            onClick={closeSlider}/>
            </div>
            
            <Link to="/" className="text-accent font-bold text-xl
            hover:border-b border-b-accent">Home</Link>

            <Link to="/" className="text-accent font-bold text-xl
            hover:border-b border-b-accent">Products</Link>

            <Link to="/" className="text-accent font-bold text-xl
            hover:border-b border-b-accent">About US</Link>

            <Link to="/" className="text-accent font-bold text-xl
            hover:border-b border-b-accent">Contact Us</Link>

            <Link to="/" className="text-accent font-bold text-xl
            hover:border-b border-b-accent">Cart</Link>
            </div>
            
        </div>
    )
}