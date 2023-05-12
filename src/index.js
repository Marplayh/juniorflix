import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/App';
import reportWebVitals from './reportWebVitals';
import CadastroVideo from './pages/cadastro/Video';
import Page404 from './pages/Page404';

import CadastroCategoria from './pages/cadastro/Categoria';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home} exact />
      <Route path="/cadastro/video" Component={CadastroVideo} />
      <Route path="/cadastro/categoria" Component={CadastroCategoria} />
      <Route path="*" Component={Page404} />
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
