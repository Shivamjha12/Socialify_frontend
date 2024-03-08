import React,{useState,useEffect} from "react";
import SmallCard from './UserPageCard';
import loader from ".././assets/loader.gif";
import UserProfileAvatar from './UserProfileAvatar';
import { useLocation,Link, useNavigate, useParams } from "react-router-dom";
import ListOfRows from "./listOfRows";
import ProfileForm from './addEditProfile';

function Profile({currentUser}) {
  const production_url = 'https://socialify-backend.onrender.com';
  // 'profile/get/<str:userEmail>
  const [userProfile,setUserProfile]=useState(null);
  const { userID } = useParams();
  const [intrests,setIntrests]=useState([]);
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
    setIntrests(content.interests.split(','));
    console.log(content,content.message,"Here is data loaded");
    console.log(intrests);
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
        <div>
          <UserProfileAvatar profile={userProfile}/>
          <div className="profileIntrests">
          <ListOfRows list={intrests.slice(0,3)}/>
          </div>
        </div>
        <div className="ProfilePageRight">
          <ProfileForm profile={userProfile}/>
        </div>
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
