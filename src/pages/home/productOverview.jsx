import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImageSlider from "../../components/imageSlider";
import { addToCart } from "../../utils/cartFunction";
import toast from "react-hot-toast";

export default function ProductOverview(){

    const params = useParams()
    const productId = params.id;
    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState("loading");
    const navigate = useNavigate();

    useEffect(
        ()=>{
            console.log(productId)
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products/"+productId).
            then((res)=>{
                    console.log(res.data)
                
            //if null
            if(res.data == null){
                setStatus("not-found")
            }

            //if product not found
            if(res.data != null){
                setProduct(res.data)
                setStatus("found")
            }
         })

    } 
    ,[])

    function onAddtoCartClick(){
        addToCart(product.productId,1)
        toast.success(product.productId+" Added to cart")
    }

    function onBuyNowClick(){
            navigate("/shipping",{
                state:{
                    items: [{
                        productId: product.productId,
                        qty: 1
                    }]
                }
            })
    }

    return(
        <div className="w-full h-[calc(100vh-100px)]">
            {
                status == "loading"&&(
                <div className="w-full h-full flex 
                items-center justify-center">
                    <div className="animate-spin rounded-full 
                    h-32 w-32  border-2 border-gray-500 border-b-accent 
                    border-b-4"></div>

                </div>
                )
            }
            {
                status == "not-found"&&(
                    <div className="not-found-page">
                        <div className="content">
                            <h1>Oops! Product Not Found</h1>
                            <p>We couldn't find the product you were looking for. Please try again later.</p>
                            <button onClick={() => window.history.back()}>Go Back</button>
                        </div>
                        <style jsx>{`
                            .not-found-page {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: calc(100vh - 100px);
                            background-color: #f8f9fa;
                            color: #333;
                            }
                            .content {
                            text-align: center;
                            max-width: 600px;
                            }
                            h1 {
                            font-size: 2rem;
                            color: #ff6b6b;
                            margin-bottom: 16px;
                            }
                            p {
                            font-size: 1.25rem;
                            margin-bottom: 24px;
                            }
                            button {
                            background-color: #007bff;
                            color: white;
                            border: none;
                            padding: 12px 24px;
                            border-radius: 4px;
                            font-size: 1rem;
                            cursor: pointer;
                            transition: background-color 0.3s ease;
                            }
                            button:hover {
                            background-color: #0056b3;
                            }
                        `}</style>
                        </div>

                )
            }
            {
                status == "found"&&(
                    <div className="w-full h-full items-center flex 
                    lg:flex-row flex-col justify-center">
                    <h1 className="text-3xl font-bold mt-14 text-gray-800 lg:hidden">{product.productName}
                    </h1>
                    <p className="text-xl text-gray-600 lg:hidden">{
                        (product.price>product.lastPrice)&&
                        <span className="line-through text-red-500">${"LKR."+product.price}</span>
                        } <span>{"LKR."+product.lastPrice}</span></p> 
                    <div className="w-full lg:w-[35%] lg:h-full">
                    <ImageSlider images={product.images}/>
                    </div>
                    <div className="w-[65%] h-full p-4">
                        <h1 className="text-3xl font-bold text-gray-800 hidden
                        lg:block">{product.productName}
                        </h1>
                        <h1 className="text-3xl font-bold text-gray-500">{product.altNames.join(" | ")}
                        </h1>
                        <p className="text-xl text-gray-600 hidden lg:block">{
                        (product.price>product.lastPrice)&&
                        <span className="line-through text-red-500">${"LKR."+product.price}</span>
                        } <span>{"LKR."+product.lastPrice}</span></p>
                        <p className="text-lg text-gray-600 line-clamp-3">{product.description}</p>
                        <button onClick={onAddtoCartClick} className="bg-accent text-white
                        p-2 rounded-lg mt-3">Add to Cart</button>
                        <button onClick={onBuyNowClick} className="text-accent rounded-lg
                        p-2 border border-accent mx-1">Buy Now</button>
                    </div>
                </div>
                )
            }
        </div>
    )
}