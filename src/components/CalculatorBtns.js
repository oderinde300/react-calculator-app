import React, { useContext } from 'react';
import classes from './CalculatorBtns.module.css';
import { FiDelete, FiDivide } from 'react-icons/fi'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { FaTimes, FaEquals } from 'react-icons/fa'
import { CalculatorContext } from '../store/calculator-context'

//The Array of Input Buttons Values
let inputValue = [];

const CalculatorBtns = () => {
  const calculatorCtx = useContext(CalculatorContext);

  const handleInput = (value) => {
    if (inputValue.length < 15) {
      inputValue.push(value);
      calculatorCtx.input(inputValue.join(''));
    }
  };

  const deleteHandler = () => {
    inputValue.pop();
    calculatorCtx.input(inputValue.join(''));
  };

  const evaluateHandler = () => {
    calculatorCtx.evaluate();
  };

  const resetHandler = () => {
    while (inputValue.length > 0) {
      inputValue.pop()
    }
    calculatorCtx.input(inputValue.join(''));
  };

  return (
    <section className={`${classes['calculator-btns-body']} ${calculatorCtx.darkmode && classes.dark}`}>
      <div>
        <div className={`${classes['calculator-btns']} ${calculatorCtx.darkmode && classes.dark}`}>
          <div className={`${classes['calculator-btn']} ${calculatorCtx.darkmode && classes.dark}
          ${calculatorCtx.disabled && classes.disabled}`}
            onClick={() => { handleInput(7) }} >7</div>
          <div className={`${classes['calculator-btn']} ${calculatorCtx.darkmode && classes.dark}
          ${calculatorCtx.disabled && classes.disabled}`}
            onClick={() => { handleInput(8) }} >8</div>
          <div className={`${classes['calculator-btn']} ${calculatorCtx.darkmode && classes.dark}
          ${calculatorCtx.disabled && classes.disabled}`}
            onClick={() => { handleInput(9) }} >9</div>
          <div className={`${classes['calculator-btn-del']} ${calculatorCtx.darkmode && classes.dark}
          ${calculatorCtx.disabled && classes.disabled}`}
            onClick={deleteHandler} ><FiDelete size={25} /></div>
          <div className={`${classes['calculator-btn']} ${calculatorCtx.darkmode && classes.dark}
          ${calculatorCtx.disabled && classes.disabled}`}
            onClick={() => { handleInput(4) }} >4</div>
          <div className={`${classes['calculator-btn']} ${calculatorCtx.darkmode && classes.dark}
          ${calculatorCtx.disabled && classes.disabled}`}
            onClick={() => { handleInput(5) }} >5</div>
          <div className={`${classes['calculator-btn']} ${calculatorCtx.darkmode && classes.dark}
          ${calculatorCtx.disabled && classes.disabled}`}
            onClick={() => { handleInput(6) }} >6</div>
          <div className={`${classes['calculator-btn']} ${calculatorCtx.darkmode && classes.dark}
          ${calculatorCtx.disabled && classes.disabled}`}
            onClick={() => { handleInput('+') }} ><AiOutlinePlus /></div>
          <div className={`${classes['calculator-btn']} ${calculatorCtx.darkmode && classes.dark}
          ${calculatorCtx.disabled && classes.disabled}`}
            onClick={() => { handleInput(1) }} >1</div>
          <div className={`${classes['calculator-btn']} ${calculatorCtx.darkmode && classes.dark}
          ${calculatorCtx.disabled && classes.disabled}`}
            onClick={() => { handleInput(2) }} >2</div>
          <div className={`${classes['calculator-btn']} ${calculatorCtx.darkmode && classes.dark}
          ${calculatorCtx.disabled && classes.disabled}`}
            onClick={() => { handleInput(3) }} >3</div>
          <div className={`${classes['calculator-btn']} ${calculatorCtx.darkmode && classes.dark}
          ${calculatorCtx.disabled && classes.disabled}`}
            onClick={() => { handleInput('-') }} ><AiOutlineMinus /></div>
          <div className={`${classes['calculator-btn']} ${calculatorCtx.darkmode && classes.dark}
          ${calculatorCtx.disabled && classes.disabled}`}
            onClick={() => { handleInput('.') }} >.</div>
          <div className={`${classes['calculator-btn']} ${calculatorCtx.darkmode && classes.dark}
          ${calculatorCtx.disabled && classes.disabled}`}
            onClick={() => { handleInput(0) }} >0</div>
          <div className={`${classes['calculator-btn']} ${calculatorCtx.darkmode && classes.dark}
          ${calculatorCtx.disabled && classes.disabled}`}
            onClick={() => { handleInput('/') }} ><FiDivide /></div>
          <div className={`${classes['calculator-btn']} ${calculatorCtx.darkmode && classes.dark}
          ${calculatorCtx.disabled && classes.disabled}`}
            onClick={() => { handleInput('*') }} ><FaTimes /></div>
        </div>

        <div className={classes['calculator-btns2']}>
          <div className={`${classes['calculator-btn-reset']} ${calculatorCtx.darkmode && classes.dark}`}
            onClick={resetHandler}  >RESET</div>
          <div className={`${classes['calculator-btn-equals']} ${calculatorCtx.darkmode && classes.dark}`}
            onClick={evaluateHandler}  ><FaEquals /></div>
        </div>
      </div>
    </section>
  )
};

export default CalculatorBtns;

