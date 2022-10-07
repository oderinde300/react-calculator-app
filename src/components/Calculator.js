import { useContext } from 'react';
import { HiOutlineLightBulb } from 'react-icons/hi'
import { MdDarkMode } from 'react-icons/md'
import classes from './Calculator.module.css';
import CalculatorBtns from './CalculatorBtns';
import { CalculatorContext } from '../store/calculator-context';

const Calculator = () => {
    const calculatorCtx = useContext(CalculatorContext);

    const themeHandler = () => {
        calculatorCtx.theme()
    };

    return (
        <>
            <div className={`${classes['calculator']} ${calculatorCtx.darkmode && classes.dark}`}>
                <div className={classes['calculator-body']}>
                    <div className={classes['calculator-header']}>
                        <h3>Calc</h3>
                        <h3 className={classes['calculator-header-theme']} onClick={themeHandler}>
                            {calculatorCtx.darkmode ?
                                <span className={classes['calculator-theme']}>
                                    <span className={classes['calculator-theme-text']}>
                                        Light Mode</span> <HiOutlineLightBulb size={25} /></span> :
                                <span className={classes['calculator-theme']}>
                                    <span className={classes['calculator-theme-text']}>
                                        Dark Mode</span> <MdDarkMode size={25} /></span>}
                        </h3>
                    </div>
                    <div className={`${classes['calculator-screen']} ${calculatorCtx.darkmode && classes.dark}`}>
                        <span className={classes['calculator-output']}>{calculatorCtx.value}</span>
                    </div>
                    <CalculatorBtns />
                </div>
            </div>
        </>
    )
};

export default Calculator;
