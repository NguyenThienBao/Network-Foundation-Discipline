import './App.sass'

import { Toaster } from 'react-hot-toast';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';

function App() {

  return (
    <div>
      <Toaster position="bottom-center" />
        <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
