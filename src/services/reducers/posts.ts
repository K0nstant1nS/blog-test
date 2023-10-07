import { TPost, TRating } from '../../utils/types'
import { getPost, getPosts } from '../actions/posts'
import { createSlice } from '@reduxjs/toolkit'
import { IToggleLike } from '../../utils/types'

export type TPostsState = {
  data: TPost[],
  rating: TRating[],
  activePost: {
    post: TPost | null,
    status: 'load' | 'success' | 'error' | null 
  }
  status: 'load' | 'success' | 'error' | null
}

const initialState:TPostsState = {
  data: [],
  rating: [],
  activePost: {
    post: null,
    status: null
  },
  status: null
} 

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPostsOnload(state){
      state.status = 'load'
    },
    setPostOnload(state){
      state.activePost.status = 'load'
    },
    setRating(state, action: { payload: TRating[] }){
      state.rating = action.payload
    },
    toggleLike(state, action: IToggleLike){
      state.rating = state.rating.map((item) => {
        if(item.id === action.payload.id){
          if(item.reaction === null){
            item[`${action.payload.reaction}s`]++
            item.reaction = action.payload.reaction
          } else if(item.reaction === action.payload.reaction){
            item[`${action.payload.reaction}s`]--
            item.reaction = null
          } else if(item.reaction !== action.payload.reaction){
            item[`${action.payload.reaction}s`]++
            item[`${item.reaction}s`]--
            item.reaction = action.payload.reaction
          }
        }
        return item
      })
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPost.pending, (state) => {
      state.activePost.status = 'load'
    })
    .addCase(getPost.fulfilled, (state, action) => {
      state.activePost = {
        post: action.payload,
        status: 'success'
      }
    })
    .addCase(getPost.rejected, (state) => {
      state.activePost.status = 'error'
    })
    .addCase(getPosts.pending, (state) => {
      if(state.status === 'success'){
        return
      }
      state.status = 'load'
    })
    .addCase(getPosts.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = "success"
    })
    .addCase(getPosts.rejected, (state) => {
      state.status = 'error'
    })
  }
})

export const postsReducer = postsSlice.reducer;
export const postsActions = postsSlice.actions;
