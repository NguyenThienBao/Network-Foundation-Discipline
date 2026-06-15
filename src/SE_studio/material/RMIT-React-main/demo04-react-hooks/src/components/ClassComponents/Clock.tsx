import React from "react"

type DataProps = { message: string }
type DataState = { 
  value: number
  timer  : Date 
}

export default class Clock extends React.Component<DataProps, DataState> {
  state: DataState = {
    value: 0,
    timer: new Date()
  }

  timerID!: number

  constructor(props : DataProps) {
    super(props)
    console.log("Step 01 - constructor")
  }

  componentDidMount(): void {
    console.log("Step 4 - Component Did Mount")
    this.timerID = setInterval(() => this.timer_tick(), 1000)
    console.log(this.timerID)
  }

  componentWillUnmount(): void {
    console.log("Step 5 - Component Will Un-Mount")
    clearInterval(this.timerID)
    console.log(this.timerID)
  }

  timer_tick = () => {
    console.log("--> timer tick()" + " - " + this.timerID)
    this.setState({
      value: this.state.value, 
      timer: new Date()
    })
  }

  timer_stop = () => {
    console.log("STOP")
    clearInterval(this.timerID)
    console.log(this.timerID)
  }

  timer_start = () => {
    console.log("START")
    this.timerID = setInterval(() => this.timer_tick(), 1000)
    console.log(this.timerID)
  }

  onButton_Click = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    console.log("Step 03 - event button click - change state")
    this.setState(
      { 
        value: this.state.value + 1,
        timer: this.state.timer
      })
  }

  render(): React.ReactNode {
    console.log("Step 02 - render")
    return (
      <div>
        <p>{this.props.message} with:</p>
        <ul>
          <li>Value: {this.state.value}</li>
          <li>This time is: {this.state.timer.toLocaleTimeString()}</li>
        </ul>
        <button type="button" onClick={ this.onButton_Click }>Refresh value</button>
        <button type="button" onClick={ () => this.timer_stop() }>Stop timer</button>
        <button type="button" onClick={ () => this.timer_start() }>Start timer</button>
      </div>
    )
  }
}