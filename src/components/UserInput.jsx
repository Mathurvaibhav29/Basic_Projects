import React, { useState } from "react";

function UserInput() {
 const[enteredValue,setEnteredValue]= useState({
  Amount:15000,
  Interest:8.2,
  Duration:12
 })
 function handleChange(event) {
  const { name, value } = event.target;
  setEnteredValue(prevState => ({
    ...prevState,
    [name]: +value
  }));
  console.log(name+" "+value);
  
}

  return (
    <>
      <div className="">
        <label>
          Amount (INR):
          <input name="Amount" type="number" value={enteredValue.Amount} onChange={(event)=>handleChange(event)}/>
        </label>
        <label>
          Interest(in Percentage) :
          <input name="Interest" type="number" value={enteredValue.Interest} onChange={(event)=>handleChange(event)}/>
        </label>
        <label>
          Duration (in Months):
          <input name="Duration" type="number" value={enteredValue.Duration} onChange={(event)=>handleChange(event)}/>
        </label>
      
      </div>
    </>
  );
}

export default UserInput;
