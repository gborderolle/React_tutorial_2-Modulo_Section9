import logo from '../../assets/investment-calculator-logo.png';

export default function Header(props) {
  return (
    <>
      <header className={props.class}>
        <img src={logo} alt='logo' />
        <h1>{props.title}</h1>
      </header>
    </>
  );
}
