import React, { useEffect, useState } from 'react';
import './stylesheet/postView.css';
import more from './images/icons8-view-more-48.png';
import heart from './images/icons8-favorite-48.png';
import nav from './images/icons8-near-me-48.png';

const ServerUrl = "https://instaclone-application-api.herokuapp.com";


export default function PostView() {

    const [postDetails, setPostDetails] = useState([]);

    useEffect(() => {
        fetch('https://instaclone-application-api.herokuapp.com/post')
                    .then(response => response.json())
                    .then(data => setPostDetails(data.message))          
    },[])

    function dateMonth (date)
    {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
                        "October", "November", "December"];
        
        const dateArr = date.split("/");
        const swapArr = swap(dateArr[0], dateArr[1]);
        dateArr[0] = swapArr[0];
        dateArr[1] = swapArr[1];

        date = dateArr.join("/");

        const d = new Date(date);
        const resultDate = monthNames[d.getMonth()];


        dateArr[1] = resultDate;

        const result = dateArr.join(" ");
        return result; 
    }

    function swap(a,b)
    {
        return [b,a];
    }

    return (
        <>
    {postDetails.length > 0 ? (<main className='postView-container'>
        <div className='posts-container'>
            {postDetails.reverse().map( (post, i) => 
                
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
                        <img className='logo' src={`${ServerUrl}/Images/${post.PostImage}`}
                    alt={`${post.PostImage}`}></img>
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
                            <p className='date_p'>{post.date}</p>
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
