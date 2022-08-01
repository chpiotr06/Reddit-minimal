import React from 'react';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

import { Media } from '../Media/Media';
import { htmlDecode } from '../../utils/data/data';
import "./Post.css";

export const Post = ({author, likes, awards, media, title, subreddit, selftext, permalink, over_18, isRedditMediaDomain, domain}) => {
  const { hasMedia, src } = media
  const html = htmlDecode(selftext);
  const cleanHTML = DOMPurify.sanitize(html,{ USES_PROFILES: {html: true}})
  return (
    <div className={`flex-column ${over_18 ? 'over-18' : ''}`}>
      {hasMedia ? <Media media={media} /> : undefined}
      <div className="post-title">
        <a href={`https://reddit.com${permalink}`} target="_blank" rel="noopener noreferrer"><h1>{title}</h1></a>
        {
          isRedditMediaDomain ? undefined : 
          (<div>
            Article: <a href={src}>{`${domain}/...`}</a>
          </div>)
        }
      </div>
      {
      selftext ? (<div className="post-title first">
        {parse(cleanHTML)}
      </div>) : undefined
      }
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
          Subreddit: {subreddit}
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