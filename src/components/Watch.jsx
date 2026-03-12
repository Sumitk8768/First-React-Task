
const Watch = (products) => {
    {products = products.products[1]}
  return (
    <div className="card">
       <img src="https://ddfndelma2gpn.cloudfront.net/color/1591/oraimo_watch_5_black_1.webp" alt="" />
       <h3>{products.name}</h3>
       <p className="category">{products.category}</p>
       <h3 className="price">₹{products.price}</h3>
        <button>Add To Cart</button>
    </div>
  )
}

export default Watch;
