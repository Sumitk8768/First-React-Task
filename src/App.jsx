import './App.css'
import HeadPhones from './components/HeadPhones'
import Shoes from './components/Shoes'
import Watch from './components/Watch'
const App = () => {
  return (
    <>
        <h1>Our Products</h1>
        <div className="container">
            <HeadPhones />
            <Watch />
            <Shoes />
        </div>
    </>
  )
}

export default App
