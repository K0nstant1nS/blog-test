import { FC } from 'react'
import styles from './loader.module.css'

type TLoaderProps = {
  small?: boolean
}

const Loader:FC<TLoaderProps> = ({small = false}) => {
  return ( 
    <div className={`${styles.container}`}>
      <img className={`${styles.image} ${small && styles.small}`} src={`${process.env.PUBLIC_URL}/images/loader.webp`}alt='Загрузка'></img> 
    </div>
  );
}

export default Loader;
