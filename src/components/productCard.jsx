export default function ProductCard(props){

    console.log(props)
    return(
        <div>
            <button>Add to cart</button>
            <br/>
            <img src={props.src}/>
            <h1>{props.name}</h1>
            <h2>Price: {props.price}</h2>
            
        </div>
    )
}