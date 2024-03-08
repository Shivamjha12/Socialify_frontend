import './App.css';
import React,{ useState,useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Login from './Pages/login_page';
import FriendPage from './Pages/friends';
import AboutPage from './Pages/about';
import Profile from './components/profile'
import Signup from './Pages/signup_page';
import Home from './Pages/home';
import Userpodcasts from './Pages/userpodcasts';
import Header from './components/Header';
import Podcastpage from './Pages/podcast_content';
import AddPodcast from './Pages/addPodcast';
import loader from "./assets/loader.gif";
import {useNavigate} from "react-router-dom";
import { Route, Routes,Navigate,Redirect  } from "react-router-dom";
import Cookies from 'js-cookie';
import { Posts } from './components/dummyData';
import Post from './components/postComponent'

























function App() {
  const production_url = 'https://socialify-backend.onrender.com';
  const [user,setUser] = useState(null);
  const navigate = useNavigate();
  const [meraToken,setMeratoken] = useState('None');

  useEffect(()=>{
    (
        async () => {
            // Cookies.set('name', 'Shivam Jha', { expires: 7 });
            const token = Cookies.get('meraToken');
            console.log(token);
            setMeratoken(token);
            // const name = Cookies.get('name');
            // console.log(name,"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX----------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
            // Cookies.remove('name');
            // const fname = Cookies.get('name');
            // console.log(name,"second","XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX----------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
            const response = await fetch(`${production_url}/api-user/user/${meraToken}`,{
            // mode:'no-cors',
            headers:{'Content-Type':'application/json'},
            credentials:'include',
            });
            const content = await response.json();
            console.log(content.detail);
            if(content.email){
              await setUser(content.email);
            }
            else{
              setUser('notUser');
            }
            console.log(user, "here we checking the data is set in user or not");
            
        }
    )();
},[user,meraToken]);

  if(user==null){
    return <div className="loader-container">
      <img src={loader} alt="Loading" className="loader-image" />
    </div>
  }
  return (
    <div className="Main">
    <Header user={user} />
    {/* {Posts.map((p)=>(
               <Post key={p.id} post={p}/>
      ))} */}
    {/* <Profile/> */}
    <Routes>
    <Route path="/about" element={<AboutPage user={user} />}/> 
    <Route path="/mypodcasts" element={<Userpodcasts user={user} />}/> 
    <Route path="/addpost" element={<AddPodcast user1={user} />}/>
    <Route path="/friends" element={<FriendPage user={user} />}/>  
    <Route path="/editpodcast/:editID" element={<AddPodcast user1={user} />}/> 
    <Route path="/" element={user==='notUser'?(<Login/>):(<Home/>)}/> 
    <Route path="/register" element= {user==='notUser'?(<Signup/>):(<Home/>)}/>
    <Route path="/profile/:userID" element= {user==='notUser'?(<Signup/>):(<Profile currentUser={user}/>)}/>
    <Route path="/login" element={user==='notUser'?(<Login/>):(<Home/>)}/>
    <Route path="/podcast/:podcastID" element= {<Podcastpage user={user} />} />
    </Routes>
    </div>
  );
  }

export default App;
