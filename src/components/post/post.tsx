import { FC } from 'react'
import styles from './post.module.css'
import Reaction from '../reaction/reaction'
import Button from '../button/button'
import { useDispatch } from '../../services/hooks'
import { TOGGLE_DISLIKE, TOGGLE_LIKE } from '../../services/actions/posts'
import { useNavigate } from 'react-router-dom'
import ReactionsSet from '../reactions-set/reactions-set'

type TPostProps = {
  id: string,
  title: string,
  body: string,
  likes: string,
  dislikes: string,
  reaction: null|'like'|'dislike',
  size?: 'small' | 'big'
}

const Post: FC<TPostProps> = ({id, title, body, likes, dislikes, reaction, size = 'small'}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imgSrc = `https://placehold.co/600x400?text=${title}`
  const toggleDislike = () => {
    dispatch({
      type: TOGGLE_DISLIKE,
      payload: id
    })
  }

  const toggleLike = () => {
    dispatch({
      type: TOGGLE_LIKE,
      payload: id
    })
  }

  const navigateToPost = () => {
    navigate(`/${id}`)
  }

  const render = () => {
    switch(size){
      case 'small': {
        return ( <article className={styles.post}>
          <img className={styles.image} src={imgSrc}/>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.bottom}>
            <div className={styles.reaction}>
              <Reaction onClick={toggleLike} type='like' num={likes} isActive={reaction === 'like'}></Reaction>
              <Reaction onClick={toggleDislike} type='dislike' num={dislikes} isActive={reaction === 'dislike'}></Reaction>
            </div>
            <Button onClick={navigateToPost} text='Читать далее'></Button>
          </div>
        </article> )
      }
      case 'big': {
        return ( <article className={styles.post}>
          <img className={styles.image} src={imgSrc}/>
          <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
            <ReactionsSet likes={likes} dislikes={dislikes} toggleDislike={toggleDislike} toggleLike={toggleLike} reaction={reaction}/>
          </div>
          <p className={styles.body}>{body}</p>
          <div className={`${styles.bottom} ${styles['bottom-big']}`}>
            <Button onClick={navigateToPost} text='Читать далее'></Button>
          </div>
        </article> )
      }
    }
  }

  return render();
}

export default Post;
