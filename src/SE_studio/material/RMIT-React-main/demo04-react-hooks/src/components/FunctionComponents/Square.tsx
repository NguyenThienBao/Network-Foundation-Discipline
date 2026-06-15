import { ReactEventHandler } from 'react'
import './style.sass'

interface Props {
  value: string
  onSquareClick : ReactEventHandler
}

const Square : React.FC<Props> = (props: Props) => {
  return(
    <button 
      className="square"
      onClick={props.onSquareClick}
    >
      {props.value}
    </button>
  )
}

export default Square