import { Link } from "react-router-dom"

export default function ProductCard(props){

    console.log(props)
    return(
        <Link to={`/productInfo/${props.product.productId}`}  className="w-[300px] h-[400px] m-[70px]
            rounded-xl shadow-lg shadow-gray-500
          hover:shadow-primary hover:border-[3px]
            overflow-hidden flex flex-col">
            
                <img src={props.product.images[0]} className="h-[60%]
                w-full object-cover"/>
                <h1 className="text-3xl font-bold text-center">
                    {props.product.productName}
                </h1>
                <h2 className="text-lg text-gray-500 text-center">
                    {props.product.productId}
                </h2>
                <p className="text-left text-xl font-semibold">LKR.
                    {props.product.lastPrice.toFixed(2)}
                </p>
                {
                (props.product.lastPrice<props.product.price)&&
                <p className="text-left text-xl text-gray-500 font-semibold 
                line-through ">LKR.{props.product.price.toFixed(2)}</p>
                }
            
        </Link>
    )
}