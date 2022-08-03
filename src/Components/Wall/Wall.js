import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Wall.css";
import { Post } from "../Post/Post";
import { selectPosts, selectHasError, selectNextQuery, selectIsLoading, selectIsFetchingMore, fetchPosts, fetchMorePosts } from './wallSlice';
import { Loading } from "../Loading/Loading"
import { ErrorComp } from "../ErrorComp/ErrorComp";

export const Wall = () => {
  const dispatch = useDispatch();
  
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  const hasError = useSelector(selectHasError);
  const nextQuery = useSelector(selectNextQuery);
  const isFetchingMore = useSelector(selectIsFetchingMore);
  
  useEffect(() => {
    dispatch(fetchPosts('hot', ''));
  }, [dispatch]);

  useEffect(() => {
    window.onscroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1000) {
        if(!isLoading && !hasError && !isFetchingMore){
          dispatch(fetchMorePosts({
            type: 'hot',
            query: nextQuery
          }));
      }
      }
    }
  }, [dispatch, nextQuery, hasError, isLoading, isFetchingMore]);

  

  if(isLoading){
    return <Loading />;
  }
  if(hasError){
    return <ErrorComp />;
  }

  
  return (
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