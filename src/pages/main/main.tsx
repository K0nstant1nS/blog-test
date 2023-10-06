import { useSelector } from "../../services/hooks"
import styles from "./main.module.css"
import { ReactElement } from 'react'
import { configurePost, getPostsSelector } from "../../utils";
import { TPost } from "../../utils/types";
import Post from "../../components/post/post";
import SearchInput from "../../components/search-input/search-input";

const Main = () => {
  const { data, rating } = useSelector(getPostsSelector)

  let mainPost: ReactElement | null = null
  const firstColumn: ReactElement[] = [];
  const secondColumn: ReactElement[] = [];

  data.forEach((post: TPost, index:number) => {
    const newPost = configurePost(post, rating);
    if(!newPost){
      return null
    }
    if(index === 0){
      mainPost = <Post {...newPost} size="big"/>
    } else if(index%2){
      secondColumn.push(<Post key={post.id} {...newPost}></Post>)
    } else 
      firstColumn.push(<Post key={post.id} {...newPost}></Post>)
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
