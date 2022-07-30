import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Wall.css";
import { Post } from "../Post/Post";
import { selectPosts, selectHasError, selectNextQuerry, selectIsLoading, fetchPosts } from './wallSlice'

export const Wall = () => {
  const dispatch = useDispatch();
  
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  
  useEffect(() => {
    dispatch(fetchPosts('hot', ''));
  }, [dispatch]);

  return ( isLoading ? <div>Loading</div> :
    <div className='wall'>
      {
        posts.map((post) =>{
          const { title, ups, total_awards_received, created, author, url, is_video, id } = post
          return (
            <Post 
              key={id}
              author={author}
              likes={ups}
              awards={total_awards_received}
              title={title}
              date={created}
              media={{
                src: url,
                hasMedia: true,
                isVideo: is_video,
                isImage: true 
              }}
            />
          )
        })
      }
    </div>
  )
} 