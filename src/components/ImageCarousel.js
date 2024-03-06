import React,{useEffect, useState} from 'react';
import CarouselButton from './ImageCarouselButton';
import CarouselStepButton from './imageCarouselStepButton';
const Carousel = ({currentColor,Images})=> {
    console.log(Images)
    const ApiData = Images;
    console.log(ApiData);
    let ImagesArr=[];
    if(Images.length>0){
    ImagesArr = [...Images];
    } else {
    ImagesArr = [...Images];
    }
    
    const [isLeftButton,setIsLeftButton]=useState(false);
    const [isRightButton,setIsRightButton]=useState(true);
    const [currentImage,setCurrentImage]=useState(ImagesArr[0]);
    const [currentIndex,setCurrentIndex]=useState(0);
    const [refreshKey, setRefreshKey] = useState(0);
    const production_url = 'https://socialify-backend.onrender.com';
    function changeImage(index){
        setCurrentImage(ImagesArr[index]);
        setCurrentIndex(index);
    }
    useEffect(()=>{
        changeImage(0);
    },[ImagesArr && currentColor]);

    useEffect(()=>{
        if(currentIndex===0){
            setIsLeftButton(false);
            setIsRightButton(true);
        } else if(currentIndex===ImagesArr.length-1){
            setIsRightButton(false);
            setIsLeftButton(true);
        } else if(currentIndex!==0){
            setIsLeftButton(true);
        } else {
            setIsRightButton(true);
        }
    },[currentIndex]);
    function leftCarousel(){
        if(currentIndex===0){
            setIsLeftButton(false);
        } else{
            setIsRightButton(true);
            const calculatedIndex=(currentIndex-1)%ImagesArr.length;
            setCurrentImage(ImagesArr[calculatedIndex]);
            setCurrentIndex(calculatedIndex);
        }
    }
    function rightCarousel(){
        if(currentIndex===ImagesArr.length-1){
            setIsRightButton(false);
        } else {
            setIsLeftButton(true);
            const calculatedIndex=(currentIndex+1)%ImagesArr.length;
            setCurrentImage(ImagesArr[calculatedIndex]);
            setCurrentIndex(calculatedIndex);
        }
    }
    return(
        <>
        {Images.length>0?(<div className="carouselMain">
        <div className="carouselImages">
        <div className="stepbutton">  
        {isLeftButton===true?(<CarouselStepButton mode={'left'} onClickHandler={leftCarousel}/>):(<></>)}
        {isRightButton===true?(<CarouselStepButton mode={'right'} onClickHandler={rightCarousel}/>):(<></>)}
        </div>
        <img key={refreshKey} className="carouselImage" src={`${production_url}${currentImage.image}`} alt={currentImage}/>
        <div className="carouselbuttonlistmain">
        <ul className="carouselbuttonlist">
        {ImagesArr.map((value,index)=>(
            <CarouselButton key={index} currentIndex={currentIndex} onImageChange={changeImage} Index={index}/>
        ))}
        </ul>
        </div>
            
        </div>
    </div>):(<></>)}
    </>
    );
}
export default Carousel;