import React from 'react'
import { Exercise } from '.'
import '../App.css'

const Week = ({ week, press, deadlift, bench, squat, setAppState }) =>
  <div className="week">
    <h2>Week {week}</h2>
    <Exercise name="press" trainingMax={press} week={week} setAppState={setAppState}/>
    <Exercise name="deadlift" trainingMax={deadlift} week={week} setAppState={setAppState}/>
    <Exercise name="bench" trainingMax={bench} week={week} setAppState={setAppState}/>
    <Exercise name="squat" trainingMax={squat} week={week} setAppState={setAppState}/>
  </div>

export default Week