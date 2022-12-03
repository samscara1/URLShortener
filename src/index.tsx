import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  let num = 2
  num = 'string'
  return(
    <h1>Hello World {num}</h1>
  )
}

const root = document.getElementById('root')
ReactDOM.render(<App/>, root)