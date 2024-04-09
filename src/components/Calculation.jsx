import React from 'react'
function Calculation({enteredValue}) {

  let Amount=enteredValue.Amount;
  let Interest=enteredValue.Interest;
  let Duration=enteredValue.Duration;
  let durationYears=Duration/12;
  let receivedInterest=((Amount*Interest*durationYears)/100).toFixed(2)
  let receivedAmount=parseFloat(Amount)+parseFloat(receivedInterest)
  
  return (   
<>
<div>
<label>
    Interest Earned 
    <input name="receivedInterest" type="number" value={receivedInterest}/>
  </label>
  <label>
    Received Amount 
    <input name="receivedAmount" type="number" value={receivedAmount}/>
  </label>
</div>

</>
  )
}

export default Calculation
