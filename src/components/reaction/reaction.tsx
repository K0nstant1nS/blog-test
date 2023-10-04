import { FC } from 'react'
import styles from './reaction.module.css'
const likeImage = require('../../images/ThumbUpAlt.png')
const likeImageActive = require('../../images/ThumbUpAltActive.png')
const dislikeImage = require('../../images/ThumbDownAlt.png')
const dislikeImageActive = require('../../images/ThumbDownAltActive.png')

type TReactionProps = {
  type: 'like' | 'dislike',
  num: string,
  isActive: boolean,
  onClick: () => void
}

const Reaction: FC<TReactionProps> = ({type, num, isActive, onClick}) => {
  const images = {
    'like': likeImage,
    'dislike': dislikeImage,
    'like-active': likeImageActive,
    'dislike-active': dislikeImageActive
  }
  const image =  isActive ? images[`${type}-active`] : images[type];
  return ( <div className={styles.set}>
    <img onClick={onClick} className={styles.image} src={image}></img>
    <p className={styles.counter}>{num}</p>
  </div> );
}

export default Reaction;
