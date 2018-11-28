import React from 'react'

const Reps = ({ week }) =>
  <div className="column">
    <div className="column-title">Reps</div>
    <div className="reps">{week === 'II' ? 3 : 5}</div>
    <div className="reps">{week === 'I' || week === 'IV' ? 5 : 3}</div>
    <div className="reps">{week === 'I' || week === 'IV' ? 5 : week === 'II' ? 3 : 1}</div>
  </div>

export default Reps