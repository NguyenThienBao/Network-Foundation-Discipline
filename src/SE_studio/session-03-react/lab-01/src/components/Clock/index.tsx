/**
 * define Clock component for Footer
 */

import React from 'react'

import './style.css'

type Type = { date : Date }

export default class Clock extends React.Component<Type> {
    // define state (state of the Clock Component)
    state : Type = {
        date : new Date()
    }

    timerID !: number

    // define constructor of class
    public constructor(props : Type) {
        super(props)
    }

    // define event-handler pre-render
    public componentDidMount(): void {
        this.timerID = setInterval(() => this.time_tick(), 1000)
    }

    // define event-handler after pre-render
    public componentWillReceiveProps(): void {
        clearInterval(this.timerID)
    }

    // Define timer tick
    public time_tick() {
        this.setState({ date: new Date })
    }

    public render() : React.ReactNode {
        return (
            <div className="clock">
                Now is <span> {this.state.date.toLocaleTimeString()} </span>
            </div>
        )
    }
}   


