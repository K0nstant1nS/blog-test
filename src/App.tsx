import React, { useEffect } from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/main';
import Post from './pages/post/post';
import { useDispatch, useSelector } from './services/hooks';
import { getPosts } from './services/actions/posts';
import { getPostsSelector } from './utils';
import Loader from './components/loader/loader';
import Error from './components/error/error';
import ErrorPage from './pages/error/error';
import { postsActions } from './services/reducers/posts';
import { getRandom } from './utils';
import { TPost } from './utils/types';

function App() {
  const dispatch = useDispatch()
  const posts = useSelector(getPostsSelector)
  useEffect(()=>{
    dispatch(getPosts(""))
  }, [dispatch])

  useEffect(()=>{
    dispatch(postsActions.setRating(posts.data.map((item: TPost) => {
      return {id: item.id, likes: getRandom(0, 50), dislikes: getRandom(0, 50), reaction: null}
    })))
  }, [posts.status])



  const render = () => {
    switch(posts.status){
      case 'load': {
        return <div className='handler'><Loader /></div>
      }
      case 'success': {
        return (
          <HashRouter>
          <div className="App">
            <Routes>
              <Route path='/' element={<Main/>}></Route>
              <Route path='/:id' element={<Post/>}></Route>
              <Route path='*' element={<ErrorPage/>}></Route>
            </Routes>
          </div>
          </HashRouter>
        );
      }
      case 'error': {
        return <div className='handler'><Error/></div>
      }
      default: {
        return <></>
      }
    }
  }
  return render()
}

export default App;
