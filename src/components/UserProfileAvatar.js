import React from 'react';
import Avatar from '../assets/Avatar.png';
import Random from '../assets/Random.jpg';
import SignButton from './SignButton';
import SearchButton from './SearchButton';
function UserProfileAvatar({imageUrl}){
    return(
        <div className="UserProfileAvatar"> 
            <div className="UserProfileAvatarImageDiv">
                <img className="UserProfileAvatarImage" src={Random} alt="image" />
            </div>
            <div className="UserProfileAvatarTitle">
                <SearchButton text={"Jenny fernandez"} />
                
            </div>
            <div className="UserProfileFollow">
            <SignButton text={"Follow"}/>
            </div>
        </div>
    )
}
export default UserProfileAvatar;