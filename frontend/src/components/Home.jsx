import { useDispatch } from "react-redux";
import { logoutAPI } from "../redux/profile/action";

export const Home = () => {
  const dispatch = useDispatch();
  const handleLogout = ()=>{
    dispatch(logoutAPI())
  }
  return (
    <div className="loginContainer">
    <img className='img' src='https://tummoc.com/images/vote.png' />

         <p>Thanks for login</p>
         <p>....</p>
         <button className="loginBut" onClick={handleLogout}><p>Logout</p></button>
  </div>
  );
};
