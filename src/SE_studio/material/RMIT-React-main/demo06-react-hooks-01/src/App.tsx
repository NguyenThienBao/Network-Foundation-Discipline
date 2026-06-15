import './App.sass'
import Button from './components/Button'

const App : React.FC = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Button title='I am a button' disable={false} />
    </div>
  )
}

export default App
