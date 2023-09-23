export default function Card(props) {
  return (
    <p>
      <label htmlFor={props.inputId}>{props.labelText}</label>
      <input
        type={props.inputType}
        id={props.inputId}
        onChange={props.event}
        value={props.value}
      />
    </p>
  );
}
