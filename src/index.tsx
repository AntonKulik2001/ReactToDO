import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss';
import './assets/scss/normalize.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { Header } from './components/Header/Header';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <ToDoListPage />
  </React.StrictMode>
);

