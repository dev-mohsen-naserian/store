import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assetes/logo.png';
import { AiOutlineUser,AiOutlineHome,AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom'
import Social from './Social';
import { useSelector } from 'react-redux';
const NavBar = () => {

  const cartProductes = useSelector(state=>state.cart)
  const [nav, setNav] = useState(false)
  const handelClick =()=>setNav(!nav)
  return (
    <div className='fixed mb-10 w-full h-[80px] flex justify-between items-center px-4 bg-slate-800 text-gray-400'>
      {/**Logo Image */}
      <div>
        <img src={logo} alt="logo"  style={{width:"60px"}}/>
      </div>
      {/**Start Main Menu */}
      <ul className='hidden md:flex'>
        <li className='px-5 hover:text-white'><Link to="/"><AiOutlineHome size={30} /></Link></li>
        <li className='px-5 hover:text-white'><Link to="/cart"><AiOutlineShoppingCart size={30} className="relative" />
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-3 right-24 ">{cartProductes.length}</div>
        </Link></li>
        <li className='px-5 hover:text-white'><Link to="/login"><AiOutlineUser size={30}/></Link></li>
      </ul>
      {/**Humber Menu Button */}
      <div onClick={handelClick} className='md:hidden z-50 cursor-pointer'>
        {!nav ? <FaBars size={30}/> :<FaTimes size={30}/>}
      </div>
      {/**Start Humberger Menu */}
      <div className={!nav?'hidden':'absolute top-0 left-0 w-full h-screen bg-slate-800 flex flex-col justify-center items-center'}>
      <ul>
        <li className='py-6 text-6xl'><Link to="/"><AiOutlineHome size={30} /></Link></li>
        <li className='py-6 text-6xl'><Link to="/cart"><AiOutlineShoppingCart size={30} /></Link></li>
        <li className='py-6 text-6xl'><Link to="/login"><AiOutlineUser size={30}/></Link></li>
      </ul>
      </div>
      <Social/>
    </div>
  )
}

export default NavBar