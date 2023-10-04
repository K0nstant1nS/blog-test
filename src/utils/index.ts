export const getRandom: (min:number, max: number)=>string = (min, max) => {
  return String(min + Math.floor(Math.random()*(max + 1)))
}

export const getPostsSelector = (store:any) => store.posts
