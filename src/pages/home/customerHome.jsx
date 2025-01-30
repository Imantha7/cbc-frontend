import { Link } from "react-router-dom";

export default function CustomerHome() {
    return (
        <div 
            className="w-full h-screen bg-cover bg-center flex items-center justify-center" 
            style={{ backgroundImage: "url('/homeimage2.jpg')" }}
        >
            <div className="w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 px-6 text-center">
                <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
                    WELCOME TO CRYSTAL BEAUTY CLEAR
                </h1>
                <p className="text-white text-lg md:text-2xl max-w-2xl drop-shadow-md">
                    Discover a world of beauty with our premium collection of 
                    cosmetics, skincare, and personal care products. From luxurious 
                    makeup to nourishing skincare essentials, we bring you 
                    high-quality, trendsetting products that enhance your natural 
                    beauty. Explore our exclusive range, enjoy seamless shopping, 
                    and let your beauty shine effortlessly.
                </p>
                <Link to="/products" className="mt-6 px-6 py-3 text-lg font-semibold bg-white text-black rounded-full 
                    hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-lg">
                    Shop Now
                </Link>
            </div>
        </div>
    );
}
