
const Shoes = (products) => {
      {products = products.products[2]}

  return (
    <div className="card">
       <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="" />
       <h3>{products.name}</h3>
       <p className="category">{products.category}</p>
       <h3 className="price">₹{products.price}</h3>
        <button>Add To Cart</button>
    </div>
  )
}

export default Shoes;
