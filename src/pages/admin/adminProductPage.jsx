import axios from "axios"
import { useState } from "react"

export default function AdminProductPage(){

    const [products, setProducts] = useState(
        [
            {
                "_id": "674b26c0d2ef71f6d29de783",
                "productId": "B10001",
                "productName": "Hydrating Face Serum",
                "altNames": [
                    "Moisturizing Serum",
                    "Glow Boost Serum"
                ],
                "images": [
                    "https://example.com/images/serum1.jpg",
                    "https://example.com/images/serum1-alt.jpg"
                ],
                "price": 24.99,
                "lastPrice": 29.99,
                "stock": 200,
                "description": "A lightweight, fast-absorbing serum infused with hyaluronic acid and vitamin C to hydrate and brighten your skin.",
                "__v": 0
            },
            {
                "_id": "675e73c11a4b599f8c1a8828",
                "productId": "B98765",
                "productName": "Hydrating Face Serum",
                "altNames": [
                    "Moisturizing Serum",
                    "Skin Glow Serum"
                ],
                "images": [
                    "https://example.com/serum1.jpg",
                    "https://example.com/serum2.jpg"
                ],
                "price": 25.99,
                "lastPrice": 29.99,
                "stock": 200,
                "description": "A lightweight hydrating serum enriched with hyaluronic acid to give your skin a radiant and healthy glow.",
                "__v": 0
            }
        ]
    )

    axios.get("http://localhost:5000/api/products").
    then((res)=>{
        console.log(res.data)
    })

    return(
        <div>
            <h1>Admin Product Page</h1>
            {
                products.map(

                    (product,index)=>{
                        return(
                            <div key={product.id} className="flex items-center justify-center">
                             {product.productName}
                            </div>
                        )

                    }
                )
            }
        </div>
    )
}

    