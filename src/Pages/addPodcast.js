import React, { useEffect, useState } from 'react'
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import Header from '../components/Header';
import Cookies from 'js-cookie';
import { useNavigate,useParams } from 'react-router-dom';

function AddPodcast({user1}){
    const navigate = useNavigate();
    const [user,setUser] = useState('')
    const [content, setcontent] = useState('')
    const [imagefile,setimagefile] = useState(null)
    const [id,setId] = useState('')
    const [editPodcastdata,setEditpodcastdata] = useState([]);
    const {editID} = useParams()
    const production_url = 'https://socialify-backend.onrender.com';
    useEffect(()=>{
        setUser(user1)
        if(editID){
            setId(editID);
            EditPodcastData().then();
            console.log(" - ",content," - "," getfunction2")
        }
    },[user,editID]);
    async function EditPodcastData(){
        try{
        const response = await fetch(`${production_url}/api-podcast/podcast/${editID}`);
        const content = await response.json();
        setEditpodcastdata(content);
        console.log(editPodcastdata,"the data is set")

        
        }
        catch(error){
            console.log(error);
            console.log("error happened");
        }
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(" - ",content," - "," getfunction3")
        const formData = new FormData();
        formData.append('email', user);
        formData.append('content', content);
        for (const file of imagefile) {
            formData.append('photos', file);
        }
        if(editID){
            const editformData = {
                "content": content==='' ? editPodcastdata.content : content
              };
            const url = `${production_url}/post/create`;
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(editformData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(editformData,"--------------------here is editformdata-----------------------")
            console.log(response,"Response from url");
            if(response.status === 201){
                alert('Edits saved successfully!');
                navigate('/mypodcasts');

            }else { alert('Something went wrong!'); }
            console.log(editPodcastdata)
            console.log(editPodcastdata," value of editPodcastdata")
        }
        else{
            const url = `${production_url}/post/create`;
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
                
            });

            if(response.status === 201){
                const token = Cookies.get('meraToken');
                console.log(token,"Hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
                alert('Post created successfully!');
            }else { alert('Something went wrong!'); }
        }


      };

        

    return(<div >
        {/* <Header user={user1} /> */}
        <Container>
                <div className="podcast_form my-5">
                {id===''?<h3>Add your post</h3>:<h3>Edit Your Post Details</h3>}
                <Form onSubmit={(e)=>{handleSubmit(e)}}>
                
                {
                id===''?<Form.Group className="mb-3">
                    {id && (<img style={{"height":"5rem","width":"5rem"}} src={`${production_url}${editPodcastdata.photos}`} />) }
                    <Form.Label>{id===''?"Add Photos":"Current Photos"}</Form.Label>
                    <Form.Control
                        type="file"
                        {...id===''?"required":{}}
                        name="thumbnail"
                        placeholder={id===''?"Edit your Photos":"Add new Photos"}
                        defaultValue={""}
                        onChange={(e)=>{setimagefile(e.target.files)}}
                        multiple
                    >
                    </Form.Control>
                </Form.Group>:<div><p>Currently <strong>Photos</strong> can't be edit</p></div>
                }
                <Form.Group className="mb-3">
                    <Form.Label>Describe Your Post</Form.Label>
                    <Form.Control
                        as="textarea"
                        {...id===''?"required":{}}
                        name="content"
                        placeholder='Add content'
                        defaultValue={id && editPodcastdata.content}
                        onChange={(e)=>{setcontent(e.target.value)}}
                    >
                    </Form.Control>
                </Form.Group>
                
                <Button varient="primary" type="submit" className="submitButton">
                    {id===''?"Submit":"Save Edit"}
                </Button>
                </Form>
                </div>
                
            </Container>
    </div>
    )
}

export default AddPodcast;