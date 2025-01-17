export default function ImageSlider(props){
    const images = props.images;

    return(
        <div className="w-full h-96 flex items-center
        flex-col">
            <img src={images[0]} className="w-full aspect-square 
            object-cover" />
        </div>
    )
}