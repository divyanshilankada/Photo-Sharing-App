import React from "react";
import HeaderFunction from './header';
import { useNavigate } from "react-router-dom";
import './stylesheet/addPost.css';
import axios from 'axios';


function AddPost()
{

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        //const userData = new FormData();
        const uploadImage = new FormData();

        uploadImage.append('file', e.target.PostImage.files[0]);
        uploadImage.append('upload_preset','ml_default');

        const res = await fetch('https://api.cloudinary.com/v1_1/de2r40gjo/image/upload', {
            method:"POST",
            body:uploadImage
        })

        const file = await res.json();

        console.log(file.secure_url);

        const userData = {
            "description": e.target.description.value,
            "name":e.target.name.value,
            "location": e.target.location.value,
            "PostImage": file.secure_url,
            "likes":Math.ceil(Math.random() * 100)};

            axios.post(`https://insta-clone-backend-app.onrender.com/post`,userData)
              .then((result) => {
                console.log(result);
                //window.location.reload(true);
                navigate("/instaClone");
              }).catch((err) => console.log(err));

              alert("Uploading")

    }


    return (
        <div>
            <HeaderFunction />
            
            
            <div id="formContainer">
                <h1>Post Details</h1>
                <form className="PostCardForm" onSubmit={handleSubmit}>
                    <input type="file" className="custom-file-input" name="PostImage" />
                    <input type="text" className="form" placeholder="name" name="name" />
                    <input type="text" className="form" placeholder="Location" name="location" />
                    <input type="text" className="form" placeholder="description" name="description" />
                    <input type="submit" value="Submit" className="submit" />
                </form>
                
            </div>
        </div>
    );
}

export default AddPost;




