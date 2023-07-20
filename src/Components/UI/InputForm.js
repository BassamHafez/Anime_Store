import React, { Fragment } from 'react';
import style from './InputForm.module.css';

const InputForm = ( props) => {
  return (
    <Fragment>
        <input className={style.input} {...props.input}/>
    </Fragment>
   
  )
}

export default InputForm
