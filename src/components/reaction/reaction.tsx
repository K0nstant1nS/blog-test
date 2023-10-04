import { FC } from 'react'
import styles from './reaction.module.css'
const likeImage = require('../../images/ThumbUpAlt.png')
const likeImageActive = require('../../images/ThumbUpAltActive.png')
const dislikeImage = require('../../images/ThumbDownAlt.png')
const dislikeImageActive = require('../../images/ThumbDownAlt.png')

type TReactionProps = {
  type: 'like' | 'dislike',
  num: string,
  isActive: boolean
}

const Reaction: FC<TReactionProps> = ({type, num, isActive}) => {
  const images = {
    'like': likeImage,
    'dislike': dislikeImage,
    'like-active': likeImageActive,
    'dislike-active': dislikeImageActive
  }
  const image =  isActive ? images[`${type}-active`] : images[type];
  return ( <div className={styles.set}>
    <img className={styles.image} src={image}></img>
    <p>{num}</p>
  </div> );
}

export default Reaction;
