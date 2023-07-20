import React from 'react';
import InputForm from '../../UI/InputForm';
import Button from '../../UI/Button';
import style from './Form.module.css';

const Form = (props) => {
  return (

    <form className={style.form}>
        <InputForm input={{
            id:'Amount_'+props.productId,
            type:'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',             
        }}/>
        <Button name='ADD TO CARD'/>
</form>
  )
}

export default Form
