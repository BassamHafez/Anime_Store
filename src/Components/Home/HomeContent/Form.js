import React,{useRef ,useState} from 'react';
import InputForm from '../../UI/InputForm';
import Button from '../../UI/Button';
import style from './Form.module.css';

const Form = (props) => {

const submitHandler =(e)=>
{
  e.preventDefault();
  const enteredValue =inputValueRef.current.value;
  const enteredValueNumber =+enteredValue;

  props.onAddToCard(enteredValueNumber);
}

const inputValueRef = useRef();

  return (

    <form className={style.form} onSubmit={submitHandler}>
        <InputForm 
        ref={inputValueRef}
        input={{
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
