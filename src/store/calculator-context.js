import React, { useReducer, createContext } from "react";

//Calculator Context
export const CalculatorContext = createContext({
    value: 0,
    evaluate: () => { },
    reset: () => { },
    input: () => { },
    darkmode: false,
});

//Default Calculator State
const defaultCalculatorState = {
    value: 0,
    darkmode: true
};

//The Reducer Function
const calculatorReducer = (state, action) => {
    //Value of the input
    if (action.type === 'INPUT') {
        let updatedValue = action.input || 0;
        let updatedMode = state.darkmode;
        return {
            value: updatedValue,
            darkmode: updatedMode,
        }
    }
    // Evaluate the expression
    else if (action.type === 'EVALUATE') {
        try {
            let evaluatedValue = eval(state.value);
            let updatedMode = state.darkmode;
            return {
                value: evaluatedValue,
                darkmode: updatedMode,
            }
        } catch (e) {
            let errorValue = 'Error';
            let updatedMode = state.darkmode;
            return {
                value: errorValue,
                darkmode: updatedMode,
            }
        }

    }
    // Theme Changing Function
    else if (action.type === 'THEME') {
        let updatedMode = !state.darkmode;
        let updatedValue = state.value;
        return {
            darkmode: updatedMode,
            value: updatedValue,
        }
    }
};

const CalculatorProvider = (props) => {
    const [calculatorState, dispatchCalculatorAction] = useReducer(calculatorReducer, defaultCalculatorState);

    const inputHandler = (input) => {
        dispatchCalculatorAction({ type: 'INPUT', input })
    };

    const evaluateHandler = () => {
        dispatchCalculatorAction({ type: 'EVALUATE' })
    };

    const themehandler = () => {
        dispatchCalculatorAction({ type: 'THEME' })
    };

    //Context Value
    const contextValue = {
        value: calculatorState.value,
        darkmode: calculatorState.darkmode,
        evaluate: evaluateHandler,
        input: inputHandler,
        theme: themehandler,
        disabled: calculatorState.value.length === 15 || calculatorState.value.toString().length === 15
    };

    return (
        <CalculatorContext.Provider value={contextValue}>
            {props.children}
        </CalculatorContext.Provider>
    )
};


export default CalculatorProvider;