export type TPost = {
  id: string,
  title: string,
  body: string
}

export type TRating = {
  id: string,
  likes: number,
  dislikes: number,
  reaction: null|'like'|'dislike'
}

export interface IToggleLike {
  payload: {
    id: string,
    reaction: 'like' | 'dislike'
  }
}
