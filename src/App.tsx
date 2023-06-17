import './App.css'
import AddTodo from './components/AddTodo/AddTodo';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {


  return (
    <>
      <AddTodo />
    </>
  )
}

export default App
