import styles from './error.module.css'
const image = require('../../images/no-page.gif')

function ErrorPage() {
  return ( <div className={styles.content}>
    <h1 className={styles.message}>Страница не найдена</h1>
    <img className={styles.image} src={image}></img>
  </div> );
}

export default ErrorPage;
