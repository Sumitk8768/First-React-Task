
const ProductCard = ({product}) => {
  return (
    <div className="card">
       <img src={product.image} alt="" />
       <h3>{product.name}</h3>
       <p className="category">{product.category}</p>
       <h3 className="price">₹{product.price}</h3>
        <button>Add To Cart</button>
    </div>
  )
}

export default ProductCard;
