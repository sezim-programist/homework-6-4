import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PostList from './App';
import InputExample from './input';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InputExample/>
    <PostList/>
  </React.StrictMode>
);

