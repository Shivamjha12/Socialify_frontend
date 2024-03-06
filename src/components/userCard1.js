import React from 'react';

import SignButton from './SignButton';
function SmallCard({text}){
    return(
        <div className="UserPageCard1">
            <div className="UserPageCardDiv1"> 
                <div className="UserPageCardImg">
                    <img className="UserPageCardImage" src={"https://freesvg.org/img/abstract-user-flat-4.png"} alt="" />
                </div>
                    <div className="UserPageCardDesc">
                    <div className="UserPageCardName">
                        <p>{text.name}</p>
                    </div>
                    <div className="UserPageCardName" >
                        <p>Joined {text.date_joined.slice(0,10)}</p>
                    </div>
                </div>
            </div>

            <div className="UserPageCardDiv2">
                <div className="UserPageCardButton">
                <SignButton text={"View"} />
                </div>
                <SignButton text={"Add"} />
            </div>

        </div>
    )
}
export default SmallCard;