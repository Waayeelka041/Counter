import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './components/Counter'
import Header from './components/Header'
import './index.css'
const root=document.querySelector("#root")
ReactDOM.createRoot(root).render(
 <div>
  <Header/>
  <Counter/>
 </div>
)
