import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signinAPI } from "../redux/profile/action";
import Google from "./google";
let init = {
  email:'',
  password:''
}
export default function Login(){
  const [obj , setObj] = useState(init);
  const [loading , setLoading] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e)=>{
     const {name , value} = e.target;
     setObj({...obj , [name]:value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoading(true)
    dispatch(signinAPI(obj)).then((ans)=>{
      if(ans.status){
        setObj(init);
        navigate('/')
      }
       alert(ans.message);
    }).catch((e)=>{
      alert(e.message)
    }).finally(()=>{
      setLoading(false)
    })
  }
    return  <div className="loginContainer">
    <img className='img' src='https://tummoc.com/images/vote.png' />
    <form onSubmit={handleSubmit}>
    <div className="input-container">
      <label>Email </label>
      <input onChange={(e)=>handleChange(e)} value={obj.email} type="email" name="email" required />
    </div>
    <div className="input-container">
      <label>Password </label>
      <input onChange={(e)=>handleChange(e)} value={obj.password}  type="password" name="password" required />
    </div>

    <Link to='/signup'>Create New Account ?</Link>

    <button type="submit" className="loginBut">
      {loading?<p>Loading... </p>: <p>Login</p>}
    </button>

    </form>
     <Google />
  </div>
}