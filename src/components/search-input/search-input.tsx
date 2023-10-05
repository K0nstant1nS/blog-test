import { useState, FC, FormEvent } from 'react'
import styles from './search-input.module.css'
import { getPosts, getPostsByQuery } from '../../services/actions/posts';
import { useDispatch } from '../../services/hooks';
import { configureQuery } from '../../utils';
const searchImage = require('../../images/ic_search.png')


const SearchInput = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch()

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(getPostsByQuery(configureQuery(value)))
  }

  const onClick = () => {
    dispatch(getPostsByQuery(configureQuery(value)))
  }
  
  return ( <form className={styles.form} onSubmit={onSubmit}>
    <img onClick={onClick} className={styles.image} src={searchImage}/>
    <input placeholder='Поиск по названию статьи' value={value} onChange={(e)=>setValue(e.target.value)} className={styles.input}/>
  </form> );
}

export default SearchInput;
