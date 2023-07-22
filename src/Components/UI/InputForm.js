import React, { Fragment } from 'react';
import style from './InputForm.module.css';

const InputForm = React.forwardRef(( props,ref) => {
  return (
    <Fragment>
        <input className={style.input} ref={ref} {...props.input}/>
    </Fragment>
   
  );
});

export default InputForm
