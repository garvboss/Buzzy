import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout.js';

const Logout = () => {
  const {loading, logout} = useLogout();
  return (
    <div className='mt-auto'>
      {loading==true ? 
        (
          <span className='loading loading-spinner'></span>
        ) : 
        (
          <BiLogOut 
           className='w-6 h-6 text-white cursor-pointer' 
           onClick={logout}
          />
        )
      } 
    </div>
  )
}

export default Logout
