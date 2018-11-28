import React, { Component } from 'react'
import { Menu, Week } from './components'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      press: 105,
      deadlift: 255,
      bench: 165,
      squat: 205
    }
  }

  setAppState = newState => this.setState(newState)

  render() {
    const { press, deadlift, bench, squat } = this.state

    return (
      <div className="app">
        <Menu/>
        <Week week="I" press={press} deadlift={deadlift} bench={bench} squat={squat} setAppState={this.setAppState}/>
        <Week week="II" press={press} deadlift={deadlift} bench={bench} squat={squat} setAppState={this.setAppState}/>
        <Week week="III" press={press} deadlift={deadlift} bench={bench} squat={squat} setAppState={this.setAppState}/>
        <Week week="IV" press={press} deadlift={deadlift} bench={bench} squat={squat} setAppState={this.setAppState}/>
      </div>
    )
  }
}

export default App
