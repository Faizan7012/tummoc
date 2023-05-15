import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Google(){

  const navigate = useNavigate();
  const handleGoogle = ()=>{
    window.location.href = `https://long-rose-hippo-fez.cyclic.app/google`
  }
    return  <button onClick={handleGoogle} className="siG">
    <img
      src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
      alt="Trees"
      height="30"
    />
   <p>Continue with Google</p>
    
  </button>
}