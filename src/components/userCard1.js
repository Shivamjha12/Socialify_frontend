import React from 'react';

import SignButton from './SignButton';
import {useNavigate} from "react-router-dom";

function SmallCard({text,user,target}){
    const navigate = useNavigate();
    const production_url = 'https://socialify-backend.onrender.com';
    return(
        <div className="UserPageCard1">
            <div className="UserPageCardDiv1"> 
                <div className="UserPageCardImg">
                    <img className="UserPageCardImage" src={`${production_url}${text.profile_data.profile_Image}`} onError={(e) => {e.target.src = "https://static.thenounproject.com/png/363640-200.png"}}/>
                </div>
                    <div className="UserPageCardDesc">
                    <div className="UserPageCardName">
                        <p>{text.profile_data.name}</p>
                    </div>
                    <div className="UserPageCardName" >
                         {target==="friend-list"?(text.profile_data.city):(<p>Joined {text.date_joined.slice(0,10)} </p> )}
                    </div>
                </div>
            </div>

            <div className="UserPageCardDiv2">
                <div className="UserPageCardButton">
                {target==="friend-list"?( <SignButton  target={'profile'} user={text.user2} text={"View"}  />):(<SignButton  target={'profile'} user={text.email} text={"View"} />) }
                
                </div>
                {target==="friend-list"?( <SignButton  text={"Chat"}  />):(<SignButton user={text.email} text={"Add"} />) }
                
            </div>

        </div>
    )
}
export default SmallCard;