import React from 'react';
import Avatar from '../assets/Avatar.png';
import Random from '../assets/Random.jpg';
import SignButton from './SignButton';
import SearchButton from './SearchButton';
const production_url = 'https://socialify-backend.onrender.com';
function UserProfileAvatar({profile}){
    return(
        <div className="UserProfileAvatar"> 
            <div className="UserProfileAvatarImageDiv">
                <img className="UserProfileAvatarImage" src={`${production_url}${profile.profile_Image}`}  onError={(e) => {e.target.src = "https://static.thenounproject.com/png/363640-200.png"}}/>
            </div>
            <div className="UserProfileAvatarTitle">
                <SearchButton text={profile.name} />
                
            </div>
            <div className="UserProfileFollow">
            <SignButton text={profile.city}/>
            </div>
        </div>
    )
}
export default UserProfileAvatar;