import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './post.module.css'
import { useDispatch, useSelector } from '../../services/hooks';
import { getPostsSelector } from '../../utils';
import { TPost } from '../../utils/types';
import ReactionsSet from '../../components/reactions-set/reactions-set';
import { TOGGLE_DISLIKE, TOGGLE_LIKE } from '../../services/actions/posts';
import ErrorPage from '../error/error';
const backImage = require('../../images/back.png')

function Post() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useSelector(getPostsSelector);
  const post = data.find((item: TPost) => {
    return item.id == id
  })

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])

  if(!post){
    return <ErrorPage />
  }

  const imgSrc = `https://placehold.co/600x400?text=${post.title}`

  const toggleDislike = () => {
    dispatch({
      type: TOGGLE_DISLIKE,
      payload: post.id
    })
  }

  const toggleLike = () => {
    dispatch({
      type: TOGGLE_LIKE,
      payload: post.id
    })
  }

  const returnToMain = () => {
    navigate('/')
  }

  return ( <div className = {styles.content}>
    <div className={styles.header}>
      <button onClick={returnToMain} className={styles.backButton}><img src={backImage}/><span>Вернуться к статьям</span></button>
      <ReactionsSet likes={post.likes} dislikes={post.dislikes} toggleDislike={toggleDislike} toggleLike={toggleLike} reaction={post.reaction}/>
    </div>
    <div className={styles.post}>
      <h1 className={styles.title}>{post.title}</h1>
      <img className={styles.image} src={imgSrc}/>
      <p className={styles.body}>{post.body}</p>
    </div>
  </div> );
}

export default Post;
