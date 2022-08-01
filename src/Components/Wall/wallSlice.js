import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import Reddit from "../../utils/Reddit/reddit";
import { normalizePostData } from "../../utils/data/data";

export const fetchPosts = createAsyncThunk(
  'wall/fetchPosts',
  async (type, querry) => {
    const response = await Reddit.fetchPosts(type, querry);
    const data = await response.json();
    return data;
  }
)

const wallSlice = createSlice({
  name: 'wall',
  initialState: {
    posts: [],
    isLoading: true,
    hasError: false,
    nextQuerry: ''
  },
  reducers: {

  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      console.log(action.payload)
      const {after, posts} = normalizePostData(action.payload.data)
      state.isLoading = false;
      state.hasError = false;
      state.nextQuerry = after;
      posts.forEach(post => state.posts.push(post))
    },
    [fetchPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    }

  }
})
export default wallSlice.reducer;
export const selectPosts = state => state.wall.posts;
export const selectNextQuerry = state => state.wall.nextQuerry;
export const selectHasError = state => state.wall.hasError;
export const selectIsLoading = state => state.wall.isLoading;