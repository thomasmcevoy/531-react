import React , { Component } from 'react'
import { MenuItem } from '.'

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  onClick = () => this.state.isOpen
    ? this.setState({ isOpen: false })
    : this.setState({ isOpen: true })

  onMouseLeave = () => this.setState({ isOpen: false })
  
  render() {
    return (
      <div className="menu-container" onMouseLeave={this.onMouseLeave}>
        <div className={"menu-button " + (this.state.isOpen ? 'isActive' : '')} 
          onClick={this.onClick}
        > ▾
        </div>
        <div className={"menu " + (this.state.isOpen ? 'isOpen' : '')}>
          <MenuItem label="LOG IN"/>
          <MenuItem label="SIGN UP"/>
        </div>
      </div>
    )
  }
}