import React from 'react'
import './style.css'

type Type = {
  date : Date
}

export default class Clock extends React.Component<Type> {
  // define state (statement of class component look like a attribute of class)
  state : Type = {
    date : new Date()
  }
  
  timeID!: number
  
  // define constructor of class
  public constructor(props : Type) {
    super(props)
  }

  // define event-handler pre-render
  public componentDidMount() {
    this.timeID = setInterval(() => this.timer_tick(), 1000)
  }

  // define event-handler after-render
  public componentWillUnmount() {
    clearInterval(this.timeID)
  }

  private timer_tick() {
    this.setState({ date : new Date() })
  }

  public render () {
    return (
      <div className='timer'>
        Now is <span>{this.state.date.toLocaleTimeString()}</span>
      </div>
    )
  }
}