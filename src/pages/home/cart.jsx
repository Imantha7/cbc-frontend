import { useEffect, useState } from "react"
import { loadCart } from "../../utils/cartFunction"
import CartCard from "../../components/cartCard"

export default function Cart(){
  const [cart,setCart]=useState([])

  useEffect(
    ()=>{
      setCart(loadCart())
    },[]
  )

  // onOrderCheckOutClick(){

  // }

  return(
    <div className="w-full h-full  overflow-y-scroll flex 
    flex-col items-end">
     <table className="w-full">
        <thead>
            <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Product ID</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total Price</th>
            </tr>
        </thead>
      {
        cart.map(
          (item)=>{
            return(
              <CartCard key={item.productId} productId={item.productId}
              qty={item.qty}/>
            )
          }
        )
      }
      </table>
      <button className="bg-accent hover:bg-accen-light text-white p-2 w-[300px]
      rounded-lg m-2">Checkout</button>
    </div>
  )
}