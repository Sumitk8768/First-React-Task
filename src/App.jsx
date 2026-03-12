import "./App.css";
import HeadPhones from "./components/prductCard/HeadPhones";
import Shoes from "./components/prductCard/Shoes";
import Watch from "./components/prductCard/Watch";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "1999",
    category: "Electronics",
    image: "<any headphone image url>",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "2999",
    category: "Gadgets",
    image: "<any smartwatch image url>",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: "2499",
    category: "Fashion",
    image: "<any shoes image url>",
  },
];

const App = () => {
  return (
    <>
      <h1>Our Products</h1>
      <div className="container">
        <HeadPhones products = {products}/>
        <Watch products = {products}/>
        <Shoes products = {products}/>
      </div>
    </>
  );
};

export default App;
