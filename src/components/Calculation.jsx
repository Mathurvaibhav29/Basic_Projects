import React from 'react'
function Calculation({enteredValue}) {

  let Amount=enteredValue.Amount;
  let Interest=enteredValue.Interest;
  let Duration=enteredValue.Duration;
  let durationYears=Duration/12;
  let receivedInterest=((Amount*Interest*durationYears)/100).toFixed(2)
  let receivedAmount=parseFloat(Amount)+parseFloat(receivedInterest)
  console.log("Interest here is" + " "+receivedInterest+" "+"And received amount is" + " "+receivedAmount)
  
  
  return (   
<>

</>
  )
}

export default Calculation
