import React from 'react';
import { useDispatch } from 'react-redux';

import './errorcomp.css';
import { fetchPosts } from '../Wall/wallSlice';

export const ErrorComp = () => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch({type: 'wall/clearState'})
    dispatch(fetchPosts('hot'));
  }
  return (
    <div className="error-wrapper">
      <span class="material-symbols-outlined error">error</span>
      <h2>An error has occurred. Check your internet connection and try again in few minutes.</h2>
      <button className='error-btn' onClick={handleClick}>Retry</button>
    </div>
  )
}