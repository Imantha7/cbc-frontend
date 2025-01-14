import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductOverview(){

    const params = useParams()
    const productId = params.id;
    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState("loading")

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
                status == "founf"&&(
                <div className="w-full h-full flex
                items-center justify-center">
                    Product found
                </div>
                )
            }
        </div>
    )
}