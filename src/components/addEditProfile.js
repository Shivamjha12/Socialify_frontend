import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Cookies from 'js-cookie';

function ProfileForm({ profile,onSubmit }) {
  const [country, setCountry] = useState(profile.country);
  const [city, setCity] = useState(profile.city);
  const [shortIntro, setShortIntro] = useState(profile.short_intro);
  const [description, setDescription] = useState('');
  const [interests, setInterests] = useState(profile.interests);
  const [imagefile,setimagefile] = useState(null);
  const [jwt,setJwt] = useState('');
  const production_url = 'https://socialify-backend.onrender.com/profile/create';

  useEffect(()=>{
    setJwt(Cookies.get('meraToken'));
  })
  async function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('country', country);
    formData.append('city', city);
    formData.append('short_intro', shortIntro);
    formData.append('description', description);
    formData.append('interests', interests);
    formData.append('profile_image', imagefile);
    formData.append('jwt', jwt);
    // Call the onSubmit function passed from the parent component
    // const url = `${production_url}/post/create`;
            const response = await fetch(production_url, {
                method: 'POST',
                body: formData,
                
            });

            if(response.status === 201){
                const token = Cookies.get('meraToken');
                console.log(token,"Hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
                alert('Post created successfully!');
            } else { 
                console.log(response);    
                alert('Something went wrong!');
             }

    // onSubmit({ country, city, shortIntro, description, interests });
  };

  return (
    <div className="profileFormMain">
    <h3 className="profileFormTitle">Edit Your Profile</h3>
    <Form onSubmit={handleSubmit}>

    <Form.Group className="mb-3">
                    <Form.Label>{"Edit or Add Photos"}</Form.Label>
                    <Form.Control
                        type="file"
                        required
                        name="Profile Image"
                        placeholder={"Edit or Add your Photos"}
                        defaultValue={""}
                        onChange={(e)=>{setimagefile(e.target.files)}}
                        multiple
                    >
                    </Form.Control>
                </Form.Group>


      <Form.Group controlId="formCountry">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formCity">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formShortIntro">
        <Form.Label>Short Introduction</Form.Label>
        <Form.Control as="textarea" rows={3} value={shortIntro} onChange={(e) => setShortIntro(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formInterests">
        <Form.Label>Add Interests seprated with ' , '(Comma)</Form.Label>
        <Form.Control type="text" value={interests} onChange={(e) => setInterests(e.target.value)} />
      </Form.Group>

      <Button className="profileFormButton" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default ProfileForm;
