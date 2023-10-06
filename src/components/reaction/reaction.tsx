import { FC } from 'react'
import styles from './reaction.module.css'

type TReactionProps = {
  type: 'like' | 'dislike',
  num: number,
  isActive: boolean,
  onClick: () => void
}

const Reaction: FC<TReactionProps> = ({type, num, isActive, onClick}) => {
  const images = {
    'like': `${process.env.PUBLIC_URL}/images/ThumbUpAlt.svg`,
    'dislike': `${process.env.PUBLIC_URL}/images/ThumbDownAlt.svg`, 
    'like-active': `${process.env.PUBLIC_URL}/images/ThumbUpAltActive.svg`,
    'dislike-active': `${process.env.PUBLIC_URL}/images/ThumbDownAltActive.svg`
  }
  const image =  isActive ? images[`${type}-active`] : images[type];
  return ( <div className={styles.set}>
    <img onClick={onClick} className={styles.image} src={image}></img>
    <p className={styles.counter}>{num}</p>
  </div> );
}

export default Reaction;
