import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
const Shop = () => {
  const dispatch =useDispatch()
  const [data, setDate] = useState([])
  useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
      .then(response=> {
        setDate(response.data)
      })
      .catch(error=> {
        console.log(error);
      })
  }, [])
  const add = (Item) => {
    dispatch(addToCart(Item))
  }
  return (
    <div className="container mx-auto  grid md:grid-cols-3 items-center justify-center sm:grid-cols-1">
      {data.map(Itemes => (
  <div className="w-full max-w-sm mt-14 mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
            <img className="p-8 rounded-t-lg w-full h-52" src={ Itemes.image} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{ Itemes.category}</h5>
        </a>
        <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">${ Itemes.price}</span>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={()=>add(Itemes)}>Add to cart</a>
        </div>
    </div>
</div>

      ))}
    </div>
  )
}

export default Shop