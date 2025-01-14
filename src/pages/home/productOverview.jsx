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
                status == "not-found"&&<h1>Product not found</h1>
            }
            {
                status == "founf"&&(
                <div>
                    Product found
                </div>
                )
            }
        </div>
    )
}