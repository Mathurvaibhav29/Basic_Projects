import { useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import Calculation from "./components/Calculation";
const labelClass="flex flex-col";

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
      <div className="bg-cyan-900 min-h-screen flex justify-center items-center">
        {/* Mobile-like box container */}
        <div
          className="bg-cyan-600 shadow-xl rounded-3xl overflow-hidden border border-black "
          style={{ width: "285px", height: "550px" }}
        >
          <UserInput handleChange={handleChange} enteredValue={enteredValue} labelClass={labelClass}/>
          <Calculation enteredValue={enteredValue} labelClass={labelClass} />
        </div>
        
      </div>
    </>
  );
}

export default App;
