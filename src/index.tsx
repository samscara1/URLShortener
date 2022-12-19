import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./components/Button";
import Style from './style.module.scss'

export const App = () => {
  const num = process.env.NODE_ENV
  return(
    <>
      <h1 className={Style.container}>Hello World {num}</h1>
      <Button />
    </>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);