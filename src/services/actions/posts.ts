import Api from "../../api"
import { getRandom } from "../../utils"
import { TPost, TRating } from "../../utils/types"
import { AppDispatch, AppThunk } from "../types"

export const GET_POSTS = 'GET_POSTS'
export const SET_POSTS_ONLOAD = 'SET_POSTS_ONLOAD'
export const SET_POSTS_ONERROR = 'SET_POSTS_ONERROR'

export const GET_POST = 'GET_POST'
export const GET_POST_ONLOAD = 'GET_POST_ONLOAD'
export const GET_POST_ONERROR = 'GET_POST_ONERROR'

export const SET_RATING = 'SET_RATING'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'
export const TOGGLE_DISLIKE = 'TOGGLE_DISLIKE'

export const getPosts:AppThunk<void> = ()=>{
  return (dispatch: AppDispatch) => {
    dispatch({ type: SET_POSTS_ONLOAD })
    Api.getPosts().then(data=>{
      dispatch({
        type: GET_POSTS,
        payload: data
      })
      dispatch({
        type: SET_RATING,
        payload: data.map((item:any) => {
          return {id: item.id, likes: getRandom(0, 50), dislikes: getRandom(0, 50), reaction: null}
        })
      })
    })
    .catch(() => {
      dispatch({ type: SET_POSTS_ONERROR })
    })
  }
}

export const getPostsByQuery:AppThunk<void> = (query: string)=>{
  return (dispatch: AppDispatch) => {
    Api.getPosts(query).then(data=>{
      dispatch({
        type: GET_POSTS,
        payload: data.map((item:any) => {
          return {...item, likes: getRandom(0, 50), dislikes: getRandom(0, 50), reaction: null}
        })
      })
    })
    .catch(() => {
      dispatch({ type: SET_POSTS_ONERROR })
    })
  }
}

export const getPost:AppThunk<void> = (id: string)=>{
  return (dispatch: AppDispatch) => {
    dispatch({type: GET_POST_ONLOAD})
    Api.getPost(id).then((data) => {
      dispatch({
        type: GET_POST,
        payload: data
      })
    })
    .catch(() => {
      dispatch({
        type: GET_POST_ONERROR
      })
    })
  }
}
export interface IGetPosts {
  type: typeof GET_POSTS,
  payload: TPost[]
}

export interface ISetRating {
  type: typeof SET_RATING,
  payload: TRating[]
}

export interface ISetPostsOnload {
  type: typeof SET_POSTS_ONLOAD
}

export interface ISetPostsOnerror {
  type: typeof SET_POSTS_ONERROR
}

export interface IGetPost {
  type: typeof GET_POST,
  payload: TPost
}

export interface IToggleLike {
  type: typeof TOGGLE_LIKE,
  payload: string
}

export interface IToggleDislike {
  type: typeof TOGGLE_DISLIKE,
  payload: string
}

export interface IGetPostOnload {
  type: typeof GET_POST_ONLOAD
}

export interface IGetPostOnerror {
  type: typeof GET_POST_ONERROR
}

export type TPostsActions = IGetPost | IGetPosts | IToggleLike | IToggleDislike | ISetPostsOnload | ISetPostsOnerror | ISetRating | IGetPostOnload | IGetPostOnerror
