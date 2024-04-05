import React, { useState } from "react";
;
function UserInput() {
 const[enteredValue,setEnteredValue]= useState({
  Amount:'15000',
  Interest:'8.2%',
  Duration:'12'
 })
 function handleChange(event) {
  const { name, value } = event.target;
  setEnteredValue(prevState => ({
    ...prevState,
    [name]: value
  }));
}

  return (
    <>
      <div className="">
        <label>
          Amount (INR):
          <input name="Amount" value={enteredValue.Amount} onChange={(event)=>handleChange(event)}/>
        </label>
        <label>
          Interest(in Percentage) :
          <input name="Interest" value={enteredValue.Interest} onChange={(event)=>handleChange(event)}/>
        </label>
        <label>
          Duration (in Months):
          <input name="Duration" value={enteredValue.Duration} onChange={(event)=>handleChange(event)}/>
        </label>
      </div>
    </>
  );
}

export default UserInput;
