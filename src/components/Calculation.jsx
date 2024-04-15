import React from "react";
function Calculation({ enteredValue }) {
  let Amount = enteredValue.Amount;
  let Interest = enteredValue.Interest;
  let Duration = enteredValue.Duration;
  let durationYears = Duration / 12;
  let receivedInterest = ((Amount * Interest * durationYears) / 100).toFixed(2);
  let receivedAmount = parseFloat(Amount) + parseFloat(receivedInterest);

  return (
    <>
      <div className="bg-gray-300 p-6 text-xl text-cyan-600 mt-8 border rounded-2xl">
        <label className="flex flex-col  ">
          Interest Earned
          <input
            className="border-2 border-cyan-600 rounded-full"
            name="receivedInterest"
            type="number"
            value={receivedInterest}
          />
        </label>
        <label className="flex flex-col">
          Received Amount
          <input
            className="border-2 border-cyan-600 rounded-full"
            name="receivedAmount"
            type="number"
            value={receivedAmount}
          />
        </label>
      </div>
    </>
  );
}

export default Calculation;
