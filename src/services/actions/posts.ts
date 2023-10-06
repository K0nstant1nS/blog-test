import Api from "../../api"
import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { TPost, TRating } from "../../utils/types"

export const GET_POSTS = createAction<TPost[], 'posts/GET_POSTS'>('posts/GET_POSTS');
export const SET_POSTS_ONLOAD = createAction('posts/SET_POSTS_ONLOAD');
export const SET_POSTS_ONERROR = createAction('posts/SET_POSTS_ONERROR');

export const GET_POST = createAction<TPost, 'posts/GET_POST'>('posts/GET_POST');
export const GET_POST_ONLOAD = createAction('posts/GET_POST_ONLOAD');
export const GET_POST_ONERROR = createAction('posts/GET_POST_ONERROR');

export const SET_RATING = createAction<TRating[], 'posts/SET_RATING'>('posts/SET_RATING')
export const TOGGLE_LIKE = createAction<{id: string, reaction: 'like'|'dislike'}, 'posts/TOGGLE_LIKE'>('posts/TOGGLE_LIKE')

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (query:string = '', thunkAPI) => {
    const data = await Api.getPosts(query)
    return data
  }
)

export const getPost = createAsyncThunk(
  'posts/getPost',
  async (id: string, thunkAPI) => {
    const data = await Api.getPost(id);
    return data
  }
)
