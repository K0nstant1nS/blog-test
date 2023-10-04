import styles from './error.module.css';
const image = require('../../images/sadCat.gif');

function Error() {
  return ( <div>
    <div className={styles.content}>
      <h1>Запрос не дал результатов =(</h1>
      <img className={styles.image} src={image} alt='Очень грустный котик'></img>
    </div>
  </div> );
}

export default Error;
