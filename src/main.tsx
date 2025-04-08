import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito&family=Roboto:ital@1&display=swap');
    </style>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>,
)
