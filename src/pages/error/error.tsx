import React from 'react';
import styles from './error.module.css'

function ErrorPage() {
  return ( <div className={styles.content}>
    <h1 className={styles.message}>Страница не найдена</h1>
    <img className={styles.image} src={`${process.env.PUBLIC_URL}/images/no-page.gif`}></img>
  </div> );
}

export default ErrorPage;
