import React from 'react';
import Post from './Post';

function PostRender({posts,uImg,uDesc}){

    const img = <i className="fab fa-wolf-pack-battalion"></i>;
    const myPost = {
        user:{
            profile_image:{
                small: img
            },
            name : "Prabhjot Singh",
    },
    cover_photo:{
        alt_description: uDesc,
        urls:{
            regular:uImg,
        }
    }

    }
    return(
        <div id="post-render">
            {uImg!=="" ? <Post postContent = {myPost} key={0}/> : <div></div>}
           {posts.map((post,index)=>
                <Post postContent = {post} key={index+1}/>
              )}
        </div>

    )
            }

export default PostRender;