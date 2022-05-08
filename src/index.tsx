import React from 'react'
import ReactDOM from "react-dom/client"
import './index.scss'
import { AppInit } from './views/AppInit'
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <AppInit />
  </BrowserRouter>
)
