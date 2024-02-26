import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './pages/login/Login'
const App = () => {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App