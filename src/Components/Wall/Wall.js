import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Wall.css";
import { Post } from "../Post/Post";
import { selectPosts, selectHasError, selectNextQuerry, selectIsLoading, fetchPosts } from './wallSlice';
import { Loading } from "../Loading/Loading"

export const Wall = () => {
  const dispatch = useDispatch();
  
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  
  useEffect(() => {
    dispatch(fetchPosts('hot', ''));
  }, [dispatch]);

  return ( isLoading ? <Loading /> :
    <div className='wall'>
      {
        posts.map((post) =>{
          const { title, ups, total_awards_received, subreddit, 
            author, url, is_video, id, selftext, permalink, over_18, isRedditMediaDomain, domain, mediaObject, hasMedia, isImage, } = post
          return (
            <Post 
              key={id}
              author={author}
              likes={ups}
              awards={total_awards_received}
              title={title}
              subreddit={`r/${subreddit}`}
              selftext={selftext}
              permalink={permalink}
              over_18={over_18}
              isRedditMediaDomain={isRedditMediaDomain}
              domain={domain}
              media={{
                src: url,
                hasMedia: hasMedia,
                isVideo: is_video,
                isImage: isImage,
                mediaObject
              }}
            />
          )
        })
      }
    </div>
  )
} 