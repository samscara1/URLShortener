import React from "react";
import ReactDOM from "react-dom";
import Style from './style.module.scss'

const App = () => {
  let num = 'ha-ha'
  return(
    <h1 className={Style.container}>Hello World {num}</h1>
  )
}

const root = document.getElementById('root')
ReactDOM.render(<App/>, root)