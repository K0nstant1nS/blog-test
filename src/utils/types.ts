export type TPost = {
  id: string,
  title: string,
  body: string,
  likes: string,
  dislikes: string,
  reaction: null|'like'|'dislike'
}

export type TRating = {
  id: string,
  likes: string,
  dislikes: string,
  reaction: null|'like'|'dislike'
}
