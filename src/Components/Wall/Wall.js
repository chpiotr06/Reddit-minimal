import React from "react";

import "./Wall.css";
import { Post } from "../Post/Post";

export const Wall = () => {

  const date = new Date();

  return (
    <div className='wall'>
      <Post 
        author="James Blunt"
        likes='20k' 
        awards='100' 
        media={{src:"https://i.redd.it/n5blw6e8w3d91.jpg"}}
        title="Some random title that is quite long" 
        date={date.toUTCString()}
      />
      <Post 
        author="James Blunt"
        likes='20k' 
        awards='100' 
        media={{src:"https://i.redd.it/n5blw6e8w3d91.jpg"}}
        title="Some random title that is quite long" 
        date={date.toUTCString()}
      />
      <Post 
        author="James Blunt"
        likes='20k' 
        awards='100' 
        media={{src:"https://i.redd.it/n5blw6e8w3d91.jpg"}}
        title="Some random title that is quite long" 
        date={date.toUTCString()}
      />
      <Post 
        author="James Blunt"
        likes='20k' 
        awards='100' 
        media={{src:"https://i.redd.it/n5blw6e8w3d91.jpg"}}
        title="Some random title that is quite long" 
        date={date.toUTCString()}
      />
    </div>
  )
} 