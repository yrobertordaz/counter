const Buttons = (props) => {
  return (
    <div>
      <button onClick={props.up}>Up</button>
      <button onClick={props.down}>Down</button>
    </div>
  );
};

export default Buttons;
