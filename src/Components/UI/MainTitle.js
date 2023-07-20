import React from 'react'
import style from './MainTitle.module.css'
const MainTitle = (props) => {
  return (
    <h2 className={`${style.main_title} my-3 ms-2`}>{props.name}</h2>
  )
}

export default MainTitle
