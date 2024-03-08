import React from 'react';

import SignButton from './SignButton';
function SmallCard({text}){
    return(
        <div className="UserPageCard">
            <div className="UserPageCardDiv1"> 
                <div className="UserPageCardImg">
                    {/* <img className="UserPageCardImage" src={"https://"} alt="image" /> */}
                </div>
                <div>
                    <p></p>
                </div>
            </div>

            <div className="UserPageCardDiv2">
                <div className="UserPageCardButton">
                {/* <SignButton text={"View"} /> */}
                <h3 className="UserPageCardIntrest">{text}</h3>
                </div>
                {/* <SignButton text={"Edit"} /> */}
            </div>

        </div>
    )
}
export default SmallCard;