import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscAccount } from "react-icons/vsc";
import { FcApprove } from "react-icons/fc";
import { useState, useEffect } from "react";
import NavSlider from "./navSlider";

export default function Header() {
    const [isSliderOpen, setIsSliderOpen] = useState(false);
    const [user, setUser] = useState(null);

    // Check if the user is already logged in (from localStorage)
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setUser(true);  // User is logged in
        }
    }, []);

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove session
        setUser(null);
        window.location.reload(); // Reload page to update header UI
    };

    return (
        <>
            {isSliderOpen && <NavSlider closeSlider={() => setIsSliderOpen(false)} />}

            <header className="bg-white w-full h-[80px] relative flex justify-center items-center">
                <img 
                    src="/logo.png" 
                    className="cursor-pointer h-[100px] rounded-full absolute left-[10px]" 
                />

                <RxHamburgerMenu 
                    onClick={() => setIsSliderOpen(true)}
                    className="text-3xl cursor-pointer absolute right-[10px] lg:hidden text-accent"
                />

                <div className="h-full items-center w-[500px] justify-between hidden lg:flex">
                    <Link to="/" className="text-accent font-bold text-xl hover:border-b border-b-accent">Home</Link>
                    <Link to="/products" className="text-accent font-bold text-xl hover:border-b border-b-accent">Products</Link>
                    <Link to="/about" className="text-accent font-bold text-xl hover:border-b border-b-accent">About Us</Link>
                    <Link to="/contact" className="text-accent font-bold text-xl hover:border-b border-b-accent">Contact Us</Link>
                    <Link to="/cart" className="text-accent font-bold text-xl hover:border-b border-b-accent">Cart</Link>
                    
                </div>

                {/* Show Login Icon Before Login, Show Logout Button After Login */}
                {!user ? (
                    <Link to="/login">
                        <VscAccount className="text-accent size-7 right-8 absolute cursor-pointer" />
                    </Link>
                ) : (
                    <div className="absolute right-8 flex items-center gap-3">
                      <Link to="/orders" className="text-accent font-bold text-xl hover:border-b border-b-accent">My Orders</Link>
                        <FcApprove className="size-7" />
                        <button 
                            onClick={handleLogout} 
                            className="text-red-600 font-bold text-xl hover:border-b border-b-red-600"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </header>
        </>
    );
}
