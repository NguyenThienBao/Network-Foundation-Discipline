import './App.sass'
import Counter from './components/Counter'
import MemoComponent from './components/MemoComponent'
import ThemeHandler from './components/ThemeHandler'

const App : React.FC = () => {
  return (
    <>
      <Counter />
      <hr />
      <ThemeHandler />
      <hr />
      <MemoComponent />
    </>
  )
}

export default App
