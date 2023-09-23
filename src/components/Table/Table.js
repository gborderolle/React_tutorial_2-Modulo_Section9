export default function Button(props) {
  return (
    <table className='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearData) => (
          <tr>
            <td>{yearData.year}</td>
            <td>{yearData.savingsEndOfYear}</td>
            <td>{yearData.yearlyInterest}</td>
            <td>
              {yearData.savingsEndOfYear -
                props.currentSavings -
                yearData.yearlyContribution * yearData.year}
            </td>
            <td>
              {props.currentSavings +
                yearData.yearlyContribution * yearData.year}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
