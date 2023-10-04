import checkResponse from "../utils/checkResponse"

export default class Api {
  private static baseUrl = 'https://jsonplaceholder.typicode.com'
  
  static async getPosts(query?: string) {
    const res = await fetch(`${this.baseUrl}/posts${query ? '?title='+query : ''}`)
    return await checkResponse(res)
  } 

  static async getPost(id: string) {
    const res = await fetch(`${this.baseUrl}/posts/${id}`)
    return await checkResponse(res)
  } 
}
