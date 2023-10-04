import { FC } from 'react'
import styles from './reactions-set.module.css'
import Reaction from '../reaction/reaction';

type TReactionsSetProps = {
  likes: string,
  dislikes: string,
  toggleLike: () => void,
  toggleDislike: () => void
  reaction: 'like' | 'dislike' | null
}

const ReactionsSet: FC<TReactionsSetProps> = ({likes, dislikes, toggleLike, toggleDislike, reaction}) => {
  return ( 
    <div className={styles.reaction}>
      <Reaction onClick={toggleLike} type='like' num={likes} isActive={reaction === 'like'}></Reaction>
      <Reaction onClick={toggleDislike} type='dislike' num={dislikes} isActive={reaction === 'dislike'}></Reaction>
    </div>
   );
}

export default ReactionsSet;
