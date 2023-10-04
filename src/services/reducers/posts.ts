import { Reducer } from 'redux'
import { TPost } from '../../utils/types'
import { GET_POSTS, TPostsActions } from '../actions/posts'

export type TPostsState = {
  data: TPost[]
}

const initialState = {
  data: []
} 

export const postsReducer: Reducer<TPostsState, TPostsActions> = (state = initialState, action) => {
  switch(action.type) {
    case GET_POSTS: {
      return {...state, data: action.payload}
    }
    default: {
      return state
    }
  }
}
