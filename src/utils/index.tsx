import { Dispatch } from "react"
import { TPost, TRating } from "./types"
import { RootState } from "../services/store"

export const getRandom: (min:number, max: number)=>number = (min, max) => {
  return min + Math.floor(Math.random()*(max + 1))
}

export const getPostsSelector = (store:RootState) => store.posts

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

export const debounce = (func: () => void, time: number, bool: boolean, setter: Dispatch<boolean>) => {
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
