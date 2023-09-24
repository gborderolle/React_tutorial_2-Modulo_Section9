import Card from '../Form/Card';
import Button from '../Form/Button';
import { useState } from 'react';

import classes from './Form.module.css'

export default function Form(props) {
  const initialUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10,
  };

  const [userInputs, setUserInputs] = useState(initialUserInput);

  const inputChangeHandler = (input, value) => {
    // Manejo de user inputs del formulario
    // Clase 116: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/38348538#search
    setUserInputs((prevInputs) => {
      return {
        ...prevInputs,
        [input]: +value, // guarda el value en el ítem "input"
        // + convierte string a number
      };
    }); // prevInputs: valores anteriores
  };

  const resetHandler = () => {
    setUserInputs(initialUserInput);
  };

  const submitHandler = (userInput) => {
    userInput.preventDefault(); // Evita enviar el request y el reload del form
    props.onCalculate(userInputs);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes['input-group']}>
        <Card
          inputId='current-savings'
          inputType='number'
          labelText='Current Savings ($)'
          event={(evt) =>
            inputChangeHandler('current-savings', evt.target.value)
          } // input y value (en orden)
          value={userInputs['current-savings']} // setea los valores iniciales
        />
        <Card
          inputId='yearly-contribution'
          inputType='number'
          labelText='Yearly Savings ($)'
          event={(evt) =>
            inputChangeHandler('yearly-contribution', evt.target.value)
          } // input y value (en orden)
          value={userInputs['yearly-contribution']} // setea los valores iniciales
        />
      </div>
      <div className={classes['input-group']}>
        <Card
          inputId='expected-return'
          inputType='number'
          labelText='Expected Interest (%, per year)'
          event={(evt) =>
            inputChangeHandler('expected-return', evt.target.value)
          } // input y value (en orden)
          value={userInputs['expected-return']} // setea los valores iniciales
        />
        <Card
          inputId='duration'
          inputType='number'
          labelText='Investment Duration (years)'
          event={(evt) => inputChangeHandler('duration', evt.target.value)} // input y value (en orden)
          value={userInputs['duration']} // setea los valores iniciales
        />
      </div>
      <p className={classes.actions}>
        <Button
          type='button'
          class={classes.buttonAlt}
          text='Reset'
          event={resetHandler}
        />
        <Button type='submit' class={classes.button} text='Calculate' />
      </p>
    </form>
  );
}
