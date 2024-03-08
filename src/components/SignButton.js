import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import Cookies from 'js-cookie';
function SignButton({text,user,target}) {
  const navigate = useNavigate();
  const [jwt,setJwt]=useState();
  const [friendEmail,setfriendEmail] = useState();
  const production_url = 'https://socialify-backend.onrender.com';
  useEffect(
    ()=>{
      setJwt(Cookies.get('meraToken'));
      setfriendEmail(user);
    }
  )

  async function addFriend(){
    const data={
      jwt,
      friendEmail
    };
    console.log(jwt);
    console.log(JSON.stringify(data),data);
    const response = await fetch(`${production_url}/friends/add`,{
      method: "POST",
      headers: {
           "Content-Type": "application/json"
      },
      credentials:'include',
      body: JSON.stringify(data)
      
  });
    console.log(response,"addfriend Response");
    if(response.statusCode>=200 && response.statusCode<=299){alert("Friend is added successfully")}
    else{alert("Added In Friends")}
  }
  return (
    <div>
        <button onClick={()=>{
                    if(target==="profile"){
                    navigate(`/profile/${user}`);
                    console.log(`/profile/${user}`);
                    } else {
                      addFriend();
                      console.log(`${production_url}/friends/add`);
                    }
                    }} className='SignButton'>
          <p className='SignButtonText'>{text}</p>  
        </button>
    </div>
  )
}

export default SignButton;
