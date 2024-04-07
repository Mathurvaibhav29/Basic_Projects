function UserInput({handleChange, enteredValue}) {
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
