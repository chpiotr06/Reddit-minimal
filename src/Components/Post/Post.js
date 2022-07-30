import React from 'react';

import { Media } from '../Media/Media'
import "./Post.css";

export const Post = ({author, likes, awards, media, title, date}) => {
  const { hasMedia } = media
  return (
    <div className="flex-column">
      {hasMedia ? <Media media={media} /> : undefined}
      <div className="post-title">
        <h1>{title}</h1>
      </div>
      <div className="flex-row first">
        <div className="flex-row">
          Author: {author}
        </div>
        <div className="flex-row">
          <div>{likes}</div>
          <div className="material-symbols-outlined symbols">
            favorite
          </div>
        </div>
      </div>
      <div className="flex-row">
        <div className="flex-row">
          Posted: {date}
        </div>
        <div className="flex-row">
          <div>{awards}</div> 
          <div className="material-symbols-rounded symbols">
            workspace_premium
          </div>
        </div>
      </div>
    </div>
  );
}