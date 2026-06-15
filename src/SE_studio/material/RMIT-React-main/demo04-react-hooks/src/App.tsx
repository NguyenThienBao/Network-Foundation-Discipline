import './App.sass'
import Clock from './components/ClassComponents/Clock'
import Board from './components/FunctionComponents/Board'

const App : React.FC = () => {
  return (
    <>
      <Clock message={'This time is '} />
      
      <Board />
    </>
  )
}

export default App
