import React from "react";
import HeaderFunction from './header';
import { useNavigate } from "react-router-dom";
import './stylesheet/addPost.css'


function AddPost()
{

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const userData = new FormData();

        //console.log(e.target.PostImage);
            userData.append("description", e.target.description.value);
            userData.append("name", e.target.name.value);
            userData.append("location", e.target.location.value);
            userData.append("PostImage", e.target.PostImage.files[0]);
            userData.append("likes", Math.ceil(Math.random() * 100));

            fetch(`https://insta-clone-backend-app.onrender.com/post`, {
              method: "POST",
              body: userData,
            })
              .then((res) => res.json())
              .then((result) => {
                console.log(result);
                //window.location.reload(true);
                navigate("/instaClone");
              });

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




