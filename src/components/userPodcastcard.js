import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form, Container, Row, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// margin: '1.5rem 1rem 1rem 1rem' style={{ height: 'auto',width: '23rem' }}
const handleScroll = (scrollOffset) => {
  const element = document.querySelector(".horizontal-view");
  if (element) {
    element.scrollBy({ left: scrollOffset, behavior: "smooth" });
  }
};

function UserPodcasts({post,email}){
    const navigate = useNavigate();
    const { name,postid,photos, likes, content} = post;
    const baseurl = 'http://localhost:8000';
    const production_url = 'https://socialify-backend.onrender.com';
    if(photos.length>0){
      console.log(`${production_url}${photos[0].image}`)
    }
    console.log(photos,"<------------post content---------------------------->")
    return(
    <Col md={12}>
    <div className="usercardextra">

    </div>
    <div className="userpodcastcard">
      <img className="userpodcastcard_img" style={{"height":"8rem", "width":"8rem"}} src={`${production_url}${photos.length>0?(photos[0].image):("No Image")}`} alt="Image is not loaded" />
      <h3 className="userpodcastcard_title">{name.slice(0,10)}</h3>
      <p className="userpodcastcard_description" >{content.slice(0,120)}</p>
      <Button className="userpodcastcard_button" onClick={()=>{navigate(`/editpodcast/${postid}`,{ state: { prop1: email} });}} variant="primary">Edit</Button>
      <Button className="userpodcastcard_delete_button" onClick={()=>{}} variant="primary">Delete</Button>
    </div>
    </Col>

    );
}

export default UserPodcasts;