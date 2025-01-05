export default function AddProductForm(){
    return(
        <div className="w-full h-full bg-red-400">
            <h1 className="text-2xl font-bold text-center">Add Product Form</h1>
            <div className="flex flex-col border items-center">
                <input type="text" placeholder="Insert Your Product Name Here" className="w-[400px]"/>
                <input type="text" placeholder="Insert Your Product Price Here" className="w-[400px]"/>
                <input type="text" placeholder="Insert Your Product Stock Here" className="w-[400px]"/>
                <input type="text" placeholder="Insert Your Product Description Here" className="w-[400px]"/>
                <button>Add Product</button>
            </div>
        </div>
    )
} 