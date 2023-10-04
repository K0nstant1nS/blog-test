import Api from "../../api"
import { getRandom } from "../../utils"
import { TPost } from "../../utils/types"
import { AppDispatch, AppThunk } from "../types"

export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'

export const getPosts:AppThunk<void> = ()=>{
  return (dispatch: AppDispatch) => {
    Api.getPosts().then(data=>{
      dispatch({
        type: GET_POSTS,
        payload: data.map((item:any) => {
          return {...item, likes: getRandom(0, 50), dislikes: getRandom(0, 50)}
        })
      })
    })
  }
}

export interface IGetPosts {
  type: typeof GET_POSTS,
  payload: TPost[]
}

export interface IGetPost {
  type: typeof GET_POST,
  payload: TPost
}

export type TPostsActions = IGetPost | IGetPosts
