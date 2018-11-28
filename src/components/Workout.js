import React from 'react'
import { Reps, Weight } from '.'
import '../App.css'

const Workout = ({ week, trainingMax }) => 
  <div className="workout">
    <Reps week={week}/>
    <Weight week={week} trainingMax={trainingMax}/>
    <div className="column"></div>
  </div>

export default Workout