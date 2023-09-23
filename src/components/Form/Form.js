import Card from '../Form/Card';
import Button from '../Form/Button';
import { useState } from 'react';

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
        [input]: value, // guarda el value en el ítem "input"
      };
    }); // prevInputs: valores anteriores
  };

  const resetHandler = () => {
    setUserInputs(initialUserInput);
  };

  const calculateHandler = (userInput) => {
    userInput.preventDefault(); // Evita enviar el request y el reload del form

    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
  };

  return (
    <form className={props.class} onSubmit={calculateHandler}>
      <div className='input-group'>
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
      <div className='input-group'>
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
      <p className='actions'>
        <Button
          type='button'
          class='buttonAlt'
          text='Reset'
          event={resetHandler}
        />
        <Button type='submit' class='button' text='Calculate' />
      </p>
    </form>
  );
}
