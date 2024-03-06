import React,{useEffect, useState} from 'react';

const CarouselButton = ({currentIndex,onImageChange,Index})=> {
    const handleClick=(Index)=>{
        onImageChange(Index);
    }
    
    return(
    <div>
    <li className="carouselbuttons">
        {Index===currentIndex?(
    <button  className="carouselbuttoncurrent" onClick={()=>{handleClick(Index)}}/>
    
    ):(<button  className="carouselbutton" onClick={()=>{handleClick(Index)}}/>)
    }
    </li>
    </div>
    );
}

export default CarouselButton;