import React from 'react'

const TrainingMax = ({ name, week, trainingMax, setAppState }) => {
  function getValue() {
    if (isNaN(trainingMax)) return ''
    return trainingMax !== 0 ? trainingMax : ''
  }
  
  if (week !== 'I') 
    return <div className="training-max-placeholder"/>
  else 
    return <h4 className="training-max-container">
      <input className="training-max" type="text"
        value={getValue()}
        onFocus={(e) => e.target.select() }
        onChange={(e) => {
          const weight = !e.target.value ? 0 : parseInt(e.target.value, 10)
          switch (name) {
            case 'press': setAppState({ press: weight }); break
            case 'deadlift': setAppState({ deadlift: weight }); break
            case 'bench': setAppState({ bench: weight }); break
            case 'squat': setAppState({ squat: weight }); break
            default: break
          }
        }}
      />
    </h4>
}

export default TrainingMax