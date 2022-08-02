import React from 'react';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser'

import "./Media.css";
import { htmlDecode } from '../../utils/data/data';

export const Media = ({media}) => {
  const { src, isVideo, isImage, mediaObject } = media;
  if(isImage) {
    return <img src={src} alt=''/>
  }
  if(isVideo && mediaObject.reddit_video) {
    const { reddit_video } = mediaObject;
     return (<video  controls>
      <source src={reddit_video.fallback_url}/>
    </video>)
  }
  if(mediaObject.oembed){
    const { oembed } = mediaObject;
    const html = htmlDecode(oembed.html);
    const cleanhtml = DOMPurify.sanitize(html,{ USES_PROFILES: {html: true}})
    return (<div>{parse(cleanhtml)}</div>)
  }
}