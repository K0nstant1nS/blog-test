import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './post.module.css'
import { useDispatch, useSelector } from '../../services/hooks';
import { configurePost, getPostsSelector } from '../../utils';
import ReactionsSet from '../../components/reactions-set/reactions-set';
import { getPost } from '../../services/actions/posts';
import ErrorPage from '../error/error';
import Loader from '../../components/loader/loader';
import { postsActions } from '../../services/reducers/posts';

function Post() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { activePost, rating } = useSelector(getPostsSelector);

  useEffect(()=>{
    dispatch(getPost(id!))
  }, [])

  if(activePost.status === 'error' || activePost.status === null){
    return <ErrorPage />
  }

  if(activePost.status === 'load'){
    return <Loader />
  }

  const post = configurePost(activePost.post, rating)

  if(!post){
    return <ErrorPage /> 
  }

  const imgSrc = `https://placehold.co/600x400?text=${post.title}`

  const toggleDislike = () => {
    dispatch(postsActions.toggleLike({id: post.id, reaction: 'dislike'}))
  }

  const toggleLike = () => {
    dispatch(postsActions.toggleLike({id: post.id, reaction: 'like'}))
  }

  const returnToMain = () => {
    navigate('/')
  }

  return ( <div className = {styles.content}>
    <div className={styles.header}>
      <button onClick={returnToMain} className={styles.backButton}><img src={`${process.env.PUBLIC_URL}/images/back.svg`} alt='стрелка назад'/><span>Вернуться к статьям</span></button>
      <ReactionsSet likes={post.likes} dislikes={post.dislikes} toggleDislike={toggleDislike} toggleLike={toggleLike} reaction={post.reaction}/>
    </div>
    <div className={styles.post}>
      <h1 className={styles.title}>{post.title}</h1>
      <img className={styles.image} src={imgSrc} alt='изображение поста'/>
      <p className={styles.body}>{post.body}</p>
    </div>
  </div> );
}

export default Post;
