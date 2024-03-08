import React,{useState,useEffect} from "react";
import Header from '../components/Header';
import SmallCard from '../components/userCard1';

function FriendPage({user}) {
    const production_url = 'https://socialify-backend.onrender.com';
    const [friends,setFriends]=useState([]);

    async function getFriends() {
        const response = await fetch(`${production_url}/friends/get/${user}`);
        const content = await response.json();
        console.log(content);
        setFriends(content);
        console.log(friends, "This is data variable of friends");
      }
    useEffect(()=>{
        getFriends();
    })

  return (
    <>
    <div className="friend-container">
      
      <h1 className="text-center">Friends</h1>
      <div className="friend-list">
        {
            Array.isArray(friends) && friends.map((value) => {
                return (
                  <div
                    md={3}
                    key={value.user}
                    style={{ cursor: "pointer", width: '20rem' }} >
                    <SmallCard target={"friend-list"} text={value}/>
                  </div>
                )})
        }
      </div>
    </div>
    </>
  );
}

export default FriendPage;
