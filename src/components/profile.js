import React,{useState,useEffect} from "react";
import SmallCard from './UserPageCard';
import loader from ".././assets/loader.gif";
import UserProfileAvatar from './UserProfileAvatar';
import { useLocation,Link, useNavigate, useParams } from "react-router-dom";
function Profile({currentUser}) {
  const production_url = 'https://socialify-backend.onrender.com';
  // 'profile/get/<str:userEmail>
  const [userProfile,setUserProfile]=useState(null);
  const { userID } = useParams();
  const [isLoading,setIsLoading] = useState(true);
  const [isProfile,setIsProfile] = useState('');
  async function getUserpProfile() {
    const response = await fetch(`${production_url}/profile/get/${userID}`)
    const content = await response.json();
    setUserProfile(content);
    setIsLoading(false);
    if(content.message){
      setIsProfile(false);
    } else{
      setIsProfile(true);
    }
    console.log(content,content.message,"Here is data loaded");
  }
  useEffect(()=>{
    getUserpProfile();
  },[userID])

  if(isLoading){
    return <div className="loader-container">
      <img src={loader} alt="Loading" className="loader-image" />
    </div>
  }
    return (<>{isProfile?(
      <div className="profile">
      <div className="profileMain">
      <div className="ProfilePageLeft">
      <UserProfileAvatar />
      <SmallCard/>
      <SmallCard/>
      <SmallCard/>
      {/* <LikeCard/> */}
      </div>
      <div className="ProfilePageRight">

      </div>
      </div>
    </div>
    ):(
    <>
    {currentUser===userID?(<><h2>Create Your Profile</h2></>):(<><h2 className="textcenter">Profile Not Found</h2></>)}
    </>
    )}</>
    
  )
}

export default Profile;
