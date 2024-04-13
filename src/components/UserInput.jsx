function UserInput({ handleChange, enteredValue }) {
  return (
    <>
      <div className="bg-cyan-600 p-6 text-xl text-white ">
        <label className="flex flex-col">
          Amount (INR):
          <input
            className="bg-cyan-600 border-2 rounded-full border-white"
            name="Amount"
            type="number"
            value={enteredValue.Amount}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label className="flex flex-col">
          Interest(in Percentage) :
          <input
            className="bg-cyan-600 border-2 rounded-full border-white "
            name="Interest"
            type="number"
            value={enteredValue.Interest}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label className="flex flex-col">
          Duration (in Months):
          <input
            className="bg-cyan-600 border-2 rounded-full border-white"
            name="Duration"
            type="number"
            value={enteredValue.Duration}
            onChange={(event) => handleChange(event)}
          />
        </label>
      </div>
    </>
  );
}

export default UserInput;
