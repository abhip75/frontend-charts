
import './App.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import User from './components/User'
import Product from './components/Product'
import ProductData from './components/ProductData'
import Login from './components/Login'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/productdata" element={<ProductData/>}/>
      </Routes>
    </div>
  )
}

export default App
