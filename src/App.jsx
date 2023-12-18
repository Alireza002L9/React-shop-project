import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Product from './Pages/Product'
import ShopCategory from './Pages/ShopCategory'
import Footer from './Components/Footer'
import { useState } from 'react'

function App() {
  const [activeTab, setActive] = useState('')
  const [cart, setCart] = useState([])
  const handleCategory = (category)=> {
    setActive(category)
  }
  const addToCart = (productID)=> {
    setCart((prev)=>([...prev, productID]))
  }
  const removeCart = (productID)=> {
    const updatedCart = cart.filter((item)=> item.id !== productID)
    setCart(updatedCart)
  }
  return (
    <>
    <Router>
      <Navbar handleCategory={handleCategory} cart={cart}/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/Cart' element={<Cart reM={removeCart} cart={cart}/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Product' element={<Product addToCart={addToCart}/>}>
          <Route path=':productId' element={<Product/>}></Route>
        </Route>
        <Route path='/ShopCategory' element={<ShopCategory category={activeTab}/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
