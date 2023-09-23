import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Table from './components/Table/Table';

function App() {
  return (
    <div>
      <Header class='header' title='Investment Calculator' />
      <Form class='form' />
      <Table />
    </div>
  );
}

export default App;
