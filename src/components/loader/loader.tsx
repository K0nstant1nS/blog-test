import { FC } from 'react'
import styles from './loader.module.css'
const image = require('../../images/loader.webp')

type TLoaderProps = {
  small?: boolean
}

const Loader:FC<TLoaderProps> = ({small = false}) => {
  return ( 
    <div className={`${styles.container}`}>
      <img className={`${styles.image} ${small && styles.small}`} src={image} alt='Загрузка'></img> 
    </div>
  );
}

export default Loader;
