import React from 'react';
import styles from './error.module.css';

function Error() {
  return ( <div>
    <div className={styles.content}>
      <h1>Запрос не дал результатов =(</h1>
      <img className={styles.image} src={`${process.env.PUBLIC_URL}/images/sadCat.gif`} alt='Очень грустный котик'></img>
    </div>
  </div> );
}

export default Error;
