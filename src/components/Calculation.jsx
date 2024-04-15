import React from "react";
function Calculation({ enteredValue ,labelClass}) {
  let Amount = enteredValue.Amount;
  let Interest = enteredValue.Interest;
  let Duration = enteredValue.Duration;
  let durationYears = Duration / 12;
  let receivedInterest = ((Amount * Interest * durationYears) / 100).toFixed(2);
  let receivedAmount = parseFloat(Amount) + parseFloat(receivedInterest);
  const inputStyle="border-2 border-cyan-600 rounded-full";
  return (
    <>
      <div className="bg-gray-300 p-6 text-xl text-cyan-600 mt-8 border rounded-3xl">
        <label className={labelClass}>
          Interest Earned
          <input
            className={inputStyle}
            name="receivedInterest"
            type="number"
            value={receivedInterest}
          />
        </label>
        <label className={labelClass}>
          Received Amount
          <input
            className={inputStyle}
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
