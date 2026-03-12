
const HeadPhones = (products) => {
    {products = products.products[0]}
  return (
    <div className="card">
       <img src="https://avstore.in/cdn/shop/files/1.AVStore-Sonos-Ace-Front-Angled-View-Hero-Black.jpg?v=1725620870" alt="" />
       <h3>{products.name}</h3>
       <p className="category">{products.category}</p>
       <h3 className="price">₹{products.price}</h3>
        <button>Add To Cart</button>
    </div>
  )
}

export default HeadPhones;
