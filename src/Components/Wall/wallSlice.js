import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import Reddit from "../../utils/Reddit/reddit";
import { normalizePostData } from "../../utils/data/data";

export const fetchPosts = createAsyncThunk(
  'wall/fetchPosts',
  async (type) => {
    const response = await Reddit.fetchPosts(type);
    const data = await response.json();
    return data;
  }
)
export const fetchMorePosts = createAsyncThunk(
  'wall/fetchMorePosts',
  async ({type, query}) => {
    const response = await Reddit.fetchMorePosts(type, query);
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
    nextQuerry: '',
    isFetchingMore: false
  },
  reducers: {
    clearState: (state) => {
      state.posts = []
      state.isLoading = true
      state.hasError = false
      state.nextQuery = ''
      state.isFetchingMore = false
    }

  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      const {after, posts} = normalizePostData(action.payload.data)
      state.isLoading = false;
      state.hasError = false;
      state.nextQuery = after;
      posts.forEach(post => state.posts.push(post))
    },
    [fetchPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [fetchMorePosts.pending]: (state, action) => {
      state.isLoading = false;
      state.hasError = false; 
      state.isFetchingMore = true;
    },
    [fetchMorePosts.fulfilled]: (state, action) => {
      const {after, posts} = normalizePostData(action.payload.data)
      state.isLoading = false;
      state.hasError = false;
      state.isFetchingMore = false;
      state.nextQuery = after;
      posts.forEach(post => state.posts.push(post));
    }, 
    [fetchMorePosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
      state.isFetchingMore = false;
    }    

  }
})
export default wallSlice.reducer;
export const selectPosts = state => state.wall.posts;
export const selectNextQuery = state => state.wall.nextQuery;
export const selectHasError = state => state.wall.hasError;
export const selectIsLoading = state => state.wall.isLoading;
export const selectIsFetchingMore = state => state.wall.isFetchingMore;