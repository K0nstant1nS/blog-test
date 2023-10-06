import Post from "../components/post/post"
import { ReactElement } from 'react'
import { TPost, TRating } from "./types"

export const getRandom: (min:number, max: number)=>string = (min, max) => {
  return String(min + Math.floor(Math.random()*(max + 1)))
}

export const getPostsSelector = (store:any) => store.posts

export const configureQuery = (string: string) => {
  return string.replaceAll(' ', '+')
}

export const configurePost: (post: TPost, ratingData: TRating[])=>(TPost & TRating | null) = (post, ratingData) => {
  const rating = ratingData.find((item) => {
    return item.id === post.id
  })

  if(!rating){
    return null
  }
  return {...post, ...rating}
}

export const debounce = (func: Function, time: number, bool: boolean, setter: any) => {
  return function wrapper () {
    if(bool){
      return console.log('блок')
    }
    func()
    setter(true)
    setTimeout(()=>{
      setter(false)
    }, time)
  }
}
