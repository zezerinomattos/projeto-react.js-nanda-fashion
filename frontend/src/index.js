import React from 'react';
import ReactDOM from 'react-dom/client';

//Meus inports
import Rotas from './routers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>
);

