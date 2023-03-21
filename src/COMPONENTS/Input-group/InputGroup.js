const InputGroup = (props) => {
  const lable=props.lable;
  const type=props.type;
  return (
    <div>
      <div style={{
        display:"flex",
        flexDirection:"column",
        gap:"0.5rem",
        marginBottom:"1rem",
      }}>
          <label style={{
          fontFamily:"arial",
          fontSize:"1rem",
          color:"#424242",
          fontWeight:"bold",
        }} htmlFor="name">{lable} </label>
          <input type={type} id="name" style={{
            padding:"0.5rem 1rem",
            outline:"none",
            border:"1px solid #ddd",
            borderRadius:"0.15rem",
            fontFamily:"arial",
            fontSize:"0.9rem",
            color:"#666"

          }} />
        </div>
    </div>
  );
};

export default InputGroup;