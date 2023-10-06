import { useState, FormEvent } from 'react'
import styles from './search-input.module.css'
import { getPosts } from '../../services/actions/posts';
import { useDispatch } from '../../services/hooks';
import { configureQuery, debounce } from '../../utils';


const SearchInput = () => {
  const [value, setValue] = useState('');
  const [deounceValue, setDebounceValue] = useState(false)
  const dispatch = useDispatch()

  const dispatchDebouncer = debounce(()=>dispatch(getPosts(configureQuery(value))), 100, deounceValue, setDebounceValue)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatchDebouncer()
  }

  const onClick = () => {
    dispatchDebouncer()
  }
  return ( <form className={styles.form} onSubmit={onSubmit}>
    <img onClick={onClick} className={styles.image} src={`${process.env.PUBLIC_URL}/images/ic_search.svg`}/>
    <input placeholder='Поиск по названию статьи' value={value} onChange={(e)=>setValue(e.target.value)} className={styles.input}/>
  </form> );
}

export default SearchInput;
