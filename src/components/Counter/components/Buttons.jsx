const Buttons = (props) => {
  return (
    <div className = "container"> 
        <button className = "btn" onClick={props.up}>Up</button>
        <button className = "btn" onClick={props.down}>Down</button>
    </div>
  );
};

export default Buttons;


