import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/main';
import Post from './pages/post/post';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/:id' element={<Post/>}></Route>
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
