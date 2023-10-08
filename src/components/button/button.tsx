import React, { FC } from 'react'
import styles from './button.module.css'

type TButtonProps = {
  text?: string,
  onClick?: ()=>void
}

const Button: FC<TButtonProps> = ({text, onClick}) => {
  return ( <button onClick={onClick} className={styles.button}>{text}</button> );
}

export default Button;
