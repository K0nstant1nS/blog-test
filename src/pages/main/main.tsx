import { useDispatch, useSelector } from "../../services/hooks"
import styles from "./main.module.css"
import {ReactElement, useEffect} from 'react'
import { getPosts } from "../../services/actions/posts";
import { getPostsSelector } from "../../utils";
import Button from "../../components/button/button";
import { TPost } from "../../utils/types";
import Post from "../../components/post/post";

const Main = () => {

  const dispatch = useDispatch();
  const { data } = useSelector(getPostsSelector)

  const firstColumn: ReactElement[] = [];
  const secondColumn: ReactElement[] = [];

  useEffect(()=>{
    dispatch(getPosts())
  }, [dispatch])

  data.forEach((post: TPost, index:number) => {
    if(index%2){
      secondColumn.push(<Post {...post}></Post>)
    } else 
      firstColumn.push(<Post {...post}></Post>)
  });

  return ( <div className={styles.container}>
    <h1 className={styles.header}>Блог</h1>
    <p className={styles.description}>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</p>
    <div className={styles.colums}>
      <div className={styles.column}>{firstColumn}</div>
      <div className={styles.column}>{secondColumn}</div>
    </div>
  </div> );
}

export default Main;
