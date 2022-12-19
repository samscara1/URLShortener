import React from "react";
import Style from './style.module.scss'

export const Button = () => {
  let message = 'hi there'
  return <button className={Style.button}>{message}</button>
}