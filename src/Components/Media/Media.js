import React from 'react';

import "./Media.css";

export const Media = ({media}) => {
  const { src } = media;
  return (
    <img src={src} alt="" />
  )
}