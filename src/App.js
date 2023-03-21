import Buttons from "./COMPONENTS/Buttons/Buttons";
import InputGroup from "./COMPONENTS/Input-group/InputGroup";

function App() {
  return (
    <div style={{
      width:"50%",
      margin:"2rem auto",
      backgroundColor:"#fff",
      padding:"2rem"
      }}>

      <div style={{
        textAlign:"center",
        display:"flex",
        flexDirection:"column",
        gap:"0.5rem",
        }}>
        <h3 style={{
          fontFamily:"arial",
          fontSize:"2rem",
          color:"#222",

      }}>SignIn</h3>

        <p style={{
          fontFamily:"arial",
          fontSize:"1rem",
          color:"#666"
        }}>Lorem ipsum dolor sit amet</p>
      </div>

      <form >
        <InputGroup lable='What your name' type="text"/>
        <InputGroup lable="What your email" type="email"/>
        <InputGroup lable="What your password" type="password"/>
        <div>
        <Buttons value="Reset" type="reset"/>
        <Buttons value="Submit" type="submit"/>
        </div>
      </form>
    </div>
  );
}

export default App;

// -------when should to deside creating a new component?----

// 1. when we need to write dublicate code;
// 2. Which data are diffirent;

