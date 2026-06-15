/**
 * * define function component for footer of page
 */

import React from "react"
import Clock from "../Clock"

type Props = { message: string }

const Footer : React.FC<Props> = (props : Props) => {
  return (
    <footer>
      <h3>{ props.message }</h3>
      <Clock date={new Date()} />
    </footer>
  )
}

export default Footer