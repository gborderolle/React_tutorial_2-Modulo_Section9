export default function Button(props) {
  return (
    <button type={props.type} className={props.class} onClick={props.event}>
      {props.text}
    </button>
  );
}
