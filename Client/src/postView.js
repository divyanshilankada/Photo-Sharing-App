import React, { useEffect, useState } from 'react';
import './stylesheet/postView.css';
import more from './images/more.png';
import heart from './images/heart.png';
import nav from './images/nav.png';


export default function PostView() {

    const [postDetails, setPostDetails] = useState([]);

    useEffect(() => {
        fetch('https://insta-clone-backend-app.onrender.com/post')
                    .then(response => response.json())
                    .then(data => setPostDetails(data.message))          
    })

    console.log(postDetails);

    function dateMonth (date)
    {
        let d = date.split("T");
        return d[0];
    }

    function toBase64(dataArr){
        return btoa(dataArr.reduce((data, val)=> {
             return data + String.fromCharCode(val);
        }, ''));
    }

    return (
        <>
    {postDetails.length > 0 ? (<main className='postView-container'>
        <div className='posts-container'>
            {postDetails.reverse().map( (post, i) => {

                const base64string=toBase64(post.PostImage.data.data);
                console.log(base64string);

                return (
                <section className='post' key={i}>
                    <div className='post-owner-details'>
                        <div className='name-location box'>
                            <h2 className='name_h3'>{post.name}</h2>
                            <p className='location_p'>{post.location}</p>
                        </div>
                        <div className='more-logo box'>
                            <img className='logo' src={more}
                                    alt='more logo'></img>
                        </div>
                    </div>
                    
                    <div className='post-image box'>
                        <img className='logos' src={`data:image/png;base64,${base64string}`} alt='post'></img>
                    </div>

                    <div className='post-features box'>
                        <div className='heart-logo box'>
                            <img className='logo' src={heart} alt='heart logo'></img>
                        </div>
                        <div className='forward-logo box'>
                            <img className='logo' src={nav} alt='nav logo'></img>
                        </div>
                        <div></div>
                        <div className='date box'>
                            <p className='date_p'>{dateMonth(post.date)}</p>
                        </div>
                    </div>

                    <div className='likes box'>
                        <p className='likes_p'>{post.likes} likes</p>
                    </div>
                    <div className='description box'>
                        <h2 className='description_h2'>{post.description}</h2>
                    </div>
                </section>
            )}
            )}
        </div>
    </main>) : (
            <main className='postView-container'>
                <h3>...Loading</h3>
            </main>
        )
}
    </>
    );



}
