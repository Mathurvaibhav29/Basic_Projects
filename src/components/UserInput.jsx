import Buttons from "./Buttons";

function UserInput({ handleChange, enteredValue,labelClass,setEnteredValue }) {
  const inputStyle="bg-cyan-600 border-2 rounded-full border-white"
  return (
    <>
      <div className="bg-cyan-600 p-6 text-xl text-white mt-20 ">
        <label className={labelClass}>
          Amount (INR):
          <input
            className={inputStyle}
            name="Amount"
            type="number"
            value={enteredValue.Amount}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label className={labelClass}>
          Interest(in Percentage) :
          <input
            className={inputStyle}
            name="Interest"
            type="number"
            value={enteredValue.Interest}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label className={labelClass}>
          Duration (in Months):
          <input
            className={inputStyle}
            name="Duration"
            type="number"
            value={enteredValue.Duration}
            onChange={(event) => handleChange(event)}
          />
        </label>
      </div>
      <Buttons enteredValue={enteredValue} setEnteredValue={setEnteredValue}/>
      
    </>
  );
}

export default UserInput;
