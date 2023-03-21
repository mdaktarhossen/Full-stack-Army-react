const Buttons = (props) => {
  const value=props.value;
  const type=props.type;
  return (
    <div>
      <div>
          <button type={type} style={{border:"none", padding:"1rem 2rem", fontSize:"0.9rem", textTransform:"uppercase", letterSpacing:"1px",}}>{value}</button>
        </div>
    </div>
  );
};

export default Buttons;