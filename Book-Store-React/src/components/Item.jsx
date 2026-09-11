import image from "../assets/react.svg"
const Item = () => {
    return (
        <div className="item">
            <img src={image} width={100} height={100} alt="item" />
            <h2>Title: ReactJS</h2>
            <h3>Price: $10</h3>
            <button>Add to Cart</button>
        </div>
    )
}
export default Item

