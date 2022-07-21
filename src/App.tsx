import React from 'react';
import './styles/App.css';
import { Routes, Route } from "react-router-dom"
import { Top } from './pages/Top' 
import { Post } from './pages/Post';
import { Detail } from './pages/Detail';
import { NotFound } from './pages/NotFound';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Error } from "./pages/Error"

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content-area'>
        <Routes>
          <Route path="/" element={<Top />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="/article/:id" element={<Detail />}></Route>
          <Route path='/error' element={<Error/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
