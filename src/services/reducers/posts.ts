import { Reducer } from 'redux'
import { TPost } from '../../utils/types'
import { GET_POSTS, SET_POSTS_ONERROR, SET_POSTS_ONLOAD, TOGGLE_DISLIKE, TOGGLE_LIKE, TPostsActions } from '../actions/posts'

export type TPostsState = {
  data: TPost[]
  status: 'load' | 'success' | 'error' | null
}

const initialState = {
  data: [],
  status: null
} 

export const postsReducer: Reducer<TPostsState, TPostsActions> = (state = initialState, action) => {
  switch(action.type) {
    case SET_POSTS_ONLOAD: {
      return {...state, status: 'load'}
    }
    case SET_POSTS_ONERROR: {
      return {...state, status: 'error'}
    }
    case GET_POSTS: {
      return {...state, data: action.payload, status: 'success'}
    }
    case TOGGLE_LIKE: {
      return {...state, data: state.data.map(post => {
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
      return {...state, data: state.data.map(post => {
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
}
