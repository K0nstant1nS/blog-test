import { Reducer } from 'redux'
import { TPost, TRating } from '../../utils/types'
import { GET_POST, GET_POSTS, GET_POST_ONERROR, GET_POST_ONLOAD, SET_POSTS_ONERROR, SET_POSTS_ONLOAD, SET_RATING, TOGGLE_LIKE, TPostsActions } from '../actions/posts'
import { createReducer } from '@reduxjs/toolkit'
import { ReducerWithInitialState } from '@reduxjs/toolkit/dist/createReducer'

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

export const postsReducer= createReducer(initialState, (builder) => {
  builder.addCase(GET_POST, (state, action) => {
    state.activePost = {
      post: action.payload,
      status: 'success'
    }
  })
  .addCase(GET_POST_ONLOAD, (state, action) => {
    state.activePost.status = 'load'
  })
  .addCase(GET_POST_ONERROR, (state, action) => {
    state.activePost.status = 'error'
  })
  .addCase(GET_POSTS, (state, action) => {
    state.data = action.payload
    state.status = 'success'
  })
  .addCase(SET_POSTS_ONLOAD, (state, action) => {
    state.status  = 'load'
  })
  .addCase(SET_POSTS_ONERROR, (state, action) => {
    state.status = 'error'
  })
  .addCase(SET_RATING, (state, action) => {
    state.rating = action.payload
  })
  .addCase(TOGGLE_LIKE, (state, action) => {
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
  })
})

/* export const postsReducer: Reducer<TPostsState, TPostsActions> = (state = initialState, action) => {
  switch(action.type) {
    case GET_POST: {
      return {...state, activePost: { post: action.payload, status: 'success' }}
    }
    case GET_POST_ONLOAD: {
      return {...state, activePost: {post: null, status: 'load'}}
    }
    case GET_POST_ONERROR: {
      return {...state, activePost: {post: null, status: 'error'}}
    }
    case SET_POSTS_ONLOAD: {
      return {...state, status: 'load'}
    }
    case SET_POSTS_ONERROR: {
      return {...state, status: 'error'}
    }
    case GET_POSTS: {
      return {...state, data: action.payload, status: 'success'}
    }
    case SET_RATING: {
      return {...state, rating: action.payload}
    }
    case TOGGLE_LIKE: {
      return {...state, rating: state.rating.map(post => {
        if(post.id === action.payload){
          const changedPost = {...post}
          if(post.reaction === 'dislike'){
            changedPost.reaction = 'like';
            changedPost.dislikes = String(+post.dislikes - 1)
            changedPost.likes = String(+post.likes + 1);
          }else if(post.reaction === null){
            changedPost.reaction = 'like';
            changedPost.likes = String(+post.likes + 1);
          } else {
            changedPost.reaction = null;
            changedPost.likes = String(+post.likes - 1);
          }
          return changedPost
        }
        return post
      })}
    }
    case TOGGLE_DISLIKE: {
      return {...state, rating: state.rating.map(post => {
        if(post.id === action.payload){
          const changedPost = {...post}
          if(post.reaction === 'like'){
            changedPost.reaction = 'dislike';
            changedPost.likes = String(+post.likes - 1)
            changedPost.dislikes = String(+post.dislikes + 1);
          } else if(post.reaction === null){
            changedPost.reaction = 'dislike';
            changedPost.dislikes = String(+post.dislikes + 1);
          } else {
            changedPost.reaction = null;
            changedPost.dislikes = String(+post.dislikes - 1);
          }
          return changedPost
        }
        return post
      })}
    }
    default: {
      return state
    }
  }
} */
