import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cartSlice";
const Cart = () => {
  const dispatch = useDispatch()
const productCart = useSelector(state=>state.cart)

  const remove = (id) => {
    dispatch(removeFromCart(id))
  }
  
  return (
      <div className="container mx-auto grid md:grid-cols-3 items-center justify-center sm:grid-cols-1">
      {productCart.map(Itemes => (
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
            <a href="#" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={()=>remove(Itemes.id)}>Remove from cart</a>
        </div>
    </div>
  </div>

      ))}
    </div>
  )
}

export default Cart