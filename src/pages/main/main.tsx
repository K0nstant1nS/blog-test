import { useDispatch, useSelector } from "../../services/hooks"
import styles from "./main.module.css"
import {ReactElement, useEffect} from 'react'
import { getPosts } from "../../services/actions/posts";
import { configurePost, getPostsSelector } from "../../utils";
import Button from "../../components/button/button";
import { TPost } from "../../utils/types";
import Post from "../../components/post/post";
import SearchInput from "../../components/search-input/search-input";

const Main = () => {
  const { data, rating } = useSelector(getPostsSelector)

  let mainPost: ReactElement | null = null
  const firstColumn: ReactElement[] = [];
  const secondColumn: ReactElement[] = [];

  data.forEach((post: TPost, index:number) => {
    if(index === 0){
      mainPost = <Post {...configurePost(post, rating)} size="big"/>
    } else if(index%2){
      secondColumn.push(<Post key={post.id} {...configurePost(post, rating)}></Post>)
    } else 
      firstColumn.push(<Post key={post.id} {...configurePost(post, rating)}></Post>)
  });

  return ( <div className={styles.container}>
    <h1 className={styles.header}>Блог</h1>
    <p className={styles.description}>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</p>
    <SearchInput />
    {mainPost}
    <div className={styles.colums}>
      <div className={styles.column}>{firstColumn}</div>
      <div className={styles.column}>{secondColumn}</div>
    </div>
  </div> );
}

export default Main;
