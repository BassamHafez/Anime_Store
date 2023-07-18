import React from 'react'
import style from './Button.module.css'
const Button = (props) => {
  return (
    <button className={style.main_btn}>{props.name}</button>
  )
}

export default Button
