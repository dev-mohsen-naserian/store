import { AiOutlineInstagram ,AiTwotoneMail,AiOutlineTwitter,AiOutlineFacebook} from "react-icons/ai";
const Social = () => {
  return (
      <div className="fixed flex flex-col top-[35%] left-0 text-white">
          <ul>
              <li className="flex w-[50px] h-[50px] rounded-lg ml-[-2px] justify-center items-center hover:ml-[10px] duration-300 bg-pink-400">
                  <a href="/" className="flex justify-between items-center w-full pl-1"> <AiOutlineInstagram size={35}/></a>
              </li>
              <li className="flex w-[50px] h-[50px] rounded-lg ml-[-2px] justify-center items-center hover:ml-[10px] duration-300 bg-blue-900">
                  <a href="/" className="flex justify-between items-center w-full pl-1"> <AiOutlineFacebook size={35}/></a>
              </li>
              <li className="flex w-[50px] h-[50px] rounded-lg ml-[-2px] justify-center items-center hover:ml-[10px] duration-300 bg-orange-400">
                  <a href="/" className="flex justify-between items-center w-full pl-1"> <AiTwotoneMail size={35}/></a>
              </li>
              <li className="flex w-[50px] h-[50px] rounded-lg ml-[-2px] justify-center items-center hover:ml-[10px] duration-300 bg-blue-500">
                  <a href="/" className="flex justify-between items-center w-full pl-1"> <AiOutlineTwitter size={35}/></a>
              </li>
          </ul>
      </div>
  )
}

export default Social