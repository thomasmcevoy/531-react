import React from 'react'
import { TrainingMax, Workout } from './'
import '../App.css'

const Exercise = ({ name, trainingMax, week, setAppState }) =>
  <div className="exercise">
    <div className="exercise-header">
      <h3>{name}</h3>
      <TrainingMax name={name} trainingMax={trainingMax} week={week} setAppState={setAppState}/>
    </div>
    <Workout week={week} trainingMax={trainingMax}/>
  </div>

export default Exercise