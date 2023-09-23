import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  // *******************************************************
  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  // *******************************************************

  return (
    <div>
      <Header class='header' title='Investment Calculator' />
      <Form class='form' onCalculate={calculateHandler} />

      {!userInput && <p>No hay cálculo aún</p>}
      {userInput && (
        <Table
          data={yearlyData}
          currentSavings={userInput['current-savings']}
        />
      )}
    </div>
  );
}

export default App;
