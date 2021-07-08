import logo from './logo.svg';
import './App.css';

import TodoContainer from './container/TodoContainer';
function App() {
  return (
    <div className="App">
        <h1 className="logo">Todo List</h1>
        <TodoContainer></TodoContainer>
    </div>
  );
}

export default App;
