import React from 'react'

function roundDown(weight) {
  if (isNaN(weight)) return 0
  const lastDigit = weight.toString().slice(-1)
  if (lastDigit === '0' || lastDigit === '5') 
    return weight
  else 
    return roundDown(weight - 1)
}

const Weight = ({ week, trainingMax }) =>
  <div className="column">
    <div className="column-title">Weight</div>
    <div className="weight">{
      week === 'I'   ? roundDown(Math.floor(trainingMax * .65)) :
      week === 'II'  ? roundDown(Math.floor(trainingMax * .70)) :
      week === 'III' ? roundDown(Math.floor(trainingMax * .75)) :
                       roundDown(Math.floor(trainingMax * .40))
    }</div>
    <div className="weight">{
      week === 'I'   ? roundDown(Math.floor(trainingMax * .75)) :
      week === 'II'  ? roundDown(Math.floor(trainingMax * .80)) :
      week === 'III' ? roundDown(Math.floor(trainingMax * .85)) :
                       roundDown(Math.floor(trainingMax * .50))
    }</div>
    <div className="weight">{
      week === 'I'   ? roundDown(Math.floor(trainingMax * .85)) :
      week === 'II'  ? roundDown(Math.floor(trainingMax * .90)) :
      week === 'III' ? roundDown(Math.floor(trainingMax * .95)) :
                       roundDown(Math.floor(trainingMax * .60))
    }</div>
  </div>

export default Weight