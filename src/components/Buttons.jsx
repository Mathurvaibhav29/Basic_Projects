import React from "react";

function Buttons({ enteredValue, setEnteredValue }) {
  function resetValue() {
    setEnteredValue(
      (enteredValue = {
        Amount: '',
        Interest:'',
        Duration: '',
      })
    );
  }
  return (
    <div className={{ width: "284px" }}>
      <button
        className="bg-cyan-600 text-white hover:bg-white hover:text-cyan-600 font-bold py-2 px-4 rounded-full ml-1 mr-9 border border-white "
        style={{ width: "100px" }}
      >
        Calculate
      </button>
      <button
        onClick={resetValue}
        className="bg-cyan-600 text-white hover:bg-white hover:text-cyan-600 font-bold py-2 px-4 rounded-full ml-9 mr-1   border border-white"
        style={{ width: "100px" }}
      >
        Reset
      </button>
    </div>
  );
}

export default Buttons;
