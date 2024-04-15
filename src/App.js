import { useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import Calculation from "./components/Calculation";

function App() {
  const [enteredValue, setEnteredValue] = useState({
    Amount: 15000,
    Interest: 8.2,
    Duration: 12,
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setEnteredValue((prevState) => ({
      ...prevState,
      [name]: +value,
    }));
  }
  return (
    <>
      <div className="bg-cyan-900 min-h-screen">
        <div className=" grid justify-center items-center">
          <UserInput handleChange={handleChange} enteredValue={enteredValue} />
          <Calculation enteredValue={enteredValue} />
        </div>
      </div>
    </>
  );
}

export default App;
