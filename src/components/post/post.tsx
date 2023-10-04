import { FC } from 'react'
import styles from './post.module.css'
import Reaction from '../reaction/reaction'
import Button from '../button/button'

type TPostProps = {
  title: string,
  body: string,
  likes: string,
  dislikes: string,
  reaction: null|'like'|'dislike',
  size?: 'small' | 'big'
}

const Post: FC<TPostProps> = ({title, body, likes, dislikes, reaction, size = 'small'}) => {
  const imgSrc = `https://placehold.co/600x400?text=${title}`
  return ( <article className={styles.post}>
    <img src={imgSrc}/>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.bottom}>
      <div className={styles.reaction}>
        <Reaction type='like' num={likes} isActive={reaction === 'like'}></Reaction>
        <Reaction type='dislike' num={dislikes} isActive={reaction === 'dislike'}></Reaction>
      </div>
      <Button text='Читать далее'></Button>
    </div>
  </article> );
}

export default Post;
